import { NavLink } from "react-router-dom"
export const Home = () => {
    return (
      <div className='home'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">Hakkında</NavLink>
        <h1>Hoşgeldiniz</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi recusandae autem facilis et non, aut error debitis nobis ullam quae blanditiis repudiandae quidem, impedit ex voluptatibus incidunt voluptas eius neque!</p>
      </div>
    )
}

