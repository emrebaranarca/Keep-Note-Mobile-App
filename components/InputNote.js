import { Button,TextInput,View,StyleSheet,Text } from "react-native";
import { useState } from "react";

function InputNote(props){

    const [note,setNote]=useState("")

    function noteInputHandler(e){
        setNote(e)
    }

    function addNoteHandler(){
        props.addNote(note)
        setNote("")
    }
    

    return(
        <View style={styles.inputNoteContainer}>
            <TextInput            
            style={styles.input}
            placeholder="Your note"
            onChangeText={noteInputHandler}
            value={note}/>
            <View style={styles.button}>
                <Button title="ADD NOTE" color={'#fe2a22'} onPress={addNoteHandler}/>
            </View>
        </View>
    )

}

export default InputNote



const styles=StyleSheet.create({
    inputNoteContainer:{
        flex:3,
        margin:20,
        backgroundColor:'white',
        justifyContent:'center'
    },
    input:{
        borderWidth:1,
        height: 40,
        margin: 12,
        padding:10
    },
    button:{
        flex:1,
        alignItems:'center'
    }
})