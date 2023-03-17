import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';

function Mint() {
	const [accounts, setAccounts] = useState([]);

	return (
		<div className="overlay">
			<video id="v1" autoPlay loop muted >
				<source src="https://ipfs.filebase.io/ipfs/QmRo75kh1QLPcnE7g2AR2ZuZGixdi7z6gKxb1oEtJ8im3A" type="video/mp4" />
			</video>
			<div className="App">
				<NavBar accounts={accounts} setAccounts={setAccounts} />
				<MainMint accounts={accounts} setAccounts={setAccounts} />
			</div>
			{/* <div className="moving-background">

			</div> */}
		</div>
	);
}

export default Mint;