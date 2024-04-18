import { View, Text } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/Ionicons'

const Header1 = ({ navigation }) => {
  return (
    <View style={{ height: 100, backgroundColor: '#eaf0ff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 35, paddingRight: 35 }}>
       <Icon onPress={() => navigation.goBack()} name='arrow-back'></Icon>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>{title}</Text>
      <Image source={require('../assets/notification.png')} style={{ width: 30, height: 30 }} />
    </View>
  )
}

export default Header1