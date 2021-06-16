import React, { useState } from 'react'
import { LeftSideBar,
    LeftSideBarHeader,
    LeftSideBarItem,
    LeftSideBarList,
    LeftSideBarText,
    LeftSideBarImg,
    LeftSidebarPopover
} from './styles'
import "./sidebar.css"
import logo from './../../img/Logo-lider.svg'
import img1 from './../../img/img1.svg'
import img2 from './../../img/img2.svg'
import img3 from './../../img/img3.svg'
import img4 from './../../img/img4.svg'
import img5 from './../../img/img5.svg'
import img6 from './../../img/img6.svg'
import img7 from './../../img/img7.svg'

export default function Sidebar(props) {
    const [selected, setSelected] = useState(4)
    return (
        <LeftSideBar>
            <LeftSideBarList>
                <LeftSideBarItem onClick={()=>{
                    props.getSelectItem(1)
                    setSelected(1)
                    }} 
                    className={(selected == 1)?"active":""}
                >
                    <LeftSideBarImg src={img1}/>
                    <LeftSidebarPopover>buyurtmalar</LeftSidebarPopover>
                </LeftSideBarItem>
                <LeftSideBarItem onClick={()=>{
                    props.getSelectItem(3)
                    setSelected(3)
                    }} 
                    className={(selected == 3)?"active":""}
                >
                    <LeftSideBarImg src={img3}/>
                    <LeftSidebarPopover>mahsulot qo'shish</LeftSidebarPopover>
                </LeftSideBarItem>
                <LeftSideBarItem onClick={()=>{
                    props.getSelectItem(4)
                    setSelected(4)
                    }} 
                    className={(selected == 4)?"active":""}
                >
                    <LeftSideBarImg src={img4}/>
                    <LeftSidebarPopover>Omborxona</LeftSidebarPopover>
                </LeftSideBarItem>
                <LeftSideBarItem onClick={()=>{
                    props.getSelectItem(5)
                    setSelected(5)
                    }} 
                    className={(selected == 5)?"active":""}
                >
                    <LeftSideBarImg src={img5}/>
                    <LeftSidebarPopover>mahsulot sotib olish</LeftSidebarPopover>
                </LeftSideBarItem>
                <LeftSideBarItem onClick={()=>{
                    props.getSelectItem(6)
                    setSelected(6)
                    }} 
                    className={(selected == 6)?"active":""}
                >
                    <LeftSideBarImg src={img6}/>
                    <LeftSidebarPopover>qaytarilgan mahsulotlar</LeftSidebarPopover>
                </LeftSideBarItem>
                <LeftSideBarItem onClick={()=>{
                    props.getSelectItem(7)
                    setSelected(7)
                    }} 
                    className={(selected == 7)?"active":""}
                >
                    <LeftSideBarImg src={img7}/>
                    <LeftSidebarPopover>qaytgan mahsulotlar</LeftSidebarPopover>
                    {/* <LeftSideBarText>qaytarilgan mahsulotlar</LeftSideBarText> */}
                </LeftSideBarItem>
            </LeftSideBarList>
        </LeftSideBar>
    )
}