import loader from '../../assets/spinner.svg'
import classes from './Loader.module.css'

function Loader() {
  return (
    <div className={classes.loaderWrapper}><img src={loader} alt="loader" /></div>
  )
}

export default Loader