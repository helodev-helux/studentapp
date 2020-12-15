import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import SideBar from '../../Component/sidebarRight';
import Anatomy from '../../Component/anatomy';

const DrawerRight = createDrawerNavigator(
    {
      Home:{screen:Anatomy}
    },
    {
      initialRouteName:"Home",
      contentOptions:{
        activeTintColor:"#ff0000"
      },
      drawerPosition :"right" ,
      contentComponent:props=> <SideBar {...props} />
  
    }
  );
  const AppNavigator = createStackNavigator(
    {
      DrawerRight : {screen:DrawerRight}
    },
    {
      initialRouteName:"DrawerRight",
      headerMode:"none"
    }
  );
  const AppContainer=createAppContainer(AppNavigator);

  export default() => 
    <Root>
        <AppContainer/>
    </Root>;
    