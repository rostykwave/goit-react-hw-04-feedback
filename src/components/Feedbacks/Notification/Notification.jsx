import { Box } from 'styleConfig/Box';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <Box as="p" fontSize="20px" textAlign="center">
    {message}
  </Box>
);

Notification.propsType = {
  message: PropTypes.string.isRequired,
};
