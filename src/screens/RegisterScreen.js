import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button ,Alert} from "react-native"
import { registerUser } from "../services/api";

const RegisterScreen = ({ navigation }) => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await registerUser(Username, Password)
            Alert.alert("Registration Successful")
            navigation.navigate("Login")
        } catch (error) {
            console.error("Error: ", error.message)
        }
    };
    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                value={Username}
                onChangeText={setUsername}
                placeholder="Username"
                
                />
            <TextInput
                style={style.input}
                value={Password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            <Button
                title="Register"
                onPress={handleRegister}
            />
            <Button
                title="back to login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },
    input: {
        height: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
})

export default RegisterScreen;