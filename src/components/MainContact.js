import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import SearchInput, { createFilter } from 'react-native-search-filter';
export default class MainContact extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor (props) {
        super(props);
        this.state = {
            dataList: [],
        }
    }
    async componentDidMount() {
        try {
            let keys = await AsyncStorage.getAllKeys();
            keys.forEach(async (inkey) => {
                let user = JSON.parse(await AsyncStorage.getItem(inkey));
                let data = this.state.dataList.concat(user);
                this.setState({ dataList: data });
            })
        }
        catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.search}>
                    <Image source={require('../image/search.png')} style={{
                        width: 25, height: 25, marginTop: 3, marginLeft: 2
                    }}></Image>
                    <SearchInput
                        style={styles.searchInput}
                        placeholder="Type a message to search"
                    />
                </View>

                <View style={{ flex: 80 }}>
                    <FlatList style={{ marginTop: 5 }}
                        data={this.state.dataList}
                        extraData={this.state.dataList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ height: 100 }}
                                    onPress={() => { Actions.editContactScreen({ name: item.name, phone: item.phone }); }} >
                                    <View>
                                        <View style={{ flexDirection: 'row', marginBottom: 30, justifyContent: 'space-between' }}>
                                            <Image source={require('../image/user.png')} style={{ width: 35, height: 35, marginBottom: 5 }}></Image>
                                            <Text style={{ textAlign: 'center', marginLeft: 25, fontSize: 23 }}>{item.name}</Text>
                                            <Image source={require('../image/phone.png')} style={{ height: 35, width: 35, marginRight: 3 }}></Image>
                                        </View>
                                        <View style={{ backgroundColor: "black", height: 1 }}></View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}>

                    </FlatList>
                </View>
                <View style={{ flex: 10, flexDirection: 'row-reverse', alignItems: 'center', backgroundColor: '#F5F5DC' }}>
                    <TouchableOpacity onPress={this._toAddContact}>
                        <Image source={require('../image/add.png')} style={{ height: 35, width: 35, marginRight: 10 }}></Image>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }

    _toAddContact = () => {
        Actions.addContactScreen();
    }
}
const styles = StyleSheet.create({
    search: {
        borderColor: "black",
        borderWidth: 1,
        marginTop: 2,
        flexDirection: 'row',
        flex: 6,
        alignItems: 'center',
        borderRadius: 3,
    },
    searchInput: {
        padding: 5,
        width: 300,
    }
});

