import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks,readingTime}) => {
  return (
    <div className="w-1/3 bg-gray-400 p-2 m-2 rounded-lg">
        <div>
            <h3 className="text-4xl">Reading Time:{readingTime}</h3>
        </div>
      <h2 className="text-2xl bg-slate-400 p-4 rounded-xl m-4 text-center">
        Bookmarked Blogs:{bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime:PropTypes.number
};

export default Bookmarks;
