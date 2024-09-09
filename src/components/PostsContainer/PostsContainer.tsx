import classes from './PostsContainer.module.css'
import { Link } from "react-router-dom";
import Post from '../Post/Post'
import { IPost } from '../../models/IPost';

function PostsContainer( {posts}:{posts:IPost[]} ) {
  return (
    <ul className={classes.postContainer}>
    
      {posts && posts.map((post:IPost)=>{
        return(
          <Link className={classes.postLink} to={`/posts/${post.id}`} key={post.id}>
          <Post  title={post.title} body={post.body} id={post.id} liked={post.liked}/>
          </Link>
        )
      })}
    </ul>
  )
}

export default PostsContainer

