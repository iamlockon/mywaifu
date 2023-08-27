import { useBlogContext } from "../contexts";
import Blog from "../components/blog/Blog";

const Blogs = () => {
  const { theme } = useBlogContext();
  return (
    <>
      <Blog theme={theme}/>
    </>
  );
};

export default Blogs;
