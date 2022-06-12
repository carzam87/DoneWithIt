import React, {useRef} from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList ({ imageUris = [], onRemoveImage, onAddImage }) {

    const scrollView = useRef();
    

    return (
        <View>
            <ScrollView 
            ref={scrollView} 
            horizontal 
            onContentSizeChange={()=>scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onchangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                <ImageInput onchangeImage={uri => onAddImage(uri)} />    
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image:{
        marginHorizontal:10,
    }
});

export default ImageInputList;