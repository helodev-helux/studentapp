import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import SideBar from '../../Component/sidebar';
import Anatomy from '../../Component/anatomy';
import Login from '../../Component/login/login';
/*
const MyApp = createStackNavigator (
  {
    Accueil:{screen:Anatomy},
    LoginScreen:{screen:Login},
  },
  {
    initialRouteName:"Accueil"
  }
)
*/
const Drawer = createDrawerNavigator(
    {
      Anatomy:{screen:Anatomy},
      Login:{screen:Login}

      //le routename doit correspondre au root dans le fichier sidebar du drawer

    },
    {
      initialRouteName:"Anatomy",
      contentOptions:{
        activeTintColor:"#ff0000"
      },
      drawerPosition :"left" ,
      contentComponent:props=> <SideBar {...props} />
  
    }
  );
  const AppNavigator = createStackNavigator(
    {
      Drawer : {screen:Drawer}
    },
    {
      initialRouteName:"Drawer",
      headerMode:"none"
    }
  );
  const AppContainer=createAppContainer(AppNavigator);

  export default() => 
    <Root>
        <AppContainer/>
    </Root>;
    
  