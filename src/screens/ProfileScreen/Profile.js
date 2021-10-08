import React, {useState} from 'react';
import {Image, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

import {Colors} from '../../constants/Colors';
import Icon from '../../components/Icon';
import styles from './ProfileStyle';
import TextWithNumber from '../../components/ui-kit/MesTextWithNumber/index';
import ProfilePhotoScroll from '../../components/ui-kit/MesProfilePhotoScroll';
import MoreAction from './ProfileModal/MoreAction';
import TransparentButton from '../../components/ui-kit/MesTransparentButton';
import MoreDetails from './ProfileModal/MoreDetails';

export const Profile = ({data}) => {
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
