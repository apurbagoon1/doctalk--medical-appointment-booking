import React, { useEffect, useState } from 'react';
import { FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true); 
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false); 
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-dots loading-lg text-[#176AE5]"></span>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-5 mb-10">
            <div className='space-y-4 text-center py-5 my-5'>
                <h3 className='font-extrabold text-3xl'>My Blog Page</h3>
                <p className='opacity-70 text-lg w-4/5 mx-auto'>
                    Explore insightful articles on React, web development tips, and best practices to level up your coding journey.
                </p>
            </div>

            <div className="space-y-6">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <FaQuestionCircle className="text-[#176AE5] text-xl" />
                            <h2 className="text-2xl font-semibold opacity-70 hover:text-[#176AE5] transition-colors">
                                {blog.question}
                            </h2>
                        </div>
                        <p className="opacity-60 text-base leading-relaxed text-justify px-2 mb-4">
                            {blog.answer}
                        </p>
                        <div className="flex items-center justify-end gap-2">
                            <FaCheckCircle className="text-green-500 text-lg" />
                            <span className="opacity-50">Answered</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
