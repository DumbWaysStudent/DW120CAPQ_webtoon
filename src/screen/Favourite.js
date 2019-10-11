import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Slideshow from 'react-native-image-slider-show';

export default class Favourite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                title: 'The Secret of Angel',
                desc: '100 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Pasutri Gaje',
                desc: '200 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Young Mom',
                desc: '300 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'Young Mom',
                desc: '4 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }
            ],
            banners2: [{
                title: 'The Secret of Angel',
                desc: '100 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Pasutri Gaje',
                desc: '200 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Young Mom',
                desc: '300 Favourite',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'Young Mom',
                desc: '4 Favourite',
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
        this.setState({ banners2: this.state.banners });
    }

    searchFilter = (text) => {
        if (text.trim() == "") {
            this.setState({ banners2: this.state.banners });
        } else {
            const new_data = this.state.banners.filter(item => {
                const textData = text.toUpperCase();
                const title_up = item.desc.toUpperCase();
                const caption_up = item.title.toUpperCase();
                //const item_data = { title: title_up, cation: caption_up }
                if (title_up.indexOf(textData) > -1 || caption_up.indexOf(textData) > -1) {
                    return item;
                }
            });
            this.setState({ banners2: new_data });
        }

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

    render() {
        return (
            <Content>
                <View>
                    <Item style={{ marginBottom: 15 }}>
                        <Input placeholder='Search' onChangeText={text => this.searchFilter(text)} />
                        <Icon type="MaterialIcons" name="search" />
                    </Item>
                </View>
                <SafeAreaView>
                    <FlatList data={this.state.banners2} renderItem={({ item }) => (
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: item.image }} />
                            </Left>
                            <Body>
                                <Text style={{ textAlign: 'left' }}>{item.title}</Text>
                                <Text style={{ textAlign: 'left' }}>{item.desc}</Text>
                            </Body>
                        </ListItem>
                    )} />
                </SafeAreaView>
            </Content>
        );
    }
}