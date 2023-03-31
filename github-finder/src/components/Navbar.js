import PropTypes from 'prop-types'
import Search from './Search'

const Navbar = (props) => {
    return (
      <nav className='navbar navbar-dark bg-primary'>
        <div className="container d-flex justif-content-between">
            <a href='https://www.google.com/search?q=translate&rlz=1C1GCEU_enTR1001TR1001&oq=tra&aqs=chrome.1.69i60j69i59j69i57j69i59l2j0i67j69i61l2.2282j0j7&sourceid=chrome&ie=UTF-8' className='navbar-brand'>
                <i className={ props.icon}></i> {props.title}
            </a>
            <Search/>
        </div>       
      </nav>
    )
}

Navbar.defaultProps = {
    icon:"bi bi-github",
    title:"Github Finder"
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}

export default Navbar