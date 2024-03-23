import React,{useState,useEffect,useContext} from "react";
import Image from "next/images"
import Link from "next/link";
//IMPORT INTERNAL
import Style from "./NavBar.module.css";
import images from"../../assets";
import { Model, TokenList } from "../../index";

const NavBar=()=> {
const menultems=
[
    {
      name:"Swap",
      link:"/"
    },
    {
      name:"Taken",
      link:"/"
    },
    {
      name:"Pools",
      link:"/"
    },
];
//USE STATE
const [openModel, setopenModel] = useState(false)
cost [openTokenBox,setopenTokenBox]=useState(false)
return (
<div className={Style.NavBar}>
    <div className={Style.NavBar_box}>
      <div className={Style.NavBar_box_left}>
        {/*// LOGO IMAGE */}
        <div className={Style.NavBar_box_left_img}>
        <Image src={images.uniswap} alt="logo" width={50} height={50} />
         </div>
         {/* menu item */}
         <div className={Style.NavBar_box_left_menu}>
         {menuItems.map((el, i) => (
       <Link key={i + 1} 
       href={{ pathname: '${el.name}', query: '${el.link}'}}>
      <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
      </Link>
       ))}
         </div>
      
    </div>
      
{/* MIDDLE SECTION    */}
<div className={Style.NavBar_box_middle}>
<div className={Style.NavBar_box_middle_search}>
<div className={Style.NavBar_box_middle_search_img}>
<Image src={images.search} alt="search" width={20} height={20} />
</div>
{/* INPUT SECTION */}
<input type="text" placeholder="Search" />
</div>
</div>
  
{/* //RIGHT SECTION */}
<div className={Style.NavBar_box_right}>
<div className={Style.NavBar_box_right_box}>
<div className={Style.NavBar_box_right_box_img}>
<Image src={images.ether} alt="Network" height={30} width={30} />
</div>
<P>Network Name</P>
</div>
<button onClick={() => setopenModel(true)}>Add</button>
{openModel && (
  <Model setopenModel={setopenModel} connectwallet="Connect" />
)}
</div>
</div>
{/* //TOTEN LIST COMPONENT */}
{openTokenBox && (
    <TokenList tikenDate="hey" setopenTokenBox={s}/>
)
}
</div>
       
);
  
};

export default NavBar;
