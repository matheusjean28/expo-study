import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    imgSource : ImageSourcePropType,
    width?: number,
    heigth?: number,
};

export default function Imageviewer({imgSource}: Props){
    return <Image source={imgSource}  style={styles.image} />;

}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})