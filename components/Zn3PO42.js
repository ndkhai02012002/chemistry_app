import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Zn3PO42() {
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
            <Text style={style.atomName}>Kẽm Photphat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kẽm Photphat</Text>
                        <Text style={style.ctntText}>Danh pháp: Zinc Phosphate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Zn&#8323;(PO&#8324;)&#8322;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 385</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/zn3po42.png')} />
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
                    <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trạng thái: Rắn (tinh thể)</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Màu sắc: Màu trắng</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không tan trong nước</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 900°C</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zn3po42_tcvl.png')} />
                        </View>
                    </View>

                    

                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ứng dụng nhiều trong công nghiệp mạ, sơn tĩnh điện.</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Dùng để chống ăn mòn trên bề mặt vật liệu đặc biệt là kim loại.</Text>

                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Sử dụng trong nghành nhuộm, chế tạo thuốc nhuộm màu.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zn3po42_ud.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Là chất được sử dụng để ức chế quá trình ăn mòn, giảm ma sát trong quá trình gia công…</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ngoài ra, nó cũng được ứng dụng trong y khoa.</Text>

                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>* Lưu ý khi sử dụng và bảo quản:</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khi sử dụng: Zn&#8323;(PO&#8324;)&#8322; không độc tuy nhiên gây kích ứng khi tiếp xúc trực tiếp với sản phẩm. Vì vậy cần sử dụng thiết bị bảo hộ khi tiếp xúc trực tiếp. Việc tiếp xúc lâu ngày sẽ tiềm tàng khả năng gây ung thư. Khi nuốt phải cần đưa ngay đến cơ sở y tế kịp thời.</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khi bảo quản: Bảo quản nơi khô ráo, thoáng mát không để ánh sáng trực tiếp, để tránh hao mòn.</Text>
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Điều chế bằng cách trộn bột kẽm oxit (ZnO) hoặc magie oxit (MgO) với một chất lỏng bao gồm axit H&#8323;PO&#8324;, nước:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3ZnO + 2H&#8323;PO&#8324; + H&#8322;O &rarr; Zn&#8323;(PO&#8324;)&#8322;.4H&#8322;O</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/zn3po42_dc.png')} />

                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Ngoài ra có thể cho ZnSO&#8324; phản ứng với Na&#8322;HPO&#8324;:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3ZnSO&#8324;.7H&#8322;O + 2Na&#8322;HPO&#8324;.2H&#8322;O &rarr; Zn&#8323;(PO&#8324;)&#8322;.4H&#8322;O + 2Na&#8322;SO&#8324; + H&#8322;SO&#8324; + 21H&#8322;O</Text>
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