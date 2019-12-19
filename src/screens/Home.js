import React  from 'react';
import { FlatList, Button } from 'react-native';
import styled from 'styled-components';

// services
import api from '../services/api';

// components
import Contact from '../components/Contact';

export default class Home extends React.Component {
  state = {
    contacts: [],
  };
  
  getContacts = async () => {
    for (var i = 1; i <= 10; i++) {
      const a = await api.get();
      const results = a.data.results[0];
      const contact = {
        id: results.login.uuid,
        name: `${results.name.first} ${results.name.last}`,
        email: results.email,
        username: results.login.username,
        phone: results.cell,
        age: results.dob.age,
        picture: results.picture,
        gender: results.gender,
        location: results.location
      };
      
      this.setState({ contacts: [...this.state.contacts, contact] });
    }
  }

  componentDidMount() {
    this.getContacts();
  }

  handleContactClick = contact => this.props.navigation.navigate('About', { contact });

  renderItem = ({ item }) => <Contact data={item} navigation={this.props.navigation} />;

  render() {
    return (
      <Container>
        <Header>
          <Title>Contatos</Title>
          <Button title='Add more' onPress={this.getContacts} />
        </Header>

        <FlatList 
          data={this.state.contacts}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
        />
      </Container>
    );
  }
}



/*
withProps(({ item: { image }}) => ({
  image: { uri: image },
}))
handlePress = () => this.props.onPress(this.props.item);
ContacContainer onPress={this.handlePress}
*/

const Container = styled.SafeAreaView`
	flex: 1;
`;

const Header = styled.View`
  flex-direction: row;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;

  align-items: center;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-color: #c5c5c5;
`;

const Title = styled.Text`
	font-size: 40px;
	font-weight: 600;
`;

const ContactContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 10px;
  margin-right: 10px;

  border-bottom-width: 1px;
  border-color: #c5c5c5;
`;

const ContactData = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Arrow = styled.Text`
  font-size: 30px;
  align-self: center;
`;

const ContactPicture = styled.Image`
  width: 70px; 
  height: 70px; 

  margin: 5px;
  border-radius: 50px;
`;

const ContactName = styled.Text`
  font-size: 20px;
`;

const ContactNumber = styled.Text`
  color: #636363;
`;