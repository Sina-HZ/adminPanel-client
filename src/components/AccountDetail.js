import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  makeStyles,
  createStyles,
  Typography,
  Avatar,
} from '@material-ui/core';
import { menuStore } from '../states/MenuStateProvider';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import Account from '../states/Account';

const useOnMenuStyles = makeStyles((theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 192,
  },
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    transition: [
      theme.transitions.create('height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
      }),
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
      }),
    ].join(', '),
  },
  avatarCollapsed: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  id: {
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.7, 1.5, 0.3, 1.5),
    marginTop: theme.spacing(-1.5),
    zIndex: 1,
    color: '#fff'
  },
  name: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  membership: {
    textAlign: 'center',
    marginTop: theme.spacing(0.5),
  },
  hidable: {
    transition: [
      theme.transitions.create('opacity', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.standard,
      }),
    ].join(', '),
  },
  hide: {
    opacity: 0,
  },
}));

export const AccountDetailOnMenu = observer(() => {
  const classes = useOnMenuStyles();
  const { menuState, menuDispatch } = useContext(menuStore);

  const sideMenu = !menuState.collapsed;

  return (
    <div className={classes.root}>
      <Avatar alt="account photo" className={clsx(classes.avatar, menuState.collapsed && classes.avatarCollapsed)} ></Avatar>
      <Typography variant="body2" component="div" className={clsx(classes.id, classes.hidable, menuState.collapsed && classes.hide)}>Developer</Typography>
      <Typography variant="subtitle1" component="div" className={clsx(classes.name, classes.hidable, menuState.collapsed && classes.hide)}>{toJS(Account).username}</Typography>
      <Typography variant="caption" component="div" className={clsx(classes.membership, classes.hidable, menuState.collapsed && classes.hide)}>{toJS(Account).email}</Typography>
    </div>
  );
})