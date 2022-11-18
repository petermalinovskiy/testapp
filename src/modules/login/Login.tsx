import { NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, StyleSheet, View, Text, ImageBackground} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {setTabsRoot} from "../../navigation/roots";
import {Colors} from "../../core/theme/colors";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {ButtonType} from "../../types";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Login: NavigationFunctionComponent = (props): JSX.Element => {
    const { control, watch, formState: { errors } } = useForm({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    const user = {
        email: watch("login"),
        password: watch("password"),
    };


    const authorizationURL  = "http://ci2.dextechnology.com:8000/api/User/Authorization";
    const authorization = (url: string) => {
        return fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((r) => console.log(r.status))
            .catch(function(error) {
                console.log(error);
            });
    };

    const getAuthorized = () => authorization(authorizationURL).then((data) => (console.log(data)));

    const authorizeHandler = () => getAuthorized();

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
                                    placeholder="login"
                                    placeholderTextColor={Colors.white}
                                />
                            )}
                            name="login"
                        />
                        {errors.login && <Text>This is required.</Text>}

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
                            label='Войти'
                            type={ButtonType.solid}
                            onPress={() => setTabsRoot()}
                            style={CommonStyles.button}
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
