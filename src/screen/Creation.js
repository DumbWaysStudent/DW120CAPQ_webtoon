import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, Image, Share } from 'react-native';
import { Icon, Item, Input, List, ListItem, Thumbnail, Left, Body, Right, Button, Content, Header, Container, Title } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class Creation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banners: [{
                title: 'Judul',
                episode: '12 Episode',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Terlalu Cantik',
                episode: '1 Episode',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }, {
                title: 'Testing',
                episode: '10 Episode',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            },
            {
                title: 'Last Episode',
                episode: '10 Episode',
                image: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
            }
            ]
        };
    }

    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        return {
            title: 'MY Webtoon'
        }
    };
    render() {
        return (
            <Container>

                <Content style={styles.container}>
                    <View>
                        <SafeAreaView>
                            {/* <Text>{itemId}</Text> */}
                            <FlatList data={this.state.banners} renderItem={({ item }) => (
                                <ListItem thumbnail>
                                    <Left>
                                        <Thumbnail square source={{ uri: item.image }} />
                                    </Left>
                                    <Body>
                                        <Text onPress={() => {
                                            this.props.navigation.navigate('Update');
                                        }} style={{ textAlign: 'left' }}>{item.title}</Text>
                                        <Text style={{ textAlign: 'left' }}>{item.episode}</Text>
                                    </Body>
                                </ListItem>
                            )} />
                        </SafeAreaView>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}><Button style={{ width: 50, height: 50, borderRadius: 30, marginTop: 40 }} title="Go to Details"
                        onPress={() => {
                            this.props.navigation.navigate('Crt');
                        }} >
                        <Icon name="add" />
                    </Button></View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
