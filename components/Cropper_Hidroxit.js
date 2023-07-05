import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Cropper_Hidroxit() {
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
            <Text style={style.atomName}>Đồng(II) Hidroxit</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Đồng(II) Hidroxit</Text>
                        <Text style={style.ctntText}>Danh pháp: Copper(II) hydroxide</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Cu(OH)&#8322;</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 98</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/cu(oh)2.png')} />
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
                    <View style={{ backgroundColor: '#00b3f5', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Cu(OH)&#8322; là chất rắn, có màu xanh lam hay lục lam.</Text>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không Tan trong nước.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/cu(oh)2_tcvl.png')} />
                        </View>
            
                        <Text style={{color:'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: Không có</Text>
                        <Text style={{color:'white', fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 80°C</Text>
                    
                    </View>
                    
                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#00b3f5', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                    <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Bị phân hủy bởi nhiệt:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Cu(OH)&#8322; (t&deg;)&rarr; H&#8322;O + CuO</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/cu(oh)2_tchh.png')} />
                        </View><Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit:</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Cu(OH)&#8322; + 2HCl &rarr; CuCl&#8322; + H&#8322;O</Text>
                    
                        

                    </View>
                    

                </View>

                <View style={{ display: slide[1] }}>
                    
                    <View style={{ backgroundColor: '#00b3f5', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{color:'white', fontSize: 16, backgroundColor: '#00b3f5', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Dung dịch đồng(II) hiđroxit trong amoniac, có khả năng hòa tan xenlulozo. Tính chất này khiến dung dịch này được dùng trong quá trình sản xuất rayon.</Text>
                        <Text style={{color:'white', fontSize: 16, backgroundColor: '#00b3f5', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Được sử dụng rộng rãi trong ngành công nghiệp thủy sinh vì khả năng tiêu diệt các ký sinh trên cá, bao gồm sán, cá biển, mà không giết chết cá.</Text>
                        <Image style={style.tttnImg} source={require('../assets/cu(oh)2_ud.png')} /><Text style={{color:'white', fontSize: 16, backgroundColor: '#00b3f5', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Đồng(II) hiđroxit đã được sử dụng như là một sự thay thế cho hỗn hợp Bordeaux, một thuốc diệt nấm và nematicide.</Text>
                        
                        
                    </View>
                        
             
                        
             
                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#00b3f5', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{color:'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Điều chế Cu(OH)&#8322; bằng cách cho muối Cu(II) tác dụng với dung dịch bazo:</Text>

                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Cu&sup2;&#8314; + 2OH&#8315; &rarr; Cu(OH)&#8322;</Text>
                        <Text style={{color:'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>CuCl&#8322; + 2NaOH &rarr; Cu(OH)&#8322; + 2NaCl</Text>
                    </View>
                    <Image style={style.tttnImg} source={require('../assets/cu(oh)2_dc.png')} />
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
        backgroundColor: '#0866f7',
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