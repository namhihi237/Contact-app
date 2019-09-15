import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
export default class EditContact extends Component {
    static navigationOptions = {
        title: 'Add Contact',
    };
    constructor(props) {
        super(props);
        this.state = {
            textName: '',
            textPhone: '',
        }
    }
    _handleChangeTextName = () => {
        this.setState((previous) => {
            ({ textName: previous.textName });
        });
    }
    _handleChangeTextPhone = () => {
        this.setState((previous) => {
            ({ textPhone: previous.textPhone });
        })
    }
    _addContact = () => {

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Image source={require('../image/exit.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }} onPress={this._addContact}>
                        <Image source={require('../image/tick.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flex: 45 }}>
                    <Image source={require('../image/user.png')} style={{ width: 200, height: 200 }}></Image>
                </View>
                <View style={{ flex: 45, alignItems: "center" }}>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>Name: </Text>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>Phone: </Text>
                        <TextInput style={styles.textInput} keyboardType="numeric" autoCompleteType='tel'></TextInput>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderBottomColor: 'blue',
        borderBottomWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        width: 270,
        marginBottom: 30,
        padding: 3


    }
});