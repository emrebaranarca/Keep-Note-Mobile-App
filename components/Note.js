import { View,Text,StyleSheet } from "react-native";


function Note(props){

    return (
        <View style={styles.noteContainer}>
            <Text>{props.data.data}</Text>    
        </View>
    )
}


export default Note


const styles=StyleSheet.create({

    noteContainer:{
        backgroundColor:'#fe2a22',
        margin:1,
        flexDirection:'row',
        justifyContent:'space-between',
        textAlign:'center',
        alignItems:'center',
        padding:3    
    }

})

