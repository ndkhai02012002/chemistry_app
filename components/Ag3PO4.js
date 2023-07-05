import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Ag3PO4() {
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
            <Text style={style.atomName}>Bạc Photphat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Bạc Photphat</Text>
                        <Text style={style.ctntText}>Danh pháp: Silver Phosphate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Ag&#8323;PO&#8324;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 419</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/ag3po4.png')} />
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
                    <View style={{ backgroundColor: '#f9ee3c', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ag&#8323;PO&#8324; là kết tủa màu vàng</Text>


                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/ag3po4_tcvl.png')} />
                        </View>
                    </View>




                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#f9ee3c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trong năm 2010, Ag&#8323;PO&#8324; được báo cáo là có năng suất lượng tử cao khoảng 90%  như chất xúc tác quang cho sự phân tách nước quang hóa nhìn thấy được và để sản xuất oxy hoạt hóa bằng những phương pháp tương tự.</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ag&#8323;PO&#8324; cũng là một chất liệu tiềm năng để kết hợp tính chất kháng khuẩn ion bạc tạo thành vật liệu.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ngoài các ứng dụng nêu trên, Ag&#8323;PO&#8324; còn được sử dụng trong ngành nhiếp ảnh thời kì đầu như một chất nhạy sáng.</Text>

                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f9ee3c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Cho AgNO&#8323; tác dụng với K&#8323;PO&#8324;:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2AgNO&#8323; + K&#8323;PO&#8324; &rarr; Ag&#8323;PO&#8324; + 2KNO&#8323;</Text>

        
                        <View style={{flexDirection:'row', AlignItem:'center'}}>
                            <View style={{flex:1, flexGrow:5}}>
                            <Image style={style.tttnImg} source={require('../assets/ag3po4_dc1.png')} />
                            </View>
                            <View style={{flex:2, flexGrow:5}}>
                            <Image style={style.tttnImg} source={require('../assets/ag3po4_dc2.png')} />
                            </View>
                        </View>
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
        backgroundColor: '#61c3d2',
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

        backgroundColor: '#f9ee3c',
        marginTop: 20,
        flexGrow: 5,
        width: '100%',
        resizeMode: 'contain',
        height: 80
    }
})