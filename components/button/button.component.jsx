import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
    },
    iconStyle: {
      width: 30,
      height: 30,
      marginLeft: '9rem', 
    },
  });

const ButtonComponent = () => {

  const [stateIcon, setStateIcon] = useState(true);
  const [labelIcon, setLabelIcon] = useState('Ícone de player!');

  const handleIcon = () => {
    if (stateIcon) {
      setStateIcon(false);
      setLabelIcon('Ícone de pause!');
    } else {
      setStateIcon(true);
      setLabelIcon('Ícone de player!');
    }
  }

    return (
        <View style={styles.container}>
          <TouchableOpacity activeOpacity = {.3} onPress={handleIcon}>
        <Image
          style={styles.iconStyle}
          accessibilityLabel= {labelIcon}
          resizeMode={`center`}
          source={{
            uri: stateIcon ? 
            'https://img-premium.flaticon.com/png/512/151/151860.png?token=exp=1622398038~hmac=f5c122cf3a4d8210fd004a244b606c57' 
            : 
            'https://img-premium.flaticon.com/png/512/565/565258.png?token=exp=1622398124~hmac=1ac714dc65269aeebe85a26b22b25cce',
          }}
        />
        </TouchableOpacity>
      </View>
    );
}

export default ButtonComponent;