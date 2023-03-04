import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icon, ListItem, Button } from '@rneui/themed';

export default Item = ({ name, schedule, url, id, data, deleteRecord }) => {
    function deleteSchedule() {
        console.log('data', data);
        deleteRecord(id)
    }
    return (
        <ListItem.Swipeable style={styles.item}
            rightContent={(reset) => (
                <Button
                    title="Delete"
                    onPress={() => deleteSchedule()}
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                />
            )}
        >
            <View style={styles.wrap}>
                <View style={styles.rowContainer}>
                    <Image source={{ uri: url }} style={styles.image1} resizeMode='contain' />
                    <View style={styles.textWrap}>
                        <Text style={styles.text}>{name}</Text>
                        <Text style={styles.text0}>{`${schedule[0]}: ${schedule[1]}`}</Text>
                    </View>
                </View>
                <Icon name="keyboard-arrow-right" size={32} color={'black'} />

            </View>
        </ListItem.Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#BAC1CA',
        borderColor: '#BAC1CA',
    },
    image1: {
        height: 55.61, width: 55.98,
    },
    text: { color: 'black', fontWeight: 'bold' },
    text0: { color: 'black' },
    wrap: { flexDirection: 'row', justifyContent: 'space-between', flex: 1 },
    rowContainer: { flexDirection: 'row' },
    textWrap: { flexDirection: "column", alignContent: 'flex-start', padding: '4%' }
});