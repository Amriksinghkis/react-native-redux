import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import { connect } from 'react-redux';
import { addPlace,removePlace} from './actions/place';
import colors from '../res/colors';
import strings from '../res/strings';

class App extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      alert( strings.fill_data);
      return;
    }
    this.props.add(this.state.placeName);
    this.setState({placeName:""});
  }

  placerRemove = () => {
    this.props.remove(this.state.placeName);
  }
  
  placeNameChangeHandler = (value) => {
    this.setState({
     placeName: value
    });    
  } 

 placesOutput = () => {
  this.props.places 
  
   return (
    <FlatList style = { styles.listContainer }
      data = { this.props.places }
      keyExtractor={(item, index) => index.toString()}
      renderItem = { info => (
        <ListItem 
          placeName={ info.item.value }
        />
      )}
    />
  )
}

render() {
  
  return (
    <View style={ styles.container }>
  
      <View style = { styles.innerContainer }>
        <TextInput
          placeholder = {strings.place_name} 
          style = { styles.placeInput }
          value = { this.state.placeName }
          onChangeText = { this.placeNameChangeHandler }
        />

        <Button title = {strings.add} 
          style = { styles.placeButton }
          onPress = { this.placeSubmitHandler }
         />

        <Button title =  {strings.delete} 
          style = { styles.placeButton }
          onPress = { this.placerRemove }
        />

        </View>
        <View style = { styles.listContainer }>
          { this.placesOutput() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor:colors.white,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
    marginLeft:10,
    marginRight:10,
  },
  placeInput: {
    padding:5,
    width: '50%'
  },
  placeButton: {
    width: '20%'
  },
  listContainer: {
    marginTop:5,
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
    ,
    remove: (name) => {
      dispatch(removePlace())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)