import React, {useState} from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import ProfilePhotoScroll from '../../components/ui-kit/MesProfilePhotoScroll';
import TransparentButton from '../../components/ui-kit/MesTransparentButton';
import TextWithNumber from '../../components/ui-kit/MesTextWithNumber/index';
import MoreDetails from '../../components/ProfileModal/MoreDetails';
import MoreAction from '../../components/ProfileModal/MoreAction';
import Icon from '../../components/Icon';

import {Colors} from '../../constants/Colors';
import {styles} from './ProfileStyle';

const Profile = props => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [moreAction, setMoreAction] = useState(false);
  console.log(props.followers);

  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.profileInformation}>
        <View style={styles.profileInformation_firstLine}>
          <View style={styles.icon}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name={'ArrowLeft'} size={20} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
          <View style={styles.personalInformation}>
            <Image
              style={styles.profileImage}
              source={props.selfInf.podilePhoto}
            />
            <Text style={styles.name}>{props.selfInf.name}</Text>
            <Text style={styles.link}>{props.selfInf.link}</Text>
            <Text style={styles.countryCity}>
              {props.selfInf.country}, {props.selfInf.city}
            </Text>
            <Text style={styles.workpalce}>
              Место работы: {props.selfInf.workpalce}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setMoreAction(true)}
            style={styles.icon}>
            <Icon name={'HorizontalDots'} size={20} color={Colors.WHITE} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInformation_secondLine}>
          <TextWithNumber text={'Followers'} number={props.selfInf.followers} />
          <TextWithNumber text={'Following'} number={props.selfInf.following} />
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
          <Text style={styles.photoNumber}>{props.gallary.length}</Text>
        </View>
        <ProfilePhotoScroll data={props.gallary} />
      </View>
      <View style={styles.footerBlock} />
      <MoreAction visible={moreAction} onCancel={() => setMoreAction(false)} />
      <MoreDetails
        selfInf={props.selfInf}
        social={props.social}
        visible={moreDetails}
        onCancel={() => setMoreDetails(false)}
      />
    </SafeAreaView>
  );
};

export default Profile;
