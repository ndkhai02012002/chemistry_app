import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function K2CO3() {
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
            <Text style={style.atomName}>Kali Cacbonat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kali Cacbonat</Text>
                        <Text style={style.ctntText}>Danh pháp: Potassium Carbonate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: K&#8322;CO&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 138</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/k2co3.png')} />
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
                    <Text style={style.categories}>Tính chất vật lí</Text>
                    <View style={{ backgroundColor: '#cccccc', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- K&#8322;CO&#8323; là chất rắn màu trắng.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Tan trong nước</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/k2co3_tcvl.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 891&deg;C</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khối lượng riêng: 2.43 g/cm³</Text>
                    </View>
                    
                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#cccccc', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit mạnh hơn để tạo thành muối mới như axit axetic, axit sunfuric, axit nitric, axit selenic:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;CO&#8323; + 2CH&#8323;COOH &rarr; 2CH&#8323;COOK + CO&#8322;&uarr; + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;CO&#8323; + H&#8322;SO&#8324; &rarr; K&#8322;SO&#8324; + CO&#8322;&uarr; + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- K&#8322;CO&#8323; phản ứng với dung dịch kiềm để tạo muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;CO&#8323; + NaOH &rarr; Na&#8322;CO&#8323; + KOH</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/k2co3_tchh.png')} />
                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>– K&#8322;CO&#8323; tác dụng với dung dịch muối để tạo muối mới bền vững hơn:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;CO&#8323; + NaCl &rarr; KCl + Na&#8322;CO&#8323;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>– Do là một muối axit yếu nên K&#8322;CO&#8323; dễ bị phân hủy ở nhiệt độ cao để giải phóng ra khí cacbonic:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;CO&#8323; &rarr; K&#8322;O + CO&#8322;</Text>
                        
                    
                    </View>
                    

                </View>

                <View style={{ display: slide[1] }}>
                    
                    <View style={{ backgroundColor: '#cccccc', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
        
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong công nghiệp:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Sản xuất kính: dùng trong sản xuất một số loại kính đặc biệt như ống kính quang học, màn hình tivi. </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Kali cacbonat được ứng dụng trong ngành sản xuất gốm sứ thủy tinh, chất nổ, phân bón và trong ngành công nghiệp sản xuất xà phòng, muối vô cơ, nhuộm len…</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ K&#8322;CO&#8323; còn có tác dụng làm mềm nước cứng.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Được sử dụng trong ngành sản xuất xà phòng và kính.</Text>
                        <Image style={style.tttnImg} source={require('../assets/k2co3_ud1.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong phòng thí nghiệm:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Kali Cacbonat được sử dụng như chất xúc tác để duy trì điều kiện khan trong các phản ứng hóa học mà không gây ra phản ứng với các chất chính tham gia quá trình phản ứng và sản phẩm được hình thành.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ K&#8322;CO&#8323; có thể được sử dụng để làm khô một số chất alcohol, xeton, và các chất amin khác trước khi đem đi chưng cất.</Text>
                        <Image style={style.tttnImg} source={require('../assets/k2co3_ud2.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong thực phẩm:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ K&#8322;CO&#8323; được sử dụng như một thành phần trong sản xuất thạch cỏ , một loại thực phẩm tiêu thụ trong các món ăn Trung Quốc và Đông Nam Á.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Nó được sử dụng để tenderize lòng bò. Đức gingerbread công thức nấu ăn thường sử dụng kali cacbonat như một tác nhân nướng.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Đôi khi Kali Cacbonat được sử dụng như một chất đệm trong sản xuất mật ong hoặc rượu.</Text>
                        <Image style={style.tttnImg} source={require('../assets/k2co3_ud3.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong nguyên liệu phân bón:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Nguồn cung cấp Kali và có tác dụng làm cho đất thêm CO&#8322;, lợi cho quang hợp làm tăng hàm lượng tinh bột trong cây lấy củ. Thích hợp cho cây trồng ở đất chua và không ưa clo.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Kali cacbonat được sử dụng như là một phân bón có hiệu quả để ổn định độ pH của đất và làm giảm độ chua của đất </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Trong ngành công nghiệp sản xuất phân bón Dung dịch Kali Cacbonat được dùng để triệt tiêu CO&#8322; từ amoniac đến từ các nhà xử lý khí thải.</Text>
                        <Image style={style.tttnImg} source={require('../assets/k2co3_ud4.png')} />
                    </View>
                        
             
                        
             
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#cccccc', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Người ta có thể thu được K&#8322;CO&#8323; bằng nhiều cách khác nhau, tuy nhiên K&#8322;CO&#8323; thường được điều chế bằng những phương pháp sau đây:</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>– K&#8322;CO&#8323; có thể được điều chế khi cho Kali hydroxit phản ứng với khí cacbon dioxít:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2KOH + CO&#8322; &rarr; K&#8322;CO&#8323; + H&#8322;O </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>– K&#8322;CO&#8323; cũng có thể thu được từ việc nhiệt phân KHCO&#8323;:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2KHCO&#8323; &rarr; K&#8322;CO&#8323; + H&#8322;O + CO&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Cũng có thể điều chế K&#8322;CO&#8323; bằng cách cho Kali Hidroxit đậm đặc phản ứng với Kali hiro cacbonat:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>KOH + KHCO&#8323; &rarr; K&#8322;CO&#8323; + H&#8322;O</Text>
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
        backgroundColor: '#acd398',
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