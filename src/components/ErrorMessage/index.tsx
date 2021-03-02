import React from 'react';
import {
  ErrorContainer,
  ErrorText,
  ErrorButton,
  ErrorButtonText,
} from './styles';

interface ErrorProps {
  handleFunction: any;
}
const ErrorMessage: React.FC<ErrorProps> = ({handleFunction}) => {
  return (
    <ErrorContainer>
      <ErrorText>
        Ooops! Parece que algo deu errado! Deseja tentar novamente?
      </ErrorText>
      <ErrorButton onPress={handleFunction}>
        <ErrorButtonText>Tentar Novamente</ErrorButtonText>
      </ErrorButton>
    </ErrorContainer>
  );
};
export default ErrorMessage;
