import React from 'react';
import Blog1 from '../../assets/img/blogs/blog1.jpg';
import Blog2 from '../../assets/img/blogs/blog2.jpg';
import Blog3 from '../../assets/img/blogs/blog3.jpg';
import Blog4 from '../../assets/img/blogs/blog4.jpg';
import Blog5 from '../../assets/img/blogs/blog5.jpg';
import Blog6 from '../../assets/img/blogs/blog6.jpg';

const Blog = ({ type }) => {
  return type === 'blogForHome' ? (
    <section className="blog ">
      <div className="text-center mb-9">
        <h2 className="text-3xl mb-1 font-bold">From Our Blog</h2>
        <h3>Summer Collection New Morden Design</h3>
      </div>
      <div className="container">
        <ul className="blog-list gap-12">
          <li>
            <a href="">
              <img src={Blog1} alt="" />
            </a>
            <div className=" flex flex-col pt-10 pb-10 items-center gap-3 ">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog2} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog3} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
  ) : (
    <section className="blog mt-12 mb-12">
      <div className="text-center mb-9">
        <h2 className="text-3xl mb-1 font-bold">From Our Blog</h2>
        <h3>Summer Collection New Morden Design</h3>
      </div>
      <div className="container">
        <ul className="blog-list gap-12">
          <li>
            <a href="">
              <img src={Blog1} alt="" />
            </a>
            <div className=" flex flex-col pt-10 pb-10 items-center gap-3 ">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog2} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog3} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog4} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog5} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
          <li>
            <a href="">
              <img src={Blog6} alt="" />
            </a>
            <div className="flex flex-col pt-10 pb-10 items-center gap-3">
              <span className="text-sm text-gray-600">
                25 Feb, 2021 - 0 Comments
              </span>
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
