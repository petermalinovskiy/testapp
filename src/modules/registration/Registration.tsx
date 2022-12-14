import { NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, StyleSheet, View, Text, ImageBackground, ImageURISource} from "react-native";
import React, {useCallback, useState} from "react";
import { useForm, Controller } from "react-hook-form";
import {Colors} from "../../core/theme/colors";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {ButtonType} from "../../types";
import {CommonStyles} from "../../core/theme/commonStyles";
import {ImageCropPickerButton} from "../../common/components/ImageCropPickerButton";

export const Registration: NavigationFunctionComponent = (props): JSX.Element => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const [photo, setPhoto] = useState<ImageURISource | null>(null);

    const onRemoveImage = useCallback(() => {
        setPhoto(null);
    }, [setPhoto]);

    const onImagePicked = useCallback(
        (nextImage) => {
            setPhoto({uri: nextImage.path});
        },
        [setPhoto],
    );

    const iconStyle = photo ? styles.iconNone : styles.iconTrue

    const onSubmit = (data) => console.log(data);

    // @ts-ignore
    return (
        <View style={CommonStyles.flex1}>
            <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover' style={CommonStyles.flex1}>
                <View style={styles.root}>
                    <Text style={CommonStyles.logo}>CoffeTime</Text>
                    <ImageCropPickerButton
                        image={photo}
                        onRemoveImage={onRemoveImage}
                        onImagePicked={onImagePicked}
                        onPickerError={console.error}
                        iconStyle={iconStyle}
                        imageStyle={styles.cropPicker}
                        style={styles.cropPicker}
                    />
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={CommonStyles.textInput}
                                    placeholder="email"
                                    placeholderTextColor={Colors.white}
                                />
                            )}
                            name="email"
                        />
                        {errors.email && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={CommonStyles.textInput}
                                    placeholder="????????????"
                                    placeholderTextColor={Colors.white}
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text>This is required.</Text>}

                        <PrimaryButton
                            label='????????????????????????????????????'
                            type={ButtonType.solid}
                            onPress={handleSubmit(onSubmit)}
                            style={CommonStyles.greenButton}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    cropPicker: {
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 60,
        backgroundColor: Colors.white
    },
    iconNone: {
        display: "none"
    },
    iconTrue: {
        display: "flex"
    }
});
