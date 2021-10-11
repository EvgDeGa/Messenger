import React, {useState} from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import ProfilePhotoScroll from '../../components/ui-kit/MesProfilePhotoScroll';
import TransparentButton from '../../components/ui-kit/MesTransparentButton';
import TextWithNumber from '../../components/ui-kit/MesTextWithNumber/index';
import MoreDetails from '../../components/ProfileModal/MoreDetails';
import MoreAction from '../../components/ProfileModal/MoreAction';
import Icon from '../../components/Icon';

import {Colors} from '../../constants/Colors';
import styles from './ProfileStyle';

export const Profile = () => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [moreAction, setMoreAction] = useState(false);

  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.profileInformation}>
        <View style={styles.profileInformation_firstLine}>
          <View style={styles.icon}>
            <Icon name={'ArrowLeft'} size={20} color={Colors.WHITE} />
          </View>
          <View style={styles.personalInformation}>
            <Image
              style={styles.profileImage}
              source={data.selfInf.podilePhoto}
            />
            <Text style={styles.name}>{data.selfInf.name}</Text>
            <Text style={styles.link}>{data.selfInf.link}</Text>
            <Text style={styles.countryCity}>
              {data.selfInf.country}, {data.selfInf.city}
            </Text>
            <Text style={styles.workpalce}>
              Место работы: {data.selfInf.workpalce}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setMoreAction(true)}
            style={styles.icon}>
            <Icon name={'HorizontalDots'} size={20} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInformation_secondLine}>
          <TextWithNumber text={'Followers'} number={data.followers} />
          <TextWithNumber text={'Following'} number={data.following} />
          <TransparentButton
            text={'Подробнее'}
            onClick={() => setMoreDetails(true)}
          />
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.gallery}>
        <View style={styles.gallery_Text}>
          <Text style={styles.photoText}>Фотографии</Text>
          <Text style={styles.photoNumber}>{data.gallary.length}</Text>
        </View>
        <ProfilePhotoScroll data={data.gallary} />
      </View>
      <View style={styles.footerBlock} />
      <MoreAction visible={moreAction} onCancel={() => setMoreAction(false)} />
      <MoreDetails
        selfInf={data.selfInf}
        social={data.social}
        visible={moreDetails}
        onCancel={() => setMoreDetails(false)}
      />
    </SafeAreaView>
  );
};

const data = {
  selfInf: {
    name: 'Kat Williams',
    link: '@Williams',
    podilePhoto: require('../../../assets/img/ProfileImage.png'),
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
      source: require('../../../assets/img/profilePhotoScrol/1.png'),
    },
    {
      id: '2',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/2.png'),
    },
    {
      id: '3',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/3.png'),
    },
    {
      id: '4',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/4.png'),
    },
    {
      id: '5',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/5.png'),
    },
    {
      id: '6',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/6.png'),
    },
    {
      id: '7',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/7.png'),
    },
    {
      id: '8',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/8.png'),
    },
    {
      id: '9',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/9.png'),
    },
    {
      id: '13',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/1.png'),
    },
    {
      id: '14',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/2.png'),
    },
    {
      id: '15',
      title: 'First Item',
      source: require('../../../assets/img/profilePhotoScrol/3.png'),
    },
  ],
};
