import React from "react";
import Landing from "./landing/Landing";
import Navbar from "./Navbar";

export default function Header({
  wallet,
  logout,
  disconnect,
  setUserMintedAmount,
  setMaxMintAmount,
  setPrice,
  setImages,
  connection,
  readContract,
  getTokens,
}) {
  return (
    <div className="  text-white font-lora">
      <Navbar
        wallet={wallet}
        logout={logout}
        disconnect={disconnect}
        setUserMintedAmount={setUserMintedAmount}
        setMaxMintAmount={setMaxMintAmount}
        setPrice={setPrice}
        setImages={setImages}
        connection={connection}
        readContract={readContract}
        getTokens={getTokens}
      />
      <Landing />
    </div>
  );
}
