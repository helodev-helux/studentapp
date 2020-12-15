import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Icon,
  Right,
  Body,
  Text
} from "native-base";
import styles from 'F:\\React\\Aiac\\styles';

class Anatomy extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left >
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
          <Body>
            <Title>Helodev</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>helFooter</Text>
            </Button>
          </FooterTab>
        <Footer>
      </Container>
    );
  }
}

export default Header1;
