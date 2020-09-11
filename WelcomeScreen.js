import * as React from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:''
        }
    }

    userSignUp=(emailId, password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password).then(
            (response)=>{
                return Alert.alert("WooHoo! User added successfully");
            }
        )
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }

    userLogin=(emailId, password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password).then(
            ()=>{
                return Alert.alert("Welcome back! successfully logged in");
            }
        )
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage);
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text>Book Santa</Text>
                </View>
                <View>
                    <TextInput placeholder='abc@example.com' keyboardType='email-address' onChangeText={(text)=>{
                        this.setState({
                            emailId:text
                        })
                    }}></TextInput>
                    <TextInput placeholder='Type your password...' secureTextEntry={true} onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}></TextInput>
                    <TouchableOpacity onPress={()=>{
                        this.userLogin(this.state.emailId, this.state.password)
                    }}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.userSignUp(this.state.emailId, this.state.password)
                    }}>
                        <Text>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });