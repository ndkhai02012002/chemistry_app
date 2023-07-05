import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function ZnCl2() {
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
            <Text style={style.atomName}>Kẽm Clorua </Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kẽm Clorua </Text>
                        <Text style={style.ctntText}>Danh pháp: Zinc chloride </Text>
                        <Text style={style.ctntText}>Công thức hóa học: ZnCl&#8322;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 136</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/zncl2.png')} />
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
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- ZnCl&#8322; là chất rắn, có màu trắng.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Tan trong nước</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zncl2_tcvl.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi:  732°C</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 290 °C : </Text>
                    </View>
                    
                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Không làm quỳ tím chuyển màu. </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với bazo: </Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnCl&#8322; + 2NaOH &rarr; Zn(OH)&#8322; + 2NaCl</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zncl2_tchh.png')} />
                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với muối :</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnCl&#8322; + 2AgNO&#8323; &rarr; 2AgCl&darr; + Zn(NO&#8323;)&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với kim loại mạnh hơn kim loại trong muối :</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnCl&#8322; + Mg &rarr; MgCl&#8322;+ Zn</Text>
                        
                    
                    </View>
                    

                </View>

                <View style={{ display: slide[1] }}>
                    
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Kẽm clorua được dùng làm thuốc khử trong phòng thí nghiệm và dùng làm chất xúc tác.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Nó còn được dùng làm thuốc sát trùng và dùng trong tổng hợp hữu cơ</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zncl2_ud.png')} />
                        </View><Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Kẽm clorua được ứng dụng rất rộng rãi trong nhiều ngành công nghiệp khác nhau như dệt may, chế biến, chất trợ dung trong luyện kim và ngành hóa chất tổng hợp.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Nó được sử dụng trong ngành công nghiệp giấy và trong bảo quản gỗ.</Text>

                        
                        
                    </View>
                        
             
                        
             
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- ZnCl&#8322; khan có thể được điều chế từ kẽm và hiđro clorua:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Zn + 2HCl &rarr; ZnCl&#8322; + H&#8322;</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zncl2_dc.png')} />
                        </View>
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