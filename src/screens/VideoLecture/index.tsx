import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/img/Logotipo.png';
import {
  Container,
  Header,
  HeaderTop,
  GoBackButton,
  FavoriteButton,
  ContentContainer,
} from './styles';

const VideoLecture: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderTop>
          <GoBackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'arrow-left'} size={30} color={'#FF6680'} />
          </GoBackButton>
          <Image source={logo} />
          <FavoriteButton onPress={() => {}}>
            <Icon name={'heart'} size={30} color={'#FF6680'} />
          </FavoriteButton>
        </HeaderTop>
      </Header>
      <ContentContainer />
    </Container>
  );
};

export default VideoLecture;
