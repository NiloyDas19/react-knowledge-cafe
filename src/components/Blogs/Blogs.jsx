import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);
    const [bookMarks, setBookMarks] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const handelReadTime = (readBlog) => {
        const updateTime = readTime + readBlog.reading_time;
        setReadTime(updateTime);
        const updateBookMark = bookMarks.filter((blog) => blog.id != readBlog.id);
        setBookMarks(updateBookMark);
    }

    const handleBookMark = (newBookMark) => {
        const updateBookMark = [...bookMarks,newBookMark];
        setBookMarks(updateBookMark);
    }
    return (
        <div className="flex flex-col md:flex-row container mx-auto px-4 gap-8 justify-between">
            <div className="w-full md:w-3/5">
                <div className="space-y-4">
                    {
                        blogs.map(blog => <Blog key={blogs.id} blog={blog} handelReadTime = {handelReadTime} handleBookMark = {handleBookMark}></Blog>)
                    }
                </div>
            </div>
            <div className="flex-grow space-y-5">
                <div className=" bg-gray-200 border-2 border-blue-500 rounded-md p-4 text-center">
                    <p className=" text-blue-500  text-xl font-bold">Spent time on read : {readTime} mins </p>
                </div>
                <div className=" bg-gray-200 border-2 rounded-md p-3 space-y-5">
                    <h2 className="text-xl font-bold">Bookmarked Blogs : {bookMarks.length}</h2>
                    {
                        bookMarks.map((bookMark) => <div key={bookMark.id} className="p-4 border-2 rounded-md bg-white text-xl font-bold">{bookMark.title}</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;