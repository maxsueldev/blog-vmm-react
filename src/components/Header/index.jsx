import './style.scss';

export default function Header({ titulo = '', background, height = '17.5rem' }) {
    return (
        <header className='header' style={{ background: `url('https://blog-vmm-react.vercel.app/assets/${background}') no-repeat center`, backgroundSize: 'cover', height: `${height}` }}>
            {titulo &&
                <div className="header__frase">
                    <h1 className='titulo-intro'>{titulo}</h1>
                </div>
            }
        </header>
    );
}