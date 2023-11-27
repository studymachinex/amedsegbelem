import './Obrigado.css';

function Obrigado() {
	return (
		<div className="grid my-8 py-8">
			<div className="col-12">
				<h1 className="text-green overflow-hidden">
					Obrigado por entrar em contato! 😁
				</h1>
			</div>
			<div className="col-12 mt-5">
				<div className="grid justify-content-center">
					<div className="col-12 sm:col-12 md:col-3 lg:col-3 px-8">
						<a
							className="btn btn-lg btn-block back-button"
							href="/contato"
							role="button">
							⬅ Voltar
						</a>
					</div>
					<div className="col-12 sm:col-12 md:col-3 lg:col-3 px-8">
						<a
							className="btn btn-light btn-lg btn-block"
							href="/"
							role="button">
							🏠 Home
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Obrigado;
