import { Text,FlatList,View,Button, StyleSheet,Pressable } from "react-native";
import Note from "./Note";
import { FontAwesome } from '@expo/vector-icons';
function ListNote(props){

    function handleDeleteNote(index) {
        props.onDeleteNote(index)
    }

    return (
        <View style={styles.listContainer}>
            <FlatList style={styles.flatList}
            data={props.notes}
            renderItem={({ item }) => {
                return (
                    <View style={styles.note}>
                        <Note data={item} style={{flex:1}}/>
                        <Pressable >
                            <FontAwesome.Button name="trash" size={20} color="black" backgroundColor={'#fe2a22'} onPress={() => handleDeleteNote(item.key)}/>
                        </Pressable> 
                    </View>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )

}

export default ListNote


const styles=StyleSheet.create({
    listContainer:{
        flex:1,
        backgroundColor:'white',
        margin:20,
        borderRadius:50,
        borderWidth:1,
        borderColor:'#fe2a22'
    },
    flatList:{
        flex:2,
        backgroundColor:'white',
        margin:16
    },
    note:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#fe2a22',
        margin:1,
        borderRadius:8
    }

})