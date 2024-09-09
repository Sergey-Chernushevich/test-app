import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import Header from './components/Header/Header';
import PostPage from "./components/PostsPage/PostsPage";
import { useAppSelector, useAppDispatch} from "./store/hooks/hooks";
import { fetchPosts } from "./store/reducers/actionCreaters";
import PostDitails from "./components/PostDitails/PostDitails";
import NewPostPage from "./components/NewPostPage/NewPostPage";
import FavoritePage from "./components/FavoritePage/FavoritePage";


function App() {
  const {posts} = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('fetch');
    
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/new-post" element={<NewPostPage/>} />
        <Route path="/" element={<PostPage/>} />
        <Route path="/favorite" element={<FavoritePage/>} />
        {posts && posts.map(post=>{
          return(
            <Route 
            key={post.id} 
            path={`posts/${post.id}`} 
            element={<PostDitails title={post.title} body={post.body}/>}
            />
          )
        })}
      </Routes>
    </div>
  );
}

export default App;
