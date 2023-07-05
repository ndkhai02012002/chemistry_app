
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function CaNO32() {
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
            <Text style={style.atomName}>Canxi nitrat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên: Canxi nitrat</Text>
                        <Text style={style.ctntText}>Danh pháp: Calcium Nitrate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: Ca(NO&#8323;)&#8322;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 164</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/cano32.png')} />
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
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Ca(NO&#8323;)&#8322; là một loại muối màu trắng, không mùi.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Hòa tan trong acetone và rượu, nhưng không hòa tan trong axit nitric đậm đặc.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/cano32_tcvl.png')} />
                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 561°C (khan)</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: 132°C</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khối lượng riêng: 2,5 g/cm³</Text>
                        
        
                    </View>
                    
                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Khi sưởi ấm, nó trải qua quá trình phân hủy và giải phóng nitơ dioxide và oxy:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Ca(NO&#8323;)&#8322; &rarr; CaO + 2NO&#8322; + 1/2O&#8322;</Text>
                        
   

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Khi thêm canxi nitrat vào natri cacbonat, kết tủa canxi cacbonat được hình thành để lại natri nitrat trong dung dịch:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Ca(NO&#8323;)&#8322; + Na&#8322;CO&#8323; &rarr; 2NaNO&#8323; + CaCO&#8323;</Text>
                    </View>
                    

                </View>

                <View style={{ display: slide[1] }}>
                    
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong sản xuất phân bón:</Text>
                        <Image style={style.tttnImg} source={require('../assets/cano32_ud1.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Ca(NO&#8323;)&#8322; dùng làm nguyên liệu trong phân bón, nó cung cấp cho cây 2 chất dinh dưỡng quan trọng là Canxi và Nito. Canxi là yếu tố dinh dưỡng rất quan trọng cho cây trong quá trình sinh trưởng và phát triển là thành phần của một số men hoặc kích thích hoạt động của các men trong quá trình trao đổi chất trong cây. Nitơ là chất quan trọng và cần thiết nhất ngay từ đầu của thực vật nó hình thành tế bào, đẩy nhanh quá trình quang hợp, tăng mạnh sự phát triển bộ rễ, lá, tán.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Keo tụ cao su:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Canxi nitrat là một chất kết tụ rất phổ biến trong sản xuất cao su, đặc biệt trong quá trình nhúng.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Xử lý nước thải:</Text>
                        <Image style={style.tttnImg} source={require('../assets/cano32_ud2.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Ca(NO&#8323;)&#8322; - Canxi Nitrat được sử dụng trong việc chuẩn bị nước thải để ngăn ngừa sự phát tán mùi. Với sự có mặt của nitrate, quá trình trao đổi chất cho sulfat dừng lại, do đó ngăn ngừa sự hình thành hydrogen sulphide. </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Bê tông:</Text>
                        <Image style={style.tttnImg} source={require('../assets/cano32_ud3.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Canxi nitrat được sử dụng trong phụ gia bê tông tăng tốc. Việc sử dụng bê tông và vữa này dựa trên hai ảnh hưởng. Các ion canxi tăng tốc độ hình thành canxi hydroxit và do đó lượng mưa và thiết lập. Các ion nitrat dẫn đến sự hình thành của sắt hydroxit, có lớp bảo vệ giảm sự ăn mòn của gia cố bê tông.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f8f8f8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Canxi nitrat có thể được sử dụng như là một phần của hỗn hợp muối nóng chảy. Điển hình là các hỗn hợp nhị phân của canxi nitrat và kali nitrat hoặc các hỗn hợp ba pha bao gồm cả natri nitrat. Những muối nóng chảy có thể được sử dụng để thay thế dầu nhiệt trong các nhà máy điện mặt trời tập trung cho việc chuyển giao nhiệt, nhưng chủ yếu là những người được sử dụng trong lưu trữ nhiệt.</Text>
                        <Image style={style.tttnImg} source={require('../assets/cano32_ud4.png')} />
                    </View>
                        
             
                        
             
                </View>
                <View style={{ display: slide[2] }}>

                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Khi canxi cacbonat thường được gọi là đá vôi được xử lý bằng axit nitric, canxi nitrat được hình thành:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>CaCO&#8323; + 2HNO&#8323; &rarr; Ca(NO&#8323;)&#8322; + H&#8322;O + CO&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Canxi nitrat cũng được hình thành khi dung dịch amoni nitrat được trộn với dung dịch canxi hydroxit. Phản ứng như sau:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2NH&#8324;NO&#8323; + Ca(OH)&#8322; &rarr; Ca(NO&#8323;)&#8322; + 2NH&#8324;OH</Text>
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
        backgroundColor: '#8eafc0',
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