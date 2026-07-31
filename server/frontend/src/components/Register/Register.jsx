import React, { useState } from 'react';
import './Register.css'; 

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Datos de registro:", { userName, firstName, lastName, email, password });
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegister} className="register-form">
        
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input 
            type="text" 
            value={userName} 
            onChange={(e) => setUserName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Nombre:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Apellido:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
