/**
 * Adapted from Facebook's React-Native tutorial:
 * https://facebook.github.io/react-native/docs/network
 *
 * Image resizing tips from
 * https://medium.com/the-react-native-log/tips-for-react-native-images-or-saying-goodbye-to-trial-and-error-b2baaf0a1a4d
 */

import React from 'react';
import { StyleSheet, Image, FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
				<Image 
					style={{flex: 1, height: undefined, width: undefined}}
					source={{uri: "https://i.redd.it/r45gn1gjlfo31.jpg"}} 
				/>
				<Image 
					style={{flex: 1, height: undefined, width: undefined}}
					source={{uri: "https://i.redd.it/3xebson08fo31.png"}}
				/>
			</View>
    );
  }
}
