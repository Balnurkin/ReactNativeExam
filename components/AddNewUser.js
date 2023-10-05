import { StyleSheet, View, TouchableOpacity, Modal, Image, TextInput, Text } from "react-native"
import { useState } from "react"

export default function AddNewUser({data, setData}) {
    const [visible, setVisible] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const openModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const addNewUser = () => {
        const newUser = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            avatar: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png',
            id: data.length + 1
        }
        console.log(newUser);
        setData([...data, newUser])
        console.log(data);
        setVisible(false)
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <View>
            <TouchableOpacity style={styles.newuser} onPress={openModal}>
                <Text style={{ fontSize: 20, color: '#F5EBEB' }}>Добавить нового пользователя</Text>
            </TouchableOpacity>
            <Modal
                visible={visible}
                animationType='slide'
                transparent={true}>
                <View style={styles.modal}>
                    <Image style={{ width: 150, height: 150 }} source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png' }} />
                    <View>
                        <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={(text) => setFirstName(text)} />
                        <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
                        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 50 }}>
                        <TouchableOpacity style={styles.button} onPress={addNewUser}>
                            <Text>Добавить</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={closeModal}>
                            <Text>Закрыть</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    newuser: {
        width: 360,
        height: 50,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#867070',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal:{
        marginHorizontal:30,
        marginVertical:150,
        justifyContent:'center',
        alignItems:'center',
        width:330,
        height:430,
        backgroundColor:'#F5EBEB'
    },
    input:{
        width:250,
        height:40,
        borderWidth:1,
        backgroundColor:'#E4D0D0',
        marginBottom:20,
        paddingHorizontal:10
    },
    button:{
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