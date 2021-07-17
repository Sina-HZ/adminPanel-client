import React, { lazy, useEffect, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import { authApi } from "./services/api";
import Account from "./states/Account";
import { setUserAuthorization } from "./utils/axios";

const Slider = lazy(() => import('./pages/Slider'));
const Representative = lazy(() => import('./pages/Representative'));
const ShowReseller = lazy(() => import('./pages/Representative/Show'));
const Setting = lazy(()=> import('./pages/Setting'));

const PanelRoutes = () => {

    useLayoutEffect(() => {
        const setUserToken = async () => {
            const token = localStorage.getItem('Authorization').split(' ')?.[1];
            await setUserAuthorization(token)
        }
        setUserToken();
    }, [])

    useEffect(() => {
        fetchAccount();
    }, [])

    const fetchAccount = async () => {
        try {
            const fetch = await authApi.getDetail();
            Account.setAccount(fetch.data);
        } catch (error) {
            console.log('fetchError: ', error)
        }
    }

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/slider" component={Slider} />
            <Route exact path="/reseller" component={Representative} />
            <Route exact path="/reseller/:id" component={ShowReseller} />
            <Route exact path="/setting" component={Setting} />
        </Switch>
    )
}

export default PanelRoutes;