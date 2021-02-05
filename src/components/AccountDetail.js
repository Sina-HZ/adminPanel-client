import React, { useContext, useState, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import clsx from 'clsx';
import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Avatar,
} from '@material-ui/core';
import { menuStore, MenuEnum } from '../states/MenuStateProvider';

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

export const AccountDetailOnMenu = () => {
    const classes = useOnMenuStyles();
    // const authStore = useContext(AuthStoreContext);
    const { menuState, menuDispatch } = useContext(menuStore);
  
    //TODO we have to get it from authStore.user and authStore.getOptionData
    const id = '589775';
    const name = 'محمد سعیدی';
    const membership = 'عضویت طلایی';
  
    const sideMenu = !menuState.collapsed;
  
    return (
      <div className={classes.root}>
        <Avatar alt="account photo" className={clsx(classes.avatar, menuState.collapsed && classes.avatarCollapsed)} ></Avatar>
        <Typography variant="body2" component="div" className={clsx(classes.id, classes.hidable, menuState.collapsed && classes.hide)}>{`FCP.${id}`}</Typography>
        <Typography variant="subtitle1" component="div" className={clsx(classes.name, classes.hidable, menuState.collapsed && classes.hide)}>{name}</Typography>
        {/* <Typography variant="caption" component="div" className={clsx(classes.membership, classes.hidable, menuState.collapsed && classes.hide)}>{membership}</Typography> */}
      </div>
    );
  }