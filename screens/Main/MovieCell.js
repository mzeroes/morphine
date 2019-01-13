import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

export default class MovieCell extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.props.onSelect}>
          <View style={styles.row}>
            <Image
              source={{ uri: this.props.movie.Poster }}
              style={styles.cellImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.movieTitle} numberOfLines={2}>
                {this.props.movie.Title}
              </Text>
              <Text style={styles.movieYear} numberOfLines={1}>
                {this.props.movie.Year}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2
  },
  movieYear: {
    color: '#999999',
    fontSize: 12
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5
  },
  cellImage: {
    backgroundColor: '#dddddd',
    height: 60,
    marginRight: 10,
    width: 60
  }
});
