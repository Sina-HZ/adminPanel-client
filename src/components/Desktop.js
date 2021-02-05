import { AppBar, createStyles, Drawer, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import clsx from 'clsx';
import { menuStore } from "../states/MenuStateProvider";
import { drawerWidth } from "../utils/generalConst";
import DrawerContent from "./DrawerContent";


const useDesktopScaffoldStyles = makeStyles(theme => createStyles({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: 245,
    backgroundImage: `linear-gradient(278deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.dark} 100%)`,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      height: 'auto',
      position: 'sticky',
      zIndex: 15,
      top: 0
    },
  },
  appBarCollapsed: {
    width: `calc(100% - ${theme.spacing(9)}px)`,
    marginLeft: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  open: {
    transition: [
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    ].join(', '),
  },
  closed: {
    transition: [
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ].join(', '),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    padding: theme.spacing(1.5, 3),
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      left: 0,
      transition: theme.transitions.create('left', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    },
  },
  drawerClose: {
    padding: theme.spacing(1.5, 3),
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      left: -drawerWidth,
    },
  },

  headerToolbar: {
    margin: 'auto',
    width: 1126,
    [theme.breakpoints.down('lg')]: {
      width: 699,
    },
    [theme.breakpoints.down('md')]: {
      width: 484,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: theme.spacing(1, 0)
    },
  },
  content: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    padding: 0,
    position: 'relative',
    minHeight: '100vh',
    zIndex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  contentCollapsed: {
    width: `calc(100% - ${theme.spacing(9)}px)`,
    marginLeft: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  merchantMobileBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    padding: theme.spacing(1, 3),
    [theme.breakpoints.down('sm')]: {
      position: 'sticky',
      top: 68,
      zIndex: 10
    },
  },
  borderedMobileHeader: {
    boxShadow: 'unset',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.grey[300]
  },
  advancedSearchWrap: {
    position: 'absolute',
    top: theme.spacing(2),
    width: '375px',
    right: 0,
    zIndex: 25
  }
}));

const DesktopScaffold = ({children}) => {
  const classes = useDesktopScaffoldStyles();
  const { menuState, menuDispatch } = useContext(menuStore);
  const sideMenu = !menuState.collapsed;


  return (
    <>
      <AppBar
        position='static'
        className={clsx(
          classes.appBar, sideMenu && classes.open,
          !sideMenu && classes.closed,
          !sideMenu && classes.appBarCollapsed,
        )}
      >
        <div className={classes.headerToolbar}>
          {/* <DesktopHeader /> */}
        </div>
      </AppBar>
      <Drawer
        anchor="left"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: sideMenu,
          [classes.drawerClose]: !sideMenu,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: sideMenu,
            [classes.drawerClose]: !sideMenu,
          }),
        }}
      >
        <DrawerContent />
      </Drawer>
      <div
        // {...swipHandlers}
        // ref={refPassthrough}
        className={clsx(
          classes.content, sideMenu && classes.open,
          !sideMenu && classes.closed,
          !sideMenu && classes.contentCollapsed,
        )}
      >
        {children}
      </div>
    </>
  )
}

export default DesktopScaffold;