import React from 'react';
import {View, Text, TouchableOpacity, Platform, Image} from 'react-native';
import Container from '../components/Container';
import styles from './HomeStyle';
import Icon from '../components/Icon';
import {getUserData, baseUrl, convertCurrency} from '../helpers';
import axios from 'axios';
import SwipeUpDown from 'react-native-swipe-up-down';
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      homeData: null,
    };
  }
  componentDidMount() {
    this.getHomeData();
  }

  render() {
    const {homeData} = this.state;
    const {navigation} = this.props;
    console.log('this', this.state);
    return (
      <Container backgroundImage={true}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
            <Icon />
          </TouchableOpacity>
          {homeData ? (
            <View style={styles.topContent}>
              <Text style={styles.customerText}>{homeData.salam}</Text>
              <Text style={styles.customerText}>{homeData.username}</Text>
              <Text style={styles.customerText}>
                {convertCurrency(homeData.balance, 'IDR ')}
              </Text>
              <Text style={styles.customerText}>{homeData.beans} Beans</Text>
            </View>
          ) : null}
        </View>
        {homeData && (
          <SwipeUpDown
            itemMini={
              <View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    paddingVertical: 10,
                  }}>
                  <Text>Prime to Pay</Text>
                </View>
                <View style={{paddingVertical: 10}}>
                  <Text style={{color: 'grey'}}>
                    Show below QR Code to the Casier
                  </Text>
                  <Text>Kartu Satu</Text>
                  <View
                    style={{
                      width: '80%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'green'}}>Balance</Text>
                    <Text>{convertCurrency(homeData.balance, 'IDR ')}</Text>
                  </View>
                  <View
                    style={{
                      width: '80%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'green'}}>Beans</Text>
                    <Text>{homeData.beans}</Text>
                  </View>
                  <Image
                    source={{uri: homeData.primaryCard.barcode}}
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      height: 300,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                  />
                </View>
              </View>
            } // Pass props component when collapsed
            itemFull={
              <View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    paddingVertical: 10,
                  }}>
                  <Text>Prime to Pay</Text>
                </View>
                <View style={{paddingVertical: 10}}>
                  <Text style={{color: 'grey'}}>
                    Show below QR Code to the Casier
                  </Text>
                  <Text>Kartu Satu</Text>
                  <View
                    style={{
                      width: '80%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'green'}}>Balance</Text>
                    <Text>{convertCurrency(homeData.balance, 'IDR ')}</Text>
                  </View>
                  <View
                    style={{
                      width: '80%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: 'green'}}>Beans</Text>
                    <Text>{homeData.beans}</Text>
                  </View>
                  <Image
                    source={{uri: homeData.primaryCard.barcode}}
                    resizeMode="contain"
                    style={{
                      width: '100%',
                      height: 300,
                      alignSelf: 'center',
                      marginTop: 10,
                    }}
                  />
                </View>
              </View>
            } // Pass props component when show full
            swipeHeight={300}
            animation="spring"
            onShowMini={() => console.log('mini')}
            onShowFull={() => console.log('full')}
            onMoveDown={() => console.log('down')}
            onMoveUp={() => console.log('up')}
            disablePressToShow={true} // Press item mini to show full
            style={{backgroundColor: 'rgba(255,255,255, 0.7)'}} // style for swipe
          />
        )}
      </Container>
    );
  }

  async getHomeData() {
    const userData = await getUserData().then(function(response) {
      return response;
    });
    console.log(userData);
    let self = this;
    axios({
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${userData.token_type} ${userData.access_token}`,
      },
      method: 'post',
      url: baseUrl + 'api/v2/home',
      data: {
        token: userData.token,
      },
    })
      .then(function(res) {
        console.log(res);
        self.setState({homeData: res.data});
      })
      .catch(function(error) {
        console.log(JSON.parse(JSON.stringify(error)));
      });
  }
}

export default Home;
