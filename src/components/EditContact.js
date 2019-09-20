import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
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
            textName: this.props.navigation.getParam('name'),
            textPhone: this.props.navigation.getParam('phone'),
        }
    }
    _handleExit = () => {
        // Actions.mainAppScreen();
        Actions.pop();
    }
    _handleOk =  async () => {
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
    _handleName = (text) => {
        this.setState({ textName: text });
    }
    _handlePhone = (text) => {
        this.setState({ textPhone: text });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 5 }} onPress={this._handleExit}>
                        <Image source={require('../image/exit.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }} onPress={this._handleOk}>
                        <Image source={require('../image/tick.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flex: 45 }}>
                    <Image source={require('../image/user.png')} style={{ width: 200, height: 200, marginTop: 50 }}></Image>
                </View>
                <View style={{ flex: 45, alignItems: "center" }}>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <TextInput style={styles.textInput}
                            defaultValue={this.state.textName}
                            onChangeText={this._handleName}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <TextInput style={styles.textInput}
                            keyboardType="numeric"
                            autoCompleteType='tel'
                            defaultValue={this.state.textPhone}
                            onChangeText={this._handlePhone}>

                        </TextInput>
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