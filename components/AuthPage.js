import { useState } from "react"
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from "react-native"

export default function AuthPage({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [hasError, setHasError] = useState(false)

    const signIn = () => {
        if(email && password){
            navigation.navigate('MainPage')
            setEmail('')
            setPassword('')
        } else {
            setHasError(true)
            setError(error.message)
        }
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text)=>setEmail(text)} />
            <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={(text)=>setPassword(text)} />
            <TouchableOpacity style={styles.signIn} onPress={signIn} >
                <Text style={{fontSize:20, color:'#F5EBEB'}}>Войти</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5EBEB'
    },
    input:{
        width:250,
        height:40,
        borderWidth:1,
        backgroundColor:'#E4D0D0',
        marginBottom:20,
        paddingHorizontal:10,
        fontSize:20
    },
    signIn:{
        width:100,
        height:40,
        backgroundColor:'#867070',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    }
})