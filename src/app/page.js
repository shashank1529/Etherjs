// Import React and the necessary hooks
"use client"

import React, { useState, useEffect } from 'react';
import { ethers, providers } from 'ethers';

import { EtherscanProvider } from '@ethersproject/providers';


const Page = () => {
  const address = "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326";
  const apiKey = "KFQGDK49TS94C9FXAQPZVI2X2XPDUXAK6V";
  const [transaction,setTransaction] =useState([]);
  const [contractcode,setcontractcode] = useState("");
  const network="homestead";
  const etherjs=async()=>{

    const provider= new EtherscanProvider(network, apiKey);
    const balance=await provider.getBalance(address);
   const showBalance = ethers.utils.formatEther(balance);
   const check=await provider.getBlock(18641735);
   const number= check.transactions;
   setTransaction(number)
   const contract=await provider.getCode(address);
   setcontractcode(contract);
  //  console.log(contract);
  //  console.log(transaction);
    
  };
  useEffect(()=>{
    etherjs();
  },[]);
 

  return (

   <div>
    Etherjs tutorial
    <h3>Contract Code:</h3>
      <pre>{contractcode}</pre>
    {transaction.map((el,i)=>(
      <div key={i+1}>
        <h6>{el}</h6>
      </div>
    )

    )}
   </div>
      
  );
};

export default Page;
