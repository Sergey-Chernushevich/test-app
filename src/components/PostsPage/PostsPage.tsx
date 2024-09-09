import PostsContainer from '../PostsContainer/PostsContainer'
import classes from './PostsPage.module.css'
import { useAppSelector} from "../../store/hooks/hooks";
import Loader from '../Loader/Loader';


function PostPage() {
  const {posts, isLoading, error } = useAppSelector((state) => state.posts);

  let sectionTitle:string = 'All posts';

    if(!posts.length){
    sectionTitle= 'There are not posts';
    }

  return (
    <section className={classes.postPage}>
      
      {isLoading && <Loader/>}
      {error && <h2 className={classes.error}>{error}</h2>}
      <h2 className={classes.section__title}>{sectionTitle}</h2>
      <PostsContainer posts={posts}/>
    </section>
  )
}

export default PostPage