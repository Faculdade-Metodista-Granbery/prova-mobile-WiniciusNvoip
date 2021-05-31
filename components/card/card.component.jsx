import React , { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {Card, Paragraph } from 'react-native-paper';
import ButtonComponent from '../button/button.component';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F9E7E1',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: '#F9E7E1',
    },
    cover: {
        height: 220,
    },
    task: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4D1117',
    },
    view: {
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 300,
        height: 20,
        tintColor: '#4D1117',
      },
});

const CardQuote = ({background,task, stateIcon2}) => {

    const [stateGif, setStateGif] = useState(true);

    const exchangeIcon  = () => {
        if (stateIcon2) {
            setStateGif(false);
        } else {
            setStateGif(true);
        }
      }

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} 
            />
                <ButtonComponent />
                <Card.Content style={styles.content}>
                </Card.Content>
            <Card.Actions>
                <View style={styles.view}>
                    <Paragraph>
                        <Text resizeMode={`cover`} style={styles.task}>
                            {task}
                        </Text>
                    </Paragraph>
                </View>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;