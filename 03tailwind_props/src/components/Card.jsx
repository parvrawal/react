import React from 'react'

const Card = ({username = "zoro", post = "not assigned yet"}) => {

  return (
    <div className="flex flex-col items-center gap-6 p-7 md:fl rounded-2xl">
      <div>
        <img
          className="size-48 shadow-xl rounded-md"
          alt=""
          src="https://images.pexels.com/photos/1719173/pexels-photo-1719173.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-medium">{username }</span>
        <span className="font-medium text-sky-500">{post}</span>
        <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
          <span>No. 4</span>
          <span>·</span>
          <span>2025</span>
        </span>
      </div>
    </div>
  );
}

export default Card