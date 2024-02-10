import {StyleSheet,View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TargetImage from './components/TargetImage.js';
import InputNote from './components/InputNote.js';
import ListNote from './components/ListNote.js';
import { useState } from 'react';

export default function App() {

  const [notes,setNotes]=useState([])

  function addNoteHandler(note) {
    setNotes((currentNotes)=>[...currentNotes,{ data:note, key:Math.random().toString() }])
  }

  function deleteNoteHandler(index) {
    setNotes(prevNotes => {
      const updatedNotes = [...prevNotes];
      updatedNotes.splice(index, 1);
      return updatedNotes;
    });
  }

  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <TargetImage/>
        <View style={styles.inputNote}>
          <InputNote addNote={addNoteHandler} />
        </View>
        <View style={styles.listNote}>
          <ListNote notes={notes} onDeleteNote={deleteNoteHandler}/>
        </View>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    backgroundColor:"white"
  },
  inputNote:{
    flex:2,
    marginTop:50,
    backgroundColor:'white'
  },
  listNote:{
    flex:4,
    backgroundColor:'white',
    marginBottom:50
  }
});
