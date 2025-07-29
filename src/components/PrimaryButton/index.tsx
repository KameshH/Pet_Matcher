import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  Platform,
} from 'react-native';

type PrimaryButtonProps = {
  style?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
  disable?: boolean;
  isLoading?: boolean;
  onPress: () => void;
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  const onPressHandler = () => {
    if (props.disable === true || props.isLoading === true) return;
    props.onPress();
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { opacity: props.disable ? 0.3 : 1 },
        { ...props.style },
      ]}
      onPress={onPressHandler}
    >
      <Text style={styles.text}>{props.title}</Text>
      {props.isLoading && (
        <ActivityIndicator
          style={{ marginLeft: 10 }}
          size={Platform.OS === 'android' ? 25 : 10}
          color={'#fff'}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Lexend-Regular',
    fontSize: 16,
  },
  leftImage: { marginRight: 10 },
});

export default PrimaryButton;
