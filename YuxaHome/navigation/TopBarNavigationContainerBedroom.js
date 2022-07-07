import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ScreenDeskRGB from './screens/screens-bedroom/ScreenDeskRGB';
import ScreenTVSamsungRemote from './screens/screens-bedroom/ScreenTVSamsungRemote';
import ScreenTVSamsungRGB from './screens/screens-bedroom/ScreenTVSamsungRGB';

const bedroomTab = createMaterialTopTabNavigator();

function TopbarNavigationContainerBedroomAll()
{
    return(
        <bedroomTab.Navigator
            initialRouteName="TabBirouRGB"
            screenOptions={{
                tabBarActiveTintColor: '#5A5A5A',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarIndicatorStyle: {backgroundColor: '#9974DB'},
                style: {backgroundColor: '#fff', marginTop: 0}
            }}
        >
            <bedroomTab.Screen
                name="TabBirouRGB"
                component={ScreenDeskRGB}
                options={{
                    tabBarLabel:"Birou RGB"
                }}            
            />  
            <bedroomTab.Screen
                name="TabTVSamsungRemote"
                component={ScreenTVSamsungRemote}
                options={{
                    tabBarLabel:"TV Samsung"
                }}            
            />  
            <bedroomTab.Screen
                name="TabTVSamsungRGB"
                component={ScreenTVSamsungRGB}
                options={{
                    tabBarLabel:"TV RGB"
                }}            
            />
        </bedroomTab.Navigator>
    )
}

export default function TopbarNavigationContainerBedroom()
{
    return(

        <TopbarNavigationContainerBedroomAll/>
    )
}