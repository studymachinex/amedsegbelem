import './Contato.css';
import { Helmet } from 'react-helmet';

export default function Contato() {
	return (
		<>
			<Helmet>
				<title>Contato - Entre em contato com a Amedseg | Amedseg</title>
			</Helmet>
			<div className="grid">
				<div className="container_form">
					<h1 className="text-green overflow-hidden">
						Entre em contato com a Amedseg
					</h1>
					<p className="mt-4 mb-6 text-center">
						Entre em contato conosco, responderemos em instantes.
					</p>

					<form
						action="https://formsubmit.co/amedseg@outlook.com"
						method="POST">
						<input
							type="hidden"
							name="_subject"
							value="Novo contato vindo do site!"
						/>
						<div className="style-form-input full">
							<input
								type="hidden"
								name="_next"
								value="https://www.amedsegbelem.com.br/obrigado"
							/>
							<input
								className="form-control"
								type="text"
								name="nome"
								placeholder="nome"
								required
							/>
						</div>

						<div className="style-form-input">
							<input
								className="form-control"
								type="email"
								name="email"
								placeholder="email"
								required
							/>
						</div>

						<div className="style-form-input right">
							<input
								className="form-control"
								type="text"
								name="assunto"
								placeholder="assunto"
								required
							/>
						</div>

						<div className="style-form-input full">
							<textarea
								className="form-control"
								name="mensagem"
								type="text"
								placeholder="mensagem"
								required
							/>
						</div>

						<div className="style-form-input full">
							<input
								type="hidden"
								name="acao"
								value="enviar"
							/>
							<button className="btn-submit">Enviar mensagem</button>
						</div>
					</form>
				</div>
				{/* <a 
					href="https://wa.me/5591986018137?text= Olá! Gostaria de mais informações sobre serviços/valores"
					className='zap flex justify-content-center align-items-center' 
					target="blank">
					<i className='pi pi-whatsapp text-4xl'></i>
				</a> */}
			</div>
		</>
	);
}
