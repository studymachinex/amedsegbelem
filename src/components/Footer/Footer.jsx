import './Footer.css';
import Logo from '../../assets/companyLogo.jpg';
import { Divider } from 'primereact/divider';
import { Helmet } from 'react-helmet';

function Footer() {
	return (
		<footer className="footer w-full grid flex justify-content-center align-items-center absolute">
			<Helmet>
				<title>Amedseg | Clínica Médica e Serviços de Saúde</title>
			</Helmet>
			<Divider
				align="bottom"
				className="footer-divider mx-auto pt-6"
			/>

			<div className="col-12 sm:col-12 md:col-4 lg:col-4 flex justify-content-center">
				<img
					src={Logo}
					alt="Company Logo"
					className="footer-logo"
				/>
			</div>

			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5">
				<h3 className="overflow-hidden font-bold text-green">
					Nossa localização
				</h3>
				<p>
					BR-316, Posto Yamaga Próx. Unama Br <br /> Salas G8 e G9
				</p>
				<div className="flex gap-2 align-items-center">
					<i className="pi pi-map-marker text-xl"></i>
					<a
						className="maps"
						href="https://www.google.com/maps/dir//Amedseg+-+Medicina+e+Seguran%C3%A7a+do+Trabalho+-+Rod+BR+316+1+km+3+Posto+yamaga+pr%C3%B3x.+Unama+Br+-+salas+g8+e+g9+-+Atalaia,+Ananindeua+-+PA/@-1.389254,-48.4548661,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x92a48ac40c12a57b:0xe0970e5219c8a979!2m2!1d-48.41358!2d-1.3893402?entry=ttu"
						target="blank">
						Ver rotas
					</a>
				</div>
			</div>
			<div className="col-12 sm:col-12 md:col-4 lg:col-4 p-5">
				<h3 className="overflow-hidden font-bold text-green">
					Entre em Contato
				</h3>
				<ul>
					<li>WHATSAPP: (91) 98601-8137</li>
					<li>E-mail: amedseg@outlook.com</li>
				</ul>
			</div>
			<div className="social-icons">
				<a
					href="https://www.facebook.com/amedseg.pa/"
					target="blank">
					<i className="pi pi-facebook btn-facebook text-3xl mr-4"></i>
				</a>
				<a
					href="https://www.instagram.com/amedseg.pa/"
					target="blank">
					<i className="pi pi-instagram btn-instagram text-3xl mr-4"></i>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
