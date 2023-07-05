import { StyleSheet, View, Text, ScrollView } from "react-native"
import { useState, useEffect } from "react"
import { ButtonAtom } from "../components/ButtonAtom"
import { ButtonCompounds } from "../components/ButtonCompounds"
import { Searchbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
var he = require('he');

export function BlockAtom({ navigation }) {

    const init_Atom = [
        {
            formula: 'H',
            ntk: 1,
            vi_name: 'Hidro',
            eng_name: 'Hydrogen',
            kl: '1.00794'
        },
        {
            formula: 'C',
            ntk: 6,
            vi_name: 'Cacbon',
            eng_name: 'Carbon',
            kl: '12.0107'
        },
        {
            formula: 'N',
            ntk: 7,
            vi_name: 'Nito',
            eng_name: 'Nitrogen',
            kl: '14.007'
        },
        {
            formula: 'O',
            ntk: 8,
            vi_name: 'Oxi',
            eng_name: 'Oxygen',
            kl: '15.999'
        },
        {
            formula: 'Na',
            ntk: 11,
            vi_name: 'Natri',
            eng_name: 'Sodium',
            kl: '22.98976'
        },
        {
            formula: 'Mg',
            ntk: 12,
            vi_name: 'Magie',
            eng_name: 'Magnesium',
            kl: '24.3050'
        },
        {
            formula: 'Al',
            ntk: 13,
            vi_name: 'Nhôm',
            eng_name: 'Aluminum',
            kl: '26.981538'
        },
        {
            formula: 'Si',
            ntk: 14,
            vi_name: 'Silic',
            eng_name: 'Silicon',
            kl: '28.086'
        },
        {
            formula: 'P',
            ntk: 15,
            vi_name: 'Photpho',
            eng_name: 'Phosphorus',
            kl: '30.974'
        },
        {
            formula: 'S',
            ntk: 16,
            vi_name: 'Lưu huỳnh',
            eng_name: 'Sulfur',
            kl: '32.065'
        },
        {
            formula: 'K',
            ntk: 19,
            vi_name: 'Kali',
            eng_name: 'Potassium',
            kl: '39.0983'
        },
        {
            formula: 'Ca',
            ntk: 20,
            vi_name: 'Canxi',
            eng_name: 'Calsium',
            kl: '40.078'
        },
        {
            formula: 'Fe',
            ntk: 26,
            vi_name: 'Sắt',
            eng_name: 'Iron',
            kl: '55.845'
        },
        {
            formula: 'Cu',
            ntk: 29,
            vi_name: 'Đồng',
            eng_name: 'Cropper',
            kl: '63.55'
        },
        {
            formula: 'Zn',
            ntk: 30,
            vi_name: 'Kẽm',
            eng_name: 'Zinc',
            kl: '65.38'
        },
        {
            formula: 'Ag',
            ntk: 47,
            vi_name: 'Bạc',
            eng_name: 'Silver',
            kl: '107.8682'
        },
        {
            formula: 'Ba',
            ntk: 56,
            vi_name: 'Bari',
            eng_name: 'Barium',
            kl: '137.328'
        },
    ]

    const init_Compound = [
        {
            formula: he.decode('Ag&#8322;SO&#8324;'),
            form: 'ag2so4',
            ntk: 312,
            vi_name: 'Bạc Sunfat',
            eng_name: 'Silver Sulfate',
        },
        {
            formula: 'AgCl',
            form: 'agcl',
            ntk: 143.5,
            vi_name: 'Bạc Clorua',
            eng_name: 'Silver Chloride',
        },
        {
            formula: he.decode('Ag&#8322;CO&#8323;'),
            form: 'ag2co3',
            ntk: 276,
            vi_name: 'Bạc Cacbonat',
            eng_name: 'Silver Carbonate',
        },
        {
            formula: he.decode('Ag&#8323;PO&#8324;'),
            form: 'ag3po4',
            ntk: 276,
            vi_name: 'Bạc Photphat',
            eng_name: 'Silver Carbonate',
        },
        {
            formula: he.decode('AgNO&#8323;'),
            form: 'agno3',
            ntk: 170,
            vi_name: 'Bạc Nitrat',
            eng_name: 'Silver Nitrate',
        },
        {
            formula: he.decode('Al(OH)&#8323;'),
            form: 'al(oh)3',
            ntk: 107,
            vi_name: 'Nhôm Hidroxit',
            eng_name: 'Aluminium Hydroxide',
        },
        {
            formula: he.decode('Ba(OH)&#8322;'),
            form: 'ba(oh)2',
            ntk: 171,
            vi_name: 'Bari Hidroxit',
            eng_name: 'Barium Hydroxide',
        },
        {
            formula: he.decode('Ca(OH)&#8322;'),
            form: 'ca(oh)2',
            ntk: 74,
            vi_name: 'Canxi Hidroxit',
            eng_name: 'Calcium Hydroxide',
        },
        {
            formula: he.decode('Cu(OH)&#8322;'),
            form: 'cu(oh)2',
            ntk: 98,
            vi_name: 'Đồng(II) Hidroxit',
            eng_name: 'Copper(II) Hydroxide',
        },
        {
            formula: he.decode('Fe(OH)&#8322;'),
            form: 'fe(oh)2',
            ntk: 90,
            vi_name: 'Sắt(II) Hidroxit',
            eng_name: 'Iron(II) Hydroxide',
        },
        {
            formula: he.decode('Fe(OH)&#8323;'),
            form: 'fe(oh)3',
            ntk: 107,
            vi_name: 'Sắt(III) Hidroxit',
            eng_name: 'Iron(III) Hydroxide',
        },
        {
            formula: he.decode('H&#8322;O'),
            form: 'h2o',
            ntk: 18,
            vi_name: 'Nước',
            eng_name: 'Oxidane',
        },
        {
            formula: 'KOH',
            form: 'koh',
            ntk: 56,
            vi_name: 'Kali Hidroxit',
            eng_name: 'Potassium Hydroxide',
        },
        {
            formula: he.decode('Mg(OH)&#8322;'),
            form: 'mg(oh)2',
            ntk: 58,
            vi_name: 'Magie Hidroxit',
            eng_name: 'Magnesium Hydroxide',
        },
        {
            formula: he.decode('Zn(OH)&#8322;'),
            form: 'zn(oh)2',
            ntk: 99,
            vi_name: 'Kẽm Hidroxit',
            eng_name: 'Zinc Hydroxide',
        },
        {
            formula: 'NaOH',
            form: 'naoh',
            ntk: 40,
            vi_name: 'Natri Hidroxit',
            eng_name: 'Sodium Hydroxide',
        },
        /*----------------*/
        {
            formula: he.decode('Al&#8322;(CO&#8323;)&#8323;'),
            form: 'al2(co3)3',
            ntk: 234,
            vi_name: 'Nhôm Cacbonat',
            eng_name: 'Aluminium Carbonate',
        },
        {
            formula: he.decode('BaCO&#8323;'),
            form: 'baco3',
            ntk: 197,
            vi_name: 'Bari Cacbonat',
            eng_name: 'Barium Carbonate',
        },
        {
            formula: he.decode('CaCO&#8323;'),
            form: 'caco3',
            ntk: 100,
            vi_name: 'Canxi Cacbonat',
            eng_name: 'Calcium Carbonate',
        },
        {
            formula: he.decode('CuCO&#8323;'),
            form: 'cuco3',
            ntk: 124,
            vi_name: 'Đồng(II) Cacbonat',
            eng_name: 'Copper(II) Carbonate',
        },
        {
            formula: he.decode('FeCO&#8322;'),
            form: 'feco2',
            ntk: 116,
            vi_name: 'Sắt(II) Cacbonat',
            eng_name: 'Fero Carbonate',
        },
        {
            formula: he.decode('Fe&#8322;(CO&#8323;)&#8323;'),
            form: 'fe2(co3)3',
            ntk: 292,
            vi_name: 'Sắt(III) Cacbonat',
            eng_name: 'Ferric Carbonate',
        },
        {
            formula: he.decode('H&#8322;CO&#8323;'),
            form: 'h2co3',
            ntk: 62,
            vi_name: 'Axit Cacbonic',
            eng_name: 'Acid Carbonic',
        },
        {
            formula: he.decode('K&#8322;CO&#8323;'),
            form: 'k2co3',
            ntk: 138,
            vi_name: 'Kali Cacbonat',
            eng_name: 'Potassium Carbonate',
        },
        {
            formula: he.decode('MgCO&#8323;'),
            form: 'mgco3',
            ntk: 84,
            vi_name: 'Magie Cacbonat',
            eng_name: 'Magnesium Carbonate',
        },
        {
            formula: he.decode('ZnCO&#8323;'),
            form: 'znco3',
            ntk: 125,
            vi_name: 'Kẽm Cacbonat',
            eng_name: 'Zinc Carbonate',
        },
        {
            formula: he.decode('Na&#8322;CO&#8323;'),
            form: 'na2co3',
            ntk: 242,
            vi_name: 'Natri Cacbonat',
            eng_name: 'Sodium Carbonate',
        },
        /*----------------*/
        {
            formula: he.decode('AlPO&#8324;'),
            form: 'alpo4',
            ntk: 122,
            vi_name: 'Nhôm Photphat',
            eng_name: 'Aluminium Phosphate',
        },
        {
            formula: he.decode('Ba&#8323;(PO&#8324;)&#8322;'),
            form: 'ba3(po4)2',
            ntk: 601,
            vi_name: 'Bari Photphat',
            eng_name: 'Barium Phosphate',
        },
        {
            formula: he.decode('Ca&#8323;(PO&#8324;)&#8322;'),
            form: 'ca3(po4)2',
            ntk: 310,
            vi_name: 'Canxi Photphat',
            eng_name: 'Calcium Phosphate',
        },
        {
            formula: he.decode('Cu&#8323;(PO&#8324;)&#8322;'),
            form: 'cu3(po4)2',
            ntk: 382,
            vi_name: 'Đồng(II) Photphat',
            eng_name: 'Copper(II) Phosphate',
        },
        {
            formula: he.decode('Fe&#8323;(PO&#8324;)&#8322;'),
            form: 'fe3(po4)2',
            ntk: 358,
            vi_name: 'Sắt(II) Photphat',
            eng_name: 'Fero Phosphate',
        },

        {
            formula: he.decode('H&#8323;PO&#8324;'),
            form: 'h3po4',
            ntk: 98,
            vi_name: 'Axit Photphoric',
            eng_name: 'Phosphoric Acid',
        },
        {
            formula: he.decode('K&#8323;PO&#8324;'),
            form: 'k3po4',
            ntk: 212,
            vi_name: 'Kali Photphat',
            eng_name: 'Potassium Phosphate',
        },
        {
            formula: he.decode('Mg&#8323;(PO&#8324;)&#8322;'),
            form: 'mg3(po4)2',
            ntk: 262,
            vi_name: 'Magie Photphat',
            eng_name: 'Magnesium Phosphate',
        },
        {
            formula: he.decode('Zn&#8323;(PO&#8324;)&#8322;'),
            form: 'zn3(po4)2',
            ntk: 385,
            vi_name: 'Kẽm Photphat',
            eng_name: 'Zinc Phosphate',
        },
        {
            formula: he.decode('Na&#8323;PO&#8324;'),
            form: 'na3po4',
            ntk: 141,
            vi_name: 'Natri Photphat',
            eng_name: 'Sodium Phosphate',
        },
        /*----------------*/
        {
            formula: he.decode('Al&#8322;(SO&#8324;)&#8323;'),
            form: 'al2(so4)3',
            ntk: 342,
            vi_name: 'Nhôm Sunfat',
            eng_name: 'Aluminium Sulfate',
        },
        {
            formula: he.decode('BaSO&#8324;'),
            form: 'baso4',
            ntk: 233,
            vi_name: 'Bari Sunfat',
            eng_name: 'Barium Sulfate',
        },
        {
            formula: he.decode('CaSO&#8324;'),
            form: 'caso4',
            ntk: 136,
            vi_name: 'Canxi Sunfat',
            eng_name: 'Calcium Sulfate',
        },
        {
            formula: he.decode('CuSO&#8324;'),
            form: 'cuso4',
            ntk: 160,
            vi_name: 'Đồng(II) Sunfat',
            eng_name: 'Copper(II) Sulfate',
        },
        {
            formula: he.decode('FeSO&#8324;'),
            form: 'feso4',
            ntk: 152,
            vi_name: 'Sắt(II) Sunfat',
            eng_name: 'Fero Sulfate',
        },
        {
            formula: he.decode('Fe&#8322;(SO&#8324;)&#8323;'),
            form: 'fe2(so4)3',
            ntk: 400,
            vi_name: 'Sắt(III) Sunfat',
            eng_name: 'Ferric Sulfate',
        },
        {
            formula: he.decode('H&#8322;SO&#8324;'),
            form: 'h2so4',
            ntk: 98,
            vi_name: 'Axit Sunfuric',
            eng_name: 'Sulfuric Acid',
        },
        {
            formula: he.decode('K&#8322;SO&#8324;'),
            form: 'k2so4',
            ntk: 174,
            vi_name: 'Kali Sunfat',
            eng_name: 'Potassium Sulfate',
        },
        {
            formula: he.decode('MgSO&#8324;'),
            form: 'mgso4',
            ntk: 120,
            vi_name: 'Magie Sunfat',
            eng_name: 'Magnesium Sulfate',
        },
        {
            formula: he.decode('ZnSO&#8324;'),
            form: 'znso4',
            ntk: 160,
            vi_name: 'Kẽm Sunfat',
            eng_name: 'Zinc Sulfate',
        },
        {
            formula: he.decode('Na&#8322;SO&#8324;'),
            form: 'na2so4',
            ntk: 142,
            vi_name: 'Natri Sunfat',
            eng_name: 'Sodium Sulfate',
        },
        {
            formula: he.decode('Ag&#8322;SO&#8324;'),
            form: 'ag2so4',
            ntk: 312,
            vi_name: 'Bạc Sunfat',
            eng_name: 'Silver Sulfate',
        },
        /*----------------*/
        {
            formula: he.decode('AlCl&#8323;'),
            form: 'alcl3',
            ntk: 133.5,
            vi_name: 'Nhôm Clorua',
            eng_name: 'Aluminium Chloride',
        },
        {
            formula: he.decode('BaCl&#8322;'),
            form: 'bacl2',
            ntk: 208,
            vi_name: 'Bari Clorua',
            eng_name: 'Barium Chloride',
        },
        {
            formula: he.decode('CaCl&#8322;'),
            form: 'cacl2',
            ntk: 111,
            vi_name: 'Canxi Clorua',
            eng_name: 'Calcium Chloride',
        },
        {
            formula: he.decode('CuCl&#8322;'),
            form: 'cucl2',
            ntk: 135,
            vi_name: 'Đồng(II) Clorua',
            eng_name: 'Copper(II) Chloride',
        },
        {
            formula: he.decode('FeCl&#8322;'),
            form: 'fecl2',
            ntk: 127,
            vi_name: 'Sắt(II) Clorua',
            eng_name: 'Fero Chloride',
        },
        {
            formula: he.decode('FeCl&#8323;'),
            form: 'fecl3',
            ntk: 162.5,
            vi_name: 'Sắt(III) Clorua',
            eng_name: 'Ferric Chloride',
        },
        {
            formula: 'HCl',
            form: 'hcl',
            ntk: 36.5,
            vi_name: 'Axit Clohidric',
            eng_name: 'Clorane',
        },
        {
            formula: he.decode('KCl'),
            form: 'kcl',
            ntk: 74.5,
            vi_name: 'Kali Clorua',
            eng_name: 'Potassium Chloride',
        },
        {
            formula: he.decode('MgCl&#8322;'),
            form: 'mgcl2',
            ntk: 95,
            vi_name: 'Magie Clorua',
            eng_name: 'Magnesium Chloride',
        },
        {
            formula: he.decode('ZnCl&#8322;'),
            form: 'zncl2',
            ntk: 136,
            vi_name: 'Kẽm Clorua',
            eng_name: 'Zinc Chloride',
        },
        {
            formula: 'NaCl',
            form: 'nacl',
            ntk: 58.5,
            vi_name: 'Natri Clorua',
            eng_name: 'Sodium Chloride',
        },

        /*----------------*/
        {
            formula: he.decode('Ba(NO&#8323;)&#8322;'),
            form: 'ba(no3)2',
            ntk: 261,
            vi_name: 'Bari Nitrat',
            eng_name: 'Barium Nitrate',
        },
        {
            formula: he.decode('Ca(NO&#8323;)&#8322;'),
            form: 'ca(no3)2',
            ntk: 164,
            vi_name: 'Canxi Nitrat',
            eng_name: 'Calcium Nitrate',
        },
        {
            formula: he.decode('Cu(NO&#8323;)&#8322;'),
            form: 'cu(no3)2',
            ntk: 180,
            vi_name: 'Đồng(II) Nitrat',
            eng_name: 'Copper(II) Nitrate',
        },
        {
            formula: he.decode('Fe(NO&#8323;)&#8322;'),
            form: 'fe(no3)2',
            ntk: 180,
            vi_name: 'Sắt(II) Nitrat',
            eng_name: 'Iron(II) Nitrate',
        },
        {
            formula: he.decode('Fe(NO&#8323;)&#8323;'),
            form: 'fe(no3)3',
            ntk: 242,
            vi_name: 'Sắt(III) Nitrat',
            eng_name: 'Iron(III) Nitrate',
        },
        {
            formula: he.decode('HNO&#8323;'),
            form: 'hno3',
            ntk: 63,
            vi_name: 'Axit Nitric',
            eng_name: 'Acid Nitric',
        },
        {
            formula: he.decode('KNO&#8323;'),
            form: 'kno3',
            ntk: 101,
            vi_name: 'Kali Nitrat',
            eng_name: 'Potassium Nitrate',
        },
        {
            formula: he.decode('Mg(NO&#8323;)&#8322;'),
            form: 'mg(no3)2',
            ntk: 148,
            vi_name: 'Magie Nitrat',
            eng_name: 'Magnesium Nitrate',
        },
        {
            formula: he.decode('Zn(NO&#8323;)&#8322;'),
            form: 'zn(no3)2',
            ntk: 189,
            vi_name: 'Kẽm Nitrat',
            eng_name: 'Zinc Nitrate',
        },
        {
            formula: he.decode('NaNO&#8323;'),
            form: 'nano3',
            ntk: 85,
            vi_name: 'Natri Nitrat',
            eng_name: 'Sodium Nitrate',
        },
        /*----------------*/
        {
            formula: he.decode('Ag&#8322;O'),
            form: 'ag2o',
            ntk: 232,
            vi_name: 'Bạc Oxit',
            eng_name: 'Silver(I) Oxide',
        },
        {
            formula: he.decode('Al&#8322;O&#8323;'),
            form: 'al2o3',
            ntk: 102,
            vi_name: 'Nhôm Oxit',
            eng_name: 'Nhôm Oxide',
        },
        {
            formula: he.decode('BaO'),
            form: 'bao',
            ntk: 153,
            vi_name: 'Bari Oxit',
            eng_name: 'Bari Oxide',
        },
        {
            formula: he.decode('CaO'),
            form: 'cao',
            ntk: 56,
            vi_name: 'Canxi Oxit',
            eng_name: 'Calxium Oxide',
        },
        {
            formula: he.decode('CO'),
            form: 'co',
            ntk: 28,
            vi_name: 'Cacbon Oxit',
            eng_name: 'Carbon Monoxide',
        },
        {
            formula: he.decode('CO&#8322;'),
            form: 'co2',
            ntk: 44,
            vi_name: 'Cacbon Dioxit',
            eng_name: 'Carbon Dioxide',
        },
        {
            formula: he.decode('CuO'),
            form: 'cuo',
            ntk: 80,
            vi_name: 'Đồng(II) Oxit',
            eng_name: 'Copper(II) Oxide',
        },
        {
            formula: he.decode('Fe&#8322;O&#8323;'),
            form: 'fe2o3',
            ntk: 160,
            vi_name: 'Sắt(III) Oxit',
            eng_name: 'Iron(III) Oxide',
        },
        {
            formula: he.decode('FeO'),
            form: 'feo',
            ntk: 72,
            vi_name: 'Sắt(II) Oxit',
            eng_name: 'Iron(II) Oxide',
        },
        {
            formula: he.decode('K&#8322;O'),
            form: 'k2o',
            ntk: 94,
            vi_name: 'Kali Oxit',
            eng_name: 'Kali Oxide',
        },


        {
            formula: he.decode('MgO'),
            form: 'mgo',
            ntk: 40,
            vi_name: 'Magie Oxit',
            eng_name: 'Magnesium Oxide',
        },
        {
            formula: he.decode('Na&#8322;O'),
            form: 'na2o',
            ntk: 62,
            vi_name: 'Natri Oxit',
            eng_name: 'Natri Oxide',
        },
        {
            formula: he.decode('NH&#8323;'),
            form: 'nh3',
            ntk: 17,
            vi_name: 'Amoniac',
            eng_name: 'Ammonia',
        },
        {
            formula: he.decode('NO'),
            form: 'no',
            ntk: 30,
            vi_name: 'Nitơ Oxit',
            eng_name: 'Nitric Oxide',
        },
        {
            formula: he.decode('NO&#8322;'),
            form: 'no2',
            ntk: 46,
            vi_name: 'Nitơ Dioxit',
            eng_name: 'Nitric Dioxide',
        },
        {
            formula: he.decode('SO&#8322;'),
            form: 'so2',
            ntk: 64,
            vi_name: 'Lưu huỳnh Dioxit',
            eng_name: 'Sulfur Dioxide',
        },
        {
            formula: he.decode('SO&#8323;'),
            form: 'so3',
            ntk: 80,
            vi_name: 'Lưu huỳnh Trioxit',
            eng_name: 'Sulfur Trioxide',
        },
        {
            formula: he.decode('ZnO'),
            form: 'zno',
            ntk: 81,
            vi_name: 'Kẽm Oxit',
            eng_name: 'Kẽm Oxide',
        },
    ]

    const [atoms, setAtom] = useState(init_Atom)
    const [compounds, setCompound] = useState(init_Compound)
    const [searchQuery, setSearchQuery] = useState('');
    const list_atoms = atoms.map((atom) => <ButtonAtom atom={atom} navigation={navigation} />
    )
    const list_compounds = compounds.map((compound) => <ButtonCompounds compound={compound} navigation={navigation} />
    )
    const onChangeSearch = query => {
        setSearchQuery(query)
    };
    useEffect(() => {
        if (searchQuery === "") {
            setAtom(init_Atom);
            setCompound(init_Compound)
        }
        else {
            let arr_atom = [];
            let arr_compound = [];
            for (let atom of init_Atom) {
                if (atom.formula.toLowerCase().includes(searchQuery.toLowerCase()) || atom.vi_name.toLowerCase().includes(searchQuery.toLowerCase()) || atom.eng_name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    arr_atom.push(atom)
                }
            }
            for (let compound of init_Compound) {
                if (compound.form.toLowerCase().includes(searchQuery.toLowerCase()) || compound.vi_name.toLowerCase().includes(searchQuery.toLowerCase()) || compound.eng_name.toLowerCase().includes(searchQuery.toLowerCase())) {
                    arr_compound.push(compound)
                }
            }
            
            setAtom(arr_atom)
            setCompound(arr_compound)
        }
    }, [searchQuery]);

    return (
        <ScrollView>
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={['#00b3f5', '#a9f398', '#f5d35f']}
                style={style.container}><Searchbar
                        style={{ backgroundColor: '#e6e6e6', width:'90%', borderRadius: 30, marginLeft: 15, marginRight: 15, marginTop: 10 }}
                        placeholder="Tìm Kiếm"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />
                <View style={{width:'100%', display:'flex', alignItems:'center'}}>
                     <Text style={{backgroundColor:'#64666a',left:0, position: 'relative', color: 'white', fontSize: 24, fontWeight: '600',  borderColor: '#f8f8f8', borderWidth: 3,  width: 150, textAlign: 'center', marginTop: 20, paddingBottom: 5, paddingTop: 5, borderRadius: 15 }}>Đơn chất</Text>
                </View>
               
                <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', paddingBottom: 20 }}>
                    
                    
                    <View style={style.container}>
                        {list_atoms.length > 0 ? list_atoms : <Text style={{width:'100%', fontSize: 24, textAlign: 'center', fontWeight: '500', marginTop: 20}}> Không có chất nào hợp lệ</Text>}
                    </View>
                </View>
                <View style={{ }}>
                <View style={{width:'100%', display:'flex', alignItems:'center'}}>
                     <Text style={{backgroundColor:'#64666a',left:0, position: 'relative', color: 'white', fontSize: 24, fontWeight: '600',  borderColor: '#f8f8f8', borderWidth: 3,  width: 150, textAlign: 'center', marginTop: 20, paddingBottom: 5, paddingTop: 5, borderRadius: 15 }}>Hợp chất</Text>
                </View>
                    <View style={style.container}>
                        {list_compounds.length > 0 ? list_compounds : <Text style={{width:'100%', fontSize: 24, textAlign: 'center', fontWeight: '500', marginTop: 20, marginBottom: 20}}> Không có chất nào hợp lệ</Text>}
                        
                    </View>
                </View>
            </LinearGradient>


        </ScrollView>

    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center'
    }
})