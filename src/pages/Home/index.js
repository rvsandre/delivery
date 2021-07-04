import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import Feed from './components/Feed';
import Navbar from './components/Navbar';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		height: '100vh',
		width: '1200px',
		display: 'flex',
		alignItems: 'center',
		margin: '0 auto',
	},
});

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<main className={classes.main}>
				<Navbar />
				<Feed />
			</main>
		</div>
	);
}

export default Home;
