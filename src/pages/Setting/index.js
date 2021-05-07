import MainContentPaper from '../../components/MainContentPaper'
import React, { useContext, useEffect, useState } from 'react'
import { MenuEnum, menuStore } from '../../states/MenuStateProvider';
import { Tab, Tabs, withStyles, makeStyles, Box } from '@material-ui/core';
import ProfileSetting from './ProfileSetting';

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
        '& span': {
            fontSize: theme.typography.pxToRem(15),
        }
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
    main: {
        padding: 0
    },
    
}))

const SettingMain = () => {
    const classes = useStyles();
    const { menuDispatch } = useContext(menuStore);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        menuDispatch && menuDispatch({ type: 'ChangeActiveMenu', newMenu: MenuEnum.Setting });
    }, [menuDispatch])

    return (
        <MainContentPaper className={classes.main}>
            <Box mt={3}>
                <StyledTabs value={value} onChange={handleChange} aria-label="setting styled tabs">
                    <StyledTab label="پروفایل" />
                    <StyledTab label="کارکرد" />
                    <StyledTab label="کاربران" />
                </StyledTabs>
            </Box>

            {value === 0 &&
                <ProfileSetting />
            }
        </MainContentPaper>
    )
}

export default SettingMain
