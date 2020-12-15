import React, { Component } from "react";
import {Image,StatusBar,View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Label,
  
  Form,
  Left,
  Right,
  Body,
  Drawer,
  Item,
  Input
} from "native-base";

export default class Login extends Component {
    constructor(props) {
        super(props);
        
    }

    render () {
        return (
            <Container style={{ backgroundColor:"#35b5e5",marginTop:0}}>
                <Header transparent>
                    <StatusBar barStyle={'dark-content'} translucent={false} style={{backgroundColor:'#35b5e5'}}/>
                    <Left/>
            
                    <Right/>
                </Header>
                <Content contentContainerStyle={{ alignItems:'center'}}>
                    <View style={{ alignItems:'center'}}>
            
                        <Image source={require("../../assets/AIAC.png")} style={{width:200,height:100}}/>
                    
                    </View>
            
                    <Form>
                        <Item  regular style={{marginTop:25 ,backgroundColor:'#fff',width:300}}>
                            
                            <Input placeholder="ID"/>
                        </Item>
                        <Item  regular style={{marginTop:15 ,backgroundColor:'#fff'}}>
                            
                            <Input placeholder="pass"/>
                        </Item>
                    </Form>
                </Content>
            
            </Container>
    );
    }
}
