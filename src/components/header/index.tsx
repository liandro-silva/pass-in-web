import nlwUniteIcon from '../../assets/nlw-unite-icon.svg';

export const Header = () => {
    return (
        <header className='flex items-center gap-5'>
            <img src={nlwUniteIcon} alt="NLW UNITE" />
            <nav className='flex'>
                <ul className='flex items-center gap-5 py-2'>
                    <li>
                        <a className='font-medium text-sm text-zinc-400' href="#">Eventos</a>
                    </li>
                    <li>
                        <a className='font-medium text-sm' href="#">Participantes</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}