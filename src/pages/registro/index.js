import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import React from 'react';
import { useState } from 'react';

function Register (){
 const [name,setName] = useState('');
 const [email,setEmail] = useState('');
 const [password,setPassword] = useState('');

    return(
     <div>
       <section style={{position:"absolute",top:"50%",left:"50%",marginRight:"-50%",transform:"translate(-50%,-50%)"}}>
        <Card title="Registro" style={{textAlign:"center"}}>
            <span style={{marginTop:"1rem"}} className="p-float-label">
            <InputText
            id= "email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-inputtext-lg p-d-block"
            value = {email}/>
            <label htmlFor="email">Email</label>
            </span>
            <span style={{marginTop:"2rem"}} className="p-float-label">
            <InputText
            id= "nome"
            onChange={(e) => setName(e.target.value)}
            className="p-inputtext-lg p-d-block"
            value = {name}/>
            <label htmlFor="nome">Nome do Usuário</label>
            </span>
            <span style={{marginTop:"2rem"}} className="p-float-label">
            <Password
            className="p-inputtext-lg p-d-block"
            onChange={(e) => setPassword(e.target.value)}
            id = "senha"
            toggleMask
            feedback={false}
            value = {password}/>
            <label htmlFor="senha">Senha</label>
            </span>
            <Button
            className="p-button-raised"
            style={{marginTop:"2rem", width:"100%"}}
            label = 'Registrar'/><br/><br/>
            <a href="/registro" style={{color:"azure"}}>Já possuo uma conta</a>   
        </Card>  
       </section>
     </div>
    )
}
export default Register