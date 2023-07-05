import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Fe() {
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
            <Text style={style.atomName}>Fe</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Sắt (Iron)</Text>
                        <Text style={style.ctntText}>p = e = Z = 26</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 56</Text>
                        <Text style={style.ctntText}>Hóa trị: II, III</Text>
                        <Text style={style.ctntText}>Số lớp electron: 4</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 2</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/fe.png')} />
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
                        <Image style={style.tttnImg} source={require('../assets/pirit.png')} />
                        
                    </View>
                    <Text style={{fontSize:24, fontWeight:'500', textAlign:'center'}}>Pirit</Text>
                    <View style={{ fontSize: 16, backgroundColor: '#e8e8e8', marginTop: 10, borderRadius: 15 }}> 
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>
                        - Là kim loại phổ biến sau nhôm, tồn tại chủ yếu ở các dạng: 


                        </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }}>
                        {'\t'}+ Hợp chất: oxit, sunfua, silicat…

                        </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginBottom: 10 }}>
                        {'\t'}+ Quặng: hematit đỏ (Fe&#8322;O&#8323; khan), hematit nâu (Fe&#8322;O&#8323;.nH&#8322;O), 
manhetit (Fe&#8323;O&#8324;), xiđerit (FeCO&#8323;) và pirit (FeS&#8322;).


                        </Text>
                    </View>
                </View>

                <View style={{ display: slide[1] }}>
                    <View>
                        <Image style={style.tttnImg} source={require('../assets/sat.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                        – Màu trắng hơi xám, dẻo, dễ rèn, dễ dát mỏng, kéo sợi; dẫn nhiệt 
và dẫn điện kém đồng và nhôm.



                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                        – Sắt có tính nhiễm từ nhưng ở nhiệt độ cao (800&deg;C) sắt mất từ tính. 
Nhiệt độ nóng chảy = 1540&deg;C.
                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                        – Sắt là kim loại nặng, khối lượng riêng D = 7,86g/cm&sup3;. 
                        </Text>
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#e8e8e8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Fe + O&#8322; (t&deg;)&rarr; 2FeO</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4Fe + 3O&#8322; (t&deg;)&rarr; 2Fe&#8322;O&#8323;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3Fe + 2O&#8322; (t&deg;)&rarr; Fe&#8323;O&#8324;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với Phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Fe + 3Cl&#8322; (t&deg;)&rarr; 2FeCl&#8323;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với Axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe + 2HCl &rarr; FeCl&#8322; + H&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Fe + CuCl&#8322; &rarr; FeCl&#8322; + Cu</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>

                <View>
                    <View style={{ marginTop: 20, backgroundColor: '#e8e8e8',borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                        - Trong cơ thể động vật sự liên kết của sắt trong các 
tổ hợp heme, là những protein tham gia vào phản ứng 
oxi hóa-khử và protein chuyên chở oxy như hemoglobin  
và myoglobin.


                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                        - Sắt trong các đồ dùng cá nhân, trong các đồ nội thất

                        </Text>

                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                        - Sắt là bộ khung cho các công trình xây dựng, dùng làm các 
khung giàn cho các loại cầu vượt, cầu bắc qua sông, cầu đi bộ…
                        </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={{ width: '100%', resizeMode: 'contain', height: 120, marginTop: 20, marginBottom: 20 }} source={require('../assets/fe_ud.png')} />
                        </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                        - Sắt cũng là một vi chất rất cần thiết cho cơ thể. Chúng được 
bào chế và kết hợp trong một số loại thuốc để hỗ trợ trong việc 
chữa bệnh.

                        </Text>


                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>

                <View style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginTop: 15, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Sắt được điều chế theo phương pháp nhiệt luyện:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                    Fe&#8322;O&#8323; + 3CO &rarr; 2Fe + 3CO&#8322;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Trong công nghiệp, sắt được trích xuất ra từ các quặng của nó, chủ yếu là từ hematit (Fe&#8322;O&#8323;) và magnêtit (Fe&#8323;O&#8324;) bằng cách khử với cacbon trong lò luyện kim sử dụng luồng không khí nóng ở nhiệt độ khoảng 2000 °C. Trong lò luyện, quặng sắt, cacbon trong dạng than cốc, và các chất tẩy tạp chất như đá vôi được xếp ở phía trên của lò, luồng không khí nóng được đưa vào lò từ phía dưới.
                    </Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 10, marginBottom: 10 }} source={require('../assets/fe_dc.png')} />
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Than cốc phản ứng với ôxy trong luồng không khí tạo ramônôxít cacbon:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2C + O&#8322; &rarr; 2CO
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    - Cacbon mônôxít khử quặng sắt (trong phương trình dưới đây làhêmatit) thành sắt nóng chảy, và nó trở thành điôxít cacbon:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        3CO + Fe&#8322;O&#8323; &rarr; 2Fe + 3CO&#8322;
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
        backgroundColor: '#9f9fb8',
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
        resizeMode: 'contain',
        height: 150,
        marginBottom: 10,
    }
})