import { Box, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import MainContentPaper from '../../components/MainContentPaper'
import clsx from 'clsx';
import { observer } from 'mobx-react-lite';
import { resellerApi } from '../../services/api';
import ResellerRoot from '../../states/Reseller';
import { toJS } from 'mobx';

const useStyles = makeStyles(theme => ({
    mainPaper: {
        padding: 0,
        overflow: 'hidden'
    },
    boldText: {
        fontWeight: 500,
        margin: theme.spacing(0, 1)
    },
    row: {
        display: 'flex',
        marginBottom: theme.spacing(1)
    },
    infoBox: {
        padding: theme.spacing(2, 2),
        margin: theme.spacing(0, 3),
        // broder: '2px solid',
        // borderColor: theme.palette.primary.main,
        // borderStyle: 'none none none solid'
    },
    maxWidthText: {
        width: 50
    },
    inline: {
        display: 'inline-block'
    }
}))

const headerStyle = makeStyles(theme => ({
    root: {
        height: 200,
        width: '100%',
        backgroundColor: '#dedede',
        position: 'relative',
        overflow: 'hidden',
        '&:after': {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'inline-block',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0,0.1) 0%,rgba(0, 0, 0, 0.4) 100%)'
        }
    },
    logoBoxWrapper: {
        display: 'flex',
        padding: theme.spacing(0, 4)
    },
    logoBox: {
        width: 150,
        height: 150,
        borderRadius: theme.spacing(1),
        position: 'relative',
        overflow: 'hidden',
        top: -75,
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    companyName: {
        fontWeight: 500,
        margin: theme.spacing(2, 0, 0, 4)
    }
}))

const Header = ({companyName}) => {
    const classes = headerStyle();

    return (
        <>
            <Box className={classes.root}>
                <img src='/assets/images/CircuitBoard.svg' width='100%' />
            </Box>
            <Box className={classes.logoBoxWrapper}>
                <Box className={classes.logoBox}>
                    <img src='/assets/images/noImage.svg' width='40%' style={{opacity: 0.35}} />
                </Box>
                <Typography variant='h6' className={classes.companyName}>{companyName}</Typography>
            </Box>
        </>
    )
}

const Text = ({ title, preText, className }) => {
    const classes = useStyles();

    return (
        <Typography
            variant='body1'
            className={clsx({
                [classes.boldText]: !preText,
                [className]: className
            })}
            color={preText ? 'textSecondary' : 'textPrimary'}
        >
            {title}
        </Typography>
    )
}



const ShowReseller = observer(({match}) => {
    const classes = useStyles();

    useEffect(() => {
        getReseller(match.params.id)
    }, [])

    const getReseller = async (id) => {
        try {
            const fetch = await resellerApi.getReseller(id);
            ResellerRoot.setCurrent(fetch.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <MainContentPaper className={classes.mainPaper}>
            <Header companyName={ResellerRoot.current.name} />
            <Box className={classes.infoBox}>
                <Box className={classes.row}>
                    <Text preText title='استان' className={classes.maxWidthText} />
                    <Text title={ResellerRoot.current.province} />
                </Box>
                <Box className={classes.row}>
                    <Text preText title='شهر' className={classes.maxWidthText} />
                    <Text title={ResellerRoot.current.city} />
                </Box>
                <Box className={classes.row}>
                    <Text preText title='تلفن' className={classes.maxWidthText} />
                    {toJS(ResellerRoot.current.phone).map(item => (
                        <Text title={item} className={classes.inline} key={item} />
                    ))}
                </Box>
                <Box className={classes.row}>
                    <Text preText title='آدرس' className={classes.maxWidthText} />
                    <Text title={ResellerRoot.current.address} />
                </Box>
            </Box>
        </MainContentPaper>
    )
})

export default ShowReseller
