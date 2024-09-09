import PostsContainer from '../PostsContainer/PostsContainer'
import classes from './FavoritePage.module.css'
import Loader from '../Loader/Loader';
import { useAppSelector} from "../../store/hooks/hooks";


function FavoritePage() {
  const {posts, isLoading, error } = useAppSelector((state) => state.posts);
  const favoritePosts = posts.filter((post) => post.liked === true);
  let sectionTitle:string = 'Favorite posts';

    if(!favoritePosts.length){
    sectionTitle= 'There are not favorite posts';
    }

  return (
    <section className={classes.favoritePage}>
      {isLoading && <Loader/>}
      {error && <h2 className={classes.error}>{error}</h2>}
      <h2 className={classes.section__title}>{sectionTitle}</h2>
      <PostsContainer posts={favoritePosts}/>
    </section>
  )
}

export default FavoritePage