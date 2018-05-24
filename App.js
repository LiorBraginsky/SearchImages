import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableWithoutFeedback,
    Dimensions,
    Modal,
    Image,
    TouchableOpacity
} from 'react-native';
import ImageElement from './app/components/ImageElement';

export default class SearchImages extends React.Component {
    state = {
        modalVisible: false,
        imgBackArrow: require('./app/images/Back_Arrow.png'),
        modalImage: require('./app/images/1.jpg'),
        images: [
            require('./app/images/1.jpg'),
            require('./app/images/2.png'),
            require('./app/images/3.jpg'),
            require('./app/images/4.jpg'),
            require('./app/images/5.jpg'),
            require('./app/images/6.jpg'),
            require('./app/images/7.jpg'),
            require('./app/images/8.jpg'),
            require('./app/images/9.jpg'),
            require('./app/images/10.jpg'),
            require('./app/images/11.png'),
            require('./app/images/12.jpg'),
            require('./app/images/13.png'),
            require('./app/images/14.jpg'),
        ]
    }

    setModalVisible(visible, imageKey){
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }



  render() {
    let images = this.state.images.map((val, key) => {
        return <TouchableWithoutFeedback key={key}
                    onPress={() => {this.setModalVisible(true, key)}}>
                    <View style={styles.imageWrap}>
                        <ImageElement imgsource={val}></ImageElement>
                    </View>
               </TouchableWithoutFeedback>
    });

    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.fixedBackBlock}>
                    <Image source={this.state.imgBackArrow} style={styles.fixedBack}></Image>
                    {/*так и не смог сделать кнопку сидячей на одном месте..*/}
                </TouchableOpacity>
                <Modal
                    style={styles.modal}
                    animationType={'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {}}>
                    <View style={styles.modal}>
                        <Text style={styles.text}
                              onPress={() => {this.setModalVisible(false)}}>
                            Back to images
                        </Text>
                        <ImageElement imgsource={this.state.modalImage}></ImageElement>
                    </View>
                </Modal>
                {images}
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',
        position: 'relative',
    },
    fixedBack: {
        width: 100,
        height: 100,
    },
    fixedBackBlock: {
        position: 'absolute',
        top: 15,
        left: 15,
        right: 0,
        bottom: 0,
        zIndex: 10,
    },
    imageWrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height / 3) - 12,
        width: (Dimensions.get('window').width / 2) - 4,
        backgroundColor: '#fff',
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0, 0.9)',
    },
    text: {
        color: '#fff'
    }

});
