
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function FeNO32() {
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
            <Text style={style.atomName}>Sắt(II) Nitrat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên: Sắt(II) Nitrat</Text>
                        <Text style={style.ctntText}>Danh pháp: Iron(II) Nitrate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Fe(NO&#8323;)&#8322;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 180</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/feno32.png')} />
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.navSlide}>
                        <Button disabled={disable[0]} title='TC. Vật Lý' onPress={() => changeSlide(0)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[1]} title='TC. Hóa Học' onPress={() => changeSlide(1)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[2]} title='Điều Chế' onPress={() => changeSlide(2)} />
                    </View>



                </View>
                <View style={{ display: slide[0] }}>

                    <View style={{ backgroundColor: '#00d664', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Fe(NO&#8323;)&#8322; tồn tại ở dạng tinh thể hình thoi màu xanh lục nhạt.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Tan trong nước .</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 60,5°C (khan) </Text>

                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/feno32_tcvl.png')} />
                        </View>

                    </View>





                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#00d664', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>

                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Có tính khử và tính oxi hóa: </Text>

                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tính khử:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe&sup2;&#8314; &rarr; Fe&sup3;&#8314; + 1e</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tính oxi hóa:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe&sup2;&#8314; + 2e &rarr; Fe</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với dung dịch kiềm:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe(NO&#8323;)&#8322; + Ba(OH)&#8322; &rarr; Ba(NO&#8323;)&#8322; + Fe(OH)&#8322;</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tính khử:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe(NO&#8323;)&#8322; + 2HNO&#8323; &rarr; Fe(NO&#8323;)&#8323; + NO&#8322; + H&#8322;O</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe(NO&#8323;)&#8322; + AgNO&#8323; &rarr; Fe(NO&#8323;)&#8323; + Ag</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3Fe(NO&#8323;)&#8322; + 4HNO&#8323; &rarr; Fe(NO&#8323;)&#8323; + NO + 2H&#8322;O</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tính oxi hóa:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeCl&#8322; + Mg &rarr; MgCl&#8322; + Fe</Text>
                    </View>




                </View>
                <View style={{ display: slide[2] }}>

                    <View style={{ backgroundColor: '#00d664', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>

                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Cho kim loại Fe dư tác dụng với axit HNO&#8323;:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3Fe + 8HNO&#8323; &rarr; 3Fe(NO&#8323;)&#8322; + 2NO + 4H&#8322;O</Text>

                    </View>
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