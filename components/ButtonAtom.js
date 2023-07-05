import {StyleSheet, Text, View} from "react-native"
import { TouchableOpacity } from "react-native"

export function ButtonAtom(props) {
    const nav = props.atom.vi_name
    return (
        <View >
            <TouchableOpacity style={style.container} onPress={() => props.navigation.navigate(nav)}> 
                <Text style={style.atomPTK}>{props.atom.ntk}</Text>
                <Text style={style.atomName}>{props.atom.formula}</Text>
                <Text style={style.atomFullName}>{props.atom.eng_name}</Text>
                <Text style={style.atomKL}>{props.atom.kl}</Text>
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        width: 100,
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
        width: 18,
        backgroundColor: '#cccccc',
        color: '#4f4f4f',
        fontWeight: '500',
        fontSize: 12
    },
    atomFullName: {
        marginLeft: 10,
        fontSize: 10,
        fontWeight: '500'
    },
    atomKL: {
        marginLeft: 10,
        marginBottom: 8,
        color: '#4f4f4f',
        fontSize: 8
    }
})