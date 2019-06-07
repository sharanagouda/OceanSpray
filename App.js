import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import  SplashScreen from 'react-native-splash-screen';

import Main from "./src/Main";
import storePersist from "./src/config/store";

const persist = storePersist();

type Props = {};
export default class App extends Component<Props> {

  componentDidMount() {
    setTimeout(() => {
        if (Platform.OS !== "ios") {
            SplashScreen.hide();
        }
    }, 2000);
  }

  render() {
    return (
      <Provider store={persist.store}>
          <PersistGate loading={null} persistor={persist.persistor}>
              <Main/>
          </PersistGate>
      </Provider>
    );
  }
}

