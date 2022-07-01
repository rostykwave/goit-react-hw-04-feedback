import { Feedbacks } from 'components/Feedbacks/Feedbacks';
import { Box } from 'styleConfig/Box';

export const App = () => {
  return (
    <Box
      width={[1, 2 / 3, 1 / 2, 1 / 3]}
      mr="auto"
      ml="auto"
      bg="background"
      boxShadow="medium"
    >
      <Feedbacks />
    </Box>
  );
};
