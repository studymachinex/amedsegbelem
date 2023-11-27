import React from 'react';
import './Serviços.css';
import { Card } from 'primereact/card';
import { Helmet } from 'react-helmet';

import Home from '../Home/Home.jsx';
import heroImg from '../../assets/heroImg6.jpg';

const Serviços = () => {
	const listItemData = [
		'PGR - Programa de Gerenciamento de Riscos',
		'PPP - Perfil Profissiográfico Previdenciário',
		'Investigação de Acidente do Trabalho',
		'OSS - Ordem de Serviços de Segurança',
		'Prontuário de NR 20',
		'Elaboração de LTCAT- Laudo Técnico de Condições Ambientais do Trabalho',
		'Avaliações Ambientais',
		'Treinamentos',
		'Informe do e-Social - Eventos de SST',
		'Acompanhamento de Perícias',
	];

	return (
		<>
			<Helmet>
				<title>Serviços - Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<Home
				title="Medicina do trabalho"
				heroImg={heroImg}
			/>
			<div className="grid justify-content-center align-itens-center mt-8 px-6">
				<div className="col-12">
					<h1 className="title p-overflow-hidden">Nossos serviços</h1>
				</div>
				{listItemData.map((item, index) => (
					<div
						className="col-12 sm:col-12 md:col-4 lg:col-4"
						key={index}>
						<Card className="border-round border cursor-pointer hover:shadow-3">
							<p className="p-overflow-hidden">{item}</p>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};

export default Serviços;
