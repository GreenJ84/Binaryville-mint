import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const { ethers } = require("ethers");

import  Logo from '../../utils/icons/Logo.svg'
import header1 from '../../utils/image/header1.png'
import header2 from '../../utils/image/header2.png'
import { jsonABI } from '../../utils/jsonABI';
import { FormatTypes, Interface } from 'ethers/lib/utils';
import { providers, Signer } from 'ethers';

const css = require('./navbar.module.css')

let address: string | null, signer: Signer, provider;
const iface = new Interface(jsonABI);
iface.format(FormatTypes.full);

declare let window: any;

const Navbar = () => {

  const [isConnected, toggleConnection] = useState(false);
  
  const setAddress = (_address: any) => {
    address = _address;
    if (address != null) { toggleConnection(!isConnected); }
    console.log('Account: ', address);
    alert("Connected " + address);
  }

  const handleButton = () => {
    if (!isConnected) { connectWallet() }
    else{ mintNFT() }
  }
  const connectWallet = async () => {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    setAddress(await signer.getAddress());

    let balance = await signer.getBalance();
    console.log(await ethers.utils.formatEther(balance));
  }

  const mintNFT = async () => {
    const nftContract = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', iface, signer);
    const nftData = await nftContract.mintNFT(address, 'https://gateway.pinata.cloud/ipfs/QmYiV4mHaW5XQ7j8DHMiUdtLE7yf45H7wcNWuyehxf6yYS');
    
    console.log(nftData);
  }

  return (
    <div className={ css.navbar}>
      <div className={ css.navbarContainer }>
        <div className={ css.navbarTop }>
          <div className={ css.navbarCenterTop }>
            <Image src={Logo} alt='' className={css.logo } />
          </div>
          <div className={ css.navbarCenterBottom }>
            <Link className={ css.navbarCenterItem} href='#mint'>
              Mint
            </Link>
            <Link className={ css.navbarCenterItem} href='#about'>
              About Binaryville
            </Link>
            <Link className={ css.navbarCenterItem} href='#roadmap'>
              Roadmap
            </Link>
            <Link className={ css.navbarCenterItem} href='#team'>
              Team
            </Link>
            <Link className={ css.navbarCenterItem} href='#faq'>
              FAQ
            </Link>
          </div>
        </div>
      </div>

      <div className={ css.navbarContainer }>
        <div className={ css.navbarLeft}>
          <Image src={header1} alt='' className={ css.navbarBoxImage } />
        </div>
        <div className={ css.navbarCenter }>
          <div className={ css.navbarBox }>
            <div className={ css.navbarBoxTitle }>
              <span className={ css.textHighlight }>Welcome</span> to Binaryville
            </div>
            <div className={ css.navbarBoxSubTitle }>a collection of 5,000 unique NFTs</div>
            <div id="nftbutton" className={ css.navbarBoxButton } onClick={handleButton}>{isConnected? 'MINT NOW' : 'CONNECT WALLET'}</div>
          </div>
        </div>
        <div className={ css.navbarRight }>
          <Image src={header2} alt='' className={ css.navbarBoxImage } />
        </div>
      </div>
    </div>
  )
}

export default Navbar
