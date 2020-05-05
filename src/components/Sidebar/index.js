import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
  Assessment,
  // Dns,
  // CheckCircle,
  // ArrowDropDownCircle,
  InsertEmoticon,
  Inbox as InboxIcon,
  // Cancel,
  // Search as SearchIcon,
  // More as MoreIcon,
} from '@material-ui/icons';
import { useStyles } from './styles';

const Sidebar = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  return (
    <aside className={classes.aside}>
      <div className={classes.sectionLogo}>
        {/* <img
          className={classes.logoImg}
          src="assets/images/logos/inova_white.svg"
          alt="logo"
        /> */}
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          My Money
        </Typography>
      </div>
      <nav className={classes.nav}>
        {/* <MoreIcon /> */}
        <div className={classes.user}>
          <InsertEmoticon className={classes.avatar} />
          <h3>Maximiler Arouca</h3>
        </div>
        <List>
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
            classes={{
              root: classes.listItem,
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <Assessment className={classes.iconLink} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          {/* <ListItem
            button
            selected={selectedIndex === 1}
            onClick={event => handleListItemClick(event, 1)}
            classes={{
              root: classes.listItem,
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <InboxIcon className={classes.iconLink} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 2}
            onClick={event => handleListItemClick(event, 2)}
            classes={{
              root: classes.listItem,
              selected: classes.selected,
            }}
          >
            <ListItemIcon>
              <InboxIcon className={classes.iconLink} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>*/}
        </List>
      </nav>
    </aside>
  );
};

export default Sidebar;
