import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface PlayerProps {
  isComplete: boolean;
  containerStyle?: {};
}
export const LectureContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 15px;

  align-items: flex-start;
  justify-content: center;

  margin-bottom: 25px;
`;
export const PlayButtonView = styled.View<PlayerProps>`
  position: absolute;

  top: 15px;
  left: 0;

  ${(props) =>
    props.isComplete &&
    css`
      background-color: #61c5bd;
    `};

  ${(props) =>
    !props.isComplete &&
    css`
      background-color: #ff6680;
    `};

  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  border-radius: 25px;
`;
export const LectureInformation = styled(RectButton)`
  flex: 0.8;
  padding: 10px;
  padding-left: 70px;
  padding-top: 15px;
  background-color: #fff;

  border-radius: 20px;

  justify-content: flex-start;
  align-items: flex-start;
  align-self: center;

  margin-right: -35px;
`;
export const LectureTitle = styled.Text`
  font-family: 'Rubik';
  font-size: 18px;
  color: #6c6c80;

  margin-bottom: 10px;
  margin-right: 50px;
`;
export const LectureSubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  margin: 5px;
`;
export const LectureSubtitle = styled.Text`
  font-family: 'Roboto-Regular';
  color: #c4c4d1;
`;
export const LectureDurationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;
export const LectureDuration = styled.Text`
  font-family: 'Roboto-Regular';
  color: #c4c4d1;
`;
export const CompleteContainer = styled.View`
  background-color: #61c5bd;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;

  border-radius: 50px;

  align-self: flex-end;
  margin-left: 35px;
`;
export const CompleteContainerText = styled.Text`
  font-family: 'Roboto-Regular';
  color: #fff;
`;
