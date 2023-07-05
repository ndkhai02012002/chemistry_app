import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function K2SO4() {
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
            <Text style={style.atomName}>Kali Sunfat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kali Sunfat</Text>
                        <Text style={style.ctntText}>Danh pháp: Potassium Sulfate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: K&#8322;SO&#8324;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 174</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/k2so4.png')} />
                    </View>
                    
                </View>
                <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Lịch sử của K&#8322;SO&#8324;: Kali Sunfat (K&#8322;SO&#8324;) được biết tới kể từ đầu thế kỷ 14, và nó được Glauber, Boyle và Tachenius nghiên cứu. Trong thế kỷ 17, nó được người phương Tây gọi là arcanuni hay sal duplicatum, do nó là tổ hợp của muối axit với muối kiềm.</Text>
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
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Tan trong nước</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/k2so4_tcvl.png')} />
                        </View><Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 1.069°C</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: 1689°C</Text>

                        
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Làm quỳ tím chuyển sang màu xanh.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với bazơ tạo thành bazơ mới và muối mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;SO&#8324; + Ba(OH)&#8322; &rarr; KOH + BaSO&#8324;&darr;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit tạo thành muối mới và axit mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;SO&#8324; + 2HCl &rarr; 2KCl + CO&#8322;&uarr; + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với muối tạo thành hai muối mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>K&#8322;SO&#8324; + BaCl&#8322; &rarr; 2KCl + BaSO&#8324;&darr;</Text>
                       


                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Sử dụng làm phân bón, K&#8322;SO&#8324; chứa nhiều dinh dưỡng giúp cải thiện và tăng năng suất cho cây trồng.</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Làm nguyên liệu để sản xuất xà phòng và thủy tinh.</Text>

                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Được sử dụng trong y tế, dùng để làm thuốc.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/k2so4_ud.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trong thực phẩm, K&#8322;SO&#8324; là nguồn dinh dưỡng tự nhiên giúp cân bằng chất điện giải trong cơ thể.</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ngoài ra, nó còn được sử dụng như một chất bắn pháo hoa.</Text>
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Trong quá trình Mannhei, một lượng lớn thu được là sản phẩm phụ của quá trình điều chế HCl từ KCl và H&#8322;SO&#8324;:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>H&#8322;SO&#8324; + 2KCl &rarr; 2HCl + K&#8322;SO&#8324;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Điều chế từ SO&#8322; trong quá trình Hargreaves:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4KCl + 2SO&#8322; + O&#8322; + 2H&#8322;O &rarr; 4HCl + 2K&#8322;SO&#8324;</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/k2so4_dc.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Trong phòng thí nghiệm và sản xuất tơ nhân tạo, sử dụng phương pháp điều chế từ phản ứng trung hòa của axit H&#8322;SO&#8324; và KOH:</Text>

<Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>H&#8322;SO&#8324; + 2KOH &rarr; K&#8322;SO&#8324; + 2H&#8322;O</Text>
<Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Ngoài ra, trong phòng thí nghiệm còn được điều chế từ KHCO&#8323; và MgSO&#8324;:</Text>

<Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2KHCO&#8323; + 2MgSO&#8324; &rarr; K&#8322;SO&#8324; + Mg(OH)&#8322;&darr; + 2CO&#8322;</Text>
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