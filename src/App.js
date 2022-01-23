import React,{useState} from "react";
import { SafeAreaView,View,Text,Image,FlatList,StyleSheet } from "react-native";
import music_data from "./music-data.json";
import MusicCard from "./component/MusicCard";
import SearcBar from "./component/SearcBar/SearcBar";
const App = () =>{
  const [list,setList] = useState(music_data);
  const renderMusic = ({item}) => <MusicCard song = {item} />
  const renderSeperator = () => <View style={styles.seperator}/>
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1 ;
      
    }
    );
    setList(filteredList)
    
   
  };
  
  return(
    <SafeAreaView style={styles.container}>
      <SearcBar onSearch={handleSearch} />
      <View style={styles.container}>
      <FlatList 
      keyExtractor={item => item.id}
      data={list} 
      renderItem={renderMusic}
      ItemSeparatorComponent={renderSeperator}/>
      </View>
    </SafeAreaView>
  )
}
export default App
const styles = StyleSheet.create(
  {
  container:{flex:1,},
  seperator:{borderWidth:1,
  borderColor:'#e0e0e0'
}
})