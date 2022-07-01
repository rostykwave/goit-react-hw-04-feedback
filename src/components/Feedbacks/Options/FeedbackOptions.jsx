import PropTypes from 'prop-types';
import { ButtonSet, StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonSet>
    <StyledButton type="button" onClick={onLeaveFeedback.onGood}>
      {options.onGood}
    </StyledButton>
    <StyledButton type="button" onClick={onLeaveFeedback.onNeutral}>
      {options.onNeutral}
    </StyledButton>
    <StyledButton type="button" onClick={onLeaveFeedback.onBad}>
      {options.onBad}
    </StyledButton>
  </ButtonSet>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};
