
import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function CaCO3() {
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
            <Text style={style.atomName}>Canxi Cacbonat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên: Canxi Cacbonat</Text>
                        <Text style={style.ctntText}>Danh pháp: Calsium Carbonate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: CaCO&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 100</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/caco3.png')} />
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
                    <View style={{ backgroundColor: '#e6e6e6', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- CaCO&#8323; tồn tại ở dạng bột màu trắng.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Không tan trong nước, axit.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/baco3_tcvl.png')} />
                        </View>
            
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: Phân hủy </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 825°C</Text>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khối lượng riêng: 2,83 g/cm³</Text>
                    </View>
                    
                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#e6e6e6', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Canxi cacbonat có chung tính chất đặc trưng của các chất cacbonat. Đặc biệt là:</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>+ Tác dụng với axit mạnh, giải phóng cacbon dioxit:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>CaCO&#8323; + 2HCl &rarr; CaCl&#8322; + CO&#8322;&uarr; + H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>+ Khi bị nung nóng, giải phóng cacbon dioxit (trên 825°C trong trường hợp của CaCO3), để tạo canxi oxit, thường được gọi là vôi sống:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>CaCO&#8323; &rarr; CaO + CO&#8322;&uarr;</Text>
                        <Image style={style.tttnImg} source={require('../assets/caco3_tchh.png')} /><Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>+ Canxi cacbonat sẽ phản ứng với nước có hòa tan cacbon dioxit để tạo thành canxi bicacbonat tan trong nước:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>CaCO&#8323; + CO&#8322;&uarr; + H&#8322;O  &rarr; Ca(HCO&#8323;)&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Phản ứng này quan trọng trong sự ăn mòn núi đá vôi và tạo ra các hang động, gây ra nước cứng.</Text>
                        
                    </View>
                    

                </View>

                <View style={{ display: slide[1] }}>
                    
                    <View style={{ backgroundColor: '#e6e6e6', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Chất này được sử dụng chủ yếu trong công nghiệp xây dựng như đá xây dựng, cẩm thạch hoặc là thành phần cầu thành của xi măng hoặc từ nó sản xuất ra vôi. Trong đá vôi thường có cả magnesi carbonat. Nó cũng thường được gọi là đá phấn vì nó là thành phần chính của phấn viết bảng.</Text>
                        <Image style={style.tttnImg} source={require('../assets/caco3_ud1.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong ngành thủy tinh, sản xuất kính:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Bột đá CaCO&#8323; là một trong những thành phần chính của thủy tinh (chiếm 20-25%)</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Giúp ổn định, điều chỉnh độ nhớt, tăng độ bền của thủy tinh</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Nâng cao khả năng chống chịu của thủy tinh trong môi trường tự nhiên</Text>
                        <Image style={style.tttnImg} source={require('../assets/caco3_ud2.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong ngành gốm sứ:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Nguyên liệu để sản xuất gốm cần phải có canxi oxit bởi CaO nóng chảy ở 1050 độ C (điều này giúp cho quá trình nung giảm được độ co rút, nâng cao độ bền cơ học và hóa học của sản phẩm gốm sứ). Canxi Cacbonat CaCO3 chính là nguồn cung cấp đó.</Text>
                        <Image style={style.tttnImg} source={require('../assets/caco3_ud3.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong ngành nhựa, cao su:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Bột đá vôi được sử dụng rộng rãi trong nhựa PVC cứng và được ứng dụng nhiều nhất trong sản xuất ống nhựa và tấm trần.Sử dụng sản phẩm canxi cacbonat làm gia tăng độ bền sản phẩm, độ phân tán trong hóa chất nhựa tốt hơn, độ bóng sản phẩm đạt được tối ưu, cải tiến quá trình sản xuất. </Text>
                        <Image style={style.tttnImg} source={require('../assets/caco3_ud4.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong ngành sản xuất chất tẩy rửa:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Độ cứng của CaCO&#8323; rất phù hợp khi được sử dụng trong ngành chất tẩy rửa so với các loại khoáng chất khác. </Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Với chất tẩy rửa dạng bột : CaCO&#8323; giúp dạng này trơn hơn, dễ sử dụng hơn</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Với chất tẩy rửa dạng kem : cần loại bột đá vôi CaCO&#8323; sáng và mịn hơn so với dạng bột</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong ngành xử lý môi trường:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Cách thức : CaCO&#8323; giúp khử lưu huỳnh trong đường ống khí, xử lý nguồn nước uống, hoặc vôi hóa ao hồ để trung hòa axit, kim loại nặng, độc hại trong ao nuôi.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Phân huỷ xác tảo, các chất lơ lửng bẩn trong ao nuôi, giúp cân bằng môi trường nước, ổn định độ pH.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Ổn định màu nước, hạn chế có váng, làm sạch nước, tăng lượng oxy hoà tan(DO) trong nước.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Hạn chế mầm bệnh, vi khuẩn có hại trong nước, vi khuẩn phát sáng trong ao nuôi.</Text>
                        <Image style={style.tttnImg} source={require('../assets/caco3_ud5.png')} />
                    
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Trong ngành chăn nuôi nông nghiệp:</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ CaCO&#8323; được xem như là chất phụ gia cho ngành sản xuất sản phẩm thức ăn chăn nuôi cho gia súc. Bên cạnh đó, Canxi cacbonat cũng là nguồn dinh dưỡng cần thiết cho quá trình hình thành trứng và sự phát triển của xương đối với các loại gia cầm.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ CaCO&#8323; được sử dụng như 1 loại phân bón giúp cây trồng phát triển, ổn định độ pH cho đất, cung cấp chất dinh dưỡng cho cây.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#e6e6e6', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>+ Ngoài ra, CaCO&#8323; còn được sử dụng như chất phụ gia cho ngành sản xuất thuốc trừ sâu bởi loại khoáng này khá thân thiện với môi trường.</Text>
                    </View>
                        
             
                        
             
                </View>
                <View style={{ display: slide[2] }}>

                    <View style={{ backgroundColor: '#e6e6e6', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Đa số calci carbonat được sử dụng trong công nghiệp là được khai thác từ đá mỏ hoặc đá núi. Calci carbonat tinh khiết (ví dụ loại dùng làm thuốc hoặc dược phẩm), được điều chế từ nguồn đá mỏ (thường là cẩm thạch) hoặc nó có thể được tạo ra bằng cách cho khí carbon dioxide chạy qua dung dịch calci hydroxide theo phản ứng như sau:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Ca(OH)&#8322; + CO&#8322; &rarr; CaCO&#8323;&darr; + H&#8322;O</Text>
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