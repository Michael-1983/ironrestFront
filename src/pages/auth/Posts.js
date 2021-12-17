
import PostList  from "../../pages/Posts/PostList";
import Slide from "../../components/Slide";
import NavbarPaginas  from "../../components/NavbarPaginas";
import PostDetail from "../../pages/Posts/PostDeteils";


function Posts(){
return (
  <div>
    <NavbarPaginas />

    <div className="container">
      <div className="col-10">
        <Slide />
        <PostList />
        <PostDetail />
      </div>
    </div>
  </div>
);
}
export default Posts