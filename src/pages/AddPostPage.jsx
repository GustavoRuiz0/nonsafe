import {useEffect} from "react";

const AddPostPage = () => {
  useEffect(() => {
    document.title = 'New Post';
  }, []);


  return (
    <div className="bg-black flex flex-col">
      {/* <LoginForm/> */}
    </div>
  );
}

export default AddPostPage;
