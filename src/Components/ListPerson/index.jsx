import { useState } from 'react';
import Persona from './Persona';
import './styles.css';
export const ListPersons = () => {

    const [personas, setPersonas] = useState([
        new Persona('Juan', 'Perez'),
        new Persona('Karla', 'Lara')
    ]);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const agregarPersona = () => {
        if (nombre !== '' && apellido !== '') {
            const persona = new Persona(nombre, apellido);
            setPersonas([...personas, persona]);
            setNombre('');
            setApellido('');
        }
    };

    return (
        <div className='bodyList'>
            <div>
                <div className="contenedor" id='cabecero'>
                    <h1 className='titulo'>Listado de personas</h1>
                </div>
                <div className='contenedor'>
                    <div className='elemento'>
                        <ul>
                            {personas.map((persona, index) => (
                                <li key={index}>{persona.nombre} {persona.apellido}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={e => setApellido(e.target.value)}
                    />
                    <button type="button" onClick={agregarPersona}>+</button>
                </form>
            </div>

        </div>
    );
}