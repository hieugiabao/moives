import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styled'

import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} />
            <TMDBLogoImg src={TMDBLogo} />
        </Content>
    </Wrapper>
)

export default Header