import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export default function ScreenDeskRGB()
{
    function pressButtonDeskRGB(id)
    {
        switch(id)
        {
            case 11:
                fetch('http://192.168.0.102/birou/lumini/sus/up');
                break;
            case 12:
                fetch('http://192.168.0.102/birou/lumini/sus/down');
                break;
            case 13:
                fetch('http://192.168.0.102/birou/lumini/sus/off');
                break;
            case 14:
                fetch('http://192.168.0.102/birou/lumini/sus/on');
                break;

            case 21:
                fetch('http://192.168.0.102/birou/lumini/sus/red');
                break;
            case 22:
                fetch('http://192.168.0.102/birou/lumini/sus/green');
                break;
            case 23:
                fetch('http://192.168.0.102/birou/lumini/sus/blue');
                break;
            case 24:
                fetch('http://192.168.0.102/birou/lumini/sus/white');
                break;

            case 31:
                fetch('http://192.168.0.102/birou/lumini/sus/orange');
                break;
            case 32:
                fetch('http://192.168.0.102/birou/lumini/sus/verde');
                break;
            case 33:
                fetch('http://192.168.0.102/birou/lumini/sus/albastru');
                break;
            case 34:
                fetch('http://192.168.0.102/birou/lumini/sus/flash');
                break;

            case 41:
                fetch('http://192.168.0.102/birou/lumini/jos/orange');
                break;
            case 42:
                fetch('http://192.168.0.102/birou/lumini/jos/cyan');
                break;
            case 43:
                fetch('http://192.168.0.102/birou/lumini/jos/mov');
                break;
            case 44:
                fetch('http://192.168.0.102/birou/lumini/jos/strobe');
                break;

            case 51:
                fetch('http://192.168.0.102/birou/lumini/jos/galbui');
                break;
            case 52:
                fetch('http://192.168.0.102/birou/lumini/jos/albastrui');
                break;
            case 53:
                fetch('http://192.168.0.102/birou/lumini/jos/purple');
                break;
            case 54:
                fetch('http://192.168.0.102/birou/lumini/jos/fade');
                break;

            case 61:
                fetch('http://192.168.0.102/birou/lumini/jos/yellow');
                break;
            case 62:
                fetch('http://192.168.0.102/birou/lumini/jos/verzui');
                break;
            case 63:
                fetch('http://192.168.0.102/birou/lumini/jos/pink');
                break;
            case 64:
                fetch('http://192.168.0.102/birou/lumini/jos/smooth');
                break;

            default:
                break;
        }
    }
    return(        
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.contur}>
                        <View style={styles.interior}>
                            <View style={styles.locScris}>
                                <Text style={styles.titlu}>Birou</Text>
                            </View>
                            <View style={styles.locButoane}>
                                <View style={[styles.randButoane,{ marginBottom: "3%"}]}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]}  onPress={() => {pressButtonDeskRGB(11);}}>
                                        <Entypo name="chevron-small-up" color={"#5A5A5A"} size={RFValue(15)} style={styles.iconUpSus}/>
                                        <Entypo name="light-up" color={"#5A5A5A"} size={RFValue(15)} style={styles.iconUpJos}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonDeskRGB(12);}}>
                                        <Entypo name="light-up" color={"#5A5A5A"} size={RFValue(15)} style={styles.iconDownSus}/>
                                        <Entypo name="chevron-small-down" color={"#5A5A5A"} size={RFValue(15)} style={styles.iconDownJos} />                                        
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#000'}]} onPress={() => {pressButtonDeskRGB(13);}}><Text style={styles.textButonLight}>OFF</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F26456'}]} onPress={() => {pressButtonDeskRGB(14);}}><Text style={styles.textButonLight}>ON</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F26456'}]} onPress={() => {pressButtonDeskRGB(21);}}><Text style={styles.textButonLight1}>R</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#4BCC7C'}]} onPress={() => {pressButtonDeskRGB(22);}}><Text style={styles.textButonLight1}>G</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#6379E5'}]} onPress={() => {pressButtonDeskRGB(23);}}><Text style={styles.textButonLight1}>B</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonDeskRGB(24);}}><Text style={styles.textButonDark1}>W</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F27B56'}]} onPress={() => {pressButtonDeskRGB(31);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#7ACC4B'}]} onPress={() => {pressButtonDeskRGB(32);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#6379E5'}]} onPress={() => {pressButtonDeskRGB(33);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonDeskRGB(34);}}><Text style={styles.textButonLung}>FLASH</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F2A456'}]} onPress={() => {pressButtonDeskRGB(41);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#51E6C6'}]} onPress={() => {pressButtonDeskRGB(42);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#6C63E5'}]} onPress={() => {pressButtonDeskRGB(43);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonDeskRGB(44);}}><Text style={styles.textButonLung}>STROBE</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F2CE56'}]} onPress={() => {pressButtonDeskRGB(51);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#51C2E6'}]} onPress={() => {pressButtonDeskRGB(52);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#9974DB'}]} onPress={() => {pressButtonDeskRGB(53);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonDeskRGB(54);}}><Text style={styles.textButonLung}>FADE</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFFF64'}]} onPress={() => {pressButtonDeskRGB(61);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#519BE6'}]} onPress={() => {pressButtonDeskRGB(62);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#D87EF9'}]} onPress={() => {pressButtonDeskRGB(63);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonDeskRGB(64);}}><Text style={styles.textButonLung}>SMOOTH</Text></TouchableOpacity>
                                </View>                                
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
        fontSize: RFValue(28),
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
        height:"70%",
        width: "75%",
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
        backgroundColor: '#fff',
        width: "100%",
        height:"20%",
        flex: 0.2,
        justifyContent: 'center',
        alignItems:"center",
    },
    locButoane:{
        backgroundColor: '#FFF',
        width: "95%",
        height:"70%",
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
    },
    randButoane:{
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
    buton:{
        borderWidth:1,
        borderColor:'rgba(112,112,112,0.14)',
        alignItems:'center',
        justifyContent:'center',        
        height:"90%",      
        aspectRatio: 1,  
        borderRadius:50,
        marginLeft: "2.5%",
        marginRight:"2.5%",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
        textAlign: "center",
    },
    locIcon:{
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'red',
        width: "90%",
        height: "70%",
    },
    textButonLight:{
        fontSize: RFValue(13),
        color: '#FFF',
        fontWeight: "bold"
    },
    textButonDark:{
        color: '#818181',
        fontSize: RFValue(12),
        fontWeight: "bold"
    },
    textButonLight1:{
        fontSize: RFValue(17),
        color: '#FFF',
        fontWeight: "bold"
    },
    textButonDark1:{
        color: '#818181',
        fontSize: RFValue(17),
        fontWeight: "bold"
    },
    textButonLung:{
        color: '#818181',
        fontSize: RFValue(7),
        fontWeight: "bold"
    },
    locSpatiu:{
        height: "3%"
    },
    iconUpSus:{
        marginBottom: "-5%",
        marginTop:"0%",
        color: '#818181'
    },
    iconUpJos:{
        marginBottom: "10%",
        marginTop:"-5%",
        color: '#818181'
    },
    iconDownSus:{
        marginBottom: "-5%",
        marginTop:"15%",
        color: '#818181'
    },
    iconDownJos:{
        marginBottom: "0%",
        marginTop:"-5%",
        color: '#818181'
    }
  });