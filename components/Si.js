import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Si() {
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
            <Text style={style.atomName}>Silic</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Silic</Text>
                        <Text style={style.ctntText}>Danh pháp: Silicon</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Si</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 28</Text>
                        <Text style={style.ctntText}>Hóa trị: IV</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/si.png')} />
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
                    <View style={{ backgroundColor: '#898989', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Là một phi kim, có có 2 dạng thù hình là silic tinh thể và silic vô định hình  . </Text>

                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Silic tinh thể: màu xám, có ánh kim, bền, nhiệt độ nóng chảy = 1420&deg;C, có tính bán dẫn</Text>
                        <Image style={style.tttnImg} source={require('../assets/si_tcvl2.png')} />
                        <Text style={{ color: 'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Silic vô định hình: bột màu nâu</Text>
                        <Image style={style.tttnImg} source={require('../assets/si_tcvl1.png')} />
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#898989', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxi:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Si + O&#8322; (t&deg;)&rarr; SiO&#8322;</Text>

                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/si_tchh.png')} />
                        </View>

                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#898989', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Image style={style.tttnImg} source={require('../assets/si_ud.png')} /><Text style={{ color: 'white', fontSize: 16, backgroundColor: '#898989', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Dùng Si tinh thể, siêu tinh thể để chế tạo: các linh kiện điện tử, pin mặt trời.</Text>

                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Chế tạo thép silic: chịu axit, đàn hồi tốt.</Text>

                    </View>


                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#898989', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Kim cương nhân tạo được điều chế bằng cách nung than chì ở 2000&deg;C, p từ 50-100 nghìn atm, xúc tác là Fe, Cr, Ni.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Than chì nhân tạo được điều chế bằng cách nung than cốc ở 2500&deg;C - 3000&deg;C trong lò điện, không có không khí.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Than cốc được điều chế bằng cách nung than mỡ khoảng 1000&deg;C trong lò cốc, không có không khí.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Than gỗ được tạo nên khi đốt cháy gỗ trong điều kiện thiếu không khí.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Than muội được tạo nên khi nhiệt phân metan ở điều kiện nhiệt độ và xúc tác thích hợp.</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Than mỏ được khai thác trực tiếp từ các vỉa than nằm sâu dưới mặt đất.</Text>

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
        color:'white',
        width: '60%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        backgroundColor: '#cccccc',
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