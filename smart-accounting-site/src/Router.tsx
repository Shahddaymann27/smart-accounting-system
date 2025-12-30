import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TaxConsulting from './screens/TaxConsulting';
import Accounting from './screens/Accounting';
import BusinessRegistration from './screens/BusinessRegistration';
import FinancialReporting from './screens/FinancialReporting';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { Header } from '../ui/header';

export type RouteName =
  | 'home'
  | 'tax'
  | 'accounting'
  | 'registration'
  | 'reporting'
  | 'contact'
  | 'login'
  | 'signup';

export default function Router() {
  const [route, setRoute] = useState<RouteName>('home');

  const navigate = (name: RouteName) => setRoute(name);

  let Screen = null as any;
  switch (route) {
    case 'home':
      Screen = <HomeScreen />;
      break;
    case 'tax':
      Screen = <TaxConsulting />;
      break;
    case 'accounting':
      Screen = <Accounting />;
      break;
    case 'registration':
      Screen = <BusinessRegistration />;
      break;
    case 'reporting':
      Screen = <FinancialReporting />;
      break;
    case 'contact':
      Screen = <Contact />;
      break;
    case 'login':
      Screen = <Login />;
      break;
    case 'signup':
      Screen = <Signup />;
      break;
  }

  return (
    <View style={styles.container}>
      <Header />
      {Screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
