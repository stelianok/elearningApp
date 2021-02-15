import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #6548a3;
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.25;
  margin: 25px;
  margin-bottom: -90px;
`;
export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const FavoriteButton = styled.TouchableOpacity`
  margin-bottom: 5px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  border-radius: 15px;
`;
