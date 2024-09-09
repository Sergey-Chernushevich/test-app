import { Link } from 'react-router-dom';
import classes from './PostDitails.module.css'
import Button from '../Button/Button';
import { useAppSelector} from '../../store/hooks/hooks'
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

interface PostProps {
  title:string; 
  body:string;
}

function PostDitails({ title,body}: PostProps) {
  const {isLoading} = useAppSelector((state) => state.posts);
  const navigane = useNavigate();

  const goBack = () => {
    navigane(-1);
  };

  return (
    <div className={classes.postDitails}>
      {isLoading  &&  <Loader/>}
      <div className={classes.postDitails__wrapp}>
      <h2 className={classes.postDitails__title}>{title}</h2>
      <p className={classes.postDitails__body}>{body}</p>
      </div>
      <Link to='/'>
      <Button title='Back'onClick={goBack}/>
      </Link>
    </div>
  );
}

export default PostDitails;
