import React from 'react';
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
        fontSize: 15,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        marginLeft: '4rem', 
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
                <ButtonComponent/>
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
                    <Image
                    resizeMode={`center`}
                    source={'https://img-premium.flaticon.com/png/512/151/151860.png?token=exp=1622398038~hmac=f5c122cf3a4d8210fd004a244b606c57'}
                     />
                </Paragraph>
                </View>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;