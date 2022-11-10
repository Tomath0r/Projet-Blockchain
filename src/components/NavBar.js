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
        <nav>
            {isConnected ? accounts[0] : (
                <button onClick={connectAccount}>
                    Connect
                </button>
            )}
            <a href="test"> The Project ? </a>
        </nav>
    );
};

export default NavBar;