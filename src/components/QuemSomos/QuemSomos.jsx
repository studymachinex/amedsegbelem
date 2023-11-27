import './QuemSomos.css';
import { Card } from 'primereact/card';
import { Helmet } from 'react-helmet';

import Home from '../Home/Home';
import heroImg from '../../assets/heroImg4.jpeg';

const ServicesTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Missão</h1>
				</div>
			</div>
		</>
	);
};

const VisionTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Visão</h1>
				</div>
			</div>
		</>
	);
};

const ValuesTitle = () => {
	return (
		<>
			<div className="grid">
				<div className="col-12 flex-justify-content-center">
					<h1 className="overflow-hidden">Valores</h1>
				</div>
			</div>
		</>
	);
};

const QuemSomos = () => {
	return (
		<>
			<Helmet>
				<title>Quem Somos - Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<Home
				title="Quem Somos"
				heroImg={heroImg}
			/>

			<div className="grid justify-content-around">
				<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-3">
					<Card
						border-round-right-3xl
						title={<ServicesTitle />}
						className="card shadow-5 hover:shadow-5 mx-auto border-round-3xl sm:border-round-3xl">
						<div className="m-0">
							<h3 className="card-description text-left">
								Nossa missão é oferecer serviços de medicina do trabalho de
								excelência, visando a promoção da saúde e o bem-estar dos
								trabalhadores.
								<br />
								<br />
								Através de avaliações médicas e medidas preventivas, estamos
								comprometidos em proteger e melhorar a qualidade de vida dos
								colaboradores, contribuindo para um ambiente de trabalho seguro
								e saudável.
							</h3>
						</div>
					</Card>
				</div>
				<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-3">
					<Card
						title={<VisionTitle />}
						className="card shadow-5 hover:shadow-5 mx-auto border-round-3xl sm:border-3xl">
						<div className="m-0">
							<h3 className="card-description text-left">
								Nossa visão é ser reconhecida como a principal referência em
								medicina do trabalho, fornecendo soluções personalizadas e
								inovadoras para empresas de todos os setores.
								<br />
								<br />
								Buscamos estabelecer parcerias de longo prazo, com base na
								confiança e na expertise, a fim de promover a saúde ocupacional,
								prevenir doenças relacionadas ao trabalho e maximizar a
								produtividade das organizações.
							</h3>
						</div>
					</Card>
				</div>
				<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-3">
					<Card
						title={<ValuesTitle />}
						className="card shadow-5 hover:shadow-5 mx-auto border-round-3xl sm:border-3xl">
						<div className="m-0">
							<h3 className="card-description text-left">
								Compromisso com a saúde: Protegendo e promovendo a saúde dos
								trabalhadores.
								<br />
								<br />
								Parceria: Construindo relacionamentos sólidos e colaborativos
								com nossos clientes.
								<br />
								<br />
								Inovação: Buscando constantemente soluções avançadas e práticas
								inovadoras em medicina do trabalho.
							</h3>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
};

export default QuemSomos;
