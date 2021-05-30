import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
        textAlign: 'center',
        fontSize: 20
    },
    view: {
        textAlign: 'center',
    }
});

const CardQuote = ({background,task}) => {

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <View style={styles.view}>
                <Paragraph>
                <Text
                        style={styles.task}
                    >
                            {task}
                    </Text>
                </Paragraph>
                </View>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;