import React ,{ useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native"
import MyButton from "../components/MyButton";
import MsgBox from "../components/MsgBox";
import axios from "axios";


const LoginScreen = ({ navigation }) => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await LoginUser(Username, Password);

        } catch (error) {
            Alert.alert("login Failed!", error.message)
        }
    }
    return (
        <View style={style.container}>
            <TextInput
                style={style.input}
                placeholder="Username"
                onChangeText={setUsername}
                value={Username}
                />
            <TextInput
                style={style.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={Password}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin}/>
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}
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

export default LoginScreen