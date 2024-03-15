import PropTypes from 'prop-types';
import bookMarkLogo from '../../assets/bookmark.png'


const Blog = ({ blog, handelReadTime, handleBookMark}) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtag} = blog;
    return (
        <div className="space-y-4 border-2 rounded-xl p-2">
            <div className="">
                <img src={cover} className="w-full border-2 rounded-xl" alt=""/>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-16">
                        <img src={author_img} alt="" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex gap-1">
                    <div>
                        <p>{reading_time} mins read</p>
                    </div>
                    <div>
                        <button onClick={() => handleBookMark(blog)}><img src={bookMarkLogo} alt="" /></button>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className=" font-thin">
                {
                    hashtag.map(tag => <span key= {id} className="">#{tag} </span>)
                }
            </div>
            <div>
                <button className="text-purple-700 underline" onClick={() => handelReadTime(blog)}>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handelReadTime : PropTypes.func.isRequired,
    handleBookMark : PropTypes.func.isRequired
}

export default Blog;

