import {useState} from 'react';
import { ethers, BigNumber } from 'ethers';
import TestNFT from '../TestNFT.json';

const TestNFTAddress = "0x4F0bfCF27D5bEA3948287A87Ddc733E92D687575";

const MintMenu = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function mintNFT() {
        if (window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const contract = new ethers.Contract(TestNFTAddress, TestNFT.abi, signer);
                const transaction = await contract.mint(BigNumber.from(mintAmount));
                await transaction.wait();
                console.log(`${mintAmount} NFTs Minted!`);
                console.log("transaction: ", transaction);
            } catch (error) {
                console.log("error: ", error);
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
            setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
            setMintAmount(mintAmount + 1);
    }

    return (
        <main>
            <img src={require('./logo.png')} alt="logo" height="80" ></img>
            <h1 className="title">TestNFT</h1>
            {isConnected ? (
                    <section>
                        <div className="select-number">
                            <button className="round" onClick={handleDecrement}>-</button>
                            <input type="text" inputMode="numeric" value={mintAmount} onChange={e => setMintAmount(e.target.value)}/>
                            <button className="round" onClick={handleIncrement}>+</button>
                        </div>
                        <button onClick={mintNFT}>Mint</button>
                    </section>
                ) : 
                (
                    <div className="how">Vous devez etre connecté pour pouvoir mint</div>
                )}
        </main>
    );
};

export default MintMenu;
