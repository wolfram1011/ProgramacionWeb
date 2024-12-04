import Uno from '../assets/1.jpg'
import Dos from '../assets/2.jpg'
import Tres from '../assets/3.jpg'
import { useState } from 'react';

import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth' 
const auth = getAuth(appFirebase)


const Login = () => {



		const[registro, setRegistro] = useState(false)

		const handlerSubmit = async(e) => {
			e.preventDefault()
			const correo = e.target.email.value;
			const contraseña = e.target.contraseña.value;

			if(registro){
				await createUserWithEmailAndPassword(auth, correo, contraseña)

			}else{
				await signInWithEmailAndPassword(auth, correo, contraseña)
			}
		}

	return (
		<div className = 'row container p-4'>	  
			<div className = 'col-md-8'>
				<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
				  <div className="carousel-inner">
				    <div className="carousel-item active">
				      <img src={Uno} className = 'tamaño-imagen'/>
				    </div>
				    <div className="carousel-item">
				      <img src={Dos} className = 'tamaño-imagen'/>
				    </div>
				    <div class="carousel-item">
				      <img src={Tres} className = 'tamaño-imagen'/>
				    </div>
				  </div>
				  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Previous</span>
				  </button>
				  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="visually-hidden">Next</span>
				  </button>
				</div>

			</div>
			<div className = 'col-md-4'>
				<div className = 'mt-5 ms-5'> 
					<h1>{registro ? 'registrate': 'inicia sesion'}</h1>
					<form onSubmit = {handlerSubmit}>
						<div className = 'mb-3'>
							<label className = 'form-label'>Direccion de mail</label>
							<input type = 'email' className = 'form-control' placeholder = 'Ingresar email' id = 'email' required/>
						</div>

						<div className = 'mb-3'>
							<label className = 'form-label'>Contraseña: </label>
							<input type = 'password' className = 'form-control' placeholder = 'Ingresar contraseña' id = 'contraseña' required/>
							
						</div>

						<button className = 'btn btn-primary' type =  'submit'>
							{registro ? 'registrate' : 'inicia sesion'}
						</button>
					</form>
					<div className = 'form-group'>
						<button className = 'btn btn-secondary mt-4 form-control' onClick = {() => setRegistro(!registro)}>
							{registro ? 'ya tiene una cuenta? inicia sesion' : 'no tienes cuenta? Registrate'}
						</button>
						
					</div>

				</div>

			</div>
							
		</div>

		)
}

export default Login