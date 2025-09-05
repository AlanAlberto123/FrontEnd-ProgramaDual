import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Importa el hook
import './Login.css';

const LoginMaestros = () => {
  const [activeTab, setActiveTab] = useState('maestros');
  const [formData, setFormData] = useState({
    coordinador: '',
    password: ''
  });

  const navigate = useNavigate(); // <-- Inicializa el hook

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setFormData({ coordinador: '', password: '' });
    if (tab === 'estudiantes') {
      navigate('/'); // <-- Navega al login de estudiantes
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica de autenticación
  };

  const handleForgotPassword = () => {
    console.log('Olvidaste tu contraseña');
    // Aquí puedes agregar la lógica para recuperar contraseña
  };

  return (
    <div className="login-container">
      {/* Aqui abajo si gustan quitarlo */}
      {/* Banner simple */}
      <div className="simple-banner">
        <h1>Programa de Educacion Dual</h1>
        <p>Acceso para Estudiantes y Maestros</p>
      </div>
      {/* Arriba */}
      
      <div className="login-panel">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'estudiantes' ? 'active' : ''}`}
            onClick={() => handleTabChange('estudiantes')}
          >
            Estudiantes
          </button>
          <button
            className={`tab ${activeTab === 'maestros' ? 'active' : ''}`}
            onClick={() => handleTabChange('maestros')}
          >
            Maestros
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="coordinador">Nombre del coordinador</label>
            <input
              type="text"
              id="coordinador"
              name="coordinador"
              value={formData.coordinador}
              onChange={handleInputChange}
              placeholder="Coordinador"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
              required
            />
            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginMaestros;
