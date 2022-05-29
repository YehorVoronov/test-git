import React from 'react';
import News from "./News";
import Chat from "./Chat";
import Article from "./Article";
import BigArticle from "./BigArticle";
import Fairbase from "./Core/Fairbase"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            {/*<Stack.Screen
                name="Fairbase"
                component={Fairbase}
                options={{title:"Fairbase"}}
            />*/}
            <Stack.Screen
                name="News"
                component={News}
                options={{title:"News"}}
            />
            <Stack.Screen
                name="Article"
                component={Article}
                options={{title:"Article"}}
            />
            <Stack.Screen
                name="BigArticle"
                component={BigArticle}
                options={{title:"BigArticle"}}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{title:"Chat"}}
            />
        </Stack.Navigator>
    </NavigationContainer>
}
