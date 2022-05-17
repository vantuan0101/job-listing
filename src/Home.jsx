import React from "react";

const Home = (props) => {
  const { jobs ,handleTagClick } = props;
//   console.log(jobs);

  //All tag in 1 array 👇 
  const { role, level, tools, languages , isNew , featured } = jobs;
  const tags = [role, level];
  if (tools) {
    tags.push(...tools);
  }
  if (languages) {
    tags.push(...languages);
  }
  // console.log(tags);
  //

  return (
    <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6
    rounded ${featured && 'border-l-4 border-green-500 border-solid'} sm:flex-row`}>
      <div>
        <img
          className="-mt-16 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24 sm:my-0"
          src={jobs.logo}
          alt={jobs.company}
        />
      </div>
      <div className='text-left  ml-0 sm:ml-4 mb-4 sm:mb-0'>
        <h3 className="font-bold text-xl text-teal-500">
            {jobs.company}
            {jobs.isNew && 
                (
                    <span className="bg-green-400 text-white font-bold m-2 py-1 px-2 rounded-full uppercase text-sm "
                    >
                        New
                    </span>
                ) 
            }
            {jobs.featured && (<span className="bg-gray-800 text-white font-bold m-2 py-1 px-2 rounded-full uppercase text-sm">Feature</span>) }
        </h3>
        <h2 className="font-bold text-xl my-2">{jobs.position}</h2>
        <p className="text-gray-700">
          {jobs.postedAt} . {jobs.contract} . {jobs.location}
        </p>
      </div>
      <div className=" flex flex-wrap items-center border-t-2 border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0">
        {tags.map((tag) => (
          <span
            className="text-green-500 hover:bg-green-200 bg-green-100 font-bold mr-4 mb-4 p-2 cursor-pointer rounded mt-4 sm:mt-0"
            key={tag}
            onClick={()=> handleTagClick(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Home;
