import { Image,Text,View,StyleSheet,Button,Modal } from "react-native";
import { useState } from "react";

function targetImage(){

    const [modalVisible,setModalVisible]=useState(true)

    function keepNote() {
        setModalVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            >
            <View style={styles.modelBox}>
                <View>
                    <Image source={require('../assets/images/target.png')} style={styles.image}  />
                </View>
                <View style={styles.button}>
                    <Button title="KEEP NOTE" color={'#fe2a22'} onPress={keepNote}/>
                </View>
            </View>
        </Modal>
    )

}


export default targetImage


const styles=StyleSheet.create({

    modelBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    image:{
        width:200,
        height:200,
        resizeMode: 'contain',
        marginBottom:30
    },
    button:{
        
    }

})