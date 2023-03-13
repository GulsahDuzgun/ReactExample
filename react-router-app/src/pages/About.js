import { NavLink } from 'react-router-dom'
export const About = () => {
    return (
      <div className="about">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">Hakkında</NavLink>
        <h1>Hakkında</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non vero consectetur, laudantium, veritatis quo eos perferendis saepe quibusdam velit corporis ad consequuntur et quos ab alias soluta corrupti nam?</p>
      </div>
    )
}
