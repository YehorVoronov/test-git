import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Pressable, Text, View } from 'react-native';
import Article from "./Article"

export default function News({route,navigation}) {
    let ChatPress=()=>{
        route.params.navigation.navigate('Chat',{})
    }
    return (
        <View style={styles.container}>
            <Pressable onPress={ChatPress}><Text>chat</Text></Pressable>
            <Article navigation={navigation}/>
            <Article navigation={navigation}/>
            <Article navigation={navigation}/>
            <Article navigation={navigation}/>
            <Article navigation={navigation}/>
            <Article navigation={navigation}/>
            <Article navigation={navigation}/>
            {/*<StatusBar style="auto" />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

         backgroundColor: 'yellow',
         alignItems: 'center',
         justifyContent: 'center',
    },
});
