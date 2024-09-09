import {removePost,toggleLike} from '../../store/reducers/postsSlice'
import { useAppDispatch } from '../../store/hooks/hooks'
import classes from './Post.module.css'

interface PostProps{
  title: string,
  body: string,
  id: number,
  liked:boolean|undefined,
}



function Post ({title,body,id,liked}:PostProps) {

  const dispatch = useAppDispatch();
  
  function removeHandler(event:React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(removePost(id));
  }

  function toggleLikeHandler(event:React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleLike(id));
  }

  return (
    <li className={classes.post}>
      <h2 className={classes.post__title}>{title}</h2>
        <p className={classes.post__body}>{body}</p>

      <div className={classes.buttonsBlock}>
        <button className={classes.deleteButton} onClick={(e)=>{removeHandler(e)}}></button>
        <button className={liked?classes.likeButton_liked:classes.likeButton} onClick={(e)=>{toggleLikeHandler(e)}}>
          <svg fill="#777777" height="30px" width="30px" version="1.1" viewBox="0 0 512 512">
            <g><g><path d="M372.87,33.391c-46.903,0-90.88,23.598-116.87,62.152c-25.99-38.555-69.967-62.152-116.87-62.152
			      C62.413,33.391,0,95.804,0,172.522c0,37.935,14.164,73.011,39.88,98.76l200.38,200.804c4.207,4.207,9.794,6.522,15.74,6.522
			      s11.532-2.315,15.74-6.521l200.314-200.772C497.815,245.522,512,210.435,512,172.522C512,95.804,449.587,33.391,372.87,33.391z"/>
	          </g>
            </g>
          </svg>
        </button>
      </div>
    </li>
  )
}

export default Post;