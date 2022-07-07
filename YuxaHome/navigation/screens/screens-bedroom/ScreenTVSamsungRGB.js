import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { RFValue } from "react-native-responsive-fontsize";

let R_Standard = 0;
let G_Standard = 0;
let B_Standard = 0;
let luminiozitate = 5;

export default function ScreenTVSamsungRGB()
{
    function pressButtonTVSamsungRGB(id){
        switch(id){
            case 0:
                R_Standard=0;
                G_Standard=0;
                B_Standard=0;
                break;
            case 100:
                if(luminiozitate>1){
                    luminiozitate--;
                }
                break;
            case 101:
                if(luminiozitate<17){
                    luminiozitate++;
                }
                break;

            case 11:
                R_Standard=255;
                G_Standard=0;
                B_Standard=0;
                break;
            case 12:
                R_Standard=0;
                G_Standard=255;
                B_Standard=0;
                break;
            case 13:
                R_Standard=0;
                G_Standard=0;
                B_Standard=255;
                break;
            case 14:
                R_Standard=255;
                G_Standard=255;
                B_Standard=255;
                break;

            case 21:
                R_Standard=255;
                G_Standard=94;
                B_Standard=0;
                break;
            case 22:
                R_Standard=84;
                G_Standard=255;
                B_Standard=0;
                break;
            case 23:
                R_Standard=0;
                G_Standard=51;
                B_Standard=255;
                break;
            case 24:
                R_Standard=255;
                G_Standard=204;
                B_Standard=229;
                break;

            case 31:
                R_Standard=255;
                G_Standard=130;
                B_Standard=0;
                break;
            case 32:
                R_Standard=130;
                G_Standard=255;
                B_Standard=0;
                break;
            case 33:
                R_Standard=0;
                G_Standard=111;
                B_Standard=255;
                break;
            case 34:
                R_Standard=136;
                G_Standard=0;
                B_Standard=255;
                break;

            case 41:
                R_Standard=255;
                G_Standard=200;
                B_Standard=0;
                break;
            case 42:
                R_Standard=170;
                G_Standard=255;
                B_Standard=0;
                break;
            case 43:
                R_Standard=0;
                G_Standard=255;
                B_Standard=255;
                break;
            case 44:
                R_Standard=255;
                G_Standard=0;
                B_Standard=255;
                break;

            case 51:
                R_Standard=255;
                G_Standard=255;
                B_Standard=0;
                break;
            case 52:
                R_Standard=0;
                G_Standard=255;
                B_Standard=200;
                break;
            case 53:
                R_Standard=255;
                G_Standard=0;
                B_Standard=136;
                break;
            case 54:
                R_Standard=255;
                G_Standard=0;
                B_Standard=178;
                break;            

            default:
                break;
        }
        
        let R_luminiozitate = R_Standard * 0.0588235294117;
        let G_luminiozitate = G_Standard * 0.0588235294117;
        let B_luminiozitate = B_Standard * 0.0588235294117;

        let R_final=0;
        let G_final=0;
        let B_final=0;

        var i;
        for(i=0;i<luminiozitate;i++){
            R_final=R_final+R_luminiozitate;
            G_final=G_final+G_luminiozitate;
            B_final=B_final+B_luminiozitate;
        }
        R_final=Math.round(R_final);
        G_final=Math.round(G_final);
        B_final=Math.round(B_final);
        let link = "http://192.168.0.102/tv/lumini/"+R_final+"/"+G_final+"/"+B_final;
        fetch(link);
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
                                <TouchableOpacity style={[styles.butonPower,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonTVSamsungRGB(0);}}>
                                    <Ionicons name="power-outline" color={"#9B9B9B"} size={RFValue(40)}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.locBrightness}>
                                <View style={styles.locBrightnessMinus} >
                                    <TouchableOpacity style={[styles.butonBrightness,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonTVSamsungRGB(100);}}>
                                        <Entypo name="minus" color={"#9B9B9B"} size={RFValue(10)}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.locBrightnessIcon} >
                                    <Feather name="sun" color={"#9B9B9B"} size={RFValue(20)}/>
                                </View>
                                <View style={styles.locBrightnessPlus} >
                                    <TouchableOpacity style={[styles.butonBrightness,{ backgroundColor: '#FFF'}]} onPress={() => {pressButtonTVSamsungRGB(101);}}>
                                        <Entypo name="plus" color={"#9B9B9B"} size={RFValue(10)}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.locButoane}>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F26456'}]} onPress={() => {pressButtonTVSamsungRGB(11);}}><Text style={styles.textButonLight1}>R</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#4BCC7C'}]} onPress={() => {pressButtonTVSamsungRGB(12);}}><Text style={styles.textButonLight1}>G</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#6379E5'}]} onPress={() => {pressButtonTVSamsungRGB(13);}}><Text style={styles.textButonLight1}>B</Text></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFFFFF'}]} onPress={() => {pressButtonTVSamsungRGB(14);}}><Text style={styles.textButonDark1}>W</Text></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F27B56'}]} onPress={() => {pressButtonTVSamsungRGB(21);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#7ACC4B'}]} onPress={() => {pressButtonTVSamsungRGB(22);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#6379E5'}]} onPress={() => {pressButtonTVSamsungRGB(23);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFBFE4'}]} onPress={() => {pressButtonTVSamsungRGB(24);}}></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F2A456'}]} onPress={() => {pressButtonTVSamsungRGB(31);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#A9FF80'}]} onPress={() => {pressButtonTVSamsungRGB(32);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#6C63E5'}]} onPress={() => {pressButtonTVSamsungRGB(33);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#9974DB'}]} onPress={() => {pressButtonTVSamsungRGB(34);}}></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F2CE56'}]} onPress={() => {pressButtonTVSamsungRGB(41);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#D0F97E'}]} onPress={() => {pressButtonTVSamsungRGB(42);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#51C2E6'}]} onPress={() => {pressButtonTVSamsungRGB(43);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#D87EF9'}]} onPress={() => {pressButtonTVSamsungRGB(44);}}></TouchableOpacity>
                                </View>
                                <View style={styles.randButoane}> 
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#FFFF64'}]} onPress={() => {pressButtonTVSamsungRGB(51);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#51E6C6'}]} onPress={() => {pressButtonTVSamsungRGB(52);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F97E82'}]} onPress={() => {pressButtonTVSamsungRGB(53);}}></TouchableOpacity>
                                    <TouchableOpacity style={[styles.buton,{ backgroundColor: '#F97EC4'}]} onPress={() => {pressButtonTVSamsungRGB(54);}}></TouchableOpacity>
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
        height:"85%",
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
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        justifyContent: 'center',
        alignItems:"center",
    },
    locButonPower:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"23%",
        justifyContent: 'center',
        alignItems:"center",
    },
    locBrightness:{
        backgroundColor: '#FFF',
        width: "100%",
        height:"10%",
        flex:0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"center",
        marginTop:"3%",
        marginBottom:"3%"
    },
    locBrightnessMinus:{
        height: "90%",
        width: "30%",
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: "flex-end",
    },
    locBrightnessIcon:{
        height: "90%",
        width: "30%",
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems:"center",
    },
    locBrightnessPlus:{
        height: "90%",
        width: "30%",
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems:"flex-start"  
    },
    locButoane:{
        backgroundColor: '#FFF',
        width: "95%",
        height:"50%",
        flex: 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
    },
    randButoane:{
        backgroundColor: '#FFF',
        width: "95%",
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
        padding:5
    },
    butonPower:{
        borderWidth:1,
        borderColor:'rgba(236,237,251,1)',
        alignItems:'center',
        justifyContent:'center',        
        height:"90%",      
        aspectRatio: 1,  
        borderRadius:100,
        marginLeft: "0%",
        marginRight:"0%",
        shadowColor: "#584F9E",
        shadowOffset: {
	        width: 3,
	        height: 7,
        },
        shadowOpacity: 0.31,
        shadowRadius: 5,
        elevation: 8,
        textAlign: "center"
    },
    butonBrightness:{
        borderWidth:1,
        borderColor:'rgba(112,112,112,0.14)',
        alignItems:'center',
        justifyContent:'center',        
        height:"70%",      
        aspectRatio: 1,  
        borderRadius:50,
        marginLeft: "3.5%",
        marginRight:"3.5%",
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
    locSpatiu:{
        height: "3%"
    }
  });