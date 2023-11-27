import React from 'react';
import './Exames.css';
import { Card } from 'primereact/card';
import { Helmet } from 'react-helmet';

import Home from '../Home/Home.jsx';
import heroImg from '../../assets/heroImg6.jpg';

const Exames = () => {
	const listItemData = [
		'EEG- Eletroencefalograma',
		'ECG - Eletrocardiograma',
		'Avaliação psicossocial',
		'Espirometria',
		'Raios-X',
		'Acuidade visual',
		'Audiometria',
		'Hemograma',
		'Glicemia',
		'Parasitológico (fezes e urina)',
		'TGO, TGP',
		'Para saber mais exames solicite no whatsapp...',
	];

	return (
		<>
			<Helmet>
				<title>Exames - Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<Home
				title="Exames"
				heroImg={heroImg}
			/>
			<div className="grid justify-content-center align-itens-center mt-8 px-6">
				<div className="col-12">
					<h1 className="title p-overflow-hidden">
						Exames clínicos e laboratoriais
					</h1>
				</div>
				{listItemData.map((item, index) => (
					<div
						className="col-12 sm:col-12 md:col-4 lg:col-4"
						key={index}>
						<Card className="training-card border-round border cursor-pointer hover:shadow-3">
							<p className="p-overflow-hidden">{item}</p>
						</Card>
					</div>
				))}
			</div>
		</>
	);
};

export default Exames;
