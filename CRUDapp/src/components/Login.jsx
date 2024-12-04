import React from 'react'
import Imagen from '../assets/image1.png'
import ImageProfile from '../assets/image2.png'
import { useState } from 'react';

import appFirebase from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth' 
const auth = getAuth(appFirebase)


const Login = () => {

		const [registrando, setRegistrando] = useState(false)
		const functAuteticacion = async(e) => {

			e.preventDefault();
			const correo = e.target.email.value;
			const contraseña = e.target.password.value;
			//console.log(correo);


			if(registrando){
				
				try{
					await createUserWithEmailAndPassword(auth, correo, contraseña)
				}catch (error){
					alert('Asegurese que la contraseña tenga mas de 8 caracteres')
				}
			}else{
				
				try{
					await signInWithEmailAndPassword(auth, correo, contraseña)
				}catch(error){
					alert('EL correo o la contraseña son incorrectos')
				}
			}

		}

		
	return (
		<div className = 'container'> 
			<div className = 'row'>
				<div className = 'col-md-4'>
					<div className = 'padre'>
						<div className = 'card card-body shadow-lg'>
							<img src = {ImageProfile} alt ='' className = 'estilo-profile' />
							<form onSubmit = {functAuteticacion}> 
								<input type = 'text' placeholder = 'Ingresar Email' className = 'cajatexto' id = 'email'/>
								<input type = 'password' placeholder = 'Ingresar contraseña' className = 'cajatexto' id = 'password'/>
								<button className = 'btnform'> {registrando ? "Registrate" : "Inicia Sesion"}</button>
							</form>
							<h4 className = 'texto'> <button className = 'btnswitch' onClick = {()=> setRegistrando(!registrando)}> {registrando ? "Inicia sesión" : "Registrate"}</button></h4>
						</div>	
					</div>

				</div>

				<div className = 'col-md-8'>
				<img src = {Imagen} alt = '' className = 'tamaño-imagen' />
					
				</div>

			</div>


		</div>

		)
}

export default Login 