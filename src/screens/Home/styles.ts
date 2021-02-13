import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.25;
  margin: 25px;
`;
export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;
export const LogoutButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;
export const SearchBarContainer = styled.View`
  background-color: #fff;

  height: 60px;

  flex-direction: row;

  border-radius: 50px;

  justify-content: space-between;
  align-items: center;

  padding-left: 20px;
`;
export const SearchBarInput = styled.TextInput`
  flex: 0.95;
`;
export const ClassesContainer = styled.View`
  flex: 1;
  background-color: #f0edf5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
export const InfoView = styled.View``;
export const Category = styled.Text``;
export const Courses = styled.Text``;
export const Classes = styled.View``;
export const Class = styled.View``;
export const ClassLogo = styled.Image``;
export const Title = styled.Text``;
export const Lessons = styled.Text``;
