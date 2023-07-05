
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function BaCO3() {
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
            <Text style={style.atomName}>Bari Cacbonat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên: Bari Cacbonat</Text>
                        <Text style={style.ctntText}>Danh pháp: Barium Carbonate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: BaCO&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 197</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/baco3.png')} />
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
                    <View style={{ backgroundColor: '#8eafc0', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- BaCO&#8323; là chất rắn màu trắng, không mùi.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Tan trong nước, axit.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/baco3_tcvl.png')} />
                        </View>
            
                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: 811°C </Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 1450°C</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khối lượng riêng: 4,286 g/cm³</Text>
                    </View>
                    
                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#8eafc0', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Mang tính chất hóa học của muối:</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit mạnh:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaCO&#8323; + 2HCl &rarr; BaCl&#8322; + CO&#8322; + H&#8322;O</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Kém bền với nhiệt:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaCO&#8323; (t&deg;)&rarr; BaO + CO&#8322;</Text>
                    </View>
                    

                </View>

                <View style={{ display: slide[1] }}>
                    
                    <View style={{ backgroundColor: '#8eafc0', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, backgroundColor: '#8eafc0', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Bari cacbonat được sử dụng rộng rãi trong ngành công nghiệp gốm sứ như một thành phần trong men sứ. Nó hoạt động như một chất trợ chảy, một chất làm kết dính và kết tinh và kết hợp với các oxit màu nhất định để  tạo ra màu sắc độc đáo không dễ dàng có thể đạt được bằng các phương tiện khác.</Text>
                        <Image style={style.tttnImg} source={require('../assets/baco3_ud.png')} /><Text style={{ color: 'white', fontSize: 16, backgroundColor: '#8eafc0', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong công nghiệp gạch, ngói, đất nung và gốm, bari cacbonat được thêm vào đất sét để kết tủa các muối hòa tan (canxi sunfat và magie sunfat) là những chất tạo ra hiện tượng nở hoa.</Text>
                        
                    </View>
                        
             
                        
             
                </View>
                <View style={{ display: slide[2] }}>

                    <View style={{ backgroundColor: '#8eafc0', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Bari cacbonat được sản xuất thương mại từ bari sunfua bằng cách cho tác dụng với natri cacbonat ở nhiệt độ 60 đến 70&deg;C (phương pháp tro soda) hoặc cho đi qua cacbon dioxit ở nhiệt độ 40 đến 90&deg;C.</Text>

                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Tuy nhiên, phản ứng với axit sunfuric rất kém, bởi vì bari sunfat hầu như không tan trong nước.</Text>
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