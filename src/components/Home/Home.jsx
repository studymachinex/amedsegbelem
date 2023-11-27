/* eslint-disable react/prop-types */
import './Home.css';
import ServiçosCard from '../../components/ServiçosCard/ServiçosCard.jsx';
import { Helmet } from 'react-helmet';

function Home(props) {
	const { title, heroImg, classNameOption } = props;

	return (
		<>
			<Helmet>
				<title>{title} - Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<div className="hero-container">
				<div className="text-container">
					<h2 className={`overflow-hidden ${classNameOption}`}>{title}</h2>
				</div>
				<img
					className="hero-img"
					src={heroImg}
					alt="test"
				/>
			</div>
			{props.showServiçosCard && <ServiçosCard />}
		</>
	);
}

export default Home;
