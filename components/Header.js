import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Technologie mobilne</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:70,
        backgroundColor: '#3949ab',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom:10
    },
    text:{
        color:"white",
        fontSize:20
    }
});
