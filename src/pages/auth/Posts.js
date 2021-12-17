
import PostList  from "../../pages/Posts/PostList";
import Slide from "../../components/Slide";
import NavbarPaginas  from "../../components/NavbarPaginas";
import DeletePost from "../../pages/Posts/DeletePost";


function Posts(){
return (
  <div>
    <NavbarPaginas />
    <div className="container w-100">
      <div className="col-10">
        <Slide />
        <PostList />
      </div>
      <div>
        <DeletePost />
      </div>
    </div>
  </div>
);
}
export default Posts