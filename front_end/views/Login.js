import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button,Dimensions,KeyboardAvoidingView} from 'react-native';


class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false

    };

    fieldRef = React.createRef();

    onSubmit = () => {
        let { current: field } = this.fieldRef;

        console.log(field.value());
    };

    formatText = (text) => {
        return text.replace(/[^+\d]/g, '');
    };
    render() {
            return (

                <KeyboardAvoidingView behavior={Platform.OS == "android" } style={{flex: 6, alignItems: 'center', width: Dimensions.get('window').width}}>
                    <View style={{flex: 3,}}>
                        <Image style={{
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').width / 1.3
                        }} source={require('../assets/images/logo.png')}/>
                    </View>
                    <View style={{
                        marginBottom:Dimensions.get('window').height/20,
                        height: 280,
                        backgroundColor: "#ffffff",
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,
                        marginLeft: "10%",
                        marginRight: "10%",
                        paddingLeft: 40,
                        paddingRight: 40

                    }}>

                        <View style={{flex: 4,}}>
                            <TextInput
                                style={{ height: 40, borderColor: "#d2d2d2", borderWidth: 1, marginTop:"20%", borderRadius:8}}
                                placeholder="User name"
                            />
                            <TextInput
                                style={{ height: 40, borderColor: "#d2d2d2", borderWidth: 1, marginTop:"10%", borderRadius:8 }}
                                placeholder="Password"
                                textContentType="newPassword"
                            />
                        </View>
                        <View style={{flex: 1,}}>
                            <Text style={{textAlign: 'center', color: '#a8a8a8', fontSize:16}}>Lorem ipsum dolor sit amet,
                                consectetur
                            </Text>
                        </View>

                        <View style={{flex: 1,}}>
                            <View style={{
                                alignSelf: 'center',
                                width: 150,
                                height: 30,
                                backgroundColor: "#ffffff",
                                borderRadius: 15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 0,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 6.27,

                                elevation: 10,

                            }}>
                                <Text onPress={() => {
                                    this.props.navigation.push('Avatar');
                                }
                                } style={{textAlign: 'center', color: '#0090ff', fontWeight: "bold", marginTop: 3, fontSize:16}}>
                                    Login
                                </Text>

                            </View>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            );
        }
    // }
}




export default LoginScreen;