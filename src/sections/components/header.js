import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.right}>{props.children}</View>
      </SafeAreaView>
    </View>
  );
}

const styles = (StyleSheet.create = {
  logo: {
    width: 85,
    heigth: 30,
    resizeMode: 'contain',
  },
  container: {
    backgroundColor: '#C9EEF1',
    paddingVertical: 2,
    paddingHorizontal: 15,
  },
  right: {
    backgroundColor: 'green',
  },
});

export default Header;
