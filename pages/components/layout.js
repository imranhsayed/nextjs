import Head from 'next/head';
import Navbar from "./navbar";

const Layout = ( props ) => {
	return (
		<div>
			<Head>
				<title>Next js App</title>
				<link rel="stylesheet" href="/static/bootstrap.min.css"/>
			</Head>
			<Navbar/>
			This is my layout
			{ props.children }
		</div>
	);
};

export default Layout;
