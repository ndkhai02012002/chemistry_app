import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function HNO3() {
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
            <Text style={style.atomName}>Axit nitric</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Axit nitric</Text>
                        <Text style={style.ctntText}>Danh pháp: Acid nitric</Text>
                        <Text style={style.ctntText}>Công thức hóa học: HNO&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 63</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/hno3.png')} />
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
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Axit nitric là một chất lỏng không màu, dễ tan trong nước (C&lt;65%). Nó cũng có thể tồn tại được ở dạng khí, không màu. Trong môi trường tự nhiên, axit nitric  có màu vàng nhạt do sự tích tụ của oxit nitơ.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Axit nitric tinh khiết có tỷ trọng khoảng từ 1522 kg/m&sup3;, khi để bên ngoài không khí. Nhiệt độ đông đặc là -42°C và nhiệt độ sôi là 83°C.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/hno3_tcvl.png')} />
                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Dưới tác dụng của ánh sáng mặt trời , axit nitric sẽ bị phân hủy. Do đó ta cần nên bảo quản axit nitric trong các chai, lọ tối màu, tránh ánh sáng và nơi cất giữ phải đảm bảo nhiệt độ thấp hơn 0°C.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Ở nhiệt độ cao, nitơ dioxit sẽ bị hòa tan bởi axit nitric thành dung dịch có màu vàng hoặc đỏ. </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Axit nitric là một loại axit có tính ăn mòn rất cao, cực độc, dễ dàng bắt lửa.</Text>

                        
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Axit nitric có tính chất của một axit bình thường nên nó làm quỳ tím chuyển sang màu đỏ.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với bazo, oxit bazo, muối cacbonat tạo thành các muối nitrat:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2HNO&#8323; + CuO &rarr; Cu(NO&#8323;)&#8322; + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2HNO&#8323; + Mg(OH)&#8322; &rarr; Mg(NO&#8323;)&#8322; + 2H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2HNO&#8323; + CaCO&#8323; &rarr; Ca(NO&#8323;)&#8322; + CO&#8322; + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Axit nitric tác dụng với kim loại: Tác dụng với hầu hết các kim loại trừ Au và Pt tạo thành muối nitrat và nước:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Kim loại + HNO&#8323;(đặc) (t&deg;)&rarr; Muối Nitrat + NO + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Kim loại + HNO&#8323;(loãng) &rarr; Muối Nitrat + NO + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Kim loại + HNO&#8323;(loãng lạnh) &rarr; Muối Nitrat + H&#8322;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Mg(rắn) + 2HNO&#8323;(loãng lạnh) &rarr; Mg(NO&#8323;)&#8322; + H&#8322;(khí)</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Nhôm, sắt, crom thụ động với axit nitric đặc nguội do lớp oxit kim loại được tạo ra bảo vệ chúng không bị oxy hóa tiếp.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với phi kim (các nguyên tố á kim, ngoại trừ silic và halogen) tạo thành nito dioxit nếu là axit nitric đặc và oxit nito với axit loãng và nước, oxit của phi kim:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>C + 4HNO&#8323;(đặc) &rarr; 4NO&#8322; + 2H&#8322;O + CO&#8322;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>P + 5HNO&#8323;(đặc) &rarr; 5NO&#8322; + H&#8322;O + H&#8323;PO&#8324;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3C + 4HNO&#8323;(loãng) &rarr; 3CO&#8322; + 4NO + 2H&#8322;O</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/hno3_tchh.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxit bazo, bazo, muối mà kim loại trong hợp chất này chưa lên hóa trị cao nhất:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeO + 4HNO&#8323; &rarr; Fe(NO&#8323;)&#8323; + NO&#8322; + 2H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>FeCO&#8323; + 4HNO&#8323; &rarr; Fe(NO&#8323;)&#8323; + NO&#8322; + 2H&#8322;O + CO&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>-Tác dụng với hợp chất:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3H&#8322;S + 2HNO&#8323;(&gt;5%) &rarr; 3S&darr; + 2NO&#8322; + 4H&#8322;O</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>PbS + 8HNO&#8323;(đặc) &rarr; PbSO&#8324;&darr; + 8NO&#8322; + 4H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Ag&#8323;PO&#8324; tan trong HNO&#8323;, HgS không tác dụng với HNO&#8323;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>-Tác dụng với nhiều hợp chất hữu cơ: Axit nitric có khả năng phá hủy nhiều hợp chất hữu cơ, nên sẽ rất nguy hiểm nếu để axit này tiếp xúc với cơ thể người.</Text>
                    
                    
                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Trong phòng thí nghiệm:</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Axit nitric được sử dụng làm thuốc thử liên quan tới clorit. Cho axit nitric tác dụng với mẫu thử, sau đó cho dung dịch bạc nitrat vào để tìm kết tủa trắng của bạc clorua. Ngoài ra, nó cũng dùng để điều chế muối nitrat.</Text>

                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Trong công nghiệp:</Text>
                        
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Axit nitric 68% được sử dụng để chế tạo thuốc nổ , các loại phân bón chứa nito như phân đạm </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/hno3_ud1.png')} />

                        </View>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/hno3_ud2.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Axit nitric có nồng độ 0,5-2% được sử dụng làm hợp chất nền nhằm xác định trong dung dịch có tồn tại kim loại không. </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Do axit nitric phản ứng với hầu hết các kim loại trong các hợp chất hữu cơ nên  nó được dụng trong ngành luyện kim, xi mạ và tinh lọc.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/hno3_ud3.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Sử dụng axit nitric để sản xuất các chất hữu cơ, bột màu, sơn, thuốc nhuộm vải. </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/hno3_ud4.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Dùng làm thuốc tẩy màu- colorometric test, giúp phân biệt heroin và morphine.</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Dùng làm chất tẩy rửa các đường ống, bề mặt kim loại trong các nhà máy sữa. </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Axit nitric được dùng để loại bỏ các tạp chất, cân bằng lại độ tiêu chuẩn của nước. Một trong những ứng dụng khác là một chất oxy hóa trong nhiên liệu lỏng tên lửa</Text>
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#c7efda', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong phòng thí nghiệm:</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Người ta cho muối natri nitrat tinh thể tác dụng với axit sunfuric đặc, chưng cất hỗn hợp này tại nhiệt độ sôi của axit nitric là 83 °C cho đến khi còn lại chất kết tinh màu trắng. Tuy nhiên, phương pháp này chỉ tạo ra một lượng nhỏ axit.</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>H&#8322;SO&#8324;(đặc) + NaNO&#8323;(tinh thể) &rarr; HNO&#8323; + NaHSO&#8324;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong công nghiệp:</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Axit nitric loãng có thể cô đặc đến 68% axit với một hỗn hợp azeotropic với 32% nước. Để thu được axit có nồng độ cao hơn, tiến hành chưng cất với axit sunfuric H&#8322;SO&#8324; và nó đóng vai trò là chất khử sẽ hấp thụ lại nước.</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4NH&#8323; + 5O&#8322; &rarr; 4NO + 6H&#8322;O(Pt, 850&deg;C)</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NO + O&#8322; &rarr; NO&#8322;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4NO&#8322; + O&#8322; + 2H&#8322;O &rarr; 4HNO&#8323;</Text>
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