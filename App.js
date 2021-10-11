import React from 'react';
import {View} from 'react-native';
import {Colors} from './src/constants/Colors';
import CommentList from './src/components/ui-kit/MesCommentList';
import Profile from './src/screens/ProfileScreen';
import Home from './src/screens/HomeScreen';

export default function App() {
  return (
    <Home />
    // <Profile data={DATAPROFILE} />
    // <View style={{backgroundColor: Colors.ULTRAMARINE_BLUE, padding: 17}}>
    //   <CommentList commentList={DATA.commentList} />
    // </View>
  );
}

const DATAPROFILE = {
  selfInf: {
    name: 'Kat Williams',
    link: '@Williams',
    podilePhoto: require('./assets/img/ProfileImage.png'),
    country: 'Россия',
    city: 'Санкт-Петербург',
    birthDay: '08 октября 1992',
    status: 'They never ask people to do things they wouldn’t do themselves.',
    workpalce: 'Artist by Passion!',
    studies: 'ВГУЮ в г. Санкт-Петербург',
  },
  social: {
    arrow: 'http://t.me/durov',
    twitter: 'Durov',
    instagram: 'Pavel Durov',
    facebook: 'durov',
    telegram: 'durov',
  },
  followers: '2467',
  following: '1589',
  gallary: [
    {
      id: '1',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/1.png'),
    },
    {
      id: '2',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/2.png'),
    },
    {
      id: '3',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/3.png'),
    },
    {
      id: '4',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/4.png'),
    },
    {
      id: '5',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/5.png'),
    },
    {
      id: '6',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/6.png'),
    },
    {
      id: '7',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/7.png'),
    },
    {
      id: '8',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/8.png'),
    },
    {
      id: '9',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/9.png'),
    },
    {
      id: '13',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/1.png'),
    },
    {
      id: '14',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/2.png'),
    },
    {
      id: '15',
      title: 'First Item',
      source: require('./assets/img/profilePhotoScrol/3.png'),
    },
  ],
};

const DATA = {
  postID: '1',
  commentList: [
    {
      commetHolder: 'Kat Williams',
      body: '1User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
      image: null,
      date: '25 сен. в 22:12 ',
      id: '5a01231d-3ee9-4bf6-9a12450-462a8277898a',
      like: '12',
      parent: null,
      reply: [
        {
          commetHolder: 'Kat Williams',
          body: '2User experience design for the Web (and its siblings.',
          image: null,
          date: '25 сен. в 22:12 ',
          id: '514aa634-08bd-4ca3-8a1a-eb10846808ed',
          parent: '5a0123114244d-3ee9-4bf6-9a50-462a8277898a',
          like: '12',
          reply: [],
        },
        {
          commetHolder: 'Kat Williams',
          body: '3User experience design for the Web (and its siblings.',
          image: null,
          date: '25 сен. в 22:12 ',
          id: '514aa634-08bd-s4ca3-8a1a-eb1012846808ed',
          parent: '5a01231d-3ee9-4bf6-9a50-462a827784498a',
          like: '12',
          reply: [],
        },
      ],
    },
    {
      commetHolder: 'Kat Williams',
      body: null,
      image: require('./assets/img/CommentPhoto.png'),
      date: '25 сен. в 22:12 ',
      id: '01793ef41-fdb6-4700-a4dc-6d7bbc54385a',
      like: '12',
      parent: null,
      reply: [],
    },
    {
      commetHolder: 'Kat Williams',
      body: '4User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
      image: null,
      date: '25 сен. в 22:12 ',
      id: '1ef06878-58b5-48b0-9349-73986ab616bb4',
      like: '12',
      parent: null,
      reply: [],
    },
    {
      commetHolder: 'Kat Williams',
      body: '5User experience design for the Web (and its siblings, interaction design, UI design, et al) has traditionally been a deliverables-based practice.',
      image: require('./assets/img/CommentPhoto.png'),
      date: '25 сен. в 22:12 ',
      id: '1ef06878-58b5-481b0-9349-73986ab66bb4',
      like: '12',
      parent: null,
      reply: [],
    },
  ],
};
