import React from "react";

export default function Moonriver() {
  return (
    <div className="">
      <h1 className=" pt-28 text-2xl flex justify-center font-bold ">
        {" "}
        WHAT IS MOONRIVER{" "}
      </h1>
      <p className="flex justify-center">
        Moonriver is a companion network to Moonbeam and provides a permanently
        incentivized canary{" "}
      </p>
      <p className="flex justify-center">
        network. New code ships to Moonriver first, where it can be tested and
        verified under real economic
      </p>
      <p className="flex justify-center">
        conditions. Once proven, the same code ships to Moonbeam on Polkadot.
      </p>
      <p className="flex justify-center">
        Moonriver is intended to work as a smart contract platform, allowing
        developers to redeploy their
      </p>
      <p className="flex justify-center">
        ethereum dapps in a substare environment with minimal friction. This
        means that the smart contracts that
      </p>
      <p className=" pb-28 flex justify-center">
        power ethereum dapps will not need to rewritten or reconfigured for the
        karura network.
      </p>

      <div className="flex justify-center gap-5 py-10 px-20 space-x-2 w-">
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          UPCOMING{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          ONGOING{" "}
        </button>
        <button
          type="button "
          className=" hover:bg-gray-100 hover:text-red-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow small"
        >
          LAUNCHED
        </button>
      </div>
    </div>
  );
}
