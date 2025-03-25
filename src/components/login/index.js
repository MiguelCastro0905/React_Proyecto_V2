import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
    const [selectedRole, setSelectedRole] = useState('Elegir Rol');
    const navigate = useNavigate();

    const handleRoleSelect = (role) => {
        setSelectedRole(role); 
    };

    return (
        <div className="App">
        <div className="cuadro-inferior1">
            <div className="recuadro"></div>
        </div>
        {/* Contenedor principal para centrar el contenido */}
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="container2">
            <div className="row">
                <div className="col-sm-12">
                <div className="recuadroDer p-4">
                    <h2 className="text-center">LOGIN</h2>
                    <div className="recuadro2 p-3">
                    {/* Dropdown para seleccionar el rol */}
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                        <div className="dropdown">
                            <button
                            className="btn btn-secondary dropdown-toggle w-100"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <div className="Elegir_rol">{selectedRole}</div>
                            </button>
                            <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                            <li>
                                <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => handleRoleSelect('Aprendiz')} 
                                >
                                Aprendiz
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => handleRoleSelect('Instructor')}
                                >
                                Instructor
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => handleRoleSelect('Administrativos')} 
                                >
                                Administrativos
                                </a>
                            </li>
                            <li>
                                <a
                                className="dropdown-item"
                                href="#"
                                onClick={() => handleRoleSelect('Administrador')} 
                                >
                                Administrador
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    {/* Campo de correo institucional */}
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                        <div className="form-group">
                            <input className="form-control" placeholder="Correo Institucional" id="email" />
                        </div>
                        </div>
                    </div>
                    {/* Campo de contraseña */}
                    <div className="row">
                        <div className="col-sm-12 mb-3">
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña" id="password" />
                        </div>
                        </div>
                    </div>
                    {/* Botón de iniciar sesión */}
                    <div className="text-center">
                        <button 
                        type="button" 
                        className="btn btn-primary btn-block"
                        onClick={() => navigate('/carnet')}
                        >
                        Iniciar sesión
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="cuadro-inferior2">
            <div className="recuadro"></div>
        </div>
        </div>
    );
};

export default Login;