import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function BaSO4() {
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
            <Text style={style.atomName}>Bari Sunfat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Bari Sunfat</Text>
                        <Text style={style.ctntText}>Danh pháp: Barium Sulfate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: BaSO&#8324;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 233</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/baso4.png')} />
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
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trạng thái: Rắn (tinh thể)</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Màu sắc: Màu trắng</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Mùi: Không mùi</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không tan trong nước</Text>
                         <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/baso4_tcvl.png')} />
                        </View><Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 1580°C</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: 1600°C</Text>

                       
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với H&#8322;SO&#8324; đậm đặc:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>H&#8322;SO&#8324;(đ) + BaSO&#8324; &rarr; Ba(HSO&#8324;)&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Bị khử một phần bởi Cacbon khi nung nóng: </Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaSO&#8324; + 2C &rarr; BaS + 2CO&#8322;&uarr;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Có thể bị nhiệt phân:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2BaSO&#8324; &rarr; 2BaO&darr; + O&#8322;&uarr; + 2SO&#8322;&uarr;</Text>



                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Sử dụng vào việc khai thác những khoáng sản, khoáng vật tinh khiết và khai thác dầu mỏ.</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Được tiêu dùng như một chất độn trong công nghiệp sơn, ngành nhựa hoặc trong đúc kim loại. </Text>
<View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/baso4_ud.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Sản xuất những loại giấy trắng chất lượng cao</Text>

                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Dùng làm thuốc, làm chất thử nghiệm đất.</Text>
                        
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Điều chế trong công nghiệp: BaSO&#8324; thu được từ quặng barit, sau khi khai thác và chế biến: </Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaSO&#8324; + 4C &rarr; 2HCl + BaS + 4CO</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaS + H&#8322;SO&#8324; &rarr; BaSO&#8324; + H&#8322;S</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/baso4_dc.png')} />

                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Trong phòng thí nghiệm: cho BaCO&#8323; hoặc BaCl&#8322; phản ứng với H&#8322;SO&#8324; để điều chế BaSO&#8324;:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaCO&#8323; + H&#8322;SO&#8324; &rarr; BaSO&#8324; + H&#8322;O + CO&#8322;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>BaCl&#8322; + H&#8322;SO&#8324; &rarr; BaSO&#8324; + 2HCl</Text>
                        
                       
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
        backgroundColor: '#5bc5a2',
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