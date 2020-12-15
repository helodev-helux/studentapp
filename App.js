import React from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View,ToolbarAndroid,StatusBar } from 'react-native';
import Header2 from 'Component/Header2'
import Anatomy from 'Component/anatomy/index'
import SideBar from 'src/screens/sidebar';
import { Root ,Container ,Header,Body ,Title,Left,Right,Icon,Button,StyleProvider } from 'native-base';
// import { StackNavigator, DrawerNavigator } from "react-navigation";

//import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import getTheme from "src/theme/components";
import variables from "src/theme/variables/commonColor";
import Drawer from 'Component/drawer/Drawer';
import DrawerRight from 'Component/drawer/DrawerRight';
//import Login from 'Component/login/login';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount(){
    //StatusBar.setHidden(true);
    //StatusBar.setBackgroundColor("blue")
  }
  async componentWillMount() {

    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading/>;
    }
    
    
    
    
    return (
      
      

      
      
      
      <StyleProvider style={getTheme(variables)}>

      <Drawer/>
      
        
      
      </StyleProvider>
    
      /*




      <View
       style={{
            marginTop: 30,
            height: 100,
            padding: 20,
          }}>

      //<Perso/>

      /*<ToolbarAndroid
      logo={require('assets/blue.png')}
      title="AIAC"
      actions={[{title:"Mon Espace", icon: require('assets/space.png'),show:'always'}]}
      onActionSelected={this.onActionSelected}/>
      </View>
      */


    );
  }
}


/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
