import { TextBold } from '../text/styles';
import { ButtonContainer, CircleButtonContainer, RoundedButtonContainer} from './styles'

export const PrimaryButton = ({ label}) => {

  return(
    <ButtonContainer>
      <TextBold variant="light">{label}</TextBold>
    </ButtonContainer>
  );
};

export const RoundedButton = ({ label }) =>{
  return(
    <RoundedButtonContainer>
   <TextBold variant="light">{label}</TextBold>
    </RoundedButtonContainer>
  );
};

export const CircleButton = ({label }) => {
 return (
  <CircleButtonContainer>
    <TextBold font-size={32}>{label}</TextBold>
  </CircleButtonContainer>
 )
}