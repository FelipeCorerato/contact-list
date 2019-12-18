import React  from 'react';
import { 
    SafeAreaView,
    View,
    FlatList,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';

import api from '../services/api';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      refreshing: false
    };
  }

  contactPress = info => {
    this.props.navigation.navigate('About', info)
  }

  getContacts = async () => {
    this.setState({ contact: [] })

    for (var i = 1; i <= 10; i++) {
      const a = await api.get();
      const results = a.data.results[0]
      const contact = {
        id: results.uuid,
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

  componentWillMount() {
    console.disableYellowBox = true;
    this.getContacts();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Contatos</Text>
          <Button title='Add more' onPress={this.getContacts}  />
        </View>

        <FlatList 
          data={this.state.contacts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.contactContainer}
              onPress={() => this.props.navigation.navigate('About', {contact: item})}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image 
                  style={styles.profilePicture}
                  source={{uri: item.picture.thumbnail}} 
                />

                <View>
                  <Text style={{ fontSize: 20 }}>{item.name}</Text>
                  <Text style={{ color: '#636363' }}>{item.phone}</Text>
                </View>
              </View>
  
              <Text style={{ fontSize: 30, alignSelf: 'center' }}> > </Text>
            </TouchableOpacity>
          )}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection: 'row',
    paddingTop: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#c5c5c5'
  },
  profilePicture: {
    width: 70, 
    height: 70, 
    margin: 5,
    borderRadius: 50
  },
});