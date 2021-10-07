import React from 'react';
import { View } from 'react-native';
import { Comment } from './src/components/UI-KIT/Comment';
import { Profile } from './src/screens/Profile';
import { Colors } from './src/constants/Colors';
import { CommentList } from './src/components/UI-KIT/CommetList';


const DATA = {
  postID: "1",
  commetList:[
    {
      commetHolder: "Kat Williams",
      body: "1User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.",
      image: null,
      date: "25 сен. в 22:12 ",
      id: "5a01231d-3ee9-4bf6-9a12450-462a8277898a",
      like: "12",
      parent: null,
      reply: [
          {
              commetHolder: "Kat Williams",
              body: "2User experience design for the Web (and its siblings.",
              image: null,
              date: "25 сен. в 22:12 ",
              id: "514aa634-08bd-4ca3-8a1a-eb10846808ed",
              parent: "5a0123114244d-3ee9-4bf6-9a50-462a8277898a",
              like: "12",
              reply: []
          },
          {
            commetHolder: "Kat Williams",
            body: "3User experience design for the Web (and its siblings.",
            image: null,
            date: "25 сен. в 22:12 ",
            id: "514aa634-08bd-s4ca3-8a1a-eb1012846808ed",
            parent: "5a01231d-3ee9-4bf6-9a50-462a827784498a",
            like: "12",
            reply: []
        }
      ]
    },  
    {
        commetHolder: "Kat Williams",
        body: null,
        image: require("./src/assets/img/CommentPhoto.png"),
        date: "25 сен. в 22:12 ",
        id: "01793ef41-fdb6-4700-a4dc-6d7bbc54385a",
        like: "12",
        parent: null,
        reply: []
    },
    {
        commetHolder: "Kat Williams",
        body: "4User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.",
        image: null,
        date: "25 сен. в 22:12 ",
        id: "1ef06878-58b5-48b0-9349-73986ab616bb4",
        like: "12",
        parent: null,
        reply: []
    },
    {
      commetHolder: "Kat Williams",
      body: "5User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.",
      image: require("./src/assets/img/CommentPhoto.png"),
      date: "25 сен. в 22:12 ",
      id: "1ef06878-58b5-481b0-9349-73986ab66bb4",
      like: "12",
      parent: null,
      reply: []
    }  
  ]
}

export default function App(){
  return (
    <View style={{backgroundColor: Colors.purple_08, padding: 17}}>
      <CommentList commetList={DATA.commetList}/>
    </View>
    
  );
};


