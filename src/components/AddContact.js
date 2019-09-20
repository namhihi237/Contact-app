import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

var user = {
    name: '',
    phone: '',
};
export default class EditContact extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor (props) {
        super(props);
        this.state = {
            textName: '',
            textPhone: '',

        }
    }
    _setDataList = async () => {
        var use_1 = user;
        let key = this.state.textPhone;
        use_1.name = this.state.textName;
        use_1.phone = this.state.textPhone;
        if (use_1.name === '' || use_1.phone === '') {
            Alert.alert('Nhap day du thong tin');
        }
        else {
            try {
                await AsyncStorage.setItem(key, JSON.stringify(use_1));
                Actions.mainAppScreen()
            }
            catch (e) {
                console.log(e);
            }
        }
    }
    _handleChangeTextName = (text) => {
        this.setState({ textName: text });
    }
    _handleChangeTextPhone = (text) => {
        this.setState({ textPhone: text })
    }
    _handleExit = () => {
        // Actions.mainAppScreen();
        Actions.pop();
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 5 }} onPress={this._handleExit}>
                        <Image source={require('../image/exit.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }} onPress={this._setDataList}>
                        <Image source={require('../image/tick.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flex: 45 }}>
                    <Image source={require('../image/user.png')} style={{ width: 200, height: 200 }}></Image>
                </View>
                <View style={{ flex: 45, alignItems: "center" }}>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>Name: </Text>
                        <TextInput style={styles.textInput} onChangeText={this._handleChangeTextName}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Text style={{ marginTop: 10, fontSize: 20 }}>Phone: </Text>
                        <TextInput style={styles.textInput} keyboardType="numeric" autoCompleteType='tel'
                            onChangeText={this._handleChangeTextPhone}></TextInput>
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