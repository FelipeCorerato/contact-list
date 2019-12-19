import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

export default class Contact extends React.Component {
  state = {
    visible: false,
    userImageVisible: false,
    postImageVisible: false,
  }
  
  handleClick = () => this.props.navigation.navigate('About', { contact: this.props.data });

  componentDidMount() {
    setTimeout(() => this.setState({ visible: !this.state.visible }), 2500);
  }

  render() {
    const data = this.props.data;

    return(
      <Container key={data.id} onPress={this.handleClick}>
        <Data>
          <Picture source={{uri: data.picture.thumbnail}} />

          <View>
            <Name>{data.name}</Name>
            <PhoneNumber>{data.phone}</PhoneNumber>
          </View>
        </Data>

        <Arrow> > </Arrow>
      </Container>
    );
  }
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;

  margin-left: 10px;
  margin-right: 10px;

  border-bottom-width: 1px;
  border-color: #c5c5c5;
`;

const Data = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Arrow = styled.Text`
  font-size: 30px;
  align-self: center;
`;

const Picture = styled.Image`
  width: 70px; 
  height: 70px; 

  margin: 5px;
  border-radius: 50px;
`;

const Name = styled.Text`
  font-size: 20px;
`;

const PhoneNumber = styled.Text`
  color: #636363;
`;