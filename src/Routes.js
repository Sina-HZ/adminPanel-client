import { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';

const Slider = lazy(() => import('./pages/Slider'));
const Representative = lazy(() => import('./pages/Representative'));

const PanelRoutes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/slider" component={Slider} />
            <Route exact path="/representative" component={Representative} />
        </Switch>
    )
}

export default PanelRoutes;