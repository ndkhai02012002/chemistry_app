import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Zn() {
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
            <Text style={style.atomName}>Kẽm</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kẽm (Zinc)</Text>
                        <Text style={style.ctntText}>p = e = Z = 30</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 65</Text>
                        <Text style={style.ctntText}>Hóa trị: II</Text>
                        <Text style={style.ctntText}>Số lớp electron: 4</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 2</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/zn.png')} />
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
                        <View style={{ flexGrow: 5 }}>
                            <Image style={style.tttnImg} source={require('../assets/Sphalerit.png')} />
                            <Text style={{ fontSize: 16, fontWeight: '500', textAlign: 'center' }}>Sphalerit</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Kẽm là nguyên tố phổ biến thứ 24 trong lớp vỏ Trái Đất.
                            Quặng kẽm phổ biến nhất là quặng sphalerit, một loại kẽm
                            Sunfat. Những mỏ khai thác lớn nhất nằm ở Úc, Canada và
                            Hoa Kỳ{"\n"}{"\n"}- Nhà hóa học người Đức Andreas Sigismund Marggraf
                            công nhận đã tách được kẽm kim loại tinh khiết năm 1746
                        </Text>
                    </View>
                </View>

                <View style={{ display: slide[1] }}>
                    <View>
                        <Image style={style.tttnImg} source={require('../assets/kem.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Kẽm có màu trắng xanh, óng ánh mặc dù hầu hết kẽm phẩm
                            cấp thương mại có màu xám xỉn. Kẽm kim loại cứng và giòn
                            ở hầu hết cấp nhiệt độ nhưng trở nên dễ uốn từ 100 đến 150 °C.
                            Trên 210 °C, kim loại kẽm giòn trở lại và có thể được
                            tán nhỏ bằng lực. {"\n"} Kẽm dẫn điện khá. So với các kim loại khác,
                            kẽm có độ nóng chảy (419,5 °C, 787,1F) và điểm sôi (907 °C)
                            tương đối thấp.

                        </Text>
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Zn + O&#8322; (t&deg;)&rarr; 2ZnO</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với Phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Zn + Cl&#8322; (t&deg;)&rarr; ZnCl&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với Axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Zn + 2HCl &rarr; ZnCl&#8322; + H&#8322; </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Zn + CuCl&#8322; &rarr; ZnCl&#8322; + Cu</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={{ flex: 1, flexGrow: 6}}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 100, marginTop: 20 }} source={require('../assets/zn_ud1.png')} />
                    </View>
                    <View style={{ flex: 2, flexGrow: 6, marginTop: 20 }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 100 }} source={require('../assets/zn_ud2.png')} />
                    </View>
                </View>
                <View>
                    <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 20 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 10, borderRadius: 10 }}>
                                                Trong sản xuất kẽm có công dụng chính là sử dụng làm chất chống ăn mòn ở dạng mạ phủ bề mặt trên thép, ví dụ như dùng để xi mạ các chi tiết kim loại, dây thép,… hoặc dùng để làm pin kẽm, đồng thau.
                                                </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 10, marginBottom: 15, marginTop: 15, borderRadius: 10 }}>
                            {"\t"}- Kẽm còn được dùng đúc cực chống ăn mòn trong các loại tàu biển để ngăn ngừa sự bào mòn bởi các tác nhân oxy hóa.
                            {"\n"}{"\t"}- Kẽm là một chất khoáng vi lượng rất quan trọng và vô cùng cần thiết cho sinh vật và sức khỏe con người.
                        </Text>

                        
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 100, marginTop: 15, marginBottom: 5 }} source={require('../assets/zn_dc.png')} />

                </View>
                <Text style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 10, marginTop: 10, marginBottom: 20, textAlign: 'center', borderRadius: 10 }}>
                Kẽm kim loại được sản xuất bằng luyện kim khai khoáng. Sau khi nghiền quặng, phương pháp tuyển nổi bọt được sử dụng để tách các khoáng dựa vào tính dính ướt khác nhau của chúng. Ở bước cuối cùng này thì kẽm chiếm 50%, phần còn lại là lưu huỳnh (32%), sắt (13%), và SiO2 (5%).
                </Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center', borderTopColor: '#bc8462', borderTopWidth: 1 }}>
                    <View style={{ marginTop: 10 }}>
                    </View>
                </View>
                <View style={{ fontSize: 16, backgroundColor: '#f0da9c', padding: 10, marginTop: 5, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Công đoạn thiêu kết sẽ chuyển kẽm sulfua thành kẽm oxit:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2ZnS + 3O&#8322; &rarr; 2ZnO + 2SO&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Sau đó, người ta có thể dùng 2 phương pháp cơ bản trong luyện kim là nhiệt luyện (pyrometallurgy) hoặc điện phân (electrowinning). Quá trình nhiệt luyện khử kẽm ôxít với cacbon hoặc cacbon mônôxít ở 950 °C (1.740 °F) thành kim loại kẽm ở dạng hơi. Hơi kẽm được thu hồi trong bình ngưng. Quá trình được biểu diễn theo các phương trình dưới đây:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2ZnO + C &rarr; 2Zn + CO&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2ZnO + 2CO &rarr; 2Zn + 2CO&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Quá trình điện phân, tách kẽm từ quặng tinh bằng axit sulfuric:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        ZnO + H&#8322;SO&#8324; &rarr; ZnSO&#8324; + H&#8322;O
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Sau đó, người ta dùng phương pháp điện phân để sản xuất kẽm kim loại:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                    2ZnSO&#8324; + 2H&#8322;O &rarr; 2Zn + 2H&#8322;SO&#8324; + O&#8322;
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
        backgroundColor: '#bbbbbb',
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