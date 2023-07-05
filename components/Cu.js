import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Cu() {
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
            <Text style={style.atomName}>Cu</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Đồng (Copper)</Text>
                        <Text style={style.ctntText}>p = e = Z = 29</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 64</Text>
                        <Text style={style.ctntText}>Hóa trị: I, II</Text>
                        <Text style={style.ctntText}>Số lớp electron: 4</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 1</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/cu.png')} />
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
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 20, borderRadius: 15 }}>- Cu chiếm khoảng 69% đồng có mặt trong tự nhiên. Đồng có thể tìm thấy như là đồng tự nhiên hoặc trong dạng khoáng chất.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <View style={{ flex: 1, flexGrow: 5 }}>
                                <Image style={style.tttnImg} source={require('../assets/cacbonat_azurite.png')} />
                                <Text style={{ fontSize: 16, fontWeight: '500',marginTop: 5, textAlign: 'center' }}>Cacbonat Azurite</Text>
                            </View>
                            <View style={{ flex: 2, flexGrow: 5 }}>
                                <Image style={style.tttnImg} source={require('../assets/malachite.png')} />
                                <Text style={{ fontSize: 16, fontWeight: '500',marginTop: 5, textAlign: 'center' }}>Malachite</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Có nhiều dạng khoáng chứa đồng như cacbonat azurite (Cu&#8323;(CO&#8323;)&#8322;(OH)&#8322;) và malachite (Cu&#8322;(OH)&#8322;CO&#8323;) là các nguồn để sản xuất đồng, cũng như là các sulfua như chalcopyrit (CuFeS&#8322;), bornit (Cu&#8325;FeS&#8324;), covellit (CuS), chalcocit (Cu&#8322;S) và các oxit như cuprit (Cu&#8322;O).</Text>
                    </View>

                </View>

                <View style={{ display: slide[1] }}>
                    <View>
                        <Image style={style.tttnImg} source={require('../assets/dong.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Đồng là một thành phần kim loại dẻo có tính chất dẫn nhiệt, dẫn điện rất tốt. Ở dạng nguyên chất kim loại đồng mềm và dễ uốn nắn, các loại đồng tươi thường có màu cam đỏ.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Nhiệt độ nóng chảy là 1085&deg;C.</Text>
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#e2b97b', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Cu + O&#8322; (t&deg;)&rarr; 2CuO</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Cu + Cl&#8322; (t&deg;)&rarr; CuCl&#8322; </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Cu + 2AgNO&#8323; &rarr; Cu(NO&#8323;)&#8322; + 2Ag</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>
                    <View style={{ flex: 2, flexGrow: 6, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b',marginBottom:10, padding: 10, borderRadius: 10 }}>
                            - Đồng có tính dẫn điện cực tốt, giá cả phải chăng nên được
                            dùng làm dây dẫn điện, sản xuất bo mạch điện tử, châm điện,
                            ống chân không, tản nhiệt, kết nối điện tử, máy tua

                        </Text>
                        <View style={{ flex: 1, flexGrow: 3 }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 10,marginBottom:20 }} source={require('../assets/cu_ud.png')} />

                    </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b',marginBottom:10, padding: 10, borderRadius: 10 }}>
                            - Được sử dụng trong các vật dụng quen thuộc hàng ngày như:
                            nồi, chảo, các đơn vị cấu tạo tản nhiệt, điều hòa không khí trong điện lạnh….

                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e2b97b',marginBottom:10, padding: 10, borderRadius: 10 }}>
                            - Ngoài ra, đồng còn được sử dụng trong các tác phẩm nghệ thuật như: Tượng nữ thần tự do. Đồng thau được ứng dụng trong các nhạc cụ, còi, kèn…
                        </Text>
                    </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', padding: 10, borderRadius: 10, marginTop: 15 }}>
                Hầu hết quặng thương mại là các loại đồng sulfua, đặc biệt là chalcopyrit (CuFeS&#8322;) và ít hơn là chalcocit (Cu&#8322;S). Các khoáng này được tách ra từ các quặng được nghiền để nâng hàm lượng lên 10–15% đồng bằng froth flotation hay bioleaching. Nung vật liệu này với silica trong flash smelting để loại sắt ở dạng xỉ. Quá trình này khai thác dễ dàng chuyển sắt sulfua thành dạng ôxit của nó, sau đó các ôxit này phản ứng với silica để tạo ra xỉ silicat nổi lên trên khối nóng chảy. Sản phẩm tạo ra copper matte chứa Cu2S sau đó được roasted để chuyển tất cả các sulfua thành oxit:
                </Text>
                <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', padding: 10, marginTop: 10, marginBottom: 10, textAlign: 'center', borderRadius: 10 }}>
                    2Cu&#8322;S + 3O&#8322; &rarr; 2Cu&#8322;O + 2SO&#8322;
                </Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={{ flex: 1, flexGrow: 5 }}>
                        <Image style={style.tttnImg} source={require('../assets/chalcopyrit.png')} />
                        <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'center', marginTop:5 }}>Chalcopyrit</Text>
                    </View>
                    <View style={{ flex: 2, flexGrow: 5 }}>
                        <Image style={style.tttnImg} source={require('../assets/chalcocit.png')} />
                        <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'center', marginTop:5 }}>Chalcocit</Text>
                    </View>
                </View>
                <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', padding: 10,marginTop:20, borderRadius: 10 }}>
                    -  Oxit đồng được chuyển thành đồng blister theo phản ứng nung:
                </Text>
                <Text style={{ fontSize: 16, backgroundColor: '#e2b97b', padding: 10, marginTop: 10, marginBottom: 20, textAlign: 'center', borderRadius: 10 }}>
                    2Cu&#8322;O &rarr; 4Cu + O&#8322;
                </Text>
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
        color: 'white',
        width: '60%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        backgroundColor: '#8d6d44',
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