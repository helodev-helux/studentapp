import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "../../Component/card/styles";

const logo = require("../../assets/logo.png");
const cardImage = require("../../assets/drawer-cover.png");

class CardImage extends Component {
  render() {
    return (
      <Container>
        <Content>
      
          <Card style={styles.mb}>
            

            <CardItem cardBody>
              <Image
                style={{
                  resizeMode: "cover",
                  width: null,
                  height: 200,
                  flex: 1
                }}
                source={cardImage}
              />
            </CardItem>

            <CardItem style={{ paddingVertical: 0 }}>
            <Left>
                
                <Body>
                  <Text>Harka</Text>
                  <Text note>Helodev</Text>
                </Body>
              </Left>
              <Right>
                
                <Body>
                  <Text>Harka</Text>
                  
                </Body>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
        
    );
  }
}

export default CardImage;
