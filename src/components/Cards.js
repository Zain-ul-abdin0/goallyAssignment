import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Switch } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { Icon } from '@rneui/themed';
import { Image } from '@rneui/base';

const screenWidth = Math.round(Dimensions.get('window').width);

function Cards(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const cardName = props.cardName;
    const morningRoutine='Morning Routine';
    return (
        <View style={styles.textView}>
            <View style={styles.flexWrap}>
                <Text style={styles.text}> {props.cardName} </Text>
                <View style={cardName === morningRoutine ? styles.morningCardBackground : styles.eveningCardBackground}>
                    <View style={styles.wrap}>
                        <View style={styles.imageView}>
                            <View style={styles.textWrap}>
                                <Text style={cardName === morningRoutine ? styles.text1 : styles.text2}>Weekdays</Text>
                                <Text style={cardName === morningRoutine ? styles.text1 : styles.text2}>7:00 AM</Text>
                            </View>
                            <Image source={cardName === morningRoutine ? require('../../assets/icons/sun.jpg') : require('../../assets/icons/moon.jpg')} style={cardName === 'Morning Routine' ? styles.image1 : styles.image2} resizeMode='contain' />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <ToggleSwitch
                                isOn={props.cardName === morningRoutine ? true : false}
                                onColor="#72CEBC"
                                offColor="#72777F"
                                size="big"
                                onToggle={isOn => console.log("changed to : ", isOn)}
                            />
                            <Icon name="keyboard-arrow-right" size={32} color={cardName === morningRoutine ? 'black' : 'white'} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Cards;

const styles = StyleSheet.create({

    textView: {
        flex: 1,
        alignItems: 'center'
    },
    imageView: {
        flexDirection: 'row', justifyContent: 'space-between', paddingRight: '4%'
    },
    flexWrap: {
        flex: 1
    },
    textWrap: {
        height: '50%'
    },

    wrap:
        { flexDirection: 'column', justifyContent: 'space-evenly', flex: 1, paddingLeft: '5%' },

    text: {
        color: '#1A1C1E',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    morningCardBackground: {
        height: '70%', width: screenWidth / 2.2, backgroundColor: '#CFE4FF', borderRadius: 20,
        marginTop: '5%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    eveningCardBackground: {
        height: '70%', width: screenWidth / 2.2, backgroundColor: '#103C58', borderRadius: 20,
        marginTop: '5%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    text1: {
        color: '#1F1F1F',
        fontSize: 16

    },
    text2: {
        color: 'white',
        fontSize: 16,
    },
    image1: {
        height: 55.61, width: 55.98
    },

    image2: {
        height: 40.61, width: 40.98
    }
})