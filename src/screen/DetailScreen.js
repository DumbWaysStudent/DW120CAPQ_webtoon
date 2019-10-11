import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Slideshow from 'react-native-image-slider-show';

export default class DetailScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                title: 'EP 1',
                date: '12 Januari 2019',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'EP 2',
                date: '31 Januari 2019',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'EP 3',
                date: '3 Maret 2019',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }
            ],
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                },
            ],
        };
    }

    //slider
    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    //end slider

    onSharePress = () => {
        //Share.share(this.shareOptions); 
        alert('this');
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
            headerRight: (<Icon type="FontAwesome" name="share-alt" onPress={() => { Share.share(shareOptions); }} />)
        }
    };
    render() {
        //const { navigation } = this.props;
        //const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
            <Container>
                <Content>
                    <View>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })} />
                        <SafeAreaView>
                            {/* <Text>{itemId}</Text> */}
                            <FlatList data={this.state.banners} renderItem={({ item }) => (
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: item.image }} />
                                    </Left>
                                    <Body>
                                        {/* <Text onPress={() => { this.props.navigation.navigate('Detail_Ep', { itemId: item.title }) }} style={{ textAlign: 'left' }}>{item.title}</Text> */}
                                        <Text onPress={() => { this.props.navigation.navigate('Detail_Ep', { itemId: item.title }) }}>{item.title}</Text>
                                        <Text style={{ textAlign: 'left' }}>{item.date}</Text>
                                    </Body>
                                </ListItem>
                            )} />
                        </SafeAreaView>
                    </View>
                </Content>
            </Container>
        );
    }
}
