import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import 'react-native-gesture-handler'
import Login from './components/login Scrrens/Login';
import Navtag from './components/products/Navtag'
import AddImage from './components/AddImage'
import Header from './components/Header'

export default function App() {
  return (
    <View style={{flex:1}}>
      <Navigation/>
    </View>
  );
}
