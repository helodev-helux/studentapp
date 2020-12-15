import React from 'react'
import {View , ToolbarAndroid} from 'react-native'

export default class Toolbar extends Component
{
  render : function()
  {
    return (
      <ToolbarAndroid
      logo={require('F:\\React\\Aiac\\assets\\blue.png')}
      title="AIAC"
      actions={[{tile:"Mon Espace", require('F:\\React\\Aiac\\assets\\space.png'),show:"Always"}]}
      onActionSelected={this.onActionSelected}/>



    )
  },
  onActionSelected : function(position){
    if (position===0){
    showSettings();
  }
  }

}
