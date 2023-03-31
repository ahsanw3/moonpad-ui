import React, { forwardRef, useEffect, useState } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { ContractABI } from "../../content/mint/contract";
import profileImage from "../../images/arcane.jpg";

import "react-toastify/dist/ReactToastify.css";

const Mint = forwardRef((props, ref) => {
  const [amount, setAmount] = useState(0);
  const [check, setCheck] = useState(false);

  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };

  const mint = async (mintAmount) => {
    setCheck(!check);
    if (props.wallet === "Connect a Wallet") {
      notify("Connect a Wallet First!");
      return;
    } else {
      await props.readContract();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        REACT_APP_CONTRACT_ADDRESS,
        ContractABI,
        signer
      );
      try {
        const response = await contract.mint(mintAmount, {
          value: ethers.utils.parseEther((props.price * mintAmount).toString()),
        });
        await response.wait();
        toast.success("Transaction Successful.", {
          toastId: "custom-id-yes",
        });
        setCheck(!check);
      } catch (error) {
        setCheck(!check);
        notify(error.reason);
      }
    }
  };

  const initialFun = async () => {
    await props.connection();
    await props.readContract();
    await props.getTokens();
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", async () => {
        console.log("Disconnect");
        await props.disconnect();
      });
      window.ethereum.on("accountsChanged", async () => {
        await props.disconnect();
        await props.connection();
        await props.readContract();
        await props.getTokens();
      });
    }
  });

  useEffect(() => {
    initialFun();
  }, []);

  return (
    <div ref={ref} className="lg:px-32 md:px-24 px-10 ">
      <motion.div whileHover={{ scale: 1.1 }} className="sm:flex  rounded">
        <div className="sm:flex border-2 border-purple-800  mb-28  rounded text-white">
          <div className="sm:w-2/5">
            <img src={profileImage} alt="profile" />
          </div>
          <div className="sm:w-3/5 bg-slate-50/20 mb:max-sm:pt-10 mb:max-sm:pb-6 text-sm md:text-base lg:text-lg grid content-center">
            <h1 className="flex justify-center uppercase text-2xl md:text-3xl xl:text-4xl font-extrabold">
              Total Minted
            </h1>
            <p className="flex justify-center pt-2 pb-2">
              {props.userMintedAmount}/{props.maxMintAmount}
            </p>
            <p className="flex justify-center">
              The Price is {props.price}eth ETH + Gas Fee
            </p>

            <div className="px-10 md:px-16 lg:px-20 xl:px-36 pt-1">
              <div className="flex justify-around bg-purple-800/70 py-2">
                <button
                  onClick={() => {
                    setAmount(amount - 1);
                  }}
                >
                  -
                </button>
                <p>{amount}</p>
                <button
                  onClick={() => {
                    setAmount(amount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-center pt-5">
              <button
                onClick={async () => {
                  setCheck(!check);
                  await mint(amount);
                  await props.readContract();
                  await props.getTokens();
                }}
                className="bg-violet-900 px-14 py-2 rounded-sm uppercase"
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="text-white justify-center px-10 py-10 grid text-center xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        {props.images.map((url, key) => {
          return (
            <div key={key} className="border border-md">
              <img key={key} alt="Tokens images" src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Mint;
