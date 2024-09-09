import Button from "../Button/Button";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";


function Header() {


  return (
    <header className={classes.header}>
      <Link to='/'>
        <h1 className={classes.header__logo}>Best Application</h1>
      </Link>
      <div className={classes.buttonsWrapper}>
        <Link to='/'>
        <Button  title='All'/>
        </Link>
        <hr className={classes.line}/>
        <Link to='/favorite'>
        <Button  title='Favorite'/>
        </Link>
        </div>
      <Link to="/new-post" >
      <Button title='Add post'/>
      </Link>
    </header>
  )
}

export default Header