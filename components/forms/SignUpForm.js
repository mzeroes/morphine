import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import {
  TextInput
} from 'react-native-paper';

import { RkButton, RkText } from 'react-native-ui-kitten';
import styles from '../../styles';
import { Colors } from '../../constants';

const SignUpForm = ({
  values,
  errors,
  touched,
  handleBlur,
  isSubmitting,
  setFieldTouched,
  handleChange,
  handleSubmit,
  setFieldValue
}) => (
  <View style={{ flex: 1 }}>
    <KeyboardAvoidingView style={{ marginTop: 20 }}>
      <TextInput
        onChangeText={value => setFieldValue('name', value)}
        mode="outlined"
        value={values.name}
        label="Name"
        onBlur={() => setFieldTouched('name')}
        placeholder="john doe"
        editable={!isSubmitting}
        error={touched.name && errors.name ? errors.name : undefined}
      />
      <Text style={styles.errorText}>
        {touched.name && errors.name ? errors.name : undefined}
      </Text>
      <TextInput
        onChangeText={value => setFieldValue('email', value)}
        mode="outlined"
        keyboardType="email-address"
        value={values.email}
        label="Email"
        onBlur={() => setFieldTouched('email')}
        placeholder="john@doe.com"
        editable={!isSubmitting}
        error={touched.email && errors.email ? errors.email : undefined}
      />
      <Text style={styles.errorText}>
        {touched.email && errors.email ? errors.email : undefined}
      </Text>

      <TextInput
        onChangeText={value => setFieldValue('password', value)}
        secureTextEntry
        mode="outlined"
        value={values.password}
        label="password"
        placeholder=""
        disabled={errors.email}
        onBlur={() => setFieldTouched('password')}
        editable={!isSubmitting}
        error={touched.password && errors.password ? errors.password : undefined}
      />
      <Text style={styles.errorText}>
        {touched.password && errors.password ? errors.password : undefined}
      </Text>
    </KeyboardAvoidingView>
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <RkButton
        onPress={() => { handleSubmit(); }}
        style={[styles.touchableButton, {
          width: '100%',
          alignItems: 'center',
          backgroundColor: Colors.red,
          borderRadius: 4,
          padding: 14,
          marginTop: 10,
          marginBottom: 10,
        }]}
      >
          Continue
      </RkButton>
    </View>
  </View>

);

export default SignUpForm;
