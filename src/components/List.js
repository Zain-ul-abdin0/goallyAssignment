import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Text, View, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios'
import Item from './Item';

export default function List(props) {

    const AuthStr = 'ddc58e6a-2e69-4f44-97e8-1454eb352069'
    const [isLoading, setIsLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    let [sort, setSort] = useState(true);;
    let [data, setData] = useState([]);;
    const [searchTextState, setSearchTextState] = useState('');

    let deleteRecord = (id) => {
        data = data.filter(filteredValue => (
            filteredValue.id != id
        ))
        setData(data);
    };
    const renderItem = ({ item }) => (
        <Item data={item} name={item.name} schedule={Object.entries(item.schedule)[0]} url={item.visualAidUrl} id={item.id} deleteRecord={deleteRecord} />
    );
    
    useEffect(() => {
        if(sort){
        isAscending();
        }
        if(props.isAsc){
            setSort(true)
        }
    }, [props.isAsc]);

    useEffect(() => {
        fetchData();
    }, []);

  
    function fetchData() {
        setIsLoading(true);
        axios.get(`https://devapi.getgoally.com/v1/api/reminders/all`, { headers: { "Authorization": AuthStr } })
            .then(response => {
                setData(response.data.docs);
                console.log(response.data.docs);
                setRefreshing(false);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }
    const handleRefresh = () => {
        setRefreshing(true);
        fetchData()
    };

    function isAscending() {
        if (props.isAsc) {
            setData(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        } else {
            setData(data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
        }
    }
    return (
        <View style={styles.container}>
            {isLoading ?
                <ActivityIndicator size="large" color="#49B0AB" />
                :
                <FlatList
                data={data.filter((item) =>
                    item.name.toLowerCase().includes(props.searchText.toLowerCase())
                  )}                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                    }
                />
            }
        </View>
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

});