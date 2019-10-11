import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title, Fab } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Slideshow from 'react-native-image-slider-show';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                title: 'The Secret of Angel',
                desc: '1',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Pasutri Gaje',
                desc: '2',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Young Mom',
                desc: '3',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'Young Mom',
                desc: '4',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }
            ],
            banners2: [{
                title: 'The Secret of Angel',
                desc: '1',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Pasutri Gaje',
                desc: '2',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Young Mom',
                desc: '3',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'Young Mom',
                desc: '4',
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
        const { navigation } = this.props;
        const name_profile = navigation.getParam('name', 'Unknown Profile');
        const photo_profile = navigation.getParam('source', '');

        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }} >Profile</Title>
                    </Body>
                    <Right>
                        <Icon onPress={() => { this.props.navigation.navigate('Eprofile'); }} active name="create" style={{ color: "black" }} />
                    </Right>
                </Header>
                <Content>
                    <View style={styles.container}>
                        <View
                            style={[styles.avatar, styles.avatarContainer, { marginTop: 100 }]}>

                            <Image style={styles.avatar} source={{ uri: photo_profile }} />

                        </View>
                        <View style={{ width: '100%', marginTop: 30 }}>
                            <Text style={{ alignItems: "center", textAlign: "center", marginBottom: 30 }}>{name_profile}</Text>
                            <ListItem onPress={() => { this.props.navigation.navigate('Crtn') }} style={{ backgroundColor: '#b5b3b3' }} icon>
                                <Body>
                                    <Text>My Webtoon Cretion</Text>
                                </Body>
                                <Right>
                                    <Icon active name="create" />
                                </Right>
                            </ListItem>
                            <ListItem style={{ backgroundColor: '#b5b3b3' }} icon>
                                <Body>
                                    <Text>Log out</Text>
                                </Body>
                                <Right>

                                </Right>
                            </ListItem>
                        </View>
                    </View>

                </Content>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
});