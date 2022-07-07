import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { RFValue } from "react-native-responsive-fontsize";

export default function ScreenTVSamsungRemote()
{
    function pressButtonTVSamsungRemote(id){
        switch(id){
            case 11:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/2/source');
                break;
            case 12:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/1/power');
                break;

            case 21:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/3/1');
                break;
            case 22:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/4/2');
                break;
            case 23:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/5/3');
                break;

            case 31:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/6/4');
                break;
            case 32:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/7/5');
                break;
            case 33:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/8/6');
                break;

            case 41:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/9/7');
                break;
            case 42:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/10/8');
                break;
            case 43:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/11/9');
                break;

            case 51:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/21/content');
                break;
            case 52:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/13/0');
                break;
            case 53:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/14/prech');
                break;

            case 61:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/15/plus');
                break;
            case 62:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/16/mute');
                break;
            case 63:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/17/inaninte');
                break;

            case 71:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/18/minus');
                break;
            case 72:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/19/chlist');
                break;
            case 73:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/20/inapoi');
                break;

            case 81:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/33/rosu');
                break;
            case 82:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/34/verde');
                break;
            case 83:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/35/galben');
                break;
            case 83:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/36/albastru');
                break;

            case 91:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/25/sus');
                break;

            case 101:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/27/stanga');
                break;
            case 102:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/28/ok');
                break;
            case 103:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/29/dreapta');
                break;

            case 111:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/31/jos');
                break;

            case 121:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/30/return');
                break;
            case 122:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/32/exit');
                break;

            case 131:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/37/stepback');
                break;
            case 132:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/38/play');
                break;
            case 133:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/39/pause');
                break;
            case 134:
                fetch('http://192.168.0.102/dormitor/tv/telecomanda/40/stepforward');
                break;
            default:
                break;
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contur}>
                        <View style={styles.interior}>
                            <View style={styles.locScris}>
                                <Text style={styles.titlu}>TV</Text>
                            </View>
                            <View style={styles.locButonPower}>
                                <TouchableOpacity style={[styles.butonPower,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonTVSamsungRemote(11);}}>
                                    <Ionicons name="tv-outline" color={"#A2ABC5"} size={RFValue(15)}/>
                                </TouchableOpacity>
                                <View style={styles.ButonPowerSpatiu}></View>
                                <TouchableOpacity style={[styles.butonPower,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonTVSamsungRemote(12);}}>
                                    <Ionicons name="power-outline" color={"#F16E6E"} size={RFValue(15)}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.locTastatura}>
                                <View style={styles.randTaste}> 
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(21);}}><Text style={styles.textTasta1}>1</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(22);}}><Text style={styles.textTasta1}>2</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(23);}}><Text style={styles.textTasta1}>3</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randTaste}> 
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(31);}}><Text style={styles.textTasta1}>4</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(32);}}><Text style={styles.textTasta1}>5</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(33);}}><Text style={styles.textTasta1}>6</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randTaste}> 
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(41);}}><Text style={styles.textTasta1}>7</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(42);}}><Text style={styles.textTasta1}>8</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(43);}}><Text style={styles.textTasta1}>9</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randTaste}> 
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(51);}}><Text style={styles.textTasta2}>CONTENT</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(52);}}><Text style={styles.textTasta1}>0</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(53);}}><Text style={styles.textTasta2}>PRE-CH</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locVolum}>
                                <View style={styles.locVolumSides}>
                                    <TouchableOpacity style={[styles.tastaVolum,{ }]} onPress={() => {pressButtonTVSamsungRemote(61);}}><Ionicons name="caret-up" color={"#A3ACC5"} size={RFValue(17)}/></TouchableOpacity>
                                    <View style={[styles.tastaVolum,{ }]}><Ionicons name="volume-medium" color={"#3F6EF1"} size={RFValue(17)}/></View>
                                    <TouchableOpacity style={[styles.tastaVolum,{ }]} onPress={() => {pressButtonTVSamsungRemote(71);}}><Ionicons name="caret-down" color={"#A3ACC5"} size={RFValue(17)}/></TouchableOpacity>
                                </View>
                                <View style={styles.locVolumMiddle}>
                                    <TouchableOpacity style={[styles.tastaVolumMiddle,{ }]} onPress={() => {pressButtonTVSamsungRemote(62);}}><Ionicons name="volume-mute-sharp" color={"#A3ACC5"} size={RFValue(15)}/></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaVolumMiddle,{ }]} onPress={() => {pressButtonTVSamsungRemote(72);}}><Ionicons name="list" color={"#A3ACC5"} size={RFValue(12)}/></TouchableOpacity>
                                </View>
                                <View style={styles.locVolumSides}>
                                    <TouchableOpacity style={[styles.tastaVolum,{ }]} onPress={() => {pressButtonTVSamsungRemote(63);}}><Ionicons name="caret-up" color={"#A3ACC5"} size={RFValue(17)}/></TouchableOpacity>
                                    <View style={[styles.tastaVolum,{ }]}><Text style={styles.volumCH}>CH</Text></View>
                                    <TouchableOpacity style={[styles.tastaVolum,{ }]} onPress={() => {pressButtonTVSamsungRemote(73);}}><Ionicons name="caret-down" color={"#A3ACC5"} size={RFValue(17)}/></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locCulori}>
                                <View style={styles.randCulori}> 
                                    <TouchableOpacity style={[styles.tastaCuloare,{ backgroundColor: '#FD4D4C', borderColor: '#F8DCDA', borderWidth:1.5,}]} onPress={() => {pressButtonTVSamsungRemote(81);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaCuloare,{ backgroundColor: '#3FF1C3', borderColor: '#D3F5D3', borderWidth:1.5,}]} onPress={() => {pressButtonTVSamsungRemote(82);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaCuloare,{ backgroundColor: '#FFC500', borderColor: '#FAEDBD', borderWidth:1.5,}]} onPress={() => {pressButtonTVSamsungRemote(83);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaCuloare,{ backgroundColor: '#39A5FF', borderColor: '#B7DAF8', borderWidth:1.5,}]} onPress={() => {pressButtonTVSamsungRemote(84);}}></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locSageti}>
                                <View style={styles.randSagetiSides}>
                                    <TouchableOpacity style={[styles.tastaSagetiSides,{ }]} onPress={() => {pressButtonTVSamsungRemote(91);}}><FontAwesome5 name="caret-up" color={"#3F6EF1"} size={RFValue(14)} /></TouchableOpacity>
                                </View>
                                <View style={styles.randSagetiMiddle}>
                                    <TouchableOpacity style={[styles.tastaSagetiMiddle,{ }]} onPress={() => {pressButtonTVSamsungRemote(101);}}><FontAwesome5 name="caret-left" color={"#3F6EF1"} size={RFValue(14)}/></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaSagetiMiddleOK,{ }]} onPress={() => {pressButtonTVSamsungRemote(102);}}><FontAwesome5 name="circle" color={"#3F6EF1"} size={RFValue(10)}/></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaSagetiMiddle,{ }]} onPress={() => {pressButtonTVSamsungRemote(103);}}><FontAwesome5 name="caret-right" color={"#3F6EF1"} size={RFValue(14)}/></TouchableOpacity>
                                </View>
                                <View style={styles.randSagetiSides}>
                                    <TouchableOpacity style={[styles.tastaSagetiSides,{ }]} onPress={() => {pressButtonTVSamsungRemote(111);}}><FontAwesome5 name="caret-down" color={"#3F6EF1"} size={RFValue(14)}/></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locExit}>
                                <View style={styles.randTaste}> 
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(121);}}><Text style={styles.textTasta2}>RETURN</Text></TouchableOpacity>
                                    <View style={styles.exitSpatiu}></View>
                                    <TouchableOpacity style={[styles.tastaNumerica,{ }]} onPress={() => {pressButtonTVSamsungRemote(122);}}><Text style={styles.textTasta2}>EXIT</Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locPlay}>
                                <View style={styles.randCulori}> 
                                    <TouchableOpacity style={[styles.tastaPlay,{ backgroundColor: '#FFF', borderColor: '#E7ECF6',borderWidth: 0.5}]} onPress={() => {pressButtonTVSamsungRemote(131);}}><Ionicons name="ios-play-skip-back-sharp" color={"#A3ACC5"} size={RFValue(10)}/></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaPlay,{ backgroundColor: '#FFF', borderColor: '#E7ECF6',borderWidth: 0.5}]} onPress={() => {pressButtonTVSamsungRemote(132);}}><Ionicons name="play" color={"#A3ACC5"} size={RFValue(10)}/></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaPlay,{ backgroundColor: '#FFF', borderColor: '#E7ECF6', borderWidth: 0.5}]} onPress={() => {pressButtonTVSamsungRemote(133);}}><Ionicons name="pause" color={"#A3ACC5"} size={RFValue(10)}/></TouchableOpacity>
                                    <TouchableOpacity style={[styles.tastaPlay,{ backgroundColor: '#FFF', borderColor: '#E7ECF6', borderWidth: 0.5}]} onPress={() => {pressButtonTVSamsungRemote(134);}}><Ionicons name="play-skip-forward-sharp" color={"#A3ACC5"} size={RFValue(10)}/></TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locLogo}>
                                <Image style={styles.logoSamsung} source={require('../../../assets/logo_samsung.png')} resizeMode="contain"/>
                            </View>
                            <View style={styles.locSpatiu}/>
                        </View>
                </View>
            </View>            
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    content:{
        flex:1,
        alignItems:"center",
        justifyContent: 'center',
        backgroundColor: "#F9F9F9"
    },
    titlu:{
        fontSize: RFValue(24),
        color: '#818181',
        fontWeight: '700',
        letterSpacing: 2,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
    },
    contur:{
        backgroundColor: '#fff',
        borderWidth: 6,
        borderColor: '#707070',
        alignItems:"center",
        justifyContent: 'center',
        height:"90%",
        width: "60%",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 7,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 7,
    },
    interior:{        
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems:"center",
        height:"98%",
        width: "96%",
    },
    locScris:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"7%",
        justifyContent: 'center',
        alignItems:"center",
    },
    locButonPower:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        flex:0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"center",
        marginBottom: "2%"
    },
    locTastatura:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"30%",
        flex:0.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        marginBottom: "2%"
    },
    locVolum:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        flex:0.4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"center",
        marginTop:"1%",
        marginBottom:"1%"
    },
    locCulori:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        flex:0.11,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        marginTop:"2%"
    },
    locSageti:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"18%",
        justifyContent: 'center',
        alignItems:"center",
        marginTop:"2%"
    },
    locExit:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        flex:0.13,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
    },
    locPlay:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        flex:0.13,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
    },
    locLogo:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"5%",
        justifyContent: 'center',
        alignItems:"center",
    },
    butonPower:{
        borderWidth:1,
        borderColor:'rgba(231,236,246,1)',
        alignItems:'center',
        justifyContent:'center',        
        height:"80%",      
        aspectRatio: 1,  
        borderRadius:50,
        marginLeft: "3.5%",
        marginRight:"3.5%",
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        elevation: 3,
        textAlign: "center",
    },
    ButonPowerSpatiu:{
        width:"44%",
        marginLeft: "0%",
        marginRight:"0%",
    },
    randTaste:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"30%",
        marginTop: "1%",
        marginBottom: "1%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    tastaNumerica:{
        borderWidth:1,
        borderColor:'rgba(231,236,246,1)',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        height:"85%",      
        width:"23%",
        borderRadius:10,
        marginLeft: "5%",
        marginRight:"5%",
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3,
        elevation: 2,
        textAlign: "center",
    },
    textTasta1:{
        fontSize: RFValue(15),
        color: '#A4ABBA',
        fontWeight: "bold"
    },
    textTasta2:{
        fontSize: RFValue(7),
        color: '#A4ABBA',
        fontWeight: "bold"
    },
    randCulori:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"30%",
        marginTop: "1%",
        marginBottom: "1%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    tastaCuloare:{        
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        height:"85%",      
        aspectRatio: 1, 
        borderRadius:50,
        marginLeft: "5.5%",
        marginRight:"5.5%",
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3,
        elevation: 2,
        textAlign: "center",
    },
    tastaPlay:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        height:"75%",      
        aspectRatio: 1, 
        borderRadius:50,
        marginLeft: "5%",
        marginRight:"5%",
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3,
        elevation: 2,
        textAlign: "center",
    },
    exitSpatiu:{
        width:"30%"
    },
    logoSamsung:{
        height:"35%",
        marginTop:"2%"
    },
    locVolumSides:{
        width:"15%",
        height:"90%",
        justifyContent: 'center',
        alignItems: "center",
        borderWidth:1,
        borderColor:'rgba(231,236,246,1)',
        backgroundColor: '#FFF',
        borderRadius:25,
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        elevation: 3,
        textAlign: "center",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
    },
    locVolumMiddle:{
        backgroundColor: '#FFF',
        width:"15%",
        height:"90%",
        marginLeft:"18%",
        marginRight:"18%",
        alignItems:'center',
        justifyContent:'center',
    },
    tastaVolum:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'transparent',        
        height:"30%",      
        width:"90%",     
        textAlign: "center",
    },
    volumCH:{
        fontSize: RFValue(12),
        color: '#3F6EF1',
        fontWeight: 'bold',
        letterSpacing: 0,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 10,
    },
    tastaVolumMiddle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        width:"100%",      
        aspectRatio: 1, 
        borderRadius:50,
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        elevation: 3,
        textAlign: "center",
        marginTop:"10%",
        marginBottom:"10%"
    },
    randSagetiSides:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF',
        width:"80%",
        height:"30%",
        flex:1.3
    },
    randSagetiMiddle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFF',
        width:"80%",
        height:"30%",
        flex:1,
        flexDirection:'row'
    },
    tastaSagetiMiddle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        height:"75%",      
        width: "20%", 
        borderRadius:20,
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3,
        elevation: 2,
        textAlign: "center",
    },
    tastaSagetiMiddleOK:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        height:"65%",      
        aspectRatio: 1, 
        borderRadius:50,
        marginLeft: "3%",
        marginRight:"3%",
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3,
        elevation: 2,
        textAlign: "center",
    },
    tastaSagetiSides:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#FFF',        
        height:"90%",      
        width: "12%", 
        borderRadius:20,
        shadowColor: "#4C5884",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.16,
        shadowRadius: 3,
        elevation: 2,
        textAlign: "center",
    }    
  });