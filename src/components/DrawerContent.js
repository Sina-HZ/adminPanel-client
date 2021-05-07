import { createStyles, IconButton, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { AspectRatio, Dashboard, Menu, People, SettingsRounded } from "@material-ui/icons";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { MenuEnum, menuStore } from "../states/MenuStateProvider";
import { AccountDetailOnMenu } from "./AccountDetail";


const useStyle = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: theme.spacing(5),
        // padding: theme.spacing(1, 1),
        // necessary for content to be below app bar
        // ...theme.mixins.toolbar,
    },
    logo: {
        width: 99,
    },
    spacer: {
        flexGrow: 1,
        flexBasis: 24,
        flexShrink: 0,
    },
    divider: {
        margin: theme.spacing(2.5, 0),
    },
}))

const DrawerContent = () => {
    const classes = useStyle();
    const { menuState, menuDispatch } = useContext(menuStore);
    const sideMenu = !menuState.collapsed;

    const toggleDrawerClose = () => {
        menuDispatch && menuDispatch({ type: 'Collapse', collapsed: !menuState.collapsed });
    };


    return (
        <>
            <div className={classes.toolbar}>
                {/* <ZarinWorldIcon className={classes.logo} /> */}
                <div className={classes.spacer} />
                <IconButton edge="end" onClick={toggleDrawerClose}>
                    <Menu />
                    {/* {((sideMenu && theme.direction === 'rtl') || (!sideMenu && theme.direction !== 'rtl'))  ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                </IconButton>
            </div>
            <AccountDetailOnMenu />
            <List>
                <MenuItem collapsed={!sideMenu} href='/' selected={menuState.activeMenu === MenuEnum.Home} Icon={Dashboard} text={'داشبورد'} />
                <MenuItem collapsed={!sideMenu} href='/slider' selected={menuState.activeMenu === MenuEnum.Slider} Icon={AspectRatio} text={'تنظیمات اسلایدر'} />
                <MenuItem collapsed={!sideMenu} href='/reseller' selected={menuState.activeMenu === MenuEnum.Representative} Icon={People} text={'امور نمایندگان'} />
                <MenuItem collapsed={!sideMenu} href='/setting' selected={menuState.activeMenu === MenuEnum.Setting} Icon={SettingsRounded} text={'تنظیمات'} />
            </List>
        </>
    )
}

const useMenuStyles = makeStyles((theme) => createStyles({
    root: {
        color: theme.palette.grey[500],
        borderRadius: 24,
        padding: theme.spacing(1, 3),
        margin: theme.spacing(0.5, 0),
        transition: [
            theme.transitions.create('padding', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
            }),
            theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
            }),
            theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
            }),
        ].join(', '),
    },
    collapsedRoot: {
        padding: theme.spacing(1, 1.5),
        marginLeft: theme.spacing(-1.5),
        width: 48,
    },
    selected: {
        color: theme.palette.secondary.main,
        backgroundColor: theme.palette.secondary.main + '10',
    },
    button: {
        '&:hover': {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.secondary.main + '10',
        },
    },
    icon: {
        display: 'inline-flex',
        paddingRight: theme.spacing(3),
        flexShrink: 0,
    },
    menuAnchor: {
        textDecoration: 'none',
    }
}));

const MenuItem = ({ href, Icon, text, selected, collapsed, }) => {
    const classes = useMenuStyles();

    return (
        <Link to={href} className={classes.menuAnchor}>
            <ListItem disableGutters button classes={{ root: classes.root, button: classes.button, selected: classes.selected, }} selected={selected} className={clsx(collapsed && classes.collapsedRoot)}>
                <div className={classes.icon}><Icon /></div>
                <ListItemText primary={text} primaryTypographyProps={{ variant: 'subtitle2' }} />
            </ListItem>
        </Link>
    );
}

export default DrawerContent;