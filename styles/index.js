import { StyleSheet } from 'react-native';
import { statusBarHeight } from 'expo';
import { Colors } from '../constants';

const ROUNDNESS = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight,
    backgroundColor: Colors.background,
  },
  rootContainer: {
    backgroundColor: Colors.background,
  },
  headerStyle: {
    backgroundColor: Colors.statusbar,
    height: 30,
    paddingBottom: 30,
    borderBottomWidth: 0,
    borderColor: Colors.background,
    shadowColor: 'transparent',
    elevation: 1
  },
  topBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 10,
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    paddingLeft: 30,
    width: '100%',
    backgroundColor: Colors.statusbar
  },
  formikContainer: {
    flex: 1,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: Colors.background,
  },
  text: {
    fontSize: 14,
    marginTop: 6,
    color: Colors.text
  },
  errorText: {
    fontSize: 14,
    margin: 6,
    alignSelf: 'flex-end',
    color: Colors.red
  },
  textInput: {
    color: Colors.tintColor,
    height: 36,
    width: '100%',
    borderColor: Colors.tintColor,
    borderWidth: 1,
    marginTop: 10,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: ROUNDNESS,
  },
  touchableButton: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderRadius: ROUNDNESS,
    padding: 12,
    marginTop: 20
  },
  contentContainer: {
    paddingTop: 30
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  baseContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 30,
  },
  highlightText: {
    color: Colors.highlightedText
  },
  headingText: {
    fontSize: 17,
    color: Colors.headingtext,
    lineHeight: 24,
    textAlign: 'left'
  },
  infoContainer: {
    backgroundColor: Colors.warningBackground,
    alignItems: 'center',
    padding: 10,
    marginTop: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: Colors.infoText,
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center'
  },
  linkLoginSignup: {
    color: Colors.white,
    alignItems: 'center',
    backgroundColor: Colors.grey,
    padding: 12,
    width: '100%',
  },
  linkText: {
    fontSize: 14,
    color: Colors.link
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12
  },
  optionIconContainer: {
    marginRight: 9
  },
  option: {
    backgroundColor: Colors.grey,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.black
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  },
  content: {
    padding: 16,
  }
});

export default styles;
