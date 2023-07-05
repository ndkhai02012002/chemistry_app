import {StyleSheet, Text, View} from "react-native"
import { TouchableOpacity } from "react-native"

export function ButtonCompounds(props) {
    const nav = props.compound.vi_name
    return (
        <View >
            <TouchableOpacity style={style.container} onPress={() => props.navigation.navigate(nav)}> 
                <Text style={style.atomPTK}>{props.compound.ntk}</Text>
                <Text style={style.atomName}>{props.compound.formula}</Text>
                <Text style={style.atomFullName}>{props.compound.eng_name}</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        width: 170,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#eeeeee',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingTop: 8,
        margin: 10
    },
    atomName: {
        textShadowColor: '#cccccc',
        textShadowOffset: {width:2, height:3},
        textShadowRadius: 5,
        fontSize: 32,
        fontWeight: "bold",
        textAlign: 'center'
    },
    button: {
        fontSize: 15,

    },
    atomPTK: {
        marginLeft: 10,
        textAlign: 'center',
        borderRadius: 9,
        width: 40,
        backgroundColor: '#cccccc',
        color: '#4f4f4f',
        fontWeight: '500',
        fontSize: 12
    },
    atomFullName: {
        marginLeft: 10,
        fontSize: 10,
        fontWeight: '500',
        marginBottom: 8
    },

})