import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function NaNO3() {
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
            <Text style={style.atomName}>Natri Nitrat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Natri Nitrat</Text>
                        <Text style={style.ctntText}>Danh pháp: Sodium Nitrate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: NaNO&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 85</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/nano3.png')} />
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
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- NaNO&#8323; tồn tại ở dạng tinh thể màu trắng, không mùi</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Tính tan: Tan trong nước tan rất tốt trong amoniac; tan được trong cồn.</Text>
                         <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_tcvl.png')} />
                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm nóng chảy: 308°C (khan) </Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Điểm sôi: 380°C</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Khối lượng riêng: 2,257 g/cm&sup3;</Text>

                       
                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- NaNO&#8323; thể hiện tính oxy hóa khử khi cho kẽm tác dụng với NaNO&#8323;:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>NaNO&#8323; + 7NaOH + 4Zn &rarr; Na&#8322;ZnO&#8322; + NH&#8323; + 2H&#8322;O</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- NaNO&#8323; có phản ứng trao đổi với H&#8322;SO&#8324; đặc. Hơi HNO&#8323; thoát ra được dẫn vào bình làm lạnh và ngưng tụ:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>H&#8322;SO&#8324; + NaNO&#8323; &rarr; HNO&#8323; + NaHSO&#8324;</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_tchh.png')} />
                        </View><Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- NaNO&#8323; với phương trình hóa học hữu cơ khi Cu tác dụng với H&#8322;SO&#8324;/NaNO&#8323;:</Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>3Cu + 4H&#8322;SO&#8324; + 2NaNO&#8323; &rarr; Na&#8322;SO&#8324; + 2NO + 3CuSO&#8324; + 4H&#8322;O</Text>

                        

                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Bảo quản thịt:</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_ud1.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Natri nitrat ngăn chặn sự phát triển của vi khuẩn làm hỏng và duy trì màu đỏ cho thịt. Tuy nhiên, các nhà khoa học đã phát hiện ra rằng Natri nitrat cũng như các chất bảo quản thực phẩm khác đều sẽ chứa những rủi ro ảnh hưởng đến sức khỏe con người</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Sản xuất kính:</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_ud2.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Công dụng của nó được ứng dụng vào bước đầu tiên là ngâm kính trong dung dịch natri nitrat hòa tan. Kính trải qua giai đoạn ngâm natri nitrat có khả năng chống co giãn và chống uốn cong tốt hơn.</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Phân bón:</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_ud3.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Natri nitrat có khả năng giúp cây trồng phát triển nhanh hơn. Vì vậy phân bón sử dụng natri nitrat làm thành phần. Hợp chất này chứa vừa đủ lượng nitơ để xúc tác cho sự phát triển của cây. Tuy nhiên, hãy cẩn thận khi sử dụng natri nitrat vì quá nhiều nitơ cũng không tốt cho cây.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Dược phẩm:</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_ud4.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Hóa chất natri nitrat hạn chế sử dụng trong dược phẩm. Nhưng có thể tìm thấy hợp chất này trong thuốc nhỏ mắt. Thông thường natri nitrat được sử dụng như một hỗn hợp giúp kiểm soát, không phải là thành phần chính. Điều này là do nitơ là nguyên tố cần thiết trong thuốc nhỏ mắt.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Thuốc nổ:</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>Natri nitrat là một thành phần cung cấp nhiên liệu cho tên lửa. Hóa chất này được biết là được sử dụng để thay thế kali nitrat trong đông cơ đẩy tên lửa. </Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/nano3_ud5.png')} />
                        </View>


                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f8f8f8', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Nitrat natri cũng được tổng hợp công nghiệp bằng cách trung hòa axit nitric với soda ash thông qua phương trình phản ứng dưới đây:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>2HNO&#8323; + Na&#8322;CO&#8323; &rarr; 2NaNO&#8323; + H&#8322;O + CO&#8322;</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>Hoặc bằng cách trộn một lượng cân bằng hóa học amoni nitrat và sodium hydroxide hoặc sodium bicarbonate:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>NH&#8324;NO&#8323; + NaOH  &rarr; NaNO&#8323; + NH&#8324;OH</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>NH&#8324;NO&#8323; + NaHCO&#8323; &rarr; NaNO&#8323; + NH&#8324;HCO&#8323;</Text>
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
        backgroundColor: '#5bc5a2',
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