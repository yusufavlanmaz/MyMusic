import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row'
    },
    image:{
        height:100,
        width:100,
        borderRadius:50
    },
    title:{fontWeight:'bold',
        fontSize:27},
    inner_container:{
            padding:10,
            flex:1},
    info_container:{
        flex:1,
        flexDirection:'row'},
    artist:{fontWeight:'bold'},
    year:{marginLeft:10,
    color:'gray',
    fontWeight:'bold',},
    soldout_title:{
        color:'red'
    },
    soldout_container:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    play:{
    flexDirection:'row-reverse',
    },
    play_button:{
        color:'red'
    },
    content_container:{
        flexDirection:'row'
    }


})