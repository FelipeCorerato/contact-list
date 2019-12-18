import React from 'react';
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contact: {}
    }
  }

  componentWillMount() {
    console.disableYellowBox = true;
    this.setState({ contact: this.props.navigation.getParam('contact') })
  }

  render() {
    // const image = this.state.contact.picture.large;
    const { street, city, state, country, postcode } = this.state.contact.location;
    const address = `${street.name}, ${street.number} - ${city}, ${state}, ${country} - ${postcode}`;

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Dados do Contato</Text>
        </View>

        <ScrollView>
          <Image 
            style={{ width: 415, height: 415 }}
            source={{uri: this.state.contact.picture.large}}
            resizeMode='cover'
          />

          <View style={styles.contactMainInfo}>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>{this.state.contact.name}</Text>
            <Text style={{ fontSize: 18, color: '#787878' }}>{this.state.contact.phone}</Text>
            {/* <Icon name="home" size={18} color="#999" /> */}
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: '400' }}>Anotações</Text>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18 }}>Username: {this.state.contact.username}</Text>
              <Text style={{ fontSize: 18 }}>Email: {this.state.contact.email}</Text>
              <Text style={{ fontSize: 18 }}>Idade: {this.state.contact.age}</Text>  
              <Text style={{ fontSize: 18 }}>Gender: {this.state.contact.gender}</Text>
              <Text style={{ fontSize: 18 }}>Endereço: {address}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#c5c5c5',
    borderBottomWidth: 1,

  },
  title: {
    fontSize: 38,
    fontWeight: '600',
  },
  contactMainInfo: { 
    borderColor: '#c5c5c5',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10 
  }
})