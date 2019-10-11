import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Slideshow from 'react-native-image-slider-show';

export default class DetailEpisode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                title: 'The Secret of Angel',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Pasutri Gaje',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Young Mom',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'Young Mom',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }
            ]
        };
    }
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const shareOptions = {
            title: 'Title',
            message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
            url: 'www.example.com',
            subject: 'Subject'
        };

        const { params } = navigation.state;
        return {
            title: params ? params.itemId : 'Title is NULL',
            headerRight: (<Icon type="FontAwesome" name="share-alt" onPress={() => { }} />)
        }
    };
    render() {
        return (
            <Content>
                <View>
                    <SafeAreaView>
                        <FlatList data={this.state.banners} renderItem={({ item }) => (
                            <Image style={{ width: '100%', height: 500, margin: 10 }}
                                source={{ uri: item.image }}
                            />
                        )} />
                    </SafeAreaView>
                </View>
            </Content>

        );
    }
}