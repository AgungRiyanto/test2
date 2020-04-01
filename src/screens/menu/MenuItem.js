import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './MenuItemStyle';
import Icon from '../../components/Icon';

const MenuItem = ({
  data,
  activeMenu,
  onPressTab,
  contentData,
  activeCategory,
  onPressCategory,
}) => {
  let detail = contentData ? contentData[activeMenu] : null;
  console.log(detail, 'aa');
  return (
    <View>
      <View style={styles.tabContainer}>
        {data.map(item => {
          return (
            <Tab
              onPress={() => onPressTab(item)}
              isActive={activeMenu === item}
              title={item}
            />
          );
        })}
      </View>
      <ScrollView>
        {detail && (
          <View style={{marginBottom: 20, flex: 1}}>
            {detail.map((item, index) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => onPressCategory(index)}
                    style={styles.accordion}>
                    <Text>{item[0]['kategori']}</Text>
                    <Icon
                      name="arrow"
                      transform={activeCategory === index ? 0 : 180}
                      style={{tintColor: 'black'}}
                    />
                  </TouchableOpacity>
                  {activeCategory === index && (
                    <View style={{padding: 10, justifyContent: 'center'}}>
                      <FlatList
                        data={_formatRow(item, 2)}
                        numColumns={2}
                        key={'h'}
                        renderItem={({item, index}) => {
                          if (item.empty === true) {
                            return (
                              <View
                                style={{
                                  flex: 1,
                                  margin: 5,
                                  backgroundColor: 'transparent',
                                  height: 100,
                                  width: 100,
                                  borderRadius: 4,
                                }}
                              />
                            );
                          }
                          return (
                            <View
                              style={{backgroundColor: '#e9ebee', margin: 5}}>
                              <Image
                                source={{uri: item.gambar}}
                                style={{height: 150, width: 150}}
                                resizeMode="contain"
                              />
                              <Text style={{alignSelf: 'center'}}>
                                {item.nama_menu}
                              </Text>
                            </View>
                          );
                        }}
                      />
                    </View>
                  )}
                </View>
              );
            })}
            {}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const _formatRow = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      id: `blank-${numberOfElementsLastRow}`,
      empty: true,
    });
    numberOfElementsLastRow++;
  }
  return data;
};

const Tab = ({isActive, onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={isActive ? styles.activeTab : styles.inActiveTab}>
        <Text>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;
