import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function FeO() {
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
            <Text style={style.atomName}>Sắt(II) Oxide</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Sắt(II) Oxide</Text>
                        <Text style={style.ctntText}>Danh pháp: Iron(II) Oxide</Text>
                        <Text style={style.ctntText}>Công thức hóa học: FeO</Text>
                        <Text style={style.ctntText}>Phân tử khối: 72</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/feo.png')} />
                    </View>

                </View>

            </View>
            <View style={style.part}>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.navSlide}>
                        <Button disabled={disable[0]} title='Tính Chất' onPress={() => changeSlide(0)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[1]} title='Ứng Dụng' onPress={() => changeSlide(1)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[2]} title='Điều Chế' onPress={() => changeSlide(2)} />
                    </View>



                </View>
                <View style={{ display: slide[0] }}>
                    <Text style={style.categories}>Tính chất vật lý</Text>
                    <View style={{ backgroundColor: '#171a20', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 10, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- FeO là chất rắn màu đen</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không tan trong nước</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/feo_tcvl.png')} />
                        </View><Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 1377 ℃</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: 3414 °C</Text>
                        
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#171a20', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>

                        <Text style={{color:'white', fontSize: 16, paddingTop: 10, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tác dụng với dung dịch axit:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + 2HCl &rarr; FeCl&#8322; + H&#8322;O</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + H&#8322;SO&#8324;(loãng) &rarr; FeSO&#8324; + H&#8322;O</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tác dụng với chất khử:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + H&#8322; (t&deg;)&rarr; Fe + H&#8322;O</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + 3CO (t&deg;)&rarr; Fe + CO&#8322;</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tác dụng với các chất có tính oxi hóa mạnh:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3FeO + 10HNO&#8323;(loãng) &rarr; 3Fe(NO&#8323;)&#8323; + NO + 5H&#8322;O</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2FeO + H&#8322;SO&#8324;(đặc) &rarr; Fe&#8322;(SO&#8324;)&#8323; + SO&#8322; + 4H&#8322;O</Text>
                        
                    </View>

                   


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#171a20', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- FeO được xúc tác với Fe&#8322;O&#8323; tạo ra Fe&#8323;O&#8324;:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + Fe&#8322;O&#8323; (t&deg;)&rarr; Fe&#8323;O&#8324;</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trong công nghiệp, FeO là hợp chất quan trọng để tác dụng với chất khử mạnh sản xuất ra sắt:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + H&#8322; (t&deg;)&rarr; Fe + H&#8322;O</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + 3CO (t&deg;)&rarr; Fe + CO&#8322;</Text>
                        
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Al + 2FeO (t&deg;)&rarr; Al&#8322;O&#8323; + Fe</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/feo_ud.png')} />
                        </View><Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- FeO trong vật liệu gốm có thể được hình thành bởi phản ứng khử sắt(III) oxit trong lò nung. Khi sắt ba đã bị khử thành sắt hai trong men thì rất khó oxy hoá trở lại. Hầu hết các loại men sẽ có độ hoà tan sắt hai khi nung chảy cao hơn khi ở trạng thái rắn do đó sẽ có sắt oxit kết tinh trong men khi làm nguội, môi trường oxy hoá hay khử.</Text>
                        
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#171a20', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        
                       
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Trong phòng thí nghiệm (nung trong điều kiện không có không khí): </Text>
                        
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeCO&#8323; &rarr; FeO + CO&#8322;</Text>
                       
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Trong công nghiệp (nung trong điều kiện không có không khí):</Text>
                        
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe(OH)&#8322; &rarr; FeO + H&#8322;O</Text>
                       
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
        backgroundColor: '#cccccc',
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
        height: 180
    }
})