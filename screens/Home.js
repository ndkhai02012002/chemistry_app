import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export function Home({navigation}) {
    return (
        <LinearGradient colors={['#f0da9c', '#cbd1b4']} start={{x: 0,y: 0}} end={{x: 1,y: 1}} style={style.container}>
            <Text style={{zIndex:5, fontSize:26, fontWeight: '600', color:'#bc8462', backgroundColor: '#f0da9c', paddingBottom: 10,marginTop: 40, paddingLeft: 20,borderBottomLeftRadius: 20, borderBottomRightRadius: 20, paddingTop:5, paddingRight: 20, textShadowOffset: {width: 2, height: 2}, textShadowRadius: 10,textShadowColor: '#f2b374',}}>Sổ Tay Hóa Học</Text>
            <View style={style.bgContent}>
                <View>
                    <Image style={style.bgImg} source={require('../assets/18.jpg')}/>
                    <View style={{position:'absolute', bottom: -130, alignItems: 'center', width:'100%'}}>
                        <Text style={{fontSize: 16, paddingLeft: 20, paddingRight: 20, fontWeight:'500', color: '#64666a', paddingTop: 10, paddingBottom: 10 ,backgroundColor: '#f2b874', marginLeft: 20, marginRight: 20, textAlign:'center',marginBottom: 10, borderRadius: 20}}>Sổ tay hóa học là một ứng dụng giúp bạn tìm hiều về các chất hóa học</Text>
                        <Text style={{fontSize: 16, paddingLeft: 20, paddingRight: 20, fontWeight:'500', color: '#64666a', paddingTop: 10, paddingBottom: 10 ,backgroundColor: '#f2b874', marginLeft: 20, marginRight: 20, marginBottom: 20,textAlign:'center', borderRadius: 15}}>Trực quan hóa bằng những hình ảnh thực tế</Text>
                        <Text style={{fontSize: 16, paddingLeft: 20, paddingRight: 20, fontWeight:'500', color: '#64666a', paddingTop: 10, paddingBottom: 10, marginLeft: 20, marginRight: 20, textAlign:'center', borderRadius: 15}}>Tìm hiểu về các chất hóa học tại đây!</Text>
                        <TouchableOpacity style={{padding:20, backgroundColor:'#05d3d2', borderRadius:20}} onPress={() => navigation.navigate('Tìm Kiếm')}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight:'600'}}>KHÁM PHÁ NGAY</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#f0da9c',
        alignItems: 'center',
        flex: 1,
    },
    bgContent: {
        position: 'absolute',
        zIndex: 2,
        bottom: 200,
        height: 600,
        width: '100%'
    },
    
    bgImg: {
    
        width: '100%',
        resizeMode: 'contain',
        height: '100%'
    },
})