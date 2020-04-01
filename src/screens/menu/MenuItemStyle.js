import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activeTab: {
    paddingVertical: 13,
    width: '100%',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  inActiveTab: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    width: '100%',
  },
  accordion: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default styles;
