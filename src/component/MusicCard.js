import React from "react";
import { SafeAreaView,View,Text,Image,TouchableOpacity,Linking} from "react-native";
import styles from './musicCard.style';
import music_data from '../music-data.json'
const MusicCard = (props) => {
    const link = music_data.musicUrl
    return(
        
            <View style={styles.container}>
                <Image style = {styles.image} source ={{uri:props.song.imageUrl}}  />
                <View style ={styles.inner_container}>
                   <Text style={styles.title}>{props.song.title}</Text>
                   <View style={styles.content_container}>
                   <View style ={styles.info_container}>
                       <Text style={styles.artist}>{props.song.artist}</Text>
                       <Text style={styles.year}>{props.song.year}</Text>

                   </View>
                   <View style={styles.soldout_container}>
                   
                   <TouchableOpacity
                        style={styles.play}
                        onPress={() => Linking.openURL(props.song.musicUrl) }
                        
                    >
                    <Text style ={styles.play_button}>Oynat</Text>
                    </TouchableOpacity>
                   </View>
                   </View>
                </View>
            </View>
       
    )
}
export default MusicCard;