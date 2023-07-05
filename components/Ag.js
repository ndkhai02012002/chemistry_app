import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Ag() {
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
            <Text style={style.atomName}>Ag</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Bạc (Silver)</Text>
                        <Text style={style.ctntText}>p = e = Z = 47</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 108</Text>
                        <Text style={style.ctntText}>Hóa trị: I</Text>
                        <Text style={style.ctntText}>Số lớp electron: 5</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 1</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/ag.png')} />
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
                            <Image style={style.tttnImg} source={require('../assets/ag2s.png')} />
                            <Text style={{ fontSize: 24, fontWeight: '500', textAlign: 'center' }}>Ag&#8322;S</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', paddingTop: 15, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>
                            - Bạc được tìm thấy ở dạng tự nhiên, liên kết với lưu huỳnh, asen,
                            antimoan, hay clo trong các loại khoáng chất như argentit (Ag&#8322;S)
                            và silver horn (AgCl).

                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>
                            - Các nguồn cơ bản của bạc là các khoáng chất chứa đồng,
                            đồng-niken, vàng, chì và chì-kẽm có ở Canada, Mexico, Peru,
                            Úc và Mỹ.


                        </Text>
                    </View>
                </View>

                <View style={{ display: slide[1] }}>
                    <View>
                        <Image style={style.tttnImg} source={require('../assets/silver.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                            - Bạc có tính mềm, dẻo (dễ kéo sợi và dát mỏng), màu
                            trắng, dẫn điện và dẫn nhiệt tốt nhất trong các kim loại.


                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                            - Bạc là kim loại nặng có khối lượng riêng 10.49 g/cm&#179;,
                            nhiệt độ nóng chảy là 960,5&deg;C.



                        </Text>
                    </View>
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#c1c1c1', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4Ag + O&#8322; (t&deg;)&rarr; 2Ag&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với Phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Ag + Cl&#8322; (t&deg;)&rarr; 2AgCl</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Tác dụng với Axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3Ag + 4HNO&#8323;(1) &rarr; 3AgNO&#8323; + NO + 2H&#8322;O </Text>

                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>

                <View>
                    <View style={{backgroundColor: '#c1c1c1', marginTop: 20,  borderRadius: 10 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - Các loại gương cần tính phản xạ cao của bạc đối với ánh sáng được làm từ bạc như là vật liệu phản xạ ánh sáng. Các loại gương phổ biến có mặt sau được mạ nhôm.
                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - Kim loại này được chọn vì vẻ đẹp của nó trong sản xuất đồ trang sức và đồ bạc.
                        </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={{ width: '100%', resizeMode: 'contain', height: 120, marginTop: 20, marginBottom: 20 }} source={require('../assets/ag_ud.png')} />
                        </View>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - Bạc được sử dụng để làm que hàn, công tắc điện và các loại pin dung tích lớn như pin bạc-kẽm hay bạc-cadmi.
                            thành
                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - Fulminat bạc là một chất nổ mạnh.
                        </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#c1c1c1', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                            - Iốtđua bạc được sử dụng nhằm tụ mây để tạo mưa nhân tạo.
                        </Text>

                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>

                    <Image style={{ width: '100%', resizeMode: 'contain', height: 150, marginTop: 15, marginBottom: 15 }} source={require('../assets/ag_dc.png')} />

                </View>
                <View style={{ flexDirection: 'row', AlignItem: 'center', borderTopColor: '#bc8462', borderTopWidth: 1 }}>
                    <View style={{ marginTop: 10 }}>
                    </View>
                </View>
                <View style={{ fontSize: 16, backgroundColor: '#c1c1c1', padding: 10, marginTop: 5, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Điều chế bạc(Ag) bằng bột kẽm bằng phương pháp thủy luyện:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Cách làm của phương pháp này là  người ta nghiền nhỏ quặng bạc(Ag&#8322;S) sau đó dùng hóa chất NaCN để hòa tan quặng bạc sau đó ta được dung dịch muối phức bạc.
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        Ag&#8322;S + 4NaCN &rarr; 2Na[Ag(CN)&#8322;] + Na&#8322;S
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        - Tiếp đến ta dùng bột kẽm nguyên chất(Zn)để khử ion Ag+.
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        Zn + 2Na[Ag(CN)&#8322;] &rarr; Na&#8322;[Zn(CN)&#8324;] + 2Ag
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                        &rarr;Từ đó ta thu được bạc nguyên chất từ quặng bạc sunfua.
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
        color: 'white',
        width: '60%',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 22,
        fontWeight: '400',
        backgroundColor: '#7c7c7c',
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