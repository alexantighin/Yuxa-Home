import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import ScreenTVLGRGB from './screens/screens-livingroom/ScreenTVLGRGB';

const livingroomTab = createMaterialTopTabNavigator();

function TopbarNavigationContainerLivingroomAll()
{
    return(
        <livingroomTab.Navigator
            initialRouteName="TabSufragerieTVRGB"
            screenOptions={{
                tabBarActiveTintColor: '#5A5A5A',
                tabBarLabelStyle: { fontSize: 12 },
                tabBarIndicatorStyle: {backgroundColor: '#9974DB'},
                style: {backgroundColor: '#fff', marginTop: 0}
            }}
        >
            <livingroomTab.Screen
                name="TabSufragerieTVRGB"
                component={ScreenTVLGRGB}
                options={{
                    tabBarLabel:"TV RGB"
                }}            
            />
        </livingroomTab.Navigator>
    )
}

export default function TopbarNavigationContainerLivingroom()
{
    return(

        <TopbarNavigationContainerLivingroomAll/>
    )
}