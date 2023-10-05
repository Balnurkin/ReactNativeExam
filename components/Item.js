import { Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";


export const Item = ({ user, removeUser }) => {
    const navigation = useNavigation()

    const openUserCard = () => {
        navigation.navigate('UserCard', { user: user })
    }

    const deleteUserCard = () => {
        removeUser(user)
    }

    return(
       <TouchableOpacity 
            style={{
                backgroundColor: '#D5B4B4',
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center'}} 
            onPress={() => openUserCard()}
            onLongPress={()=> deleteUserCard()}>
            <Image style={{ width: 150, height: 150 }} source={{ uri: user.avatar }} />
            <Text style={{ fontSize: 32, marginLeft: 20, color: '#F5EBEB' }}>{user.first_name}</Text>
        </TouchableOpacity> 
    ) 
}
