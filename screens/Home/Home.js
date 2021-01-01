import React,{useState} from "react";
import { View, Text, ScrollView } from "react-native";
import HeaderHome from "../../components/Home/HeaderHome";
import SwiperHome from "../../components/Home/SwiperHome";
import SectionFood from "./Section/SectionFood";
import SectionFood1 from "./Section/SectionFood1";
import SectionFooter from "./Section/SectionFooter";
import SectionIntro from "./Section/SectionIntro";
import SectionMenu from "./Section/SectionMenu";
import SectionSearch from "./Section/SectionSearch";

const food = [
    { id: 1, name: "Lẩu ngon tại nhà" },
    { id: 2, name: "Buffer 199K" },
    { id: 3, name: "Nướng Hàn Quốc" },
    { id: 4, name: "Nướng Hàn Quốc" },
    { id: 5, name: "Nướng Hàn Quốc" },
]

const food1 = [
    { id: 1, name: "Lẩu " },
    { id: 2, name: "Buffer " },
    { id: 3, name: "Nướng " },
    { id: 4, name: "Nướng Hàn Quốc" },
    { id: 5, name: "Nướng Hàn Quốc" },
]

const Home = (props) => {
    const [menu, setMenu] = useState(food);
    const [menu1, setMenu1] = useState(food1);

    return (
        <View style={{backgroundColor:'#fff',marginBottom:75}}>
            <HeaderHome navigation={props.navigation}/>
            {/* <SectionSearch /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <SwiperHome />
                <SectionMenu navigation={props.navigation}/>
                <SectionFood menu={menu} navigation={props.navigation}/>
                <SectionFood1 menu1={menu1} navigation={props.navigation}/>
                <SectionIntro />
                <SectionFooter />
            </ScrollView>
        </View>
    )

}

export default Home;