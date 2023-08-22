import { blogs } from "../../lib/data";
import Blogpost from "./[id]/page";

export default function Blog() {
  return (
    <div className="flex gap-[20px] w-[80%] mx-auto flex-wrap justify-center">
      {blogs.map((blog) => (
        <Blogpost key={blog.title} blog={blog} />
      ))}
    </div>
  );
}
