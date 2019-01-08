/* eslint-disable class-methods-use-this */
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Button, Platform } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat, InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { RkTextInput } from 'react-native-ui-kitten';
import TabBarIcon from 'components/icons/TabBarIcon';

import { IconButton } from 'react-native-paper';
import IconWrap from 'components/icons/IconWrap';
import { background } from 'styles/colors';
import { Colors } from '../../constants';
import styles from '../../styles';
import NavigationService from '../../utils/NavigationService';

class ChatsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: Colors.tintColor,
            padding: 6
          },
          left: {
            backgroundColor: Colors.surface,
            padding: 6

          },
        }}
      />
    );
  }

  renderSend(props) {
    return (
      <Send {...props} style={{ alignContent: 'center' }}>
        <IconWrap name="md-send" size={30} style={{ marginBottom: 4, paddingRight: 12 }} />
      </Send>
    );
  }

  renderInputToolbar(props) {
    // Add the extra styles via containerStyle
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: Colors.surface,
        }}
      />
    );
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: Colors.grey }]}>
        <View style={styles.topBarStyle}>
          <TouchableOpacity onPress={() => {
            NavigationService.toggleDrawer();
          }}
          >
            <TabBarIcon
              name="ios-menu"
              size={28}
            />
          </TouchableOpacity>
          <RkTextInput
            placeholder="Messages..."
          />
        </View>
        <GiftedChat
          renderSend={this.renderSend}
          renderBubble={this.renderBubble}
          renderInputToolbar={this.renderInputToolbar}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer /> : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ChatsScreen);
