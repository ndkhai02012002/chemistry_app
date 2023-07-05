import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Kali() {
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
            <Text style={style.atomName}>Kali</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kali (Potassium)</Text>
                        <Text style={style.ctntText}>p = e = Z = 19</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 39</Text>
                        <Text style={style.ctntText}>Hóa trị: I</Text>
                        <Text style={style.ctntText}>Số lớp electron: 4</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 1</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/kali.png')} />
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
                        <Image style={style.tttnImg} source={require('../assets/kali_tttn.png')} />
                    </View>

                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>
                            - Nguyên tố này chiếm khoảng 2,4% trọng lượng lớp vỏ
                            Trái Đất và là nguyên tố phổ biến thứ bảy trong lớp này.


                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>
                            - Vì tính không hòa tan của nó, rất khó thu được kali từ
                            các khoáng chất của nó.

                        </Text>
                    </View>
                </View>

                <View style={{ display: slide[1] }}>
                    <View>
                        <Image style={style.tttnImg} source={require('../assets/kali_tcvl.png')} />
                    </View>
                    <View >
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                            - Với khối lượng riêng nhỏ hơn của nước, kali là kim
                            loại nhẹ thứ hai sau liti. Nó là một chất rắn rất mềm,
                            dễ dàng cắt bằng dao và có màu trắng bạc khi bề mặt
                            sạch. Nó bị ôxi hóa rất nhanh trong không khí và
                            phải được bảo quản trong dầu mỏ hay dầu lửa.



                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                            - Có khối lượng riêng là 0.863 g/cm&sup3; có nhiệt độ nóng
                            chảy là 63,51&deg;C và sôi ở 760&deg;C.

                        </Text>
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#e8e8e8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4K + O&#8322; &rarr; 2K&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với Phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2K + Cl&#8322; (t&deg;)&rarr; 2KCl</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với nước tạo thành Bazo:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2K + 2H&#8322;O &rarr; 2KOH + H&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với Axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2K + 2HCl &rarr; 2KCl + 2H&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2K + 2H&#8322;O &rarr; 2KOH + H&#8322;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2KOH + CuCl&#8322; &rarr; 2KCl + Cu(OH)&#8322;&#8595;</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>

                <View>
                    <View style={{backgroundColor: '#e8e8e8', marginTop: 20, borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - KNO&#8323; (Kali Nitrat/Potassium Nitrate) được sử
                            dụng trong thuốc súng.

                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - K&#8322;CO&#8323; (Kali Cacbonat/Potassium carbonate)
                            được sử dụng trong sản xuất thủy tinh.

                        </Text>

                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - NaK là hợp kim của Kali (Potassium) với Natri
                            (Sodium) được sử dụng như là chất truyền nhiệt trung gian.

                        </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={{ width: '100%', resizeMode: 'contain', height: 120, marginTop: 20, marginBottom: 20 }} source={require('../assets/kali_ud.png')} />
                        </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - Nguyên tố này là thành phần rất cần thiết cho sự phát triển của cây cối và được tìm thấy trong nhiều loại đất.
                        </Text>


                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>

                    <Image style={{ width: '100%', resizeMode: 'contain', height: 150, marginTop: 15, marginBottom: 15 }} source={require('../assets/kali_dc.png')} />
                    <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'center' }}>KOH</Text>
                </View>
                <View style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginTop: 5, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        Kali (Potassium) có thể cô lập bằng điện phân của hiđrôxít của nó trong một quy trình có một chút thay đổi kể từ thời của Davy.
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Phương trình điện phân:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        4KOH (n/c)&rarr; 4K + O&#8322; + 2H&#8322;O
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
        color:'white',
        width: '60%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        backgroundColor: '#64666a',
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
        width: '100%',
        borderRadius: 200,
        resizeMode: 'contain',
        height: 150,
        marginBottom: 10,
    }
})