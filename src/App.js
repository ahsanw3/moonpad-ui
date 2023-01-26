import { ScrollContainer } from "react-scroll-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { ContractABI } from "../src/components/Mint/contract";

import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Moonriver from "./components/Moonriver";
import RoadMap from "./components/roadmap/RoadMap";
import Team from "./components/team/Team";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import ArenaGameCard from "./components/arena_game_card/ArenaGameCard";
import Models from "./components/3dbackground/3dbackground";
import Mint from "./components/Mint/Mint";
import Navbar from "./components/Navbar";

const App = () => {
  const [wallet, setWallet] = useState("Connect a Wallet");
  const [logout, setLogout] = useState(false);
  const [maxMintAmount, setMaxMintAmount] = useState();
  const [price, setPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [userMintedAmount, setUserMintedAmount] = useState(0);

  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;
  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };
  const setupConnections = async () => {
    if (window.ethereum != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (REACT_APP_NETWORK !== network.name) {
        notify(
          `Not on a correct network. Change your network to "${REACT_APP_NETWORK}"`
        );
        return false;
      } else {
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        return address;
      }
    } else {
      notify("No Ether wallet available");
      return false;
    }
  };
  const connection = async () => {
    const res = await setupConnections();
    if (res === false) {
      setWallet("Connect a Wallet");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REACT_APP_NETWORK_CHAIN_ID }],
      });
    } else {
      setLogout(true);
      setWallet(res.slice(0, 6) + "..." + res.slice(36, 42));
    }
  };
  const disconnect = async () => {
    setWallet("Connect a Wallet");
    setLogout(false);
    setUserMintedAmount(0);
    setMaxMintAmount("-");
    setPrice("-");
    setImages([]);
  };
  const readContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    const maxMintAmount = await contract.maxMintAmount();
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const userMintedAmount = await contract.balanceOf(address);
    const price = await contract.cost();
    setMaxMintAmount(parseInt(maxMintAmount, 10));
    setUserMintedAmount(parseInt(userMintedAmount, 10));
    setPrice(Number(ethers.utils.formatEther(price)));
  };
  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
    );
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const imagesTockens = await contract.nftsOnwedByWallet(address);
    let imagesLocal = [];
    await imagesTockens.map(async (image) => {
      const url = await contract.tokenURI(parseInt(image, 10));
      let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
      const jsonBody = await (await fetch(result)).json();
      imagesLocal.push(
        await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
      );
    });
    setTimeout(() => {
      setImages(imagesLocal);
    }, [3000]);
  };
  useEffect(() => {
    Aos.init();
  });
  return (
    <>
      <BrowserRouter>
        <ToastContainer position="top-center" autoClose={2000} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <ScrollContainer>
                  <div className="App">
                    <motion.div className="text-white bgp bg-fixed px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 ">
                      <Header
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
                      <Models />
                      <Intro />
                      <Moonriver />
                      {/* <Cards/>
      <ArenaGameCard/> */}

                      <div className="flex flex-wrap justify-center gap-10">
                        <div
                          data-aos="zoom-in"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="3000"
                        >
                          <ArenaGameCard />
                        </div>
                        <div
                          data-aos="zoom-in"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="3000"
                        >
                          <ArenaGameCard />
                        </div>
                        <div
                          data-aos="zoom-in"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="3000"
                        >
                          <ArenaGameCard />
                        </div>
                        <div
                          data-aos="zoom-in"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="3000"
                        >
                          <ArenaGameCard />
                        </div>
                      </div>

                      <RoadMap />
                      <Team />
                      <FAQ />
                      <Footer />
                    </motion.div>
                  </div>
                </ScrollContainer>
              </>
            }
          ></Route>
          <Route
            exact
            path="/mint"
            element={
              <>
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
                <Models />
                <Mint
                  wallet={wallet}
                  price={price}
                  images={images}
                  userMintedAmount={userMintedAmount}
                  maxMintAmount={maxMintAmount}
                  disconnect={disconnect}
                  connection={connection}
                  readContract={readContract}
                  getTokens={getTokens}
                />
                <div className="text-white">
                  <Footer />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
