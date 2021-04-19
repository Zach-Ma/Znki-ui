import React from "react";
import PropTypes from "prop-types";
//import { Test } from './UserMenu.styles';
import { Menu, MenuItem } from "@material-ui/core";

const UserMenu = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    // setAnchorEl(null);
  };
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={false}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
};
UserMenu.propTypes = {
  // bla: PropTypes.string,
};

UserMenu.defaultProps = {
  // bla: 'test',
};

export default UserMenu;
