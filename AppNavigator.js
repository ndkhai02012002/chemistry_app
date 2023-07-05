import { BlockAtom } from './screens/BlockAtom';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Natri } from "./components/Natri";
import { Zn } from './components/Zn';
import { Bari } from './components/Bari';
import { Home } from './screens/Home'
import { Ag } from './components/Ag';
import { Canxi } from './components/Ca';
import { Cu } from './components/Cu';
import { Hidro } from './components/H2';
import { Kali } from './components/Kali';
import { Magie } from './components/Mg';
import { Al } from './components/Al';
import { Fe } from './components/Fe';
import { Cacbon } from './components/C';
import { Nito } from './components/N2';
import { Oxi } from './components/O2';
import { Photpho } from './components/P';
import { Sulfur } from './components/S';
import { Si } from './components/Si';
import { Aluminium_Hydroxide } from './components/Aluminium_Hydroxide';
import { Bari_Hidroxit } from './components/Bari_Hidroxit';
import { Canxi_Hidroxit } from './components/Canxi_Hidroxit';
import { Cropper_Hidroxit } from './components/Cropper_Hidroxit';
import { Iron2_Hidroxit } from './components/Iron2_Hidroxit';
import { Iron3_Hidroxit } from './components/Iron3_Hidroxit';
import { H2O } from './components/H2O';
import { Kali_Hidroxit } from './components/Kali_Hidroxit';
import { Magie_Hidroxit } from './components/Magie_Hidroxit';
import { Natri_Hidroxit } from './components/Natri_Hidroxit';
import { Zn_Hidroxit } from './components/Zn_Hidroxit';
import { Ag2O } from './components/Ag2O';
import { Al2O3 } from './components/Al2O3';
import { BaO } from './components/BaO';
import { CaO } from './components/CaO';
import { CO } from './components/CO';
import { CO2 } from './components/CO2';
import { CuO } from './components/CuO';
import { Fe2O3 } from './components/Fe2O3';
import { FeO } from './components/FeO';
import { K2O } from './components/K2O';
import { MgO } from './components/MgO';
import { Na2O } from './components/Na2O';
import { NH3 } from './components/NH3';
import { NO } from './components/NO';
import { NO2 } from './components/NO2';
import { SO2 } from './components/SO2';
import { SO3 } from './components/SO3';
import { ZnO } from './components/ZnO';
import { Al2CO33 } from './components/Al2CO33';
import { BaCO3 } from './components/BaCO3';
import { CaCO3 } from './components/CaCO3';
import { CuCO3 } from './components/CuCO3';
import { Fe2CO3 } from './components/Fe2CO3';
import { FeCO3 } from './components/FeCO3';
import { H2CO3 } from './components/H2CO3';
import { K2CO3 } from './components/K2CO3';
import { MgCO3 } from './components/MgCO3';
import { Na2CO3 } from './components/Na2CO3';
import { ZnCO3 } from './components/ZnCO3';

import { H3PO4 } from './components/H3PO4';
import { K3PO4 } from './components/K3PO4';
import { Na3PO4 } from './components/Na3PO4';
import { Ba3PO42 } from './components/Ba3PO42';
import { Ca3PO42 } from './components/Ca3PO42';
import { Mg3PO42 } from './components/Mg3PO42';
import { AlPO4 } from './components/AlPO4';
import { Zn3PO42 } from './components/Zn3PO42';
import { Fe3PO42 } from './components/Fe3PO42';
import { Cu3PO42 } from './components/Cu3PO42';

import { H2SO4 } from './components/H2SO4';
import { K2SO4 } from './components/K2SO4';
import { Na2SO4 } from './components/Na2SO4';
import { BaSO4 } from './components/BaSO4';
import { CaSO4 } from './components/CaSO4';
import { MgSO4 } from './components/MgSO4';
import { Al2SO43 } from './components/Al2SO43';
import { ZnSO4 } from './components/ZnSO4';
import { FeSO4 } from './components/FeSO4';
import { Fe2SO43 } from './components/Fe2SO43';
import { CuSO4 } from './components/CuSO4';
import { Ag2SO4 } from './components/Ag2SO4';

import { HCl } from './components/HCl';
import { KCl } from './components/KCl';
import { NaCl } from './components/NaCl';
import { BaCl2 } from './components/BaCl2';
import { CaCl2 } from './components/CaCl2';
import { MgCl2 } from './components/MgCl2';
import { AlCl3 } from './components/AlCl3';
import { ZnCl2 } from './components/ZnCl2';
import { FeCl2 } from './components/FeCl2';
import { FeCl3 } from './components/FeCl3';
import { CuCl2 } from './components/CuCl2';
import { AgCl } from './components/AgCl';

