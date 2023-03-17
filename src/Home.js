import React from 'react';
import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
function Home() {
	const [accounts, setAccounts] = useState([]);

	return (
		<div className="overlay">
			<video id="v1" autoPlay loop muted >
				<source src="https://ipfs.filebase.io/ipfs/QmQb68V1AUZ5j3JxsQG9jZqcV3gt3V8E1y6TBJ4y2KWbPQ" type="video/mp4" />
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

export default Home;