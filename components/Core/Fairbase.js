/*
import { StatusBar } from 'expo-status-bar';
import { deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { Button,Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
// Using DB Reference

import { db } from './Config'
import uuid from "react-native-uuid";

export default function Fairbase({navigation}) {

    // Storing User Data
    const [userDoc, setUserDoc] = useState(null)
    // Update Text
    const [text, setText] = useState("")

    const [myUsers,setUsers]=useState([{"login":"","password":""}])

    let loginRef=React.createRef();
    let passwordRef=React.createRef();
    // MARK: CRUD Functions
    const Create = () => {
        // MARK: Creating New Doc in Firebase
        // Before that enable Firebase in Firebase Console
        const myDoc = doc(db, "MyCollection", ""+loginRef.current.value.toString()+"AND"+passwordRef.current.value.toString())

        // Your Document Goes Here
        const docData = {
            "login": loginRef.current.value,
            "password": passwordRef.current.value
        }
        setUsers([...myUsers,docData])

        setDoc(myDoc, docData)
            // Handling Promises
            .then(() => {
                // MARK: Success
                alert("Document Created!")
            })
            .catch((error) => {
                // MARK: Failure
                alert(error.message)
            })
    }

    const Read = () => {
        // MARK: Reading Doc
        // You can read what ever document by changing the collection and document path here
        const myDoc = doc(db, "MyCollection", ""+loginRef.current.value.toString()+"AND"+passwordRef.current.value.toString())
        getDoc(myDoc)
            // Handling Promises
            .then((snapshot) => {
                // MARK: Success
                if (snapshot.exists) {
                    setUserDoc(snapshot.data())
                    
                }
                else {
                    alert("No Doc Found")
                }
            })
            .catch((error) => {
                // MARK: Failure
                alert(error.message)
            })

    }


    /!*
        const Update = (value, merge) => {
            // MARK: Updating Doc
            const myDoc = doc(db, "MyCollection", "MyDocument")

            // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
            setDoc(myDoc, value, { merge: merge })
                // Handling Promises
                .then(() => {
                    // MARK: Success
                    alert("Updated Successfully!")
                    setText("")
                })
                .catch((error) => {
                    // MARK: Failure
                    alert(error.message)
                })
        }
    *!/

    /!*const Delete = () => {
        // MARK: Deleting Doc
        const myDoc = doc(db, "MyCollection", "MyDocument")

        deleteDoc(myDoc)
            // Handling Promises
            .then(() => {
                // MARK: Success
                alert("Deleted Successfully!")
            })
            .catch((error) => {
                // MARK: Failure
                alert(error.message)
            })

    }*!/

    return (
        <View style={styles.container}>

            <TextInput style={{
                marginTop:150,
                marginLeft:"5%",
                width: '90%',
                fontSize: 18,
                padding: 12,
                borderColor: 'yellow',
                borderWidth: 0.2,
                borderRadius: 10,
                marginVertical: 20,
                color:"white"
            }} ref={loginRef}  placeholder='Type Here' />
            <TextInput style={{
                marginLeft:"5%",
                width: '90%',
                fontSize: 18,
                padding: 12,
                borderColor: 'yellow',
                borderWidth: 0.2,
                borderRadius: 10,
                marginVertical: 20,
                color:"white"
            }} ref={passwordRef}  placeholder='Type Here' />
            <View style={{left:120,width:"50%" ,margin:"5%"}}>
                <View style={{marginBottom:"5%" ,backgroundColor:"yellow"}}>
                    <Pressable style={{padding:5,color:"black",backgroundColor:"yellow"}}   onPress={Create}>create user</Pressable>
                </View>
                <View>
                    <Pressable style={{padding:5,color:"black",backgroundColor:"yellow"}}   onPress={Read}>log in</Pressable>
                </View>
            </View>

            {
                userDoc? navigation.navigate('News',{navigation:navigation}):navigation.navigate('Fairbase')
            }







            {/!*  <TextInput style={{
                width: '95%',
                fontSize: 18,
                padding: 12,
                borderColor: 'gray',
                borderWidth: 0.2,
                borderRadius: 10,
                marginVertical: 20
            }}  placeholder='Type Here' onChangeText={(text) => { setText(text) }} value={text}></TextInput>*!/}

            {/!*   <Button title='Update Doc' onPress={() => {
                Update({
                    "bio": text
                }, true)
            }} disabled={text == ""}></Button>*!/}
            {/!*<Button title='Delete Doc' onPress={Delete}></Button>*!/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

        /!*alignItems: 'center',
        justifyContent: 'center',*!/
    },
});
*/
