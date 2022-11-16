import { NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, Button, StyleSheet, View, Text, ImageBackground} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {setTabsRoot} from "../../navigation/roots";
import {Colors} from "../../core/theme/colors";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {ButtonType} from "../../types";

export const Login: NavigationFunctionComponent = (props): JSX.Element => {

    type FormData = {
        email: string;
        password: string;
    };

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = (data) => console.log(data);

    return (
        <View style={styles.flex}>
            <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover' style={styles.flex}>
                <View style={styles.root}>
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
                                style={styles.textInput}
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
                                style={styles.textInput}
                                placeholder="пароль"
                                placeholderTextColor={Colors.white}
                            />
                        )}
                        name="password"
                    />
                    {errors.password && <Text>This is required.</Text>}

                    <PrimaryButton
                        label='Login'
                        type={ButtonType.solid}
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'space-around',
    },
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 50,
        padding: 10,
    },
    inputView: {
        borderBottomWidth: 1,
        borderColor: Colors.white,
        width: "80%",
        height: 45,
        marginBottom: 20,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: Colors.blue,
        width: 300,
        height: 50,
        borderRadius: 25

    }
});
