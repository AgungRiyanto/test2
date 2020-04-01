import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    width: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
  fieldText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 3,
    color: 'white',
    marginBottom: 10,
  },
  loginButton: {
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default styles;
