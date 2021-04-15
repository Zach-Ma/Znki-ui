import React from "react";
import PropTypes from "prop-types";
//import { Test } from './Homepage.styles';
import Card from "../../components/Card";

const CardList = ({ count = 1, ...props }) =>
  Array.from({ length: count }, (item, index) => <Card key={index} />);

const Homepage = () => <CardList count={10} />;

Homepage.propTypes = {
  // bla: PropTypes.string,
};

Homepage.defaultProps = {
  // bla: 'test',
};

export default Homepage;
