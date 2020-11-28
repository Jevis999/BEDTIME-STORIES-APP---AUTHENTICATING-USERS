import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';

import * as firebase from 'firebase';
import db from '../config';

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }


    login = async (password, email) => {
        if (email && password) {
            try {
                const response = await firebase.auth().signInWithEmailAndPassword(email, password)
                if (response) {
                    this.props.navigation.navigate('Read');
                }
            }

            catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        Alert.alert("user does not exist")
                        break;
                    case 'auth/invalid-email':
                        Alert.alert("user email invalid")
                        break;
                }

            }
        }
        else {
            Alert.alert('email and/or password required');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ alignItems: 'center', marginTop: 20 }}>
                <View>
                    <Text
                        style={{ fontSize: 20, textAlign: "center" }}>
                        Email-ID</Text>
                    <TextInput
                        style={{ width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin: 40, paddingLeft: 10 }}
                        placeholder='abc@example.com'
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({ emailId: text })
                        }}

                    />
                    <Text
                        style={{ fontSize: 20, textAlign: "center" }}>
                        Password</Text>
                    <TextInput
                        style={{ width: 300, height: 40, borderWidth: 1.5, fontSize: 20, margin: 40, paddingLeft: 10 }}
                        placeholder='password'
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({ password: text })
                        }}

                    />

                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            this.login(this.state.password, this.state.emailId);
                        }}
                        style={{ height: 30, width: 90, borderWidth: 1, marginTop: 20, paddingTop: 5, borderRadius: 7 }}
                    >
                        <Text style={{ textAlign: 'center' }}>
                            Login
                    </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}