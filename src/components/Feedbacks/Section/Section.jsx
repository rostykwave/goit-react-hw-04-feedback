import { Box } from 'styleConfig/Box';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Box as="section" p="15px 5px">
    {title && <h2>{title}</h2>}
    {children}
  </Box>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
