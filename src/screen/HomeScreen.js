import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Slideshow from 'react-native-image-slider-show';

import Favourite from './Favourite';
import Profile from './Profile';

class HomeScreen extends React.Component {
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

    render() {
        return (
            <Content>
                <View style={styles.container}>
                    <Item style={{ marginBottom: 15 }}>
                        <Input placeholder='Search' />
                        <Icon type="MaterialIcons" name="search" />
                    </Item>
                    <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={position => this.setState({ position })} />
                    <Text style={{ marginVertical: 15, marginLeft: 10, fontSize: 20 }}>ALL</Text>
                    <SafeAreaView>
                        <FlatList horizontal data={this.state.banners} renderItem={({ item }) => (
                            <View >
                                <Image style={{ width: 200, height: 300, borderWidth: 3, borderColor: '#d4d4d4' }}
                                    source={{ uri: item.image }}
                                />
                                <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                            </View>
                        )} />
                    </SafeAreaView>
                    <Text style={{ marginVertical: 15, marginLeft: 10, fontSize: 20 }}>Favourite</Text>
                    <SafeAreaView>
                        <FlatList data={this.state.banners} renderItem={({ item }) => (
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail square source={{ uri: item.image }} />
                                </Left>
                                <Body>
                                    <Text style={{ textAlign: 'left' }}>{item.title}</Text>
                                    <Button title="Go to Details"
                                        onPress={() => {
                                            this.props.navigation.navigate('Detail', {
                                                itemId: item.title
                                            });
                                        }} small primary iconLeft style={{ width: '40%', paddingRight: 5, backgroundColor: '#b5b5b5' }}>
                                        <Icon name="star" />
                                        <Text style={{ marginRight: 10 }}>Favourite</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        )} />
                    </SafeAreaView>
                </View>
            </Content>

        );
    }
}

/*styling css*/
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fcfcfc',
    },
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'FOR YOU',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="th-large" size={25} />
            )
        }
    },
    Fav: {
        screen: Favourite,
        navigationOptions: {
            tabBarLabel: 'FAVOURITE',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="star" size={25} />
            )
        }
    },
    Prof: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({ tintColor }) => (
                <Icon type="FontAwesome" name="user" size={25} />
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'grey',
        inactiveTintColor: 'grey'
    }
},
    {
        initialRouteName: 'Home',
    }
);

export default createAppContainer(TabNavigator);