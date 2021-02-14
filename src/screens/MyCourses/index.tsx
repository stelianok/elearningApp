import React, {useState} from 'react';

import {
  Container,
  Header,
  HeaderTop,
  LogoutButton,
  SearchBarContainer,
  SearchBarInput,
  ClassesContainer,
  InfoView,
  SavedClasses,
  Classes,
  Class,
  DeleteClassButton,
  GoToClassButton,
  ClassLogo,
  ClassInfo,
  Title,
  Lessons,
} from './styles';

import logo from '../../assets/img/Logotipo.png';

import math from '../../assets/img/Math.png';
import build from '../../assets/img/Build.png';
import chemistry from '../../assets/img/Quimica.png';
import physics from '../../assets/img/Fisica.png';
import talk from '../../assets/img/Talk.png';
import english from '../../assets/img/English.png';

import Icon from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RectButton} from 'react-native-gesture-handler';

export interface Lesson {
  id: string;
  name: string;
  numberOfClasses: number;
  classIcon: any;
}
const MyCourses: React.FC = () => {
  const navigation = useNavigation();
  const [classes] = useState<Lesson[]>([
    {
      id: '03',
      name: 'Inglês',
      numberOfClasses: 6,
      classIcon: english,
    },
    {
      id: '04',
      name: 'Química',
      numberOfClasses: 61,
      classIcon: chemistry,
    },
    {
      id: '05',
      name: 'Softskills',
      numberOfClasses: 10,
      classIcon: talk,
    },
    {
      id: '06',
      name: 'Arte',
      numberOfClasses: 35,
      classIcon: build,
    },
  ]);
  return (
    <Container>
      <Header>
        <HeaderTop>
          <Image source={logo} />
          <LogoutButton
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Icon name={'power'} size={30} color={'#FF6680'} />
          </LogoutButton>
        </HeaderTop>
        <SearchBarContainer>
          <Icon name={'search'} size={23} color={'#C4C4D1'} />
          <SearchBarInput
            placeholder={'Busque uma aula'}
            placeholderTextColor={'#C4C4D1'}
          />
        </SearchBarContainer>
      </Header>
      <ClassesContainer>
        <InfoView>
          <SavedClasses>Cursos salvos</SavedClasses>
        </InfoView>
        <Classes
          data={classes}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showHorizontalScreenIndicator={false}
          renderItem={({item}) => {
            return (
              <Class>
                <DeleteClassButton>
                  <Icon name={'trash'} size={24} color={'#C4C4D1'} />
                </DeleteClassButton>
                <GoToClassButton>
                  <ClassLogo source={item.classIcon} resizeMode={'contain'} />
                  <ClassInfo>
                    <Title>{item.name}</Title>
                    <Lessons>{item.numberOfClasses} aulas </Lessons>
                  </ClassInfo>
                </GoToClassButton>
              </Class>
            );
          }}
        />
      </ClassesContainer>
    </Container>
  );
};

export default MyCourses;