import { HNO3 } from './components/HNO3';
import { KNO3 } from './components/KNO3';
import { NaNO3 } from './components/NaNO3';
import { BaNO32 } from './components/BaNO32';
import { CaNO32 } from './components/CaNO32';
import { MgNO32 } from './components/MgNO32';
import { ZnNO32 } from './components/ZnNO32';
import { FeNO32 } from './components/FeNO32';
import { FeNO33 } from './components/FeNO33';
import { CuNO32 } from './components/CuNO32';

import { Ag2CO3 } from './components/Ag2CO3';
import { Ag3PO4 } from './components/Ag3PO4';
import { AgNO3 } from './components/AgNO3';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={Home} />
      <Stack.Screen name="Tìm Kiếm" component={BlockAtom} />
      <Stack.Screen name="Natri" component={Natri} />
      <Stack.Screen name="Kẽm" component={Zn} />
      <Stack.Screen name="Bari" component={Bari} />
      <Stack.Screen name="Bạc" component={Ag} />
      <Stack.Screen name="Hidro" component={Hidro} />
      <Stack.Screen name="Canxi" component={Canxi} />
      <Stack.Screen name="Đồng" component={Cu} />
      <Stack.Screen name="Kali" component={Kali} />
      <Stack.Screen name="Magie" component={Magie} />
      <Stack.Screen name="Nhôm" component={Al} />
      <Stack.Screen name="Sắt" component={Fe} />
      <Stack.Screen name="Cacbon" component={Cacbon} />
      <Stack.Screen name="Nito" component={Nito} />
      <Stack.Screen name="Oxi" component={Oxi} />
      <Stack.Screen name="Photpho" component={Photpho} />
      <Stack.Screen name="Lưu huỳnh" component={Sulfur} />
      <Stack.Screen name="Silic" component={Si} />
      <Stack.Screen name="Nhôm Hidroxit" component={Aluminium_Hydroxide} />
      <Stack.Screen name="Bari Hidroxit" component={Bari_Hidroxit} />
      <Stack.Screen name="Canxi Hidroxit" component={Canxi_Hidroxit} />
      <Stack.Screen name="Đồng(II) Hidroxit" component={Cropper_Hidroxit} />
      <Stack.Screen name="Sắt(II) Hidroxit" component={Iron2_Hidroxit} />
      <Stack.Screen name="Sắt(III) Hidroxit" component={Iron3_Hidroxit} />
      <Stack.Screen name="Nước" component={H2O} />
      <Stack.Screen name="Kali Hidroxit" component={Kali_Hidroxit} />
      <Stack.Screen name="Magie Hidroxit" component={Magie_Hidroxit} />
      <Stack.Screen name="Natri Hidroxit" component={Natri_Hidroxit} />
      <Stack.Screen name="Kẽm Hidroxit" component={Zn_Hidroxit} />
      <Stack.Screen name="Bạc Oxit" component={Ag2O} />
      <Stack.Screen name="Nhôm Oxit" component={Al2O3} />
      <Stack.Screen name="Bari Oxit" component={BaO} />
      <Stack.Screen name="Canxi Oxit" component={CaO} />
      <Stack.Screen name="Cacbon Oxit" component={CO} />
      <Stack.Screen name="Cacbon Dioxit" component={CO2} />
      <Stack.Screen name="Đồng(II) Oxit" component={CuO} />
      <Stack.Screen name="Sắt(III) Oxit" component={Fe2O3} />
      <Stack.Screen name="Sắt(II) Oxit" component={FeO} />
      <Stack.Screen name="Kali Oxit" component={K2O} />
      <Stack.Screen name="Magie Oxit" component={MgO} />
      <Stack.Screen name="Natri Oxit" component={Na2O} />
      <Stack.Screen name="Amoniac" component={NH3} />
      <Stack.Screen name="Nitơ Oxit" component={NO} />
      <Stack.Screen name="Lưu huỳnh Dioxit" component={SO2} />
      <Stack.Screen name="Lưu huỳnh Trioxit" component={SO3} />
      <Stack.Screen name="Kẽm Oxit" component={ZnO} />
      <Stack.Screen name="Nhôm Cacbonat" component={Al2CO33} />
      <Stack.Screen name="Bari Cacbonat" component={BaCO3} />
      <Stack.Screen name="Canxi Cacbonat" component={CaCO3} />
      <Stack.Screen name="Đồng(II) Cacbonat" component={CuCO3} />
      <Stack.Screen name="Sắt(III) Cacbonat" component={Fe2CO3} />
      <Stack.Screen name="Sắt(II) Cacbonat" component={FeCO3} />
      <Stack.Screen name="Axit Cacbonic" component={H2CO3} />
      <Stack.Screen name="Kali Cacbonat" component={K2CO3} />
      <Stack.Screen name="Magie Cacbonat" component={MgCO3} />
      <Stack.Screen name="Natri Cacbonat" component={Na2CO3} />
      <Stack.Screen name="Kẽm Cacbonat" component={ZnCO3} />

      <Stack.Screen name="Axit Photphoric" component={H3PO4} />
      <Stack.Screen name="Kali Photphat" component={K3PO4} />
      <Stack.Screen name="Natri Photphat" component={Na3PO4} />
      <Stack.Screen name="Bari Photphat" component={Ba3PO42} />
      <Stack.Screen name="Canxi Photphat" component={Ca3PO42} />
      <Stack.Screen name="Magie Photphat" component={Mg3PO42} />
      <Stack.Screen name="Nhôm Photphat" component={AlPO4} />
      <Stack.Screen name="Kẽm Photphat" component={Zn3PO42} />
      <Stack.Screen name="Sắt(II) Photphat" component={Fe3PO42} />
      <Stack.Screen name="Đồng(II) Photphat" component={Cu3PO42} />

      <Stack.Screen name="Axit Sunfuric" component={H2SO4} />
      <Stack.Screen name="Kali Sunfat" component={K2SO4} />
      <Stack.Screen name="Natri Sunfat" component={Na2SO4} />
      <Stack.Screen name="Bari Sunfat" component={BaSO4} />
      <Stack.Screen name="Canxi Sunfat" component={CaSO4} />
      <Stack.Screen name="Magie Sunfat" component={MgSO4} />
      <Stack.Screen name="Nhôm Sunfat" component={Al2SO43} />
      <Stack.Screen name="Kẽm Sunfat" component={ZnSO4} />
      <Stack.Screen name="Sắt(II) Sunfat" component={FeSO4} />
      <Stack.Screen name="Sắt(III) Sunfat" component={Fe2SO43} />
      <Stack.Screen name="Đồng(II) Sunfat" component={CuSO4} />
      <Stack.Screen name="Bạc Sunfat" component={Ag2SO4} />

      <Stack.Screen name="Axit Clohidric" component={HCl} />
      <Stack.Screen name="Kali Clorua" component={KCl} />
      <Stack.Screen name="Natri Clorua" component={NaCl} />
      <Stack.Screen name="Bari Clorua" component={BaCl2} />
      <Stack.Screen name="Canxi Clorua" component={CaCl2} />
      <Stack.Screen name="Magie Clorua" component={MgCl2} />
      <Stack.Screen name="Nhôm Clorua" component={AlCl3} />
      <Stack.Screen name="Kẽm Clorua" component={ZnCl2} />
      <Stack.Screen name="Sắt(II) Clorua" component={FeCl2} />
      <Stack.Screen name="Sắt(III) Clorua" component={FeCl3} />
      <Stack.Screen name="Đồng(II) Clorua" component={CuCl2} />
      <Stack.Screen name="Bạc Clorua" component={AgCl} />

      <Stack.Screen name="Axit Nitric" component={HNO3} />
      <Stack.Screen name="Kali Nitrat" component={KNO3} />
      <Stack.Screen name="Natri Nitrat" component={NaNO3} />
      <Stack.Screen name="Bari Nitrat" component={BaNO32} />
      <Stack.Screen name="Canxi Nitrat" component={CaNO32} />
      <Stack.Screen name="Magie Nitrat" component={MgNO32} />
      <Stack.Screen name="Kẽm Nitrat" component={ZnNO32} />
      <Stack.Screen name="Sắt(II) Nitrat" component={FeNO32} />
      <Stack.Screen name="Sắt(III) Nitrat" component={FeNO33} />
      <Stack.Screen name="Đồng(II) Nitrat" component={CuNO32} />

      <Stack.Screen name="Bạc Cacbonat" component={Ag2CO3} />
      <Stack.Screen name="Bạc Photphat" component={Ag3PO4} />
      <Stack.Screen name="Bạc Nitrat" component={AgNO3} />
      <Stack.Screen name="Nitơ Dioxit" component={NO2} />
    </Stack.Navigator>
  )     
}
export function PTHH() {
  return (
    <h1>PTHH</h1>
  )
}

export function BTH() {
  return (
    <h1>BTH</h1>
  )
}

export function BTT() {
  return (
    <h1>BTT</h1>
  )
}