import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function NO2() {
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
            <Text style={style.atomName}>Nitơ dioxit</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Nitơ dioxit</Text>
                        <Text style={style.ctntText}>Danh pháp: Nitric dioxide</Text>
                        <Text style={style.ctntText}>Công thức hóa học: NO&#8322;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 46</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/no2.png')} />
                    </View>

                </View>

            </View>
            <View style={style.part}>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.navSlide}>
                        <Button disabled={disable[0]} title='Tính Chất' onPress={() => changeSlide(0)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[1]} title='Tác Hại' onPress={() => changeSlide(1)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[2]} title='Ứng Dụng' onPress={() => changeSlide(2)} />
                    </View>



                </View>
                <View style={{ display: slide[0] }}>
                    <Text style={style.categories}>Tính chất vật lý</Text>
                    <View style={{ backgroundColor: '#9c371a', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khí NO&#8322; có màu nâu đỏ, mùi gắt rất đặc trưng.</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: −11,2°C (261,9 K; 11,8°F)</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>-Điểm sôi: 21,2°C (294,3 K; 70,2°F)</Text>

                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#9c371a', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>

                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tác dụng với nước tạo thành axit HNO&#8323;:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4NO&#8322; + O&#8322; + 2H&#8322;O &rarr; 4HNO&#8323;</Text>

                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tham gia vào phản ứng oxy hóa khử:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3NO&#8322; + H&#8322;O &rarr; 2HNO&#8323; + NO</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>(Trong phản ứng trên, NO&#8322; vừa đóng vai trò là chất oxy hóa vừa là chất khử) Tham gia phản ứng quang hóa trong điều chế NO</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>NO&#8322; + hv (λ &lt; 430 nm) &rarr; NO + O</Text>


                    </View>




                </View>

                <View style={{ display: slide[1] }}>
                    <View style={{ backgroundColor: '#9c371a', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khí NO&#8322; gây ô nhiễm môi trường.</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Gây ra các cơn mưa axit phá hủy các công trình và sinh vật.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/no2_ud1.png')} />
                        </View>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khí NO&#8322; gây độc cho con người, nhiễm độc khí NO&#8322;: Trường hợp ngộ độc khí Nitơ dioxit nặng nếu cứu vãn không kịp thời có thể tử vong. NO2 còn được khuyến cáo là có khả năng gây ra bệnh ung thư ở người.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/no2_ud2.png')} />
                        </View><Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Đối với sinh vật, đặc biệt là tôm trong ao nuôi khí NO&#8322; gây ảnh hưởng nghiêm trọng.</Text>
                        
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#9c371a', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ứng dụng khí NO&#8322; chủ yếu trong ngành thực phẩm</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trong sản xuất thịt chế biến sẵn người ta sử dụng khí NO&#8322; để ức chế sự phát triển của các vi khuẩn trong thịt. Tác dụng là giúp thịt lâu hư, giữ cho thịt có màu đỏ tươi đẹp bắt mắt, mùi thịt đặc trưng. Tránh tối đa các trường hợp ngộ độc thực phẩm do bị ôi thiu hay hư hỏng.</Text>


                    






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
        backgroundColor: '#01ffff',
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