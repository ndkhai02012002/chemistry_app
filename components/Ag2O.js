import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Ag2O() {
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
            <Text style={style.atomName}>Bạc(I) Oxit</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Bạc(I) Oxit</Text>
                        <Text style={style.ctntText}>Danh pháp: Silver(I) Oxide</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Ag&#8322;O</Text>
                        <Text style={style.ctntText}>Phân tử khối: 232</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/ag2o.png')} />
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
                    <View style={{ backgroundColor: '#8d6d44', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Là chất rắn màu nâu đen, không mùi</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Nhiệt độ nóng chảy: 300&deg;C</Text>


                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/ag2o_tcvl.png')} />
                        </View>
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#8d6d44', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>

                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điều kiện phản ứng: Ở điều kiện bình thường</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Cách thực hiện phản ứng:  Ozon oxi hóa bạc thành bạc oxit:</Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Ag; + O&#8323; &rarr; Ag&#8322;O + O&#8322;</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Hiện tượng nhận biết phản ứng:</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>+ Giải phóng khí oxi</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>+ Xuất hiện chất rắn màu đen</Text>

            
                    </View>

                   


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#8d6d44', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Oxide này được sử dụng trong một số loại pin bạc-Oxide, như là "bạc(II) Oxide", AgO. Trong hóa học hữu cơ, Oxide bạc được sử dụng làm chất oxy hóa nhẹ. Ví dụ, nó oxy hóa andehit thành các axit cacboxylic. Phản ứng như vậy thường có hiệu quả tốt nhất khi bạc Oxide được điều chế tại chỗ từ bạc nitrat và kiềm hydroxide.</Text>

                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/ag2o_ud.png')} />

                        </View>
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#8d6d44', marginTop: 10, borderRadius: 15, paddingBottom: 20 }}>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Một cách điều chế bạc(I) Oxide là điều chế nó từ phản ứng giữa lithi hydroxide với dung dịch bạc nitrat rất loãng. Ngoài ra, bạc(I) Oxide còn có thể được điều chế bằng cách cho dung dịch bạc nitrat phản ứng với một hydroxide của kim loại kiềm. Phản ứng này không thể tạo ra lượng đáng kể bạc hydroxide, do có phản ứng phân hủy của hợp chất này, theo phản ứng: </Text>
                        <Text style={{ color: 'white', fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2AgOH &rarr; Ag&#8322;O + H&#8322;O (pK = 2,875)</Text>
                        <Text style={{ color: 'white', fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Giống như nhiều hợp chất bạc, Oxide bạc có tính ánh kim. Hợp chất này bị phân hủy ở nhiệt độ cao, trên 280℃.</Text>
            
                       
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
        height: 150
    }
})