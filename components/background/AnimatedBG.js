import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DangerZone } from 'expo';

const { Lottie } = DangerZone;
class AnimatedBG extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={this.props.animationContainer || styles.animationContainer}
        >
          <Lottie
            ref={(animation) => {
              this.animation = animation;
            }}
            style={this.props.animationStyle || styles.animation}
            source={this.props.animationfile}
            loop={this.props.loop || true}
          />
        </View>
        <View style={styles.otherComponentsContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  animationContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  otherComponentsContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  animation: {
    height: '100%',
    width: '100%'
  }
});

export default AnimatedBG;
