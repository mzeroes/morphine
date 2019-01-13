/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Clipboard,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { ImagePicker, Permissions } from 'expo';
import uploadImageAsync from 'utils/uploadPhoto';
import { Theme } from 'theme';
import TabBarIcon from 'components/icons/IconWrap';
import Layout from 'theme/constants/Layout';
import { TopBar } from 'components';
import NavigationService from 'utils/NavigationService';

export default class PostScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    image: null,
    uploading: false
  };

  maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return <View />;
  };

  maybeRenderImage = () => {
    const { image } = this.state;
    return (
      <View style={styles.maybeRenderContainer}>
        <View style={styles.maybeRenderImageContainer}>
          {image === null ? (
            <Text />
          ) : (
            <Image source={{ uri: image }} style={styles.maybeRenderImage} />
          )}
        </View>
        <TouchableOpacity
          onPress={image ? this.copyToClipboard : this.takePhoto}
          onLongPress={image ? this.share : this.pickImage}
          style={styles.maybeRenderImageText}
        >
          {image || (
            <TabBarIcon name="ios-camera" size={Layout.window.width / 2} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  share = () => {
    Share.share({
      message: this.state.image,
      title: 'Check out this photo',
      url: this.state.image
    });
  };

  copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert('Copied image URL to clipboard');
  };

  takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    );

    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      const pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      this.handleImagePicked(pickerResult);
    }
  };

  pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera roll
    if (cameraRollPerm === 'granted') {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      this.handleImagePicked(pickerResult);
    }
  };

  handleImagePicked = async (pickerResult) => {
    let uploadResponse;
    let uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();

        this.setState({
          image: uploadResult.location
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(');
    } finally {
      this.setState({
        uploading: false
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TopBar
          onPress={() => {
            NavigationService.toggleDrawer();
          }}
          icon="ios-menu"
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.headText, styles.monoText]}>
              Upload an image
            </Text>
            {this.state.image && (
              <TouchableOpacity
                onPress={() => this.setState({ image: null, uploading: false })}
              >
                <TabBarIcon
                  name="ios-close-circle"
                  focused={this.state.image || this.state.uploading}
                  size={17}
                />
              </TouchableOpacity>
            )}
            {this.state.image === null ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  flex: 1
                }}
              >
                <TouchableOpacity
                  onPress={this.takePhoto}
                  style={styles.touchableButton}
                >
                  <TabBarIcon name="ios-camera" focused={false} size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.pickImage}
                  style={[styles.touchableButton, { paddingRight: 0 }]}
                >
                  <TabBarIcon name="ios-images" focused={false} size={24} />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                onPress={this.pickImage}
                style={styles.touchableButton}
              >
                <TabBarIcon name="ios-cloud-upload" focused size={28} />
              </TouchableOpacity>
            )}
          </View>
        </TopBar>
        {this.maybeRenderImage()}
        {this.maybeRenderUploadingOverlay()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingContainer: {
    borderColor: Theme.statusbar,
    backgroundColor: Theme.statusbar
  },
  headText: {
    margin: 20,
    fontSize: 14,
    color: Theme.dark
  },
  maybeRenderUploading: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.statusbar
  },
  maybeRenderContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  touchableButton: {
    backgroundColor: Theme.statusbar,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  monoText: {
    fontSize: 17,
    color: Theme.infoText,
    textAlign: 'center',
    fontFamily: 'space-mono'
  },
  maybeRenderImageContainer: {},
  maybeRenderImage: {
    width: Layout.window.width,
    height: Layout.window.width
  },
  maybeRenderImageText: {
    alignItems: 'center'
  }
});
