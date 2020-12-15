import React from 'react'
import {View ,TextInput,Button ,Alert} from 'react-native'
class Perso extends React.Component
{
render(){
  return (
    <View
    style={{
          marginTop: 30,
          height: 100,
          padding: 20,
        }}>
      <TextInput placeholder="Helodev" />
      <Button title="Lancer"  onPress={()=>{Alert.alert("Helnux")}}/>
    </View> )
}
}
export default Perso
