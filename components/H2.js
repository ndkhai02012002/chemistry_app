import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Hidro() {
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
            <Text style={style.atomName}>Hidro</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Hidro (Hydrogen)</Text>
                        <Text style={style.ctntText}>p = e = Z = 1</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 1</Text>
                        <Text style={style.ctntText}>Hóa trị: I</Text>
                        <Text style={style.ctntText}>Số lớp electron: 1</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 1</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/h2.png')} />
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

                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, marginTop: 20, borderRadius: 15 }}>
                            - Hiđrô là nguyên tố phổ biến nhất trong vũ trụ. Nguồn
                            chủ yếu của nó là nước, bao gồm hai phần hiđrô và một
                            phần oxy (H&#8322;O).
                        </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>

                            <Image style={style.tttnImg} source={require('../assets/hidro.png')} />


                        </View>
                        <View style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 20, borderRadius: 15 }}>
                            <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingBottom: 5, marginTop: 10, borderRadius: 15 }}>
                                - Các nguồn khác bao gồm phần lớn các chất hữu cơ
                                (hiện tại là mọi dạng của cơ thể sống), than, nhiên liệu
                                hóa thạch và khí tự nhiên.
                            </Text>
                            <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, marginTop: 10, borderRadius: 15 }}>
                                - Metan (CH&#8324;) là một nguồn quan trọng của hiđrô.
                            </Text>
                        </View>

                    </View>
                </View>

                <View style={{ display: slide[1] }}>

                    <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 20 }} source={require('../assets/h2_tcvl.png')} />


                    <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 20, borderRadius: 15 }}>
                        - Ở nhiệt độ và áp suất tiêu chuẩn hydro là một khí
                        lưỡng nguyên tử có công thức phân tử H&#8322; , không màu,
                        không mùi, khó hóa lỏng, dễ bắt cháy, có nhiệt độ sôi
                        20.27 K ( -252.87 °C ) và nhiệt độ nóng chảy 14.02 K
                        ( -259.14 °C ). Tan rất ít trong nước, tan nhiều trong
                        dung môi hữu cơ.

                    </Text>


                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxi tạo thành nước:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2H&#8322; + O&#8322; (t&deg;)&rarr; 2H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxit tạo thành kim loại:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnO + H&#8322; (t&deg;)&rarr; Zn + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với Phi kim tạo thành hợp chất khí:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>H&#8322; + S (t&deg;)&rarr; H&#8322;S</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>
                <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 20, backgroundColor: '#f0da9c',borderRadius: 10}}>
                    <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 5, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                        - Ứng dụng của hiđro trong giao thông vận tải:
                        được sử dụng làm nhiên liệu động cơ, dùng cho
                        động cơ tên lửa, sử dụng bơm cho khinh khí cầu.

                    </Text>
                    <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 5, marginTop: 5, borderRadius: 10 }}>
                        - Trong hóa chất: hiđrô là nguyên liệu để sản
                        xuất axit clohidric HCl, amoniac NH3 cùng
                        nhiều hợp chất hữu cơ khác.

                    </Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 20, marginBottom: 20 }} source={require('../assets/h2_ud.png')} />
                    </View>
                    <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 5, marginBottom: 5, borderRadius: 10 }}>
                        - Trong luyện kim: ứng dụng của khí hiđro là chất
                        khử dùng để điều chế kim loại từ oxit của chúng,
                        cắt và hàn kim loại với đèn xì oxi hidro.

                    </Text>


                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 10, marginTop: 5, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Trong phòng thí nghiệm, hiđrô được điều chế bằng phản ứng của axít với kim loại. Ví dụ:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        Zn + 2HCl &rarr; ZnCl&#8322; + H&#8322;
                    </Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 150, marginTop: 20, marginBottom: 20 }} source={require('../assets/h2_dc1.png')} />
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Hiđrô có thể điều chế theo nhiều cách khác nhau: hơi nước qua than (cacbon) nóng đỏ, phân hủy hiđrôcacbon bằng nhiệt, phản ứng của các bazơ mạnh (kiềm) trong dung dịch với nhôm, điện phân nước hay khử từ axít loãng với một kim loại (có khả năng đẩy hiđrô từ axít) nào đó:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Việc sản xuất thương mại của hiđrô thông thường là từ khí tự nhiên được xử lý bằng hơi nước nóng. Ở nhiệt độ cao (700-1.100 °C), hơi nước tác dụng với mêtan để sinh ra mônôxít cacbon và hiđrô:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        CH&#8324; + H&#8322;O &rarr; CO + 3H&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Điện phân dung dịch có màng ngăn:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2NaCl + 2H&#8322;O &rarr; 2NaOH + H&#8322; + Cl&#8322;
                    </Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 150, marginTop: 20, marginBottom: 20 }} source={require('../assets/h2_dc2.png')} />
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Điện phân nước:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2H&#8322;O &rarr; 2H&#8322; + O&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Lượng hiđrô bổ sung có thể thu được từ mônôxít cacbon thông qua phản ứng nước-khí sau:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        CO + H&#8322;O &rarr; CO&#8322; + H&#8322;
                    </Text>
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
        resizeMode: 'cover',
        height: 150,
        borderRadius: 100
    }
})