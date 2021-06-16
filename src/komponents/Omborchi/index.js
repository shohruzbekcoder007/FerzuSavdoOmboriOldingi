import React, { useState } from 'react'
import AgentByOmborchi from '../AgentByOmborchi';
import OmborchiNewProduct from '../OmborchiNewProduct';
import ProductBuy from '../ProductBuy';
import Header from './../Header'
import LeftMenu from './../LeftMenu/'
import QaytganMaxsulotlar from "./../QaytganMaxsulotlar"
import Omborxona from "./../Omborxona"
import QaytarilganMaxsulotlar from '../QaytarilganMaxsulotlar';
import AddProvider from '../AddProvider/AddProvider';
// SuralganMaxsulot
import PrintThisComponent from './../PrintThisComponent';
import SuralganMaxsulot from './../SuralganMaxsulot';
import PrintThisComponentAll from './../PrintThisComponentAll';
import Sidebar from './../Sidebar'
import { OmborchiWrapper } from './styles'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

export default function Omborchi() {

    const [openLeftMenu, setLeftMenu] = useState(true);
    const [selectItem, setSelectItem] = useState(4);
    let { path, url } = useRouteMatch();

    const openCloseLeftMenu = (arg) => {
        setLeftMenu(arg);
    }

    return (
        <Router>
            <Switch>
                <Route exact path={`${path}/`}>
                        {(selectItem == 4) ? <Header hamburgerga={openCloseLeftMenu} search={false} rolName="Omborxonachi" /> : <></>}
                        {(selectItem == 1) ? <Header hamburgerga={openCloseLeftMenu} search={true} rolName="Omborxonachi" /> : <></>}
                        {(selectItem == 3) ? <Header hamburgerga={openCloseLeftMenu} search={true} plus={true} rolName="Omborxonachi" /> : <></>}
                        {(selectItem == 5) ? <Header hamburgerga={openCloseLeftMenu} search={true} plus={true} rolName="Omborxonachi" /> : <></>}
                        {(selectItem == 6) ? <Header hamburgerga={openCloseLeftMenu} search={true} rolName="Omborxonachi" /> : <></>}
                        {(selectItem == 7) ? <Header hamburgerga={openCloseLeftMenu} search={true} rolName="Omborxonachi" /> : <></>}
                    <Sidebar
                        getSelectItem={
                            (arg) => {
                                setSelectItem(arg);
                            }}
                    />
                    <OmborchiWrapper>
                        {(selectItem == 1) ? <AgentByOmborchi url={url} /> : <></>}
                        {(selectItem == 3) ? <OmborchiNewProduct /> : <></>}
                        {(selectItem == 4) ? <Omborxona /> : <></>}
                        {(selectItem == 5) ? <ProductBuy/> : <></>}
                        {(selectItem == 6) ? <QaytganMaxsulotlar /> : <></>}
                        {(selectItem == 7) ? <QaytarilganMaxsulotlar /> : <></>}
                    </OmborchiWrapper>
                </Route>
                <Router path={`${path}/print`}>
                    <PrintThisComponent />
                </Router>
                <Router path={`${path}/printAll`}>
                    <PrintThisComponentAll />
                </Router>
                <Router path={`${path}/barchasiMaxsulot`}>
                    {/* <PrintThisComponentAll /> */}
                    <SuralganMaxsulot/>
                </Router>
            </Switch>
        </Router>
    )
}
