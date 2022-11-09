import React from 'react';;

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccounts(accounts);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <nav className="navbar">
            <a href="test"> <img src="../../public/logo.png" alt="work" height="100"/> NFT Marketplace </a>
            <div>
                <a href="test"> The Project ? </a>
                {isConnected ? accounts[0] : (
                    <button className="test" onClick={connectAccount}>
                        Connect
                    </button>
                )}
            </div>
        </nav>
    );
};

export default NavBar;