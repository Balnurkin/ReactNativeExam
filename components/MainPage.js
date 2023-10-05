import { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TextInput, Text, TouchableOpacity } from "react-native"
import { Item } from "./Item";
import AddNewUser from "./AddNewUser";

export default function MainPage() {
    const [data, setData] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [value, setValue] = useState('')

    const foundUsers = data.filter( el => el.first_name.toLowerCase().includes(value.toLowerCase()))

    useEffect(() => {
        if (!loaded) {
            (async () => {
                const data = await getUsers()
                setData(data.data)
                setLoaded(true)
            })()
        }
    })

    const getUsers = async () => {
        try {
            const response = await fetch(
                'https://reqres.in/api/users',
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    const removeUser = (user) => {
        const filteredData = data.filter(el => el.id !== user.id)
        setData(filteredData)
    }

    return (
        <View style={styles.container}>
            <AddNewUser data={data} setData={setData} />
            <View style={styles.inner}>
                <TextInput style={styles.input} placeholder="First Name" value={value} onChangeText={(text)=> setValue(text)} />
            </View>
            <FlatList
                data={foundUsers}
                renderItem={({ item }) => <Item user={item} removeUser={removeUser} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EBEB'
    },
    inner:{
        flexDirection:'row',
        marginHorizontal:16
    },
    input:{
        width:360,
        height:40,
        borderWidth:1,
        backgroundColor:'#E4D0D0',
        marginBottom:20,
        paddingHorizontal:10,
        fontSize:18
    },
    button:{
        width:100,
        height:40,
        marginLeft:10,
        backgroundColor:'#867070',
        justifyContent:'center',
        alignItems:'center'
    }
})