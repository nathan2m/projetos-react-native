import {put, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
//import {NetInfo} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {OFFLINE, ONLINE} from 'redux-offline-queue';

export function* startWatchingNetworkConnectivity() {
  const channel = eventChannel(emitter => {
    //console.log(emitter);
    return NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });

    /* NetInfo.isConnected.addEventListener('connectionChange', emitter);
    return () =>
      NetInfo.isConnected.removeEventListener('connectionChange', emitter); */
  });

  try {
    while (true) {
      const isConnected = yield take(channel);

      if (isConnected) {
        yield put({type: ONLINE});
      } else {
        yield put({type: OFFLINE});
      }
    }
  } finally {
    channel.close();
  }
}
