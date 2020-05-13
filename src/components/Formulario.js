import React from 'react';
import styles from './Formulario.module.css'

import useSelect from '../hooks/useSelect'

const Formulario = () => {

    const OPCIONES = [
        { value: 'general', label:'General'},
        { value: 'technology', label:'Tecnología'},
        { value: 'science', label:'Ciencia'},
        { value: 'health', label:'Salud'},
        { value: 'business', label:'Negocios'},
        { value: 'entertainment', label:'Entretenimiento'},
        { value: 'sports', label:'Deportes'}
    ]

    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    return ( 
        <div className="container white">
            <div className={`${styles.buscador} row`}>
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                        <div className="input-field col s12">
                            <SelectNoticias/>
                            <input 
                                type="submit"
                                className={`${styles['btn-block']} btn-large amber darken-2`}
                                value="Buscar"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;