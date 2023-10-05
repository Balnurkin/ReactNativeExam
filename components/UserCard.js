import { useRoute } from "@react-navigation/native"
import { View, Text, Image, StyleSheet } from "react-native"

export default function UserCard(){
    const {params} = useRoute()

    return(
        <View style={styles.container}>
            <Image style={{width:250, height:250}} source={{uri: params.user.avatar}} />
            <View style={{paddingVertical:20}}>
                <View style={styles.data}>
                    <Text style={styles.text1}>First name: </Text>
                    <Text style={styles.text2}>{params.user.first_name}</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text1}>Last name: </Text>
                    <Text style={styles.text2}>{params.user.last_name}</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.text1}>Email: </Text>
                    <Text style={styles.text2}>{params.user.email}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#F5EBEB',
        paddingVertical:20
    },
    data:{
        flexDirection:'row',
        alignItems:'center'
    },
    text1:{
        fontSize:24
    },
    text2:{
        fontSize:24,
        fontStyle:'italic'
    }
})