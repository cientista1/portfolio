import React from 'react';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function CardResume() {
    AOS.init();
    return (
        <div data-aos="fade-up" data-aos-duration="2000" className="CardResume">
            <div className="card_resume">
                <strong>2012-2014</strong>
                <div className="school">
                    <label>Ensino de base</label>
                </div>
                <span> Escola nossa senhora da Boa nova</span>
                <label> Durante 3 anos frequentei o meu ensino de base nessa instituição onde fiz parte dos melhor estudante da mesma escola. Fui em todos os ano indicados no quadro de honra na instituição</label>
            </div>
        </div>
    )
}