/**
 * Adapted from Facebook's React-Native tutorial:
 * https://facebook.github.io/react-native/docs/network
 * 
 * Didn't use fetch in this, but might (will try to if I have free time) scrape subreddits for cat
 * pictures to display
 *
 * Image resizing tips from
 * https://medium.com/the-react-native-log/tips-for-react-native-images-or-saying-goodbye-to-trial-and-error-b2baaf0a1a4d
 */

import React, { Component } from 'react';
import { Image, FlatList, ActivityIndicator, Button, StyleSheet, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
			isLoading: false
			showTop: false, 
			showBot: false
		}
  }

	onPressTopButton = ()  => {	
		this.setState({
			showTop: true,
			showBot: false
		});
	}

	onPressBottomButton = () => {
		this.setState({
			showBot: true,
			showTop: false
		});
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
      <View style={{flex: 1, paddingTop: 20}}>
			{this.state.showTop &&
				<Image 
					style={{flex: 1, height: undefined, width: undefined, justifyContent: 'center'}}
					source={{uri: "https://i.redd.it/r45gn1gjlfo31.jpg"}} 
				/>
				
			}
			{this.state.showBot &&
				<Image 
					style={{flex: 1, height: undefined, width: undefined, justifyContent: 'center'}}
					source={{uri: "https://i.redd.it/3xebson08fo31.png"}}
				/>
			}
				<View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressTopButton}
            title="P R I M E C A T"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressBottomButton}
            title="SnugglyBoi"
            color="#841584"
          />
        </View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
