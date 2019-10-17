import React, { Component } from 'react';
import { StyleSheet, TextInput, Image } from 'react-native';
import { Text, View, Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { whileStatement } from '@babel/types';
//import { axios } from 'axios';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            button: false,
            swaptext: true
        };
    }
    setEmail = (text) => {
        this.setState({
            email: text
        })
        this.Validate('email', text);
    }
    setPassword = (text) => {
        this.setState({
            password: text
        })
        this.Validate('password', text);
    }
    Validate(field, value) {
        if (field == "email") {
            const email = value;
            const password = this.state.password;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password == "12345") {
                // axios.post('http://localhost:5000/user', {
                //     username: email,
                //     password: password
                // }).then(function (response) {
                //     console.log('response :', response);
                // }).catch(function (error) {
                //     console.log('error :', error);
                // });

                this.setState({
                    button: true
                })
            } else {
                this.setState({
                    button: false
                })
            }
        } else {
            const email = this.state.email;
            const password = value;
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password == "12345") {
                this.setState({
                    button: true
                })
            } else {
                this.setState({
                    button: false
                })
            }
        }
    }
    set_viewText = () => {
        if (this.state.swaptext == true) {
            this.setState({
                swaptext: false
            })
        } else {
            this.setState({
                swaptext: true
            })
        }
    }
    getStatusLogin() {
        if (this.state.button == true) {
            return { display: 'flex', margin: 15 };
        } else {
            return { display: 'none', margin: 15 };
        }
    }
    get_symbolText = () => {
        if (this.state.swaptext == true) {
            return "eye";
        } else {
            return "eye-with-line";
        }
    }
    render() {
        return (
            <Container>
                <View style={styles.head}>
                    <Button bordered light style={styles.buttonRegiser}>
                        <Text style={styles.textRegister}>Register</Text>
                    </Button>
                </View>
                <View style={styles.container}>
                    <Image style={styles.image}
                        source={{ uri: 'https://covrprice.com/wp-content/themes/covr/assets/images/comic_stack.png' }}
                    />
                    <Text style={styles.login}>
                        COMIC COLLECTORS
                    </Text>
                    <Text style={styles.login_desc}>
                        Login With Your Account
                    </Text>
                    <Form>
                        <Item stackedLabel>
                            <Label style={styles.white_label}>Email</Label>
                            <Input onChangeText={this.setEmail} style={styles.emailFied} />
                        </Item>
                        <Item stackedLabel>
                            <Label style={styles.white_label}>Password</Label>
                            <Item>
                                <TextInput style={styles.fieldPassword} secureTextEntry={this.state.swaptext} onChangeText={this.setPassword} />
                                <Icon onPress={this.set_viewText} active type="Entypo" name={this.get_symbolText()} style={styles.password} />
                            </Item>
                        </Item>
                        <Button block light style={this.getStatusLogin()} onPress={() => { this.props.navigation.navigate('Home') }}><Text>LOGIN</Text></Button>
                    </Form>
                </View>
            </Container >
        );
    }
}
/*styling css*/
const styles = StyleSheet.create({
    password: { width: '10%', color: 'white' },
    fieldPassword: { width: '90%', color: 'white' },
    emailFied: { color: 'white' },
    buttonRegiser: { margin: 5 },
    head: { justifyContent: 'flex-end', alignItems: 'flex-end', backgroundColor: 'rgb(34,193,195)' },
    textRegister: { color: 'white' },
    image: { width: '50%', height: 210, marginBottom: 10 },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(34,193,195)',
    },
    login: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 2,
        color: 'white'
    },
    login_desc: {
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    white_label: {
        color: 'white',
        borderWidth: 0
    },
});