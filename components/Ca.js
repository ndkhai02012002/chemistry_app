import {Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Canxi() {
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
            <Text style={style.atomName}>Canxi</Text>
                <View style={style.part}>
                    <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                    <View style={{flexDirection:'row', AlignItem:'center'}}>
                        <View style={style.ctnt}>
                            <Text style={style.ctntText}>Tên nguyên tử: Canxi (Calcium)</Text>
                            <Text style={style.ctntText}>p = e = Z = 20</Text>  
                            <Text style={style.ctntText}>Nguyên tử khối: 40</Text>
                            <Text style={style.ctntText}>Hóa trị: II</Text>
                            <Text style={style.ctntText}>Số lớp electron: 4</Text>
                            <Text style={style.ctntText}>Số electron lớp ngoài cùng: 2</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Image  style={style.ctntImg} source={require('../assets/ca.png')}/>
                        </View> 
                    </View>
                </View>
                <View style={style.part}>
                    <View style={{flexDirection:'row', AlignItem:'center'}}>
                        <View style={style.navSlide}>
                            <Button disabled={disable[0]} title='TT Tự Nhiên' onPress={() => changeSlide(0)}/>
                        </View>
                        <View style={style.navSlide}>
                            <Button disabled={disable[1]} title='TC Vật Lý' onPress={() => changeSlide(1)}/>
                        </View>
                        <View style={style.navSlide}>
                            <Button disabled={disable[2]} title='TC Hóa Học' onPress={() => changeSlide(2)}/>
                        </View>
                        
                        
                           
                    </View>
                    <View style={{display: slide[0]}}>
                        
                        <View>
                            <Text style={{fontSize:16, backgroundColor:'#f0da9c', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, borderRadius:15}}>- Canxi không bao giờ được tìm thấy trong tình trạng nguyên chất "cô lập" ở trong tự nhiên, mà nó tồn tại trong các hợp chất. Hợp chất canxi có thể được tìm thấy trong nhiều khoáng chất, bao gồm đá vôi (canxi cacbonat), thạch cao (canxi sulfat) và fluorit (canxi florua). Canxi chiếm khoảng 4,2% trong lượng vỏ Trái Đất.</Text>
                        </View>
                        <View style={{flexDirection:'row', AlignItem:'center'}}>
                            <View style={{flex:1, flexGrow:5}}>
                                <Image  style={style.tttnImg} source={require('../assets/calcium_carbonate.png')}/>
                                <Text style={{fontSize:16, fontWeight:'500', textAlign:'center', marginTop: 5}}>Calcium Carbonate</Text>
                            </View>
                            <View style={{flex:2, flexGrow:5}}>
                                <Image  style={style.tttnImg} source={require('../assets/calcium_sulfate.png')}/>
                                <Text style={{fontSize:16, fontWeight:'500', textAlign:'center', marginTop: 5}}>Calcium Sulfate</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{display: slide[1]}}>
                        <View>
                            <Image  style={style.tttnImg} source={require('../assets/calcium.png')}/>
                            <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Calcium</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:16, backgroundColor:'#f0da9c', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 15, borderRadius:15}}>- Canxi là kim loại kiềm thổ, màu trắng bạc, dẻo, khá cứng.</Text>
                            <Text style={{fontSize:16, backgroundColor:'#f0da9c', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 15, borderRadius:15}}>- Canxi có khối lượng riêng là 1.54 g/cm&#179; có nhiệt độ nóng chảy là 842&deg;C và sôi ở 1495&deg;C.</Text>
                        </View>
                    </View>
                    <View style={{display: slide[2]}}>
                        <View style={{backgroundColor:'#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10}}>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxi tạo thành oxit:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>2Ca + O&#8322; &rarr; 2CaO</Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với phi kim tạo thành muối:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Ca + Cl&#8322; &rarr; CaCl&#8322; </Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với nước tạo thành bazo và khí hidro:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Ca + H&#8322;O &rarr; Ca(OH)&#8322; + H&#8322;</Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit tạo thành muối:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Ca + 2HCl &rarr; CaCl&#8322; + H&#8322; </Text>

                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Ca + H&#8322;O &rarr; Ca(OH)&#8322; + H&#8322;</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Ca(OH)&#8322; + CuCl&#8322; &rarr; CaCl&#8322; + Cu(OH)&#8322;&#8595;</Text>
                        </View>
                    </View>
                </View>   
                <View style={style.part}>
                    <Text style={style.categories}>Ứng Dụng</Text>


                            <Image  style={{width: '100%', resizeMode: 'contain', height: 200, marginTop: 20}} source={require('../assets/ca_ud.png')}/>

                            <Text style={{fontSize:16, backgroundColor: '#f0da9c', padding:10,marginTop: 15, borderRadius: 10}}>
                            Canxi là một thành phần quan trọng của khẩu phần dinh dưỡng. Sự thiếu hụt rất nhỏ của nó đã ảnh hưởng tới sự hình thành và phát triển của xương và răng. Thừa can xi có thể dẫn đến sỏi thận. Vitamin D là cần thiết để hấp thụ canxi.
                            </Text>

                </View>  
                <View style={style.part}>
                    <Text style={style.categories}>Điều chế</Text>
                    <View style={{flexDirection:'row', AlignItem:'center'}}>
                        <View style={{flex:1, flexGrow: 4}}>
                            <Image  style={{width: '100%', resizeMode: 'contain', height: 100}} source={require('../assets/ca_dc.png')}/>
                        </View>
                        <View style={{flex:2, flexGrow: 6, paddingLeft:10, paddingRight:10, marginTop: 20}}>
                            <Text style={{fontSize:16, backgroundColor: '#f0da9c', padding:10, borderRadius: 10, textAlign: 'center'}}>
                            Điện phân nóng chảy muối canxi clorua:
                            </Text>
                            
                        </View>
                        
                    </View>
                    <Text style={{fontSize:16, backgroundColor: '#f0da9c', padding:10, marginTop:10, marginBottom:20, textAlign: 'center', borderRadius: 10}}>
                        CaCl&#8322; (đpnc)&rarr; Ca + Cl&#8322;
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
        height: 100
    }
})