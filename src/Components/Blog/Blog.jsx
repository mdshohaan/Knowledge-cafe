import PropTypes from "prop-types"; // ES6
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog ,handleAddToBookmark,handleMarkAsRead}) => {
  const {
    title,
    cover,
    reading_time,
    author_img,
    author,
    posted_date,
    hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="space-y-4">
      <img
        className="w-[600px] rounded-xl"
        src={cover}
        alt={`Cover Picture of the title ${title}`}
      />
      <div className="flex justify-between w-[500px] ">
        <div className="flex items-center gap-3">
          <img className="w-18 h-8 rounded-2xl" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="space-x-3">{reading_time} min read</span>
          <button onClick={()=>handleAddToBookmark(blog)} className="ml-2 text-red-300 tetx-2xl"><FaBookmark></FaBookmark></button>
        </div>
      </div>

      <h2 className="4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button 
      onClick={()=>handleMarkAsRead(reading_time)}
      className="text-blue-400 font-bold underline">Mark as read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark:PropTypes.func,handleMarkAsRead:PropTypes.func
};
export default Blog;
