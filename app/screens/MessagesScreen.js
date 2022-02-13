import React, {useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen'
import ListItem from '../components/lists/ListItem'
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        image: require('../assets/mosh.jpg')
    }
]

function MessagesScreen (){
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing]=useState(false)

    const handleDelete = message =>{
        setMessages(messages.filter(m => m.id !== message.id))
        
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={()=> console.log("message selected",item)}
                    renderRightActions={() => 
                    <ListItemDeleteAction
                    onPress={() => handleDelete(item)}
                    />}
                />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={()=> setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/mosh.jpg')
                    }
                ])}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
    
})

export default MessagesScreen;
