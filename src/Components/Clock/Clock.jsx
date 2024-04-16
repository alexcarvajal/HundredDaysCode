import { useState, useEffect } from 'react';
import '../Clock/styles.css';
const Clock = () => {
    const [horaActual, setHoraActual] = useState('');
    const [fechaActual, setFechaActual] = useState('');

    useEffect(() => {
        const timerId = setInterval(() => {
            actualizarReloj();
        }, 1000);
        
        return () => clearInterval(timerId);
    }, []);

    const actualizarReloj = () => {
        let fecha = new Date();
        let hora = formatoHora(fecha.getHours());
        let minutos = formatoHora(fecha.getMinutes());
        let segundos = formatoHora(fecha.getSeconds());
        setHoraActual(`${hora}:${minutos}:${segundos}`);

        const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
        let diaSemana = dias[fecha.getDay()];
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;  // Corregido para mostrar el mes correcto
        let year = fecha.getFullYear();
        setFechaActual(`${diaSemana}, ${dia} de ${mes} del ${year}`);

    };

    const formatoHora = (unidadTiempo) => {
        return unidadTiempo < 10 ? `0${unidadTiempo}` : unidadTiempo;
    };

    return (
        <div id="reloj">
            <div id="contenedor" >
                <div id="Hora">{horaActual}</div>
                <div id="Fecha">{fechaActual}</div>
            </div>
        </div>
    );
}

export default Clock