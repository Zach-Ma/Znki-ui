import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core/";

const DashboardCard = ({
  title = "placeholder",
  count = 0,
  renderIcon = <span>no icon</span>,
  style,
  ...props
}) => {
  return (
    <Paper style={style}>
      {renderIcon}
      <Typography>{title}</Typography>
      <span>{count}</span>
    </Paper>
  );
};

DashboardCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  renderIcon: PropTypes.func,
};

DashboardCard.defaultProps = {
  // bla: 'test',
};

export default DashboardCard;
