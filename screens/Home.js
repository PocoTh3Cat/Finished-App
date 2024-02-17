import React, { Component } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Platform, 
    TouchableOpacity, 
    ImageBackground, 
    Image,
    TextInput,
    Alert,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from "axios"


export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            weather: "",
            icon: "",
            iconImage: "",
            testImage:  require("../assets/weatherIcons/01d.png"),
            weatherIcons: {
                icon1: require("../assets/weatherIcons/01d.png"),
                icon2: require("../assets/weatherIcons/02d.png"),
                icon3: require("../assets/weatherIcons/03d.png"),
                icon4: require("../assets/weatherIcons/04d.png"),
                icon9: require("../assets/weatherIcons/09d.png"),
                icon10: require("../assets/weatherIcons/10d.png"),
                icon11: require("../assets/weatherIcons/11d.png"),
                icon13: require("../assets/weatherIcons/13d.png"),
                icon50: require("../assets/weatherIcons/50d.png"),
            }
        }
    }


    fetchAPI = (location) => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${location ? location : "London"}&units=metric&APPID=143454aa39bbe3442a890cdbf3f9db36`)
            .then(response => {
                this.setState({ weather : response.data})
                this.setState({ icon : this.state.weather.weather[0].icon})
                icon = this.state.icon


                if(icon == "01d" || icon == "01n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon1})
                }
                if(icon == "02d" || icon == "02n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon2})
                }
                if(icon == "03d" || icon == "03n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon3})
                }
                if(icon == "04d" || icon == "04n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon4})
                }
                if(icon == "09d" || icon == "09n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon9})
                }
                if(icon == "10d" || icon == "10n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon10})
                }
                if(icon == "11d" || icon == "11n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon11})
                }
                if(icon == "13d" || icon == "13n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon13})
                }
                if(icon == "50d" || icon == "50n"){
                    this.setState({ iconImage : this.state.weatherIcons.icon50})
                }
            })
            .catch(error => {
                // Alert.alert(error.message)
            })
    }

    componentDidMount() {
        this.fetchAPI()
    }

    render() {
        if (Object.keys(this.state.weather).length !== 0) {
            return (
                <View style={styles.container}>
                    <View style={styles.app}>
                        <ImageBackground source={require("../assets/backgroundImg.jpg")} style={styles.backgroundImage}>
                            <SafeAreaView style={styles.droidSafeArea}/>

                            <View style={styles.SearchContainer}>
                                <TextInput style={styles.SearchTextInput}
                                    placeholder='Search a location'
                                    // onChangeText={newText => this.fetchAPI(newText)}
                                    onChangeText={newText => this.setState({ text : newText})}
                                >
                                    {/* <Text>Search a location</Text> */}
                                </TextInput>
                                <TouchableOpacity style={styles.searchButton} onPress={() => this.fetchAPI(this.state.text)}
                                >
                                    <Text style={styles.searchButtonText}>Search</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.main}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image}
                                        // source={require(this.state.icon)}
                                        source={this.state.iconImage}
                                    >
                                    </Image>
                                </View>

                                <View style={styles.tempContainer}>
                                    <Text style={styles.tempText}>
                                        {Math.round(this.state.weather.main.temp)}°c
                                    </Text>
                                </View>

                                <View style={styles.properties}>
                                    <View style={styles.propsContainers}>
                                        <Text style={{color: "white", fontSize: 40}}>
                                            <Image style={{height: 40, width: 40,}} source={require("../assets/humidityImg.png")}></Image>
                                            {this.state.weather.main.humidity}%
                                        </Text>
                                    </View>

                                    <View style={styles.propsContainers}>
                                        <Text style={{color: "white", fontSize: 40}}>
                                            <Image style={{height: 40, width: 40,}} source={require("../assets/windImg.png")}></Image>
                                            {`${Math.round(this.state.weather.wind.speed)}mph`}
                                        </Text>
                                    </View>
                                </View>

                                <View style={styles.locationContainer}>
                                    <Text style={{fontSize: 40, color: "white"}}>
                                        <Image source={require("../assets/mapIcon.png")} style={{height: 30, width: 21}}></Image>  
                                        {this.state.weather.name}                                      
                                    </Text>
                                </View>
                            </View>
                            {/* <TouchableOpacity style={styles.settingsButton}onPress={() => {this.props.navigation.navigate("IssLocation")}}></TouchableOpacity> */}
                        </ImageBackground>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3e75a3"
    },
    app: {
        flex: 1,
        // margin: 15, 
        borderRadius: 30,
        backgroundColor: "#1f183b",
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowOffset: {width: 5, height: 4,},
    },
    backgroundImage: {
        // display: "flex",
        height: "100%",
    },
    SearchContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    SearchTextInput: {
        height: 50,
        width: "70%",
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#999999",
        fontSize: 30,
        padding: 10,
        opacity: 0.7,
        color: "white",
        
    },
    searchButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,        
        height: 50,
        width: "25%",
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#999999",
        opacity: 0.5,
    },
    searchButtonText: {
        fontSize: 30,
        color: "white",
    },
    main: {
        display: "flex",
    },
    imageContainer: {
        marginTop: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        height: 300,
        width: 300,
    },
    tempContainer: {
        position: "relative",
        bottom: 50,
        left: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    tempText: {
        color: "white",
        fontSize: 130,
    },
    properties: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    propsContainers: {
        display: "flex",
        flexDirection: "row",
    },  
    locationContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
    },
    settingsButton: {
        height: 50,
        width: "25%",
        backgroundColor: "#999999",

    }
});



