import { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/companyLogo.jpg';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import { slide as Menu } from 'react-burger-menu';
import { Helmet } from 'react-helmet';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function closeMenu() {
		setIsOpen(false);
	}

	const handleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Helmet>
				<title>Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<Menu
				isOpen={isOpen}
				onOpen={handleIsOpen}
				onClose={handleIsOpen}>
				<Link
					onClick={closeMenu}
					to="/"
					className="menu-item">
					Home
				</Link>
				<Link
					onClick={closeMenu}
					to="/quem-somos"
					className="menu-item">
					Quem somos
				</Link>
				<Link
					onClick={closeMenu}
					to="/medicina-do-trabalho"
					className="menu-item">
					Medicina do trabalho
				</Link>
				<Link
					onClick={closeMenu}
					to="/treinamentos"
					className="menu-item">
					Treinamentos
				</Link>
				<Link
					onClick={closeMenu}
					to="/consultas"
					className="menu-item">
					Consultas
				</Link>
				<Link
					onClick={closeMenu}
					to="/exames"
					className="menu-item">
					Exames
				</Link>
				<Link
					onClick={closeMenu}
					to="/contato"
					className="menu-item">
					Contato
				</Link>
			</Menu>
			<nav className="nav w-full grid justify-content-center align-content-between align-items-center m-0">
				<div className="col-6 md:col-2 flex justify-content-center">
					<Link to="/">
						<img
							className="logo-navbar"
							src={Logo}
							alt="Company Logo"
						/>
					</Link>
				</div>
				<div className="col-12 md:col-1 w-10rem sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/quem-somos"
						className="nav-item"
						style={NavItemStyle}>
						Quem somos
					</Link>
				</div>
				<div className="col-12 md:col-1 w-13rem sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/medicina-do-trabalho"
						className="nav-item"
						style={NavItemStyle}>
						Medicina do trabalho
					</Link>
				</div>
				<div className="col-12 md:col-1 w-10rem sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/treinamentos"
						className="nav-item"
						style={NavItemStyle}>
						Treinamentos
					</Link>
				</div>
				<div className="col-12 md:col-1 w-10rem sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/consultas"
						className="nav-item"
						style={NavItemStyle}>
						Consultas
					</Link>
				</div>
				<div className="col-12 md:col-1 w-10rem sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/exames"
						className="nav-item"
						style={NavItemStyle}>
						Exames
					</Link>
				</div>
				<div className="col-12 md:col-1 w-10rem sm:col-3 flex justify-content-center sm-hidden">
					<Link
						to="/contato"
						className="nav-item"
						style={NavItemStyle}>
						Contato
					</Link>
				</div>
			</nav>
			<Divider
				align="bottom"
				className="footer-divider mx-auto pt-1"
			/>
		</>
	);
}

const NavItemStyle = {
	textDecoration: 'none',
};
