import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function NH3() {
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
            <Text style={style.atomName}>Amoniac</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Amoniac</Text>
                        <Text style={style.ctntText}>Danh pháp: Ammonia</Text>
                        <Text style={style.ctntText}>Công thức hóa học: NH&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 17</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/nh3.png')} />
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
                    <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Amoniac thường tồn tại ở dạng khí, không màu, có mùi hôi khó chịu. Nồng độ Amoniac lớn có thể gây chết người</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- NH&#8323; là chất dễ hoá lỏng.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Dung dịch Amoniac là dung môi hoà tan tốt: NH&#8323; hoà tan các dung môi hữu cơ dễ hơn nước do có hằng số điện môi nhỏ hơn nước. Kim loại kiềm và các kim loại Ca, Sr, Ba có thể hòa tan trong NH&#8323; lỏng tạo dung dịch xanh thẫm.</Text>
    
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac có tính khử</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac kém bền bởi nhiệt, nó có thể bị phân hủy ở nhiệt độ cao theo phản ứng hóa học:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NH&#8323; &rarr; N&#8322; + 3H&#8322;</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac tác dụng với ion kim loại chuyển tiếp tạp ion phức:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NH&#8323; + Ag&#8314; &rarr; [Ag(NH&#8323;)&#8322;]&#8314;</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac Nguyên tử hidro trong amoniac có thể bị thế bởi nguyên tử kim loại kiềm hoặc nhôm:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NH&#8323; + 2Na &rarr; 2NaNH&#8322; + H&#8322; (350&deg;C)</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NH&#8323; + 2Al &rarr; 2AlN + 3H&#8322; (800-900&deg;C)</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac tác dụng với dung dịch muối: Dung dịch amoniac có khả năng tạo kết tủa nhiều hidroxit kim loại khí tác dụng.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac do tính bazơ nên dung dịch amoniac làm cho quỳ tím hóa xanh còn dung dịch phenolphlatein từ màu chuyển thành hồng. Do đó để phát hiện amoniac, người ta dùng quỳ tím ẩm để nhận biết.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac tan trong nước</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>– Amoniac tác dụng với axit tạo thành muối amoni.</Text>
                    </View>




                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Amoniac rất nhiều ứng dụng như: Phân bón, dùng làm thuốc tẩy, xử lý môi trường khí thải, là chất chống khuẩn trong thực phẩm.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                                <Image style={style.tttnImg} source={require('../assets/nh3_ud.png')} />
                            </View><Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Và được sử dụng trong nhiều ngành công nghiệp: Trong ngành dệt may, trong công nghiệp chế biến gỗ, sử dụng trong ngành công nghiệp dầu khí.</Text>
                      

                            
                        </View>




                    </View>
                    <View style={{ display: slide[2] }}>
                        <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>NH&#8323; được điều chế theo 2 cách đó là:</Text>

                            <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Trong phòng thí nghiệm: </Text>

                            <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NH&#8324;Cl + Ca(OH)&#8322; &rarr; NH&#8323; + CaCl&#8322; + H&#8322;</Text>

                            <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Trong công nghiệp:</Text>

                            <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>CH&#8324;+ H&#8322;O &#8652; CO + 3H&#8322; (xúc tác Ni, t&d3g; cao)</Text>
                            <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>N&#8322; + 3H&#8322; &#8652; 2NH&#8323; (ΔH = –92 kJ/mol)</Text>
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