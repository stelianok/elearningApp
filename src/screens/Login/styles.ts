import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  flex: 1;
  background-color: #6548a3;
`;

export const Header = styled.View`
  flex: 0.75;
  justify-content: flex-start;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;

  padding-top: 300px;
`;

export const Logo = styled.Image`
  background-color: transparent;

  margin-bottom: 45px;

  margin-left: 35px;
`;
export const WelcomeView = styled.View`
  justify-content: flex-start;
  align-items: flex-start;

  margin-left: 45px;
`;
export const Title = styled.Text`
  font-family: 'Rubik';
  color: #ff6680;

  font-size: 36px;
  line-height: 43px;

  margin-bottom: 10px;
`;
export const Description = styled.Text`
  font-family: 'Roboto-Regular';
  color: #edebf5;

  font-size: 15px;
  margin-right: 25px;

  line-height: 25px;
`;

export const StartButton = styled(RectButton)`
  background-color: #ff6680;

  align-self: center;

  margin-top: 25px;
  width: 80%;

  justify-content: center;
  align-items: center;

  padding-top: 18px;
  padding-bottom: 18px;
  border-radius: 100px;
`;
export const StartButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: #fff;
`;
