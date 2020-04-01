import React from 'react';
import {View, Text} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import styles from './LandingPageStyle';
import Icon from '../components/Icon';

class LandingPage extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <Container style={styles.container} backgroundImage={true}>
        <Icon />
        <Text style={styles.greetingText}>Good Morning</Text>
        <View style={styles.bottomPage}>
          <Button style={styles.registerButton} text="SIGN UP" />
          <Button
            onPress={() => navigation.navigate('Login')}
            style={styles.loginButton}
            outline
            text="LOGIN"
          />
        </View>
      </Container>
    );
  }
}

export default LandingPage;
