import './style.scss';
import { useContext } from 'react';
import { AppContext } from '../../context';
import { useParams } from 'react-router-dom';

export default function Artigo() {
    const { artigos } = useContext(AppContext);
    const { linkArquivo } = useParams();

    const link = linkArquivo.replace('.html', '');

    const artigo = artigos.filter(artigo => artigo.linkName === link);

    return (
        <>
        </>
    );
}