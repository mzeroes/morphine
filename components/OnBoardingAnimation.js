import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DangerZone } from 'expo';

const { Lottie } = DangerZone;
class OnBoardingAnimation extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <Lottie
            ref={(animation) => { this.animation = animation; }}
            style={styles.animation}
            source={this.props.animationfile}
            loop
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
    alignItems: 'center',
  },
  animationContainer: {
    width: 260,
    height: 260,
  },
  animation: {
    width: 260,
    height: 260,
  },
});

export default OnBoardingAnimation;
