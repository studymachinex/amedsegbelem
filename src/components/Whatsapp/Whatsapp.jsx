import { Helmet } from 'react-helmet';
import './Whatsapp.css';

export default function Whatsapp() {
	return (
		<>
			<Helmet>
				<title>Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<div>
				<a
					href="https://wa.me/5591985305630?text=Olá! Gostaria de mais informações sobre serviços/valores"
					className="zap flex justify-content-center align-items-center"
					target="_blank"
					rel="noopener noreferrer">
					<i className="pi pi-whatsapp text-4xl"></i>
				</a>
			</div>
		</>
	);
}
