//import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'apisauce';

const api = create({
  //baseURL: 'http://localhost:3000',
  baseURL: 'http://192.168.0.2:3000',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await AsyncStorage.getItem('@CodeApi:token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
});

api.addResponseTransform(response => {
  if (!response.ok) {
    throw response;
  }
});

export default api;
