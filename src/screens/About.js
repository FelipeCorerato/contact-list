import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

export default class About extends React.Component {
  state = {
    contact: {}
  }

  get contact() {
    return this.props.navigation.getParam('contact');
  }

  render() {
    const { street, city, state, country, postcode } = this.contact.location;
    const address = `${street.name}, ${street.number} - ${city}, ${state}, ${country} - ${postcode}`;
    
    return(
      <Container>
        <Header>
          <Title>Dados do Contato</Title>
        </Header>

        <ScrollView>
          <ProfilePicture source={{uri: this.contact.picture.large}} resizeMode='cover' />

          <MainInfoContainer>
            <Name>{this.contact.name}</Name>
            <PhoneNumber>{this.contact.phone}</PhoneNumber>
          </MainInfoContainer>

          <NotesContainer>
            <Subtitle>Anotações</Subtitle>

            <InfosContainer>
              <Info>Username: {this.contact.username}</Info>
              <Info>Email: {this.contact.email}</Info>
              <Info>Idade: {this.contact.age}</Info>  
              <Info>Gender: {this.contact.gender}</Info>
              <Info>Endereço: {address}</Info>
            </InfosContainer>
          </NotesContainer>
        </ScrollView>
      </Container>
    )
  }
}

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  padding-top: 10;
  padding-bottom: 10;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1;
  border-color: #c5c5c5;
`;

const Title = styled.Text`
  font-size: 38px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 26px;
  font-weight: 400;
`;

const ProfilePicture = styled.Image`
  width: 415px;
  height: 415px;
`;

const MainInfoContainer = styled.View`
  border-color:#c5c5c5;
  border-top-width: 1px;
  border-bottom-width: 1px;
  padding: 10px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: 500;
`;

const PhoneNumber = styled.Text`
  font-size: 18px;
  color: #787878;
`;

const NotesContainer = styled.View`
  padding: 10px;
`;

const InfosContainer = styled.View`
  margin-top: 10px;
`;

const Info = styled.Text`
  font-size: 18px;
`;