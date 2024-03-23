import React,{useState ,useEffect} from "react";
import Image from "next/image";

//Internal IMPORT
import style from './model.css';
import image from "./../../assets";
import{Model, TokenList} from "../index";

const Model=({setOpenModel,connectWallet})=>{
    //USESTATE
    const walletMenu=["MetaMask", "Coinbase", "Wallet","WalletConnect"]
    return (
        <div className={Style.Model}>
            <div className={Style.Model_box}>
                <div className={Style.Model_box_heading}>
                    <p>ConnectWallet</p>
                    <div className={Style.Model_box_heading_img}>
                        <Image src={image.close}
                        alt="logo"
                        width={50}
                        height={50}
                        onclick={()=> setOpenModel(false)}
                        />
                    </div>
                </div>
                <div className={Style.Model_box_wallet}>
                    {walletMenu.map((el,i)=>(
                        <p key ={i+1} onClick={()=>connectWallet()}>
                            {el}
                        </p>

                    ))}
                </div>
                <p className={Style.Model_box_para}>
                    By connecting a wallet ,you agree to Uniswap Labs'
                    <br/>terms of service and consent to its Privacy Policy
                </p>
            </div>
        </div>
    )
};

export default Model;
