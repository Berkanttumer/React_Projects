import React from 'react';
import Blog1 from '../../assets/img/blogs/blog1.jpg';
import Blog2 from '../../assets/img/blogs/blog2.jpg';
import Blog3 from '../../assets/img/blogs/blog3.jpg';

const Blog = () => {
  return (
    <section className="blog">
      <div className="text-center mb-9">
        <h2 className="text-3xl mb-1 font-bold">From Our Blog</h2>
        <h3>Summer Collection New Morden Design</h3>
      </div>
      <div className="container">
        <ul className="blog-list gap-12">
          <li className="item-1 ">
            <a href="">
              <img src={Blog1} alt="" />
            </a>
            <div className=" flex flex-col pt-10 pb-10 items-center gap-3 ">
              <span className="text-sm">25 Feb, 2021 - 0 Comments</span>
              <a href="" className="text-2xl">
                Aliquam hendrerit mi metus
              </a>
              <div className="border-b pb-2">
                <a href="" className="text-sm">
                  Read More
                </a>
              </div>
            </div>
          </li>
          <li className="item-2 ">
            <a href="">
              <img src={Blog2} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm">25 Feb, 2021 - 0 Comments</span>
              <a href="" className="text-2xl">
                Aliquam hendrerit mi metus
              </a>
              <div className="border-b pb-2">
                <a href="" className="text-sm">
                  Read More
                </a>
              </div>
            </div>
          </li>
          <li className="item-3 ">
            <a href="">
              <img src={Blog3} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm">25 Feb, 2021 - 0 Comments</span>
              <a href="" className="text-2xl">
                Aliquam hendrerit mi metus
              </a>
              <div className="border-b pb-2">
                <a href="" className="text-sm">
                  Read More
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;