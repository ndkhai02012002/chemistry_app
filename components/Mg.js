import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Magie() {
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
            <Text style={style.atomName}>Magie</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Magie (Magnesium)</Text>
                        <Text style={style.ctntText}>p = e = Z = 12</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 24</Text>
                        <Text style={style.ctntText}>Hóa trị: II</Text>
                        <Text style={style.ctntText}>Số lớp electron: 3</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 2</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/mg.png')} />
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.navSlide}>
                        <Button disabled={disable[0]} title='TT Tự Nhiên' onPress={() => changeSlide(0)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[1]} title='TC Vật Lý' onPress={() => changeSlide(1)} />
                    </View>
                    <View style={style.navSlide}>
                        <Button disabled={disable[2]} title='TC Hóa Học' onPress={() => changeSlide(2)} />
                    </View>



                </View>
                <View style={{ display: slide[0] }}>


                    <Image style={style.tttnImg} source={require('../assets/magie.png')} />

                    <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 15, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Magnesium là nguyên tố phổ biến thứ 8 trong lớp vỏ của Trái Đất. Đây là một kim loại kiềm thổ, vì thế không tồn tại trong tự nhiên ở dạng đơn chất. Magnesium được tìm thấy trong hơn 60 khoáng chất
                    </Text>
                </View>

                <View style={{ display: slide[1] }}>
                    <View style={{backgroundColor: '#cccccc', borderRadius: 15, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Magie là kim loại tương đối cứng, có màu trắng bạc, chất này rất nhẹ chỉ nặng khoảng 2/3 nhôm nếu cùng thể tích.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Magnesium bị bao phủ lớp màng oxit khi để ngoài không khí. Mg có khối lượng riêng là 1.737 g/cm&sup3; có nhiệt độ nóng chảy là 648&deg;C và sôi ở  1095&deg;C. </Text>
                        <View>
                        <Image style={style.tttnImg} source={require('../assets/magnesium.png')} />

                    </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Khi ở dạng bột, kim loại magnesium bị đốt nóng bởi nhiệt độ và bắt lửa khi để vào vùng không khí  ẩm và cháy tạo ra ngọn lửa màu trắng. Khi ở dạng dày, Mg thường khó bắt lửa, nhưng khi ở dạng lá mỏng thì nó bắt lửa rất nhanh và rất khó dập.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', paddingTop: 5, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Mg không tan trong nước nhưng nước đun sôi thì có thể hòa tan Mg. </Text>
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#cccccc', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Mg + O&#8322; (t&deg;)&rarr; 2MgO</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Mg + Cl&#8322; (t&deg;)&rarr; MgCl&#8322; </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Mg + 2HCl &rarr; MgCl&#8322; + H&#8322; </Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Mg + CuCl&#8322; &rarr; MgCl&#8322; + Cu</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>

                <Text style={{ fontSize: 16, backgroundColor: '#cccccc', padding: 10, marginTop: 15, borderRadius: 10 }}>
                    - Magnesium được sử dụng để làm cho hợp kim bền nhẹ, đặc biệt là cho ngành công nghiệp hàng không vũ trụ, cũng như sử dụng trong pháo hoa bởi vì nó đốt cháy với một ngọn lửa trắng rực rỡ.
                </Text>
                <Text style={{ fontSize: 16, backgroundColor: '#cccccc', padding: 10, marginTop: 15, borderRadius: 10 }}>
                    - Các hợp chất của magnesium được sử dụng như là vật liệu chịu lửa trong các lò sản xuất sắt và thép, kim loại màu, thủy tinh và xi măng.
                </Text>
                <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 20 }} source={require('../assets/mg_ud.png')} />
                <Text style={{ fontSize: 16, backgroundColor: '#cccccc', padding: 10, marginTop: 15, borderRadius: 10 }}>
                    - Trong công nghệ dược phẩm, magnesium được sử dụng trong sản xuất các viên thuốc nén, để ngăn cho các viên nén không bị dính vào các thiết bị trong quá trình nén thuốc...
                </Text>

            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={{ flex: 1, flexGrow: 4, justifyContent: 'center', alignItems:'center'}}>
                        <Image style={{ width: '100%', resizeMode: 'contain',marginTop: 10, marginLeft: 10,height: 120 }} source={require('../assets/mg_dc.png')} />
                    </View>
                    <View style={{ flex: 2, flexGrow: 7, paddingLeft: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#cccccc', padding: 10, borderRadius: 10, textAlign:'center' }}>
                            Kim loại này được sản xuất thông qua điện phân clorua magiê nóng chảy, thu được từ các nguồn nước mặn, nước suối khoáng hay nước biển
                        </Text>

                    </View>

                </View>
                <Text style={{ fontSize: 16, backgroundColor: '#cccccc', padding: 10, marginTop: 10, marginBottom: 20, textAlign: 'center', borderRadius: 10 }}>
                    MgCl&#8322; (đpnc)&rarr; Mg + Cl&#8322;
                </Text>
            </View>

        </ScrollView >
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
        backgroundColor: '#8eafc0',
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
        height: 100
    }
})