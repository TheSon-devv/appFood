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

const Home = (props) => {

    return (
        <View style={{backgroundColor:'#fff',marginBottom:75}}>
            <HeaderHome navigation={props.navigation}/>
            {/* <SectionSearch /> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <SwiperHome />
                <SectionMenu navigation={props.navigation}/>
                <SectionFood navigation={props.navigation}/>
                {/* <SectionFood1 menu1={menu1} navigation={props.navigation}/> */}
                <SectionIntro />
                <SectionFooter />
            </ScrollView>
        </View>
    )

}

export default Home;