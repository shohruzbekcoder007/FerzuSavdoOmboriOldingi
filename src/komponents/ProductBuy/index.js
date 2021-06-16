import React from 'react'
import { observer } from "mobx-react";
// import { globalState } from "./../../globalState";
import { Message } from './styles'
import {
    ProductBuyWrapper,
    ProductBuyContainer,
    ProductBuyHeader,
    SearchOmborxona,
    SearchWrapper,
    SearchInput,
    RequestButton,
    ScrollWrapper
} from './styles'
import axios from './../../baseUrl'
import { getToken } from './../../globalState'
import ProductBuyCreate from './ProductBuyCreate'
import ProductBuyList from './ProductBuyList'
import Title from '../Title'
import { getPlus, globalState } from "./../../globalState"

const _ProductBuy = (props) => {

    const [products, setProducts] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [count, setCount] = React.useState(1);
    const limit = 5;

    let term = "";

    const qaytaYasash = () => {
        getBuyProducts();
    }

    const getBuyProducts = () => {
        axios.get(`order/buy-order-list/?limit=${limit}&offset=${(offset-1)*limit}`,{
            params: {
                // term: term
                term: globalState.search
            }
        }, {
            // headers: {
            //     'Authorization': `token ${getToken()}`
            // }
        })
        .then((res) => {
            setProducts(res.data.buy_order_list);
            setCount(Math.floor(res.data.count/limit) + 1);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    React.useEffect(()=>{
        getBuyProducts();
    },[offset,globalState.search, globalState.plus])

    return (
        <>
            <Title padding="" text="Yangi maxsulot harid qilish"/>
            <ProductBuyWrapper>
                    <ProductBuyContainer>
                        <div style={{display: "inline-block"}}>
                            {/* <ProductBuyHeader>
                                <Message>Maxsulot</Message>
                                <Message>Hajmi</Message>
                                <Message>Narxi</Message>
                                <Message>Harid vaqti</Message>
                                <Message>Tugash vaqti</Message>
                                <Message>Tasdiqqlash</Message>
                            </ProductBuyHeader> salom */}
                            {
                                (globalState.plus)?
                                <ProductBuyCreate func = {qaytaYasash}/>:
                                <></>
                            }
                            
                        </div>
                        <ProductBuyList
                            products={products}
                            pgFunc={(arg)=>{setOffset(arg)}}
                            count = { count }
                        />
                    </ProductBuyContainer>
                {/* </ScrollWrapper> */}
            </ProductBuyWrapper>
        </>
    )
}

export default observer(_ProductBuy);