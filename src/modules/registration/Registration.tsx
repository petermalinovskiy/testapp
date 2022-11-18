import { NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, StyleSheet, View, Text, ImageBackground} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {Colors} from "../../core/theme/colors";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {ButtonType} from "../../types";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Registration: NavigationFunctionComponent = (props): JSX.Element => {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => console.log(data);

    return (
        <View style={CommonStyles.flex1}>
            <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover' style={CommonStyles.flex1}>
                <View style={styles.root}>
                    <Text style={CommonStyles.logo}>CoffeTime</Text>
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
                                    placeholder="пароль"
                                    placeholderTextColor={Colors.white}
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text>This is required.</Text>}

                        <PrimaryButton
                            label='Зарегистрироваться'
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
});
