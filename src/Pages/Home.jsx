import '../App.css';
import { UsarContextoGeral } from '../contexto/contexto';
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
    const { tipo1, tipo2, renderizarTiposSelect1, renderizarTiposSelect2, seta1, seta2, virarSeta1, virarSeta2, ocultarContainer1, ocultarContainer2 } = UsarContextoGeral();

    return (
        <div className='App'>
            <div className='Select-container'>
                <div className='Select-types'>
                    <div className='Select-types-icon'></div>
                    <div className='Select-types-options-container'>
                        <div className='Select-types-options'>
                            <div className='Select-types-input'>
                                <p>{tipo1}</p>
                            </div>
                            <div onClick={() => {
                                virarSeta1();
                                ocultarContainer1();
                            }} className='Select-types-button'>
                                <FaChevronDown size={25} className={`Select-button-icon ${seta1}`} />
                            </div>
                        </div>
                        {renderizarTiposSelect1()}
                    </div>
                </div>

                <div className='Select-types'>
                    <div className='Select-types-icon'></div>
                    <div className='Select-types-options-container'>
                        <div className='Select-types-options'>
                            <div className='Select-types-input'>
                                <p>{tipo2}</p>
                            </div>
                            <div onClick={() => {
                                virarSeta2();
                                ocultarContainer2();
                            }} className='Select-types-button'>
                                <FaChevronDown size={25} className={`Select-button-icon ${seta2}`} />
                            </div>
                        </div>
                        {renderizarTiposSelect2()}
                    </div>
                </div>
            </div>
        </div>
    );
}
