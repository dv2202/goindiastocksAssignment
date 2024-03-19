// components/DiscussionForum.js

import React from 'react';
import data from '../../../data/discussion_data.json';
import { CiHeart } from "react-icons/ci";
import { MdModeComment } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const DiscussionForum = () => {
  return (
    <div className='w-full md:w-1/2 p-5 '>
      <h2 className='text-3xl font-medium mb-4 w-full text-center text-red-500 '>Discussion Forum</h2>
      {data.data.map((post, index) => (
        <div key={index} className='bg-white rounded-lg shadow-md p-4 mb-4 w-fit mx-auto '>
          <div className='flex flex-col md:flex-row gap-3 md:items-center'>
            <div>
              <img src={post.image_url} alt="User Post" className='w-10 h-10 object-cover rounded-full' />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-xl font-semibold'>{post.username}</h3>
              <p className='text-gray-600 mb-2'>{post.feedback}</p>
              <div className='flex flex-row gap-3 text-gray-600'>
                <div className='flex items-center'>
                  <CiHeart className='mr-1' />
                  <p>{post.like_counts}</p>
                </div>
                <div className='flex items-center'>
                  <FaRegEye className='mr-1' />
                  <p>{post.view_counts}</p>
                </div>
                <div className='flex items-center'>
                  <MdModeComment className='mr-1' />
                  <p>{post.comment_counts} Comments</p>
                </div>
                <div className='flex items-center'>
                  <CiShare2 className='mr-1' />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div>
              <p>{post.minutes_posted_ago} minutes ago</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum;
