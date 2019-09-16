import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
export default class EditContact extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            textName: this.props.navigation.getParam('name'),
            textPhone: this.props.navigation.getParam('phone'),
        }
    }
    _handleExit = () => {
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{ padding: 5 }} onPress={this._handleExit}>
                        <Image source={require('../image/exit.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Image source={require('../image/tick.png')} style={{ width: 35, height: 35 }}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', flex: 45 }}>
                    <Image source={require('../image/user.png')} style={{ width: 200, height: 200, marginTop: 50 }}></Image>
                </View>
                <View style={{ flex: 45, alignItems: "center" }}>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <TextInput style={styles.textInput}
                            value={this.props.navigation.getParam('name')}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <TextInput style={styles.textInput}
                            keyboardType="numeric"
                            autoCompleteType='tel'
                            value={this.props.navigation.getParam('phone')}>
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