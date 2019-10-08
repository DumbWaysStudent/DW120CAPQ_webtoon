import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View, Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import { whileStatement } from '@babel/types';

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

  /*set value form*/
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

  /*checking validation login*/
  Validate(field, value) {
    if (field == "email") {
      const email = value;
      const password = this.state.password;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password == "12345") {
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

  /*set status view password*/
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

  /*get status login*/
  getStatusLogin() {
    if (this.state.button == true) {
      return { display: 'flex', margin: 15 };
    } else {
      return { display: 'none', margin: 15 };
    }
  }

  /*get symbol state*/
  get_symbolText = () => {
    if (this.state.swaptext == true) {
      return "eye";
    } else {
      return "eye-with-line";
    }
  }

  /*Rendering*/
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text style={styles.login}>
            Login Please
          </Text>
          <Text style={styles.login_desc}>
            Login With Your Account WEBTOON
          </Text>
          <Form>
            <Item stackedLabel>
              <Label style={styles.white_label}>Email</Label>
              <Input onChangeText={this.setEmail} />
            </Item>
            <Item stackedLabel>
              <Label style={styles.white_label}>Password</Label>
              <Item>
                <TextInput style={{ width: '90%' }} secureTextEntry={this.state.swaptext} onChangeText={this.setPassword} />
                <Icon onPress={this.set_viewText} active type="Entypo" name={this.get_symbolText()} style={{ width: '10%', color: 'white' }} />
              </Item>
            </Item>
            <Button block success style={this.getStatusLogin()}>
              <Text>Login</Text>
            </Button>
          </Form>
        </View>
      </Container >
    );
  }
}
/*styling css*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b900',
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  login_desc: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  white_label: {
    color: 'white',
    borderWidth: 0
  },
});