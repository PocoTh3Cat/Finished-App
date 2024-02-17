import React, { Component } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    ImageBackground,
    Touchable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class IssLocationScreen extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => {this.props.navigation.navigate("Home")}}>
                <View style={styles.container}>
                    <ImageBackground style={{height: "100%"}} source={require("../assets/welcomeBg2.jpg")}>
                        <View style={{display: "flex", width: "100%", height: "100%", alignItems: "center", position: "absolute", marginTop:70,}}>
                            <Text style={{fontSize: 70}}>Welcome!</Text>
                        </View>

                        <View style={{display: "flex", width: "90%", height: "100%", justifyContent: 'center', alignSelf: "center"}}>
                            <Text style={{fontSize: 30,}}>
                                I made this weather app using React Native. In the app you can search any location and it will show the weather for it
                            </Text>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: "100%",
        width: "100%"
    },

})
