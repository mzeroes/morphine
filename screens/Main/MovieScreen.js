import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

import { apiUrl, apiImgUrl, apiKey } from 'config/keys';

export default class MovieScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.navigation.state.params.imbd,
      dataSource: {}
    };
  }

  componentDidMount() {
    fetch(`${apiUrl}?i=${this.state.id}&apikey=${apiKey}`)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState(
          {
            dataSource: responseJson
          },
          () => {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentWillUnmount() {
    this.setState({
      dataSource: {}
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            height: 300,
            width: 200,
            borderRadius: 10
          }}
        >
          <Image
            source={{ uri: `${apiImgUrl}?i=${this.state.id}&apikey=${apiKey}` }}
            style={styles.detailsImage}
          />
          <View style={styles.rightPane}>
            <Text style={styles.movieTitle}>{this.state.dataSource.Title}</Text>
            <View style={styles.movieDesc}>
              <Text>{this.state.dataSource.Released}</Text>
              <Text>{this.state.dataSource.Genre}</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Plot</Text>
        <Text style={{ top: 3 }}>{this.state.dataSource.Plot}</Text>
        <View style={styles.separator} />
        <Text style={styles.castTitle}>Actors</Text>
        <Text style={styles.castActor}>{this.state.dataSource.Actors}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10
  },
  rightPane: {
    justifyContent: 'space-between',
    flex: 1
  },
  movieTitle: {
    fontSize: 16,
    top: 10,
    fontWeight: '500'
  },
  movieDesc: { marginBottom: 10 },

  detailsImage: {
    width: 134,
    height: 200,
    top: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10
  },
  castTitle: {
    fontWeight: '500',
    marginBottom: 3
  },
  castActor: {
    marginLeft: 2
  }
});
