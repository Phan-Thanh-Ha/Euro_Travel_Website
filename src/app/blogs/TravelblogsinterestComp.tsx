import React from "react";
import { dataTravelBlogs } from "./data";
import Image from "next/image";

const BlogList: React.FC<any> = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {dataTravelBlogs.map((item) => (
        <div key={item.Id}>
          <a href={item.Link} className="block">
            <div className="group relative flex-shrink-0 w-full h-[250px] md:h-[300px] overflow-hidden rounded-xl border border-gray-200 opacity-90 hover:opacity-100 transition duration-300 ease-in-out group-hover:opacity-100">
              <div className="absolute inset-0">
                <Image
                  src={item.Image}
                  alt={item.Title}
                  width={400}
                  height={300}
                  sizes=""
                  className="w-full h-full object-cover transform opacity-100 transition duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-slate-700 bg-opacity-60 p-2 md:p-4">
                <p className="text-white text-lg md:text-xl transition duration-300 ease-in-out">
                  {item.Title}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
