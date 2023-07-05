import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Fe3PO42() {
    const [slide, setSilde] = useState(['flex', 'none', 'none'])
    const [disable, setDisable] = useState([true, false, false])

    const changeSlide = (x) => {
        if (x === 0) {
            setSilde(['flex', 'none', 'none'])
            setDisable([true, false, false])
        }
        else if (x === 1) {
            setSilde(['none', 'flex', 'none'])
            setDisable([false, true, false])
        }
        else {
            setSilde(['none', 'none', 'flex'])
            setDisable([false, false, true])
        }
    }

    return (
        <ScrollView >
            <Text style={style.atomName}>Sắt(II) Photphat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Sắt(II) Photphat</Text>
                        <Text style={style.ctntText}>Danh pháp: Iron(II) Phosphate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Fe&#8323;(PO&#8324;)&#8322;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 358</Text>
                    </View>

                </View>
            </View>
            <View style={style.part}>



                <Text style={style.categories}>Tính chất vật lý</Text>
                <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trạng thái: Rắn (tinh thể)</Text>
                    <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không tan trong nước</Text>

                </View>


            </View>

            <View style={style.part}>
            <Text style={style.categories}>Điều chế</Text>
                <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Có nhiều phương pháp điều chế Fe&#8323;(PO&#8324;)&#8322;:</Text>

                    <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2H&#8323;PO&#8324; + 3Fe(OH)&#8322; &rarr; Fe&#8323;(PO&#8324;)&#8322;&darr; + 6H&#8322;O</Text>
                    
                    <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3FeO + 2H&#8323;PO&#8324; &rarr; Fe&#8323;(PO&#8324;)&#8322; + 3H&#8322;O</Text>
                    
                    <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3FeCO&#8323; + 2H&#8323;PO&#8324; &rarr; Fe&#8323;(PO&#8324;)&#8322;&darr; + 3H&#8322;O + 3CO&#8322;&uarr;</Text>
                </View>




            </View>
            


        </ScrollView>
    )
}

const style = StyleSheet.create({
    part: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 15,

        marginBottom: 10,
    },
    navSlide: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        flexGrow: 3,
        width: '30%',
    },
    atomName: {
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: '#f2b874'
    },
    categories: {
        color: 'white',
        width: '60%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        backgroundColor: '#0764d1',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },
    ctnt: {

        flexGrow: 4,
        flex: 1,
        marginTop: 10,
        width: '60%'
    },
    ctntText: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 3,
        paddingBottom: 3,
        marginTop: 3,
        marginBottom: 3,
        textAlign: 'left',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderRadius: 15,
        borderColor: '#cccccc',
        fontSize: 16
    },

    ctntImg: {
        marginTop: 20,
        marginRight: 20,
        flexGrow: 5,
        width: '100%',
        resizeMode: 'contain',
        height: 100
    },
    tttnImg: {
        marginTop: 20,
        marginRight: 20,
        flexGrow: 5,
        width: '100%',
        resizeMode: 'contain',
        height: 150
    }
})