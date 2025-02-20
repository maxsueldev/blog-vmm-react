import { Outlet } from 'react-router-dom';
import ArtigosPopulares from '../../components/ArtigosPopulares';
import SobreAutora from '../../components/SobreAutora';
import './style.scss';

export default function Artigos() {
    return (
        <div className='artigos-container'>
            <Outlet />
            <div className='about-container'>
                <SobreAutora />
                <ArtigosPopulares />
            </div>
        </div>
    );
}