import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styled'
import {Link} from 'react-router-dom'
import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={RMDBLogo} />
            </Link>
            <TMDBLogoImg src={TMDBLogo} />
        </Content>
    </Wrapper>
)

export default Header