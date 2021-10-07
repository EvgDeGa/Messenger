import React from 'react';
import { Comment } from './src/components/UI-KIT/Comment';
import { Profile } from './src/screens/Profile';

const DATA = {
  postID: "1",
  commetList:[
  {
      commetHolder: "Kat Williams",
      body: "Body первого комментария",
      date: "2019-05-15T15:56:15.694116Z",
      id: "0179ef41-fdb6-4700-a4dc-6d7bbc54385a",
      parent: null,
      reply: []
  },
  {
      commetHolder: "Kat Williams",
      body: "Body второго комментария",
      date: "2019-05-17T13:59:51.167188Z",
      id: "1ef06878-58b5-48b0-9349-73986ab66bb4",
      parent: null,
      reply: []
  },
  {
      commetHolder: "Kat Williams",
      body: "User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice. ",
      date: "2019-05-19T12:07:15.613266Z",
      id: "5a01231d-3ee9-4bf6-9a50-462a8277898a",
      parent: null,
      reply: [
          {
              commetHolder: "Kat Williams",
              body: "User experience design for the Web (and its siblings.",
              date: "2019-05-21T22:32:44.998207Z",
              id: "514aa634-08bd-4ca3-8a1a-eb10846808ed",
              parent: "5a01231d-3ee9-4bf6-9a50-462a8277898a",
              reply: []
          }
      ]
  }
  ]
}

export default function App(){
  return (
    <Comment item={DATA.commetList[2]}/>
  );
};


