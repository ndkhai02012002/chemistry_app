import {Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Natri() {
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
            <Text style={style.atomName}>Natri</Text>
                <View style={style.part}>
                    <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                    <View style={{flexDirection:'row', AlignItem:'center'}}>
                        <View style={style.ctnt}>
                            <Text style={style.ctntText}>Tên nguyên tử: Natri (Sodium)</Text>
                            <Text style={style.ctntText}>p = e = Z = 11</Text>  
                            <Text style={style.ctntText}>Nguyên tử khối: 23</Text>
                            <Text style={style.ctntText}>Hóa trị: I</Text>
                            <Text style={style.ctntText}>Số lớp electron: 3</Text>
                            <Text style={style.ctntText}>Số electron lớp ngoài cùng: 1</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Image  style={style.ctntImg} source={require('../assets/natri.png')}/>
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
                        <View style={{flexDirection:'row', AlignItem:'center'}}>
                            <View style={{flex:1, flexGrow:5}}>
                                <Image  style={style.tttnImg} source={require('../assets/Sodalite.png')}/>
                                <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Sodalite</Text>
                            </View>
                            <View style={{flex:2, flexGrow:5}}>
                                <Image  style={style.tttnImg} source={require('../assets/Felspat.png')}/>
                                <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Felspat</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize:16, backgroundColor:'#f0da9c', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, borderRadius:15}}>Kim loại nguyên chất không có mặt trong tự nhiên nên để điều chế được dạng này phải điều chế từ các hợp chất của nó; Natri được Humphry Davy cô lập đầu tiên năm 1807 bằng cách điện phân Sodium hydroxide. Natri là nguyên tố phổ biến thứ 6 trong vỏ Trái đất và có mặt trong nhiều loại khoáng vật như Felspat, Sodalite và đá muối.</Text>
                        </View>
                    </View>
                    
                    <View style={{display: slide[1]}}>
                        <View>
                            <Image  style={style.tttnImg} source={require('../assets/na.png')}/>
                        </View>
                        <View>
                            <Text style={{fontSize:16, backgroundColor:'#f0da9c', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 15, borderRadius:15}}>Natri ở điều kiện nhiệt độ và áp suất tiêu chuẩn là một kim loại mềm, màu bạc, khi bị oxy hóa chuyển sang màu trắng xám, trừ khi nó được cất giữ trong dầu hoặc khí trơ. Natri có thể bị cắt dễ dàng bằng dao và là một chất dẫn nhiệt và dẫn điện tốt.</Text>
                        </View>
                    </View>
                    <View style={{display: slide[2]}}>
                        <View style={{backgroundColor:'#f0da9c', marginTop: 10, borderRadius: 15, paddingBottom: 10}}>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:10, paddingLeft:10, paddingRight: 10, marginTop: 10, borderBottomWidth: 1, borderBottomColor:'#bc8462' }}>Natri là kim loại kiềm mạnh Natri là kim loại kiềm mạnh</Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Tác dụng với oxi tạo thành oxit:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>4Na + O&#8322; &rarr; 2Na&#8322;O</Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Tác dụng với nước tạo thành bazo và khí hidro:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>2Na + 2H&#8322;O &rarr; 2NaOH + H&#8322;</Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Tác dụng với phi kim tạo thành muối:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>2Na + Cl&#8322; &rarr; 2NaCl </Text>
                            <Text style={{fontSize:16, paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Tác dụng với axit:</Text>
                            <Text style={{fontSize:16, textAlign:'center', paddingTop:5, paddingBottom:5, paddingLeft:10, paddingRight: 10, marginTop: 10, }}>Na + 2HCl &rarr; NaCl + H&#8322;</Text>
                        </View>
                    </View>
                </View>   
                <View style={style.part}>
                    <Text style={style.categories}>Ứng Dụng</Text>
                    <View style={{flexDirection:'row', AlignItem:'center'}}>
                        <View style={{flex:1, flexGrow: 3}}>
                            <Image  style={{width: '100%', resizeMode: 'contain', height: 100, marginTop: 20}} source={require('../assets/sodiumChloride.png')}/>
                            <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Sodium Chloride</Text>
                        </View>
                        <View style={{flex:2, flexGrow: 6, paddingLeft:10, paddingRight:10, marginTop: 20}}>
                            <Text style={{fontSize:14, backgroundColor: '#f0da9c', padding:10, borderRadius: 10}}>
                                Nhiều hợp chất Natri được sử dụng rộng rãi như Sodium Hydroxide để làm xà phòng và tẩy trắng nhựa bị ố vàng. Sodium Chloride dùng làm chất tan băng và là một chất dinh dưỡng (muối ăn).
                            </Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ paddingLeft:10, paddingRight:10, marginTop: 20}}>
                            
                            <Text style={{fontSize:14, backgroundColor: '#f0da9c', padding:10, borderRadius: 10}}>
                            Natri là một nguyên tố thiết yếu cho tất cả động vật và một số thực vật. Ở động vật, các ion Natri được dùng làm chất đối nghịch với các ion Kali để tạo thành các điện tích trên các màng tế bào, cho phép dẫn truyền các xung thần kinh khi điện tích bị mất đi. Nhu cầu thiết yếu của Natri đối với động vật làm cho nó được phân loại là một khoáng vô cơ trong khẩu phần ăn
                            </Text>

                            <Image  style={{width: '100%', resizeMode: 'contain', height: 100}} source={require('../assets/sodiumHydroxide.png')}/>
                            <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Sodium Hydroxide</Text>
                        </View>
                    </View>
                </View>  
                <View style={style.part}>
                    <Text style={style.categories}>Điều chế</Text>
                    <View style={{flexDirection:'row', AlignItem:'center'}}>
                        <View style={{flex:1, flexGrow: 4}}>
                            <Image  style={{width: '100%', resizeMode: 'contain', height: 100}} source={require('../assets/sodiumCarbonate.png')}/>
                            <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Sodium Carbonate</Text>
                        </View>
                        <View style={{flex:2, flexGrow: 6, paddingLeft:10, paddingRight:10, marginTop: 20}}>
                            <Text style={{fontSize:14, backgroundColor: '#f0da9c', padding:10, borderRadius: 10}}>
                                Natri kim loại được sản xuất thương mại đầu tiên năm 1855 bằng cách khử Carbon nhiệt từ Natri Carbonate ở 1100&deg;C, hay còn gọi là công nghệ Deville:
                            </Text>
                            
                        </View>
                        
                    </View>
                    <Text style={{fontSize:16, backgroundColor: '#f0da9c', padding:10, marginTop:10, marginBottom:20, textAlign: 'center', borderRadius: 10}}>
                        Na&#8322;CO&#8323; + 2C &rarr; 2Na + 3CO
                    </Text>
                    <View style={{flexDirection:'row', AlignItem:'center',borderTopColor: '#bc8462', borderTopWidth: 1}}>
                        <View style={{flex:1, flexGrow: 7, paddingLeft:10, paddingRight:10, marginTop: 20}}>
                            <Text style={{fontSize:16, backgroundColor: '#f0da9c', padding:10, borderRadius: 10}}>
                                Natri hiện được sản xuất thương mại bằng phương pháp điện phân Natri Chloride nóng chảy:
                            </Text>
                        </View>
                        <View style={{flex:2, flexGrow: 4}}>
                            <Image  style={{width: '100%', resizeMode: 'contain', height: 100}} source={require('../assets/sodiumChloride_nc.png')}/>
                            <Text style={{fontSize:16, fontWeight:'500', textAlign:'center'}}>Sodium Chloride</Text>
                        </View>
                    </View>
                    <Text style={{fontSize:16, backgroundColor: '#f0da9c', padding:10, marginTop:10, marginBottom:20, textAlign: 'center', borderRadius: 10}}>
                        2NaCl &rarr; 2Na + Cl&#8322;
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