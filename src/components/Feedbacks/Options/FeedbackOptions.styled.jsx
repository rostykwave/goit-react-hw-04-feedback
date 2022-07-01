import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;

  padding: 14px 25px;
  border-radius: 5px;

  background-color: ${({ children, theme }) => {
    switch (children) {
      case 'Good':
        return theme.colors.good;
      case 'Bad':
        return theme.colors.bad;
      case 'Neutral':
        return theme.colors.neutral;
      default:
        return theme.colors.light;
    }
  }};

  :hover,
  :focus {
    background-color: ${({ children, theme }) => {
      switch (children) {
        case 'Good':
          return theme.colors.goodAccent;
        case 'Bad':
          return theme.colors.badAccent;
        case 'Neutral':
          return theme.colors.neutralAccent;
        default:
          return theme.colors.light;
      }
    }};
  }

  color: ${({ children, theme }) => {
    switch (children) {
      case 'Good':
        return theme.colors.light;
      case 'Bad':
        return theme.colors.light;
      default:
        return theme.colors.dark;
    }
  }};

  &:not(:last-child) {
    margin-right: 7px;
  }
`;

export const ButtonSet = styled.div`
  text-align: center;
`;
