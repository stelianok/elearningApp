import React, {useState, useEffect, useCallback, useMemo} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Image, View, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderTop,
  LogoutButton,
  SearchBarContainer,
  SearchBarInput,
  ClassesContainer,
  InfoView,
  Category,
  Courses,
  Classes,
  Class,
  ClassLogo,
  ClassInfo,
  Title,
  Lessons,
} from './styles';

import logo from '../../assets/img/Logotipo.png';
import api from '../../services/api';
import ErrorMessage from '../../components/ErrorMessage';

export interface Course {
  id: string;
  name: string;
  image: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOK, setIsOK] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchCourseByName = useCallback(async (name) => {
    try {
      setIsLoading(true);
      const response = await api.get(`/courses?name=${name}`);
      setCourses(response.data);
      setIsOK(true);
    } catch (err) {
      console.log(err);
      setIsOK(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleLoadClasses = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get('/courses');
      setCourses(response.data);
      setIsOK(true);
    } catch (err) {
      console.log(err);
      setIsOK(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const numberOfCourses = useMemo(() => {
    return courses.length;
  }, [courses]);

  useEffect(() => {
    async function loadClasses() {
      await handleLoadClasses();
    }
    loadClasses();
  }, [handleLoadClasses]);

  useEffect(() => {
    async function loadClasses() {
      await handleSearchCourseByName(searchValue);
    }
    loadClasses();
  }, [searchValue, handleSearchCourseByName]);

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
            placeholder={'Busque um curso'}
            placeholderTextColor={'#C4C4D1'}
            onChangeText={(text: string) => {
              setSearchValue(text);
            }}
            value={searchValue}
            returnKeyType={'search'}
          />
        </SearchBarContainer>
      </Header>
      <ClassesContainer>
        <InfoView>
          <Category>Categorias</Category>
          <Courses>{numberOfCourses} Cursos</Courses>
        </InfoView>
        {isLoading ? (
          <View style={{flex: 1}}>
            <ActivityIndicator color={'#6548A3'} />
          </View>
        ) : isOK ? (
          <Classes
            data={courses}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showHorizontalScreenIndicator={false}
            renderItem={({item}) => {
              return (
                <Class
                  onPress={() => {
                    navigation.navigate('Lectures', {
                      course_id: item.id,
                    });
                  }}>
                  <ClassLogo
                    source={{
                      uri: item.image,
                    }}
                    resizeMode={'contain'}
                  />
                  <ClassInfo>
                    <Title>{item.name}</Title>
                    <Lessons>{item.numberOfLessons} aulas </Lessons>
                  </ClassInfo>
                </Class>
              );
            }}
          />
        ) : (
          <ErrorMessage handleFunction={handleLoadClasses} />
        )}
      </ClassesContainer>
    </Container>
  );
};

export default Home;
