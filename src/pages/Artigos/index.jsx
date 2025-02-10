import { Outlet } from 'react-router-dom';
import ArtigosPopulares from '../../components/ArtigosPopulares';
import SobreAutora from '../../components/SobreAutora';

export default function Artigos() {
    return (
        <>
            <Outlet />
            <ArtigosPopulares />
            <SobreAutora />
        </>
    );
}