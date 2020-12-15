import React, { Component } from "react";
import {Image,StatusBar,View,Dimensions} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Drawer,
  Item,
  Input,
  H1,
  H2,
  H3,
  Badge,
  Card
} from "native-base";
//import Logo from "../../assets/emploi.svg";
import Login from '../../Component/login/login';

import styles from "../../Component/anatomy/styles";
//import MyDrawer from "../../Component/drawer";
import CardImage from '../../Component/card/card-image';
const dh = Dimensions.get("window").height;
const dw = Dimensions.get("window").width;

class Anatomy extends Component {
  constructor(props) {
  super(props);
  this.state = {
    tab1: true,
    tab2: false,
    tab3: false
  };
}

toggleTab1() {
  this.setState({
    tab1: true,
    tab2: false,
    tab3: false
  
  });
}
toggleTab2() {
  this.setState({
    tab1: false,
    tab2: true,
    tab3: false
  });
}
toggleTab3() {
  this.setState({
    tab1: false,
    tab2: false,
    tab3: true
  });
}
  render() {
    return (
      
      <Container style={styles.container}>
        <Header  style={styles.enTete} androidStatusBarColor ="#004c8c" 
        barStyle="light-content" iosStatusBar="light-content">
        
        
          <Left style={{flex:1,flexDirection:"row"}}>
            <Button 
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={{fontSize:30}} name="menu" />
            </Button>
            <Button badge vertical
              transparent 
              >
              <Icon style={{fontSize:30}}  name="md-notifications" />
              <Badge style={{position:"absolute",height:23}}><Text>6</Text></Badge>
              
            </Button>
            
          </Left>
          {/*
          <Item style={{flex:5}}>
            <Icon name="ios-search"/>
            <Input  placeholder="search"/>
          </Item>*/
          }
          <Body style={{flex:1,alignItems:'center',}}>
            <Title style={{color:'#3333ff'}}>DASHBOARD</Title>
          </Body>
            
            
          
          <Right style={{flex:1}}>
            <Button danger large transparent 
            >
            <Icon style={{fontSize:30}} name="lock"/>
            </Button>
          </Right>
          
        </Header>

        <Content  style={styles.corps} contentContainerStyle={{ flex: 1 }}>
          {//<Text>je suis le fameux helodev,dedicaces a ma femme meryem</Text>}
          //<Image source={require("../../assets/AIAC.png")} style={{width:200,height:100}}/>
          //<CardImage/>
          //<View style={{backgroundColor:'#fff',flexDirection:'row',flex:1,height:50}}>
          //<Text>nom</Text>
          //</View>
        }
          <View style={{flex:1,backgroundColor:'#000',flexDirection:"column"}}>
            <View style={{flex:2,backgroundColor:'#fff',flexDirection:'column'}}>
              {/*<H2>Mohamed Kad</H2>
              <H3>GI15</H3>
              <View style={{backgroundColor:"#ff8",flexDirection:"column",justifyContent:"space-evenly"}}>
                <Button style={{}}>
                  <Icon name="person" color="#3333ff"/>
                </Button>
                
                <Button badge vertical style={{}}>
                  <Icon style={{fontSize:30}} name="document" color="#ff33ff" />
                  <Badge style={{position:"absolute",height:23}}><Text>3</Text></Badge>
                  
                
                  
                </Button>
                
                

              </View>*/}
              <Image source={require("../../assets/drawer-cover.png")} style={{width:null,height:null,flex:1,resizeMode:"stretch",padding:0}}/>
              
              
            </View>
            
            <View style ={{flex:8,backgroundColor:"#f00",flexDirection:"column"}}>
              
            <View style ={{flex:1,backgroundColor:"#ddd",flexDirection:"column-reverse"}}>

              <Card style={{flexDirection:"column-reverse",justifyContent:"space-evenly"}}>
              <View style ={{backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-evenly",marginTop:15,marginBottom:15}}>
                  
                  <View style={{justifyContent:"space-evenly"}}>
                    <Image source={require("../../assets/doc.png")} style={{width:dw/4,height:dw/4,resizeMode:"stretch"}}/>
                  </View>
                  <View style={{justifyContent:"space-evenly"}}>
                    <Image source={require("../../assets/clubs.png")} style={{width:dw/4,height:dw/4,resizeMode:"stretch"}}/>
                  </View>
                  <View style={{justifyContent:"space-evenly"}}>
                    <Image source={require("../../assets/menu.png")} style={{width:dw/4,height:dw/4,resizeMode:"stretch"}}/>
                  </View>
              </View>
              <View style ={{backgroundColor:"#fff",flexDirection:"row",justifyContent:"space-evenly",marginTop:15}}>
                  <View style={{justifyContent:"space-evenly"}}>
                    <Image source={require("../../assets/emploi.png")} style={{width:dw/4,height:dw/4,resizeMode:"stretch"}}/>
                  </View>
                  <View style={{justifyContent:"space-evenly"}}>
                    <Image source={require("../../assets/absence.png")} style={{width:dw/4,height:dw/4,resizeMode:"stretch"}}/>
                  </View>
                  <View style={{justifyContent:"space-evenly"}}>
                    <Image source={require("../../assets/note.png")} style={{width:dw/4,height:dw/4,resizeMode:"stretch"}}/>
                  </View>
              </View>
              </Card>
              <Card style={{flex:1,flexDirection:"row",borderRadius:8}}>
              <View style={{flex:4,backgroundColor:"#fff",padding:10}}>
                <View style={{flex:1,backgroundColor:"#fff",flexDirection:"row"}}>
                  <Text>Nom:     </Text>
                  <Text style={{fontWeight: 'bold'}}>OUSMANE MOUSSA</Text>
                </View>
                <View style={{flex:1,flexDirection:"row"}}>
                  <Text>Prénom:  </Text>
                  <Text style={{fontWeight: 'bold'}}>ISMAEL</Text>
                </View>
                <View style={{flex:1,backgroundColor:"#fff",flexDirection:"row"}}>
                  <Text>ID:     </Text>
                  <Text style={{fontWeight: 'bold'}}>10PC03313</Text>
                </View>
                
                <View style={{flex:1,backgroundColor:"#fff",flexDirection:"row"}}>
                  <Text>Filiere: </Text>
                  <Text style={{fontWeight: 'bold'}}>GI15</Text>
                </View>
                
              </View>
              <View style={{flex:2,backgroundColor:"#fff",padding:10}}>
                <View style={{flex:2,backgroundColor:"#fff"}}>
                <Image source={require("../../assets/ID.png")} style={{width:null,height:null,flex:1,resizeMode:"contain"}}/>
                </View>
                <View style={{flex:1,alignItems:"center",justifyContent:"space-evenly"}}>
                
                  
                  <Text style={{fontWeight: 'bold'}}>5362016</Text>
                
                </View>
              </View>
              </Card>

            

            </View>
                
              
            </View>    
            
            
          </View>
          
          
        </Content>
{/*
  <View style={{flex:2,backgroundColor:'#f00',flexDirection:'row'}}>
              
              
          
            
            </View>
        <Footer>
          <FooterTab>
          <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} name="home" />
              <Text>Accueil</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} name="person" />
              <Text>Mes annonces</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} name="compass" />
              <Text>Favoris</Text>
            </Button>
          </FooterTab>
        </Footer>
*/}
      </Container>
    );
  }
}

export default Anatomy;
