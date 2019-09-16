import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native';
var data = require('../data/data');
export default class MainContact extends Component {
    static navigationOptions = {
        header: null,

    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ borderColor: "black", borderWidth: 1, marginTop: 2, flexDirection: 'row', flex: 10 }}>
                    <Image source={require('../image/search.png')} style={{
                        width: 30, height: 30, marginTop: 3, marginLeft: 2
                    }}></Image>
                    <TextInput style={{ height: 40 }} placeholder="Search"></TextInput>
                </View>
                <View style={{ flex: 80 }}>
                    <FlatList style={{ marginTop: 5 }}
                        data={data} renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ height: 100 }} onPress={this._toEditContact} >
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
                <View style={{ flex: 10, flexDirection: 'row-reverse', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this._toAddContact}>
                        <Image source={require('../image/add.png')} style={{ height: 35, width: 35, marginRight: 10 }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    _toEditContact = () => {
        this.props.navigation.navigate('Edit');
    }
    _toAddContact = () => {
        this.props.navigation.navigate('Add');
    }

}

