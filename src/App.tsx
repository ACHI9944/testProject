import * as React from 'react';
import Router from './navigation/Router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
