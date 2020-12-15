import React, { Component } from "react";
import {Drawer} from "native-base";
import Sidebar from '../../Component/sidebar/index';

export default class mMyDrawer extends Component{
    closeDrawer ()  {
        this.drawer._root.close()
      };
      openDrawer() 
      {
        this.drawer._root.close()
      };
      render() {
          return(
          <Drawer ref={(ref)=> {this.drawer=ref;}} 
            content={<Sidebar navigator={this.navigator}/>} 
            onClose={()=>{this.closeDrawer()}}>
          </Drawer>
          );
      }

}