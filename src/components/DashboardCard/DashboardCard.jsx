import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core/";
import styled from "styled-components";

const StylePaper = styled(Paper)`
  display: flex;
  align-items: center;
  height: 5rem;
  & svg {
    font-size: 2.5em;
    width: 2em;
    color: var(--green-blue-crayola);
  }
  .font {
    font-weight: 600;
    opacity: 0.8;
  }
`;

const DashboardCard = ({ title = "placeholder", count = 0, renderIcon }) => {
  return (
    <StylePaper>
      {renderIcon}
      <div>
        <Typography variant="h4" className={"font"}>
          {count}
        </Typography>
        <Typography>{title}</Typography>
      </div>
    </StylePaper>
  );
};

DashboardCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  renderIcon: PropTypes.element,
};

DashboardCard.defaultProps = {
  // bla: 'test',
};

export default DashboardCard;
