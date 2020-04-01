import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Container from '../../components/Container';
import styles from './MenuStyle';
import Icon from '../../components/Icon';
import {getUserData, baseUrl, groupBy} from '../../helpers';
import axios from 'axios';
import MenuItem from './MenuItem';
class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      menuData: null,
    };
  }
  componentDidMount() {
    this.getMenuList();
  }

  render() {
    return (
      <Container>
        <View style={styles.header}>
          <View style={{width: '10%'}}>
            <Icon name="nav-menu-black" />
          </View>
          <View style={{width: '80%'}}>
            <Text style={styles.menuText}>Menu</Text>
          </View>
        </View>
        <MenuItem
          onPressTab={value =>
            this.setState({activeMenu: value, activeCategory: null})
          }
          activeMenu={this.state.activeMenu}
          data={this.state.menu}
          contentData={this.state.menuData}
          activeCategory={this.state.activeCategory}
          onPressCategory={index =>
            this.setState({
              activeCategory: index == this.state.activeCategory ? null : index,
            })
          }
        />
      </Container>
    );
  }

  async getMenuList() {
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
      method: 'get',
      url: baseUrl + 'api/menu/list',
    })
      .then(function(res) {
        let data = [];
        const objectky = Object.keys(res.data.menu);
        for (let i in objectky) {
          let item = res.data.menu[objectky[i]];
          for (let o in item) {
            data.push(item[o]);
          }
        }
        const group = groupBy(data, function(item) {
          return [item.group];
        });
        let output = {};
        group.map(item => {
          let category = {};
          const categories = groupBy(item, function(items) {
            return [items.kategori];
          });
          //   categories.map(items => {
          //     category[items[0]['kategori']] = item;
          //   });
          output[item[0]['group']] = categories;
        });
        console.log(output);
        const menu = Object.keys(output);
        self.setState({menu, menuData: output, activeMenu: menu[0]});
      })
      .catch(function(error) {
        console.log(JSON.parse(JSON.stringify(error)));
      });
  }
}

export default Menu;
