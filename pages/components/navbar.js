import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link href="/">
				<span className="navbar-brand">Home</span>
			</Link>

			<div className="collapse navbar-collapse" id="navbarColor03">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link href="/about">
							<a className="nav-link">About</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
};

export default Navbar;
