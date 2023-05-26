import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { Container, Menu, PageBody } from './AppStyled'
import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/menuItem/index';
import Cart from './components/Cart'

const app = () => {
// const name = useSelector(state => state.user.name);
    return (
        <BrowserRouter>
        <Container>
            <Menu>
            <MenuItem title="loja" icon="/assets/store.png" link="/"/>
            <MenuItem title="pedidos" icon="/assets/order.png" link="/orders"/>
            <MenuItem title="Meu perfil" icon="/assets/profile.png" link="/profile"/>
            </Menu>
            {/* corpo da pagina */}
            <PageBody>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <PrivateRoute path="/orders"> 
                    <div>TELA DE PEDIDOS</div>
                    </PrivateRoute>
                    <PrivateRoute path="/profile"> 
                    <div>TELA DE PERFIL</div>
                    </PrivateRoute>
                    <Route path="/tela2/:nome">
                        <Tela2Screen />
                    </Route>
                </Switch>
            </PageBody>
             {/* carrinho de compras */}
            <Cart />
            <ReactTooltip anchorId="tip-top" place="top" effect="solid"/>
            <ReactTooltip anchorId="tip-right" place="right" effect="solid"/>
        </Container>
        </BrowserRouter>
    );
}
export default app