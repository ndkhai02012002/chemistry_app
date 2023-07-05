import { Image, StyleSheet, Text, View, ScrollView, Button } from "react-native"
import { useState } from "react"

export function ZnCO3() {
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
            <Text style={style.atomName}>Kẽm Cacbonat</Text>
            <View style={style.part}>
                <Text style={style.categories}>Cấu tạo nguyên tử</Text>
                <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                    <View style={style.ctnt}>
                        <Text style={style.ctntText}>Tên nguyên tử: Kẽm Cacbonat</Text>
                        <Text style={style.ctntText}>Danh pháp: Zinc Carbonate</Text>
                        <Text style={style.ctntText}>Công thức hóa học: ZnCO&#8323;</Text>
                        <Text style={style.ctntText}>Phân tử khối: 125</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Image style={style.ctntImg} source={require('../assets/znco3.png')} />
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
                    <Text style={style.categories}>Tính chất vật lí</Text>
                    <View style={{ backgroundColor: '#f3f3f3', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Màu sắc: trắng.</Text>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Trạng thái thông thường: chất rắn kết tinh</Text>

                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Độ nóng chảy: Ở 140ºC, nó bị phân hủy mà không tan chảy.</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/znco3_tcvl.png')} />
                        </View><Text style={{ fontSize: 16, paddingLeft: 10, paddingRight: 10, marginTop: 10, borderRadius: 15 }}>- Độ hòa tan: Thực tế không tan trong nước. Tan trong dung dịch axit loãng, kiềm và muối amoni. Không hòa tan trong amoniac, rượu và axeton.</Text>

                    </View>

                    <Text style={style.categories}>Tính chất hóa học</Text>
                    <View style={{ backgroundColor: '#f3f3f3', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Phản ứng với axit tạo thành carbon dioxide:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnCO&#8323; + 2H&#8314; &rarr; Zn&sup2;&#8314; + CO&#8322;&uarr; + H&#8322;O</Text>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Nó hòa tan trong bazơ tạo thành hydroxit, một phần hòa tan tạo thành ion zincate:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnCO&#8323; + 2OH&#8315; &rarr; Zn(OH)&#8322; + CO&#8323;&sup2;&#8315;</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>Zn(OH)&#8322; + H&#8322;O + OH&#8315; &rarr; Zn(OH)&#8323; + H&#8322;</Text>
                        <View style={{ flexDirection: 'row', AlignItem: 'center' }}>
                            <Image style={style.tttnImg} source={require('../assets/znco3_tchh.png')} />
                        </View>
                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>- Nó không dễ cháy. Khi bị nung nóng để phân hủy, nó tạo ra oxit kẽm và carbon dioxide, nhưng nó có thể thải ra carbon monoxide(CO):</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnCO&#8323; (t&deg;)&rarr; ZnO + CO&#8322;&uarr;</Text>


                    </View>


                </View>

                <View style={{ display: slide[1] }}>

                    <View style={{ backgroundColor: '#f3f3f3', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>

                        <Text style={{ fontSize: 16, backgroundColor: '#f3f3f3', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Nó được sử dụng làm chất độn chống cháy cho cao su và nhựa tiếp xúc với nhiệt độ cao</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f3f3f3', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- ZnCO&#8323; đóng vai trò như một chất làm se, sát trùng và bảo vệ vết thương tại chỗ ở động vật.Nó cũng giúp ngăn ngừa các bệnh do thiếu kẽm, vì vậy nó được sử dụng như một chất bổ sung trong chế độ ăn uống của một số động vật, miễn là lượng được sử dụng trong tiêu chuẩn do các cơ quan y tế thiết lập.</Text>
                        <Image style={style.tttnImg} source={require('../assets/znco3_ud1.png')} />
                        <Text style={{ fontSize: 16, backgroundColor: '#f3f3f3', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Một số loại kem đánh răng có thành phần là tinh thể nano kẽm cacbonat và hydroxyapatite được bôi thường xuyên lên răng sẽ làm giảm quá mẫn hiệu quả hơn những loại có chứa fluor.</Text>
                        <Text style={{ fontSize: 16, backgroundColor: '#f3f3f3', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Hợp chất này làm cho nó có thể thu được một số sản phẩm dược phẩm. Nó được áp dụng cho vùng da bị viêm dưới dạng bột hoặc kem dưỡng da.</Text>
                        <Image style={style.tttnImg} source={require('../assets/znco3_ud2.png')} />
                    </View>




                </View>
                <View style={{ display: slide[2] }}>
                    <View style={{ backgroundColor: '#f3f3f3', marginTop: 10, borderRadius: 15, paddingBottom: 10 }}>

                        <Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Nó thu được bằng cách nghiền khoáng smithsonite, trước đây được gọi là kẽm spar.</Text>
                        <Image style={style.tttnImg} source={require('../assets/mgco3_dc.png')} /><Text style={{ fontSize: 16, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 15, borderRadius: 15 }}>- Nó cũng có thể được điều chế bằng cách trộn dung dịch natri cacbonat với muối kẽm, chẳng hạn như kẽm sunfat. Natri sunfat vẫn bị hòa tan và kẽm cacbonat kết tủa:</Text>
                        <Text style={{ fontSize: 16, textAlign: 'center', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, marginTop: 10, }}>ZnSO&#8324; + Na&#8322;CO&#8323; &rarr; ZnCO&#8323;&darr; + Na&#8322;S&#8324;</Text>

                        
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
        backgroundColor: '#9f9fb8',
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