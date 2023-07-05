import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Bari() {
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
            <Text style={style.atomName}>Bari</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Bari (Barium)</Text>
                        <Text style={style.ctntText}>p = e = Z = 56</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 137</Text>
                        <Text style={style.ctntText}>Hóa trị: II</Text>
                        <Text style={style.ctntText}>Số lớp electron: 5</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 2</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/bari.png')} />
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
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <View style={{ flex: 1, flexGrow: 5 }}>
                            <Image style={style.tttnImg} source={require('../assets/ba_tttn1.png')} />
                            <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center' }}>BaCO&#8323;</Text>
                        </View>
                        <View style={{ flex: 2, flexGrow: 5 }}>
                            <Image style={style.tttnImg} source={require('../assets/ba_tttn2.png')} />
                            <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center' }}>BaSO&#8324;</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Các khoáng vật phổ biến nhất của bari trong tự nhiên là barit (bari sulfat, BaSO&#8324;) và witherit (bari carbonat, BaCO&#8323;), cả hai chất này đều không tan trong nước. Bari được xác định là một nguyên tố mới vào năm 1774, nhưng không bị khử thành kim loại cho đến năm 1808 với sự ra đời của điện phân.</Text>
                    </View>
                </View>

                <View style={{ display: slide[1] }}>


                    <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Bari là một kim loại mềm màu trắng bạc, bóng hơi vàng khi ở trạng thái siêu tinh khiết. Màu trắng bạc của kim loại bari biến mất nhanh chóng khi bị oxy hóa trong không khí tạo một lớp oxide màu xám sậm.
                        </Text>
                        <View style={{ justifyContent: 'center' }}>
                            <Image style={{ width: '100%', resizeMode: 'contain', height: 160, borderColor:'#cccccc', borderWidth: 1, marginTop:20 }} source={require('../assets/barium.png')} />
                            <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center' }}>Barium</Text>
                        </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Bari có trọng lượng riêng ở mức trung bình và tính dẫn điện tốt. Bari siêu tinh khiết rất khó tổng hợp nên nhiều tính chất của bari vẫn chưa được xác định một cách chính xác.
                        </Text>
                    </View>


                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>2Ba + O&#8322; &rarr; 2BaO</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Tác dụng với Phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Ba + Cl&#8322; (t&deg;)&rarr; BaCl&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Tác dụng với nước tạo thành Bazo:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Ba + H&#8322;O &rarr; Ba(OH)&#8322; + H&#8322; </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Tác dụng với Axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Ba + 2HCl &rarr; BaCl&#8322; + H&#8322; </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Ba + H&#8322;O &rarr; Ba(OH)&#8322; + H&#8322;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 5, }}>Ba(OH)&#8322;  + CuCl&#8322; &rarr; BaCl&#8322; + Cu(OH)&#8322;</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>
                <Text style={{ fontSize: 14, backgroundColor: '#f0da9c', padding: 10, borderRadius: 10, marginTop: 15 }}>
                    - Bari được sử dụng chủ yếu trong sản xuất buji, ống chân không, pháo hoa và bóng đèn huỳnh quang. Ngoài ra, Ba còn có các ứng dụng khác:

                </Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={{ flex: 1, flexGrow: 3 }}>
                        <Image style={{ width: '100%', resizeMode: 'cover', height: 200, marginLeft: 5 }} source={require('../assets/bari_ud.png')} />
                    </View>
                    <View style={{ flex: 2, flexGrow: 6, paddingLeft: 10, paddingRight: 10, marginTop: 10, marginLeft: 5 }}>
                        <Text style={{ fontSize: 14, backgroundColor: '#f0da9c', padding: 10, marginTop: 5, borderRadius: 10 }}>
                            + Hợp chất bari sulfat có màu trắng và được sử dụng trong sản xuất sơn, trong chẩn đoán bằng tia X, và trong sản xuất thủy tinh.


                        </Text>
                        <Text style={{ fontSize: 14, backgroundColor: '#f0da9c', padding: 10, marginTop: 10, borderRadius: 10 }}>

                            + Bari sulfua không tinh khiết phát lân quang sau khi đặt dưới ánh sáng.

                        </Text>
                    </View>

                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 10, marginTop: 15, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Bari được sản xuất thương mại bằng phương pháp điện
                        phân nóng chảy bari clorua (BaCl2):

                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        BaCl&#8322; &rarr; Ba + Cl&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Ba còn được điều chế bằng cách trộn bari oxit với bột
                        nhôm nghiền mịn ở nhiệt độ giữa 1100 và 1200 °C:

                    </Text>
                    <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        4BaO + 2Al (đpnc)&rarr; 3Ba + Ba(AlO&#8322;)&#8322;
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
        height: 150
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