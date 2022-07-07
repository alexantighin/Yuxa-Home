import * as React from 'react';
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
//import { StatusBar } from 'react-native';

import TopbarNavigationContainerBedroom from './TopBarNavigationContainerBedroom';
import TopbarNavigationContainerLivingroom from './TopBarNavigationContainerLivingroom';

//Screens names
const bedroomTextLabel = 'Dormitor';
const livingroomTextLabel = 'Sufragerie';

const roomsTab = createBottomTabNavigator();

function BottomBarNavigationContainerRooms(){
    return(
            <roomsTab.Navigator
                initialRouteName={bedroomTextLabel}
                screenOptions={{
                    tabBarActiveTintColor: '#9974Db',
                    tabBarInactiveTintColor: 'grey',
                    headerShown: false
                }}
            >
                <roomsTab.Screen 
                    name={bedroomTextLabel}
                    component={TopbarNavigationContainerBedroom}
                    options = {{
                        tabBarLabel: bedroomTextLabel,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome5 name="bed" color={color} size={size} />
                        )
                    }}/>
                <roomsTab.Screen 
                    name={livingroomTextLabel}
                    component={TopbarNavigationContainerLivingroom}
                    options = {{
                        tabBarLabel: livingroomTextLabel,
                        tabBarIcon: ({color, size}) => (
                            <FontAwesome5 name="couch" color={color} size={size} />
                        )
                    }}/>
            </roomsTab.Navigator>
    );
}

export default function BottomBarNavigation()
{
    return(
        <NavigationContainer>
            <View style={styles.statusbar}></View>  
            <BottomBarNavigationContainerRooms/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    statusbar: {
      //height: StatusBar.currentHeight,
      width: "100%",
      backgroundColor: "#FFF"
    },
  });