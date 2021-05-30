import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';


const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
    },
    iconStart: {
      width: 40,
      height: 40,
      marginLeft: 120, 
    },
    iconPause: {
      width: 40,
      height: 40,
      marginLeft: 120, 
    }
  });

const ButtonComponent = () => {

    return (
        <View style={styles.container}>
        <Image
          style={styles.iconStart}
          source={{
            uri: 'https://img-premium.flaticon.com/png/512/149/149657.png?token=exp=1622332029~hmac=74506ec4d1b579bbddffce0ef9ba3df9',
          }}
        />
        <Image
          style={styles.iconPause}
          hidden
          source={{
            uri: 'https://image.flaticon.com/icons/png/512/27/27340.png',
          }}
        />
      </View>
    );
}

export default ButtonComponent;