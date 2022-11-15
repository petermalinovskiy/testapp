import { NavigationFunctionComponent} from "react-native-navigation";
import {TextInput, Button, StyleSheet, View, Text} from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import {setTabsRoot} from "../../navigation/roots";

export const Login: NavigationFunctionComponent = (props): JSX.Element => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => (console.log(data), setTabsRoot());

    return (
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
                    placeholder="email"
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
                    placeholder="пароль"
                />
            )}
            name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <Button
            title='Login'
            color='#3B5998'
            onPress={handleSubmit(onSubmit)}

            />

    </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'whitesmoke'
    }
});
