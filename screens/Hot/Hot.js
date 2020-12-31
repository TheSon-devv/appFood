import React,{useEffect, useState} from "react";
import { View, Text, FlatList } from "react-native";
import HeaderHot from "../../components/Hot/HeaderHot";
import SectionCategory from "./Section/SectionCategory";
import { connect } from "react-redux";
import * as actions from "../actions/monAn";

const food = [
    { id: 1, name: "Lẩu ngon tại nhà",price:'200000/1 người' },
    { id: 2, name: "Buffer 199K",price:'300000/1 người' },
    { id: 3, name: "Nướng Hàn Quốc" ,price:'500000/1 người'},
    { id: 4, name: "Nướng Hàn Quốc" ,price:'600000/1 người'},
    { id: 5, name: "Nướng Hàn Quốc" ,price:'700000/1 người'},
]


const Hot = (props) => {
    const [menu,setMenu] = useState(food);

    useEffect(() => {
        props.actFetchProductsRequest();
    },[])
    return (
        <View style={{backgroundColor:'#fff',marginBottom:75}}>
            <HeaderHot />
            <FlatList 
                data={props.listMonAn}
                renderItem={ ({item}) => (<SectionCategory data={item}/>)
                }
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}
const mapStateToProps = state => ({
    listMonAn : state.monAn.product
})

function mapDispatchToProps(dispatch){
    return{
        actFetchProductsRequest:() => dispatch(actions.actFetchProductsRequest())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hot);