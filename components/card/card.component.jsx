import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import {  Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
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
        alignContent: 'center',
        fontSize: 20
    }
});

let task1 = 'Suco de gratidão + clorofila';
let task2 = 'Aplaudir o por do sol';
let task3 = '5 séries de namastê';

const CardQuote = ({task, background}) => {

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: 'https://image.freepik.com/free-vector/flat-night-sky-background_23-2148032671.jpg' }} />
                <ButtonComponent />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Paragraph>
                <Text
                        style={styles.task}
                    >
                            {task1}
                    </Text>
                </Paragraph>
            </Card.Actions>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevLH9vqcGBf4kYYXN1sEafET9xBaEjxUOMg&usqp=CAU' }} />
                <ButtonComponent />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Paragraph>
                    <Text
                        style={styles.task}
                    >
                            {task2}
                    </Text>
                </Paragraph>
            </Card.Actions>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa6OUSY2144YwI6mFLlxCKdyvkmKn6yLEoLA&usqp=CAU' }} />
                <ButtonComponent />
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Paragraph>
                    <Text
                    style={styles.task}
                    >
                            {task3}
                    </Text>
                </Paragraph>
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;