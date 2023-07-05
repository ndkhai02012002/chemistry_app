import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Cu3PO42() {
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
            <Text style={style.atomName}>Đồng(II) Photphat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <View style={style.ctnt}>
                            <Text style={style.ctntText}>Tên nguyên tử: Đồng(II) Photphat</Text>
                            <Text style={style.ctntText}>Danh pháp: Copper(II) Phosphate</Text>
                            <Text style={style.ctntText}>Công thức hóa học: Cu&#8323;(PO&#8324;)&#8322;</Text>
                            <Text style={style.ctntText}>Phân tử khối: 382</Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Image style={style.tttnImg} source={require('../assets/cu3po42.png')} />
                        </View>
                    
                </View>

            </View>
            <View style={style.part}>



                <Text style={style.categories}>Tính chất vật lý</Text>
                <View style={{ backgroundColor: '#0764d1', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trạng thái: Rắn (tinh thể)</Text>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Màu sắc: Màu xanh</Text>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không tan trong nước</Text>
                    <Image style={style.tttnImg} source={require('../assets/cu3po42_tcvl.png')} />
                </View>


            </View>

            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ backgroundColor: '#0764d1', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Có nhiều phương pháp điều chế Cu&#8323;(PO&#8324;)&#8322;:</Text>

                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Na&#8323;PO&#8324; + 3CuCl&#8322; &rarr; Cu&#8323;(PO&#8324;)&#8322;&darr; + 6NaCl</Text>

                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3CuO + 2H&#8323;PO&#8324; &rarr; Cu&#8323;(PO&#8324;)&#8322; + 3H&#8322;O</Text>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2H&#8323;PO&#8324; + 3Cu(OH)&#8322; &rarr; Cu&#8323;(PO&#8324;)&#8322;&darr; + 6H&#8322;O</Text>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3CuCO&#8323; + 2H&#8323;PO&#8324; &rarr; Cu&#8323;(PO&#8324;)&#8322;&darr; + 3H&#8322;O + 3CO&#8322;&uarr;</Text>
                    <Image style={style.tttnImg} source={require('../assets/cu3po42_dc.png')} />
                    <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Điều chế bằng phản ứng ở nhiệt độ cao giữa (NH&#8324;)&#8322;HPO&#8324; và CuO:</Text>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2(NH&#8324;)&#8322;HPO&#8324; + 3CuO &rarr; Cu&#8323;(PO&#8324;)&#8322; + 3H&#8322;O + 4NH&#8323;</Text>

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
        width: '60%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        backgroundColor: '#f0da9c',
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