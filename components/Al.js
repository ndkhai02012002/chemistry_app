import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function Al() {
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
            <Text style={style.atomName}>Al</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: : Nhôm (Alumini) </Text>
                        <Text style={style.ctntText}>p = e = Z = 13</Text>
                        <Text style={style.ctntText}>Nguyên tử khối: 27</Text>
                        <Text style={style.ctntText}>Hóa trị: III</Text>
                        <Text style={style.ctntText}>Số lớp electron: 3</Text>
                        <Text style={style.ctntText}>Số electron lớp ngoài cùng: 3</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/al.png')} />
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
                            <Image style={style.tttnImg} source={require('../assets/boxide.png')} />
                            <Text style={{fontSize:18, fontWeight:'500', textAlign:'center'}}>Boxide</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 10, paddingBottom: 10, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>
                            Nhôm là nguyên tố phổ biến thứ ba (sau oxy và silic), và là
                            kim loại phổ biến nhất trong vỏ Trái Đất. Nhôm chiếm khoảng
                            17% khối lớp rắn của Trái Đất. Kim loại nhôm hiếm phản ứng
                            hóa học mạnh với các mẫu quặng và có mặt hạn chế trong các
                            môi trường khử cực mạnh. Tuy vậy, nó vẫn được tìm thấy ở
                            dạng hợp chất trong hơn 2700 loại khoáng vật khác nhau.
                            Quặng chính chứa nhôm là boxide.

                        </Text>
   



                    </View>
                </View>

                <View style={{ display: slide[1] }}>

                    <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 20 }} source={require('../assets/nhom.png')} />

                    <View style={{ marginTop: 15 , backgroundColor: '#e8e8e8', borderRadius: 10}}>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10,marginTop: 10, borderRadius: 15 }}>
                        - Nhôm là một kim loại mềm, nhẹ với màu trắng bạc ánh
                        kim mờ, vì có một lớp mỏng oxy hóa tạo thành rất nhanh
                        khi nó để trần ngoài không khí.
                    </Text>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>
                        - Tỷ trọng riêng của nhôm chỉ khoảng một phần ba sắt hay đồng;
                        nó rất mềm (chỉ sau vàng), dễ uốn (đứng thứ sáu); nó có khả năng
                        chống ăn mòn và bền vững do lớp oxide bảo vệ.

                    </Text>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', paddingTop: 5, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>
                        - Nó cũng không nhiễm từ và không cháy khi để ở ngoài không khí
                        ở điều kiện thông thường
                    </Text>
                    </View>

                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#e8e8e8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với oxi tạo thành oxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>4Al + 3O&#8322; (t&deg;)&rarr; 2Al&#8322;O&#8323;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với phi kim tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Al + 3Cl&#8322; (t&deg;)&rarr; 2AlCl&#8323;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với axit tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Al + 6HCl &rarr; AlCl&#8323; + 3H&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với bazo tạo thành muối:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2Al + 2NaOH + 2H&#8322;O &rarr; 2NaAlO&#8322; + 3H&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Tác dụng với muối tạo thành muối mới và kim loại mới:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Al + Cucl&#8322; &rarr; AlCl&#8323; + Cu</Text>
                    </View>
                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Ứng Dụng</Text>
                <View style={{ marginTop: 15 , backgroundColor: '#e8e8e8', borderRadius: 10}}>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginTop: 5, borderRadius: 10 }}>
                    - Hợp kim nhôm, nhẹ và bền, được dùng để chế tạo các chi tiết của phương tiện vận tải (ô tô, máy bay, xe tải, toa xe tàu hỏa, tàu biển, v.v.)

                    </Text>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginTop: 5, borderRadius: 10 }}>
                    - Các đường dây tải điện (mặc dù độ dẫn điện của nó chỉ bằng 60% của đồng, nó nhẹ hơn nếu tính theo khối lượng và rẻ tiền hơn)

                    </Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 200, marginTop: 20, marginBottom: 20 }} source={require('../assets/al_ud.png')} />
                    </View>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginTop: 5, borderRadius: 10 }}>
                    - Nhôm dạng bột thông thường được sử dụng để tạo màu bạc trong sơn. 

                    </Text>
                    <Text style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginBottom: 5, marginTop: 5, borderRadius: 10 }}>
                    - Các bông nhôm có thể cho thêm vào trong sơn lót, chủ yếu là trong xử lý gỗ, khi khô đi, các bông nhôm sẽ tạo ra một lớp kháng nước rất tốt.

                    </Text>

                </View>
            </View>
            <View style={style.part}>
                <Text style={style.categories}>Điều chế</Text>
                <View style={{  backgroundColor: '#e8e8e8', padding: 10, marginTop: 15, marginBottom: 5, borderRadius: 10 }}>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10, fontWeight:'500' }}>
                    - Tinh chế quặng boxit (làm sạch nguyên liệu): 
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2,paddingLeft: 5, marginBottom: 2, borderRadius: 10 }}>
                        + Đây là giai đoạn quan trọng vì nếu không làm sạch nguyên liệu nhôm điều chế ra có lẫn tạp chất sẽ dễ bị ăn mòn hóa học và ăn mòn điện hóa.
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2,paddingLeft: 5, marginBottom: 2, borderRadius: 10 }}>
                        + Nguyên liệu được cho tác dụng với dung dịch xút nóng:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2NaOH + Al&#8322;O&#8323; &rarr; 2NaAlO&#8322; + H&#8322;O
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                    2NaOH + SiO&#8322; &rarr; 2NaSiO&#8323; + H&#8322;O
                    </Text>
                    <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                        <Image style={{ width: '100%', resizeMode: 'contain', height: 150, marginTop: 20, marginBottom: 20 }} source={require('../assets/al_dc.png')} />
                    </View>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 }}>
                    + Sau đó sục khí CO&#8322; dư vào dung dịch:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                    NaAlO&#8322; + CO&#8322; + 2H&#8322;O &rarr; NaHCO&#8323; + Al(OH)&#8323;
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                    NaOH + CO&#8322; &rarr; NaHCO&#8323;
                    </Text>
                    
    
                </View>
                <View style={{ fontSize: 16, backgroundColor: '#e8e8e8', padding: 10, marginTop: 5, marginBottom: 5, borderRadius: 10 }}>
                <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10,  fontWeight:'500' }}>
                - Điện phân Al&#8322;O&#8323; nóng chảy:
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, borderRadius: 10 , paddingLeft: 5}}>
                    + Điện phân nóng chảy Al&#8322;O&#8323; có mặt criolit Na&#8323;AlF&#8326; (giúp hạ nhiệt độ nóng chảy của Al&#8322;O&#8323; từ 2050&deg;C xuống 900&deg;C; tăng độ dẫn điện do tạo thành nhiều ion hơn; tạo lớp bảo vệ không cho O&#8322; phản ứng với Al nóng chảy):                       
                    </Text>
                    <Text style={{ fontSize: 16, marginTop: 2, marginBottom: 2, textAlign: 'center', borderRadius: 10 }}>
                        2Al&#8322;O&#8323; &rarr; 4Al + 3O&#8322;
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
        backgroundColor: '#62773d',
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
        height: 120,
    }
})