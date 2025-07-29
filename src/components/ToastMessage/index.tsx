import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';

interface ToastProps {
  message: string;
}

const ToastBgGreenView = ({ message }: ToastProps) => {
  const handlePress = () => {
    Toast.hide();
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.9}>
      <View style={styles.toastContainer}>
        <Text style={styles.toastText}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    backgroundColor: '#4AA45B',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? 60 : 30,
    width: '90%',
    alignSelf: 'center',
  },
  toastText: {
    fontFamily: 'Lexend',
    color: '#fff',
    lineHeight: 21,
    fontSize: 15,
    fontWeight: '400',
    flex: 1,
  },
  icon: {
    marginLeft: 12,
  },
});

export default ToastBgGreenView;
