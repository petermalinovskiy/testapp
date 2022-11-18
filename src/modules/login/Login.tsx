import {NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, StyleSheet, View, Text, ImageBackground} from "react-native";
import React, {useCallback} from "react";
import {useForm, Controller} from "react-hook-form";
import {Colors} from "../../core/theme/colors";
import {PrimaryButton} from "../../common/components/PrimaryButton";
import {ButtonType} from "../../types";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Login: NavigationFunctionComponent = (props): JSX.Element => {
    const {control, watch, formState: {errors}} = useForm({
        defaultValues: {
            login: '',
            password: ''
        }
    });

    const user = {
        email: watch("login"),
        password: watch("password"),
    };


    const authorization = async () => {
        console.log('user111',JSON.stringify(user));

        return fetch('http://ci2.dextechnology.com:8000/api/User/Authorization',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(user),
        })
            .then((r) => console.log(r))
            .catch(  (error) => {
                console.log('error',error);
            });
    };

    const onr = () => {authorization()}
    // var request = new XMLHttpRequest();
    // request.onreadystatechange = (e) => {
    //     if (request.readyState !== 4) {
    //         return;
    //     }
    //
    //     if (request.status === 200) {
    //         console.log('success', request.responseText);
    //     } else {
    //         console.warn('error', request);
    //     }
    // };
    //
    // request.open('POST', 'http://ci2.dextechnology.com:8000/api/User/Authorization/',);
    // request.setRequestHeader("Content-Type","application/json")
    // request.send(JSON.stringify(user));


    return (
        <View style={CommonStyles.flex1}>
            <ImageBackground source={require('../../../resources/images/bg_image.png')} resizeMode='cover'
                             style={CommonStyles.flex1}>
                <View style={styles.root}>
                    <Text style={CommonStyles.logo}>CoffeTime</Text>
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
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
                            render={({field: {onChange, onBlur, value}}) => (
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
                            onPress={onr}
                            type={ButtonType.solid}
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
