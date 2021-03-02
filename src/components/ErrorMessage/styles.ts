import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const ErrorContainer = styled.View`
  flex: 1;
  margin-top: 20px;
  justify-content: flex-start;

  align-items: center;
`;

export const ErrorText = styled.Text`
  font-family: 'Rubik';
  text-align: center;
  color: #6c6c80;

  font-size: 20px;
  align-self: center;

  margin-left: 5px;
  margin-bottom: 15px;
`;

export const ErrorButton = styled(RectButton)`
  background-color: #f44336;
  border-radius: 15px;
  padding: 15px;
`;

export const ErrorButtonText = styled.Text`
  font-family: 'Roboto-Regular';
  text-align: center;
  color: #fff;

  font-size: 20px;
  align-self: center;

  margin-left: 5px;
`;
