import React,{ lazy, Suspense, useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import DesktopScaffold from "./components/Desktop";
import PageLoading from "./components/PageLoading";
import PanelRoutes from "./Routes";
import { MenuStateProvider } from "./states/MenuStateProvider";

const PrivateRoute = ({ Component, path, exact, redirectTo }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      setIsAuth(true);
    }
    setIsCheck(true);
  }, [])

  return (
    <>
      {isCheck &&
        <Route path={path} exact={exact} render={(props) => (
          isAuth ? <Component /> : <Redirect to={redirectTo} />
        )} />
      }
    </>
  )
};

const AppContent = (props) => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        <Route>
          <PanelRoutes />
        </Route>
      </Switch>
    </Suspense>
  );
};

const Register = lazy(() => import('./pages/Register'));



const Scaffold = () => {

  return (
    <Router >
      <Box>
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <Route exact path='/login' component={Register} />
            
            <PrivateRoute
              path='*'
              Component={() => <MenuStateProvider>
                <DesktopScaffold>
                  <AppContent />
                </DesktopScaffold>
              </MenuStateProvider>}
              redirectTo='/login'
            />
          </Switch>
        </Suspense>
      </Box>
    </Router>
  )
}

export default Scaffold