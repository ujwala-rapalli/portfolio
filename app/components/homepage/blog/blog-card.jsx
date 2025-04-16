// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
// components/homepage/blog/blog-card.js


function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <img
          src={blog.cover_image}
          height={1080}
          width={1920}
          alt={blog.title}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
  <p className="text-[#16f2b3] text-sm">{blog.date}</p>
  {blog.url ? (
    <Link href={blog.url}>
      <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
        {blog.title}
      </p>
    </Link>
  ) : (
    <p className='my-2 lg:my-3 text-lg text-white sm:text-xl font-medium'>
      {blog.title}
    </p>
  )}
  <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
    {blog.description}
  </p>
</div>

    </div>
  );
}

export default BlogCard;
