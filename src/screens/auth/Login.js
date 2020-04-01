import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Container from '../../components/Container';
import styles from './LoginStyle';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {baseUrl} from '../../helpers';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: 'support@technopartner.id',
      password: '1234567',
    };
  }

  render() {
    console.log(baseUrl);
    return (
      <Container
        style={styles.container}
        backgroundBlur={true}
        backgroundImage={true}>
        <View style={styles.header}>
          <Icon />
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.fieldText}>Email address</Text>
          <TextInput
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
            style={styles.textInput}
          />
          <Text style={styles.fieldText}>Password</Text>
          <TextInput
            value={this.state.password}
            onChangeText={text => this.setState({password: text})}
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Button
            onPress={this.loginProcess}
            style={styles.loginButton}
            text="LOGIN"
          />
          <Text style={styles.bottomText}>
            Not registered yet? Sign up here
          </Text>
          <Text style={styles.bottomText}>Forgot Password</Text>
        </View>
      </Container>
    );
  }

  loginProcess = () => {
    const {navigation} = this.props;
    const {email, password} = this.state;

    // oauth
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: baseUrl + 'oauth/access_token',
      data: {
        client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
        client_id: 'e78869f77986684a',
        grant_type: 'password',
        username: email,
        password: password,
      },
    })
      .then(function(response) {
        const data = response.data;
        console.log(data);
        // login
        axios({
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${data.token_type} ${data.access_token}`,
          },
          method: 'post',
          url: baseUrl + 'api/login',
          data: {
            email: email,
            password: password,
          },
        })
          .then(function(res) {
            let resdata = Object.assign(res.data, data);
            AsyncStorage.setItem('userData', JSON.stringify(resdata));
            navigation.navigate('Home');
          })
          .catch(function(error) {
            console.log(JSON.parse(JSON.stringify(error)));
          });
        //
      })
      .catch(function(error) {
        console.log(JSON.parse(JSON.stringify(error)));
      });
    //
  };
}

export default Login;
