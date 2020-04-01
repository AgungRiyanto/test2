import AsyncStorage from '@react-native-community/async-storage';

export const getUserData = async () => {
  let userData = await AsyncStorage.getItem('userData');
  userData = JSON.parse(userData);
  return userData;
};

export const baseUrl = 'http://maxxapi.technopartner.rocks/';

export const convertCurrency = (nominal = 0, currency) => {
  let rupiah = '';
  const nominalref = nominal
    .toString()
    .split('')
    .reverse()
    .join('');
  for (let i = 0; i < nominalref.length; i++)
    if (i % 3 === 0) rupiah += nominalref.substr(i, 3) + '.';

  if (currency) {
    return (
      currency +
      rupiah
        .split('', rupiah.length - 1)
        .reverse()
        .join('')
    );
  } else {
    return rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('');
  }
};

export const groupBy = (array, f) => {
  let groups = {};
  array.forEach(function(o) {
    let group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function(group) {
    return groups[group];
  });
};
