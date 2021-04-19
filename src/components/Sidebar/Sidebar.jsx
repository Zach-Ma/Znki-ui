import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";

const Items = () => {
  const items = [
    {
      id: 0,
      label: "Deck",
      link: "/deck",
      icon: <InboxIcon />,
    },
    {
      id: 1,
      label: "Statistic",
      link: "/statistic",
      icon: <InboxIcon />,
    },
    {
      id: 2,
      label: "Training",
      link: "/training",
      icon: <InboxIcon />,
    },
    {
      id: 3,
      label: "About",
      link: "/about",
      icon: <InboxIcon />,
    },
  ];

  return (
    <List>
      <Divider />
      {items.map((item) => {
        return (
          <ListItem button key={item.id} component={Link} href={item.link}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        );
      })}
    </List>
  );
};

const Sidebar = ({ isSidebarOpened = false }) => {
  return (
    <Drawer width="50" anchor={"left"} open={false} variant={"temporary"}>
      <Items history={history} />
    </Drawer>
  );
};

Sidebar.propTypes = {
  isSidebarOpened: PropTypes.bool,
};

Sidebar.defaultProps = {
  // bla: 'test',
};

export default withRouter(Sidebar);
