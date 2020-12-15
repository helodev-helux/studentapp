import React from 'react';
import { ScrollView, Text, View} from 'react-native';
import { Root ,Container ,Header,Body ,Title,Left,Right,Icon,Button,StyleProvider } from 'native-base';

const datas=[
    {name:"MATHS APPLIQUEES 1" ,
    elmt:{
        proba:11,
        analyse:15

    }},

];

var Module = React.createClass({
    nom:string ,
    elements:array,

})

export default class  Note extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View >
                
                    
            </View>
        )
    }

    
}