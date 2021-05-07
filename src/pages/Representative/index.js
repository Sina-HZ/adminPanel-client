import { Box, Button, createStyles, Divider, makeStyles, Paper, Typography } from "@material-ui/core"
import { AddCircle, ClearAllOutlined } from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import { MenuEnum, menuStore } from "../../states/MenuStateProvider";
import AddNew from "./AddNew";
import TableList from "./TableList";
import MainContentPaper from "../../components/MainContentPaper"

const useStyles = makeStyles((theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(2),
        marginTop: theme.spacing(-20),
        width: 1126,
        justifyContent: 'center',
        // background: theme.palette.primary.main,
        [theme.breakpoints.down('lg')]: {
            width: 699,
        },
        [theme.breakpoints.down('md')]: {
            width: 484,
        },
        [theme.breakpoints.down('sm')]: {
            width: `calc(100% - ${theme.spacing(5)})`,
            margin: theme.spacing(1),
            marginTop: theme.spacing(3),
        },
    },
    balance: {
        padding: theme.spacing(2),
        margin: theme.spacing(0, 1.5, 2),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0)
        }
    },
    addBtn: {
        boxShadow: 'unset',
        border: `solid 1px ${theme.palette.grey[300]}`,
        padding: theme.spacing(1, 3),
        color: '#fff',
        '&:hover': {
            boxShadow: 'unset',
        }
    }
}))

const Representative = () => {
    const classes = useStyles();
    const { menuDispatch } = useContext(menuStore);
    const [addNew, setAddNew] = useState(false);

    useEffect(() => {
        menuDispatch && menuDispatch({ type: 'ChangeActiveMenu', newMenu: MenuEnum.Representative });
    }, [menuDispatch])

    const togglePage = () => {
        setAddNew(prev => !prev)
    }

    return (
        <MainContentPaper>
            <Box display='flex' alignItems='center' justifyContent='space-between' mb={3}>
                <Box>
                    <Typography variant='h6'>امور نمایندگان</Typography>
                    <Typography variant='body1' color='textSecondary'>در این بخش می‌توانید اسلایدرهای سایت را مدیریت کنید.</Typography>
                </Box>

                <Button
                    startIcon={addNew ? <ClearAllOutlined fontSize='small' /> : <AddCircle fontSize='small' />}
                    onClick={togglePage}
                    className={classes.addBtn}
                    color='primary'
                    variant='contained'
                >
                    <Typography variant='body1' component='p'>{addNew ? 'لیست نماینده‌ها' : 'افزودن نماینده'}</Typography>
                </Button>
            </Box>
            <Divider />
            <Box mt={2}>
                {addNew ? <AddNew /> : <TableList />}
            </Box>
        </MainContentPaper>
    )
}

export default Representative
