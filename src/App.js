import { useEffect, useState } from "react";
import data from "../src/data.json";
// import "./App.css";
import Home from "./Home";
function App() {
  const [jobs, setJobs] = useState([]);
  const [tagFilter, setTagFilter] = useState([]);
  useEffect(() => {
    setJobs(data);
  }, []);

  //handleTagClick 
  const handleTagClick = (tag) => {
    if (tagFilter.includes(tag)) return;
    setTagFilter([...tagFilter, tag]);
    // console.log(tag);
  };
  // console.log('tag filter',tagFilter);
  // 

  // handleItemsFilter 
  const handleItemsFilter = (job) => {
    // console.log(job);
    //All earch items have  tag in 1 array
    const tags = [job.role, job.level];
    if (tagFilter.length === 0) return true;
    if (job.tools) {
      tags.push(...job.tools);
    }
    if (job.languages) {
      tags.push(...job.languages);
    }
    
    // console.log(tags)
    return (
      // console.log('tags',tags.some((tag) => tagFilter.every(tl=>tl.includes(tag)))),
      // tags.some((tag) => tagFilter.some(tl=>tl.includes(tag)))
      // tags.some((tag) => tagFilter.includes(tag))
      tagFilter.every( x => tags.includes(x))
    )
    // return trả về true những tag nào mà có trong filter
  };
  // 

  const itemsFilter = jobs.filter(handleItemsFilter);
  // console.log(itemsFilter);

  // handleRemoveTagFilter 
  const handleRemoveTagFilter = (filter) => {
    setTagFilter(tagFilter.filter((f) => f !== filter));
    // console.log(filter);
  };
  // 

  // handleRemoveAllTagFilter
  const handleClearFilter = () => {
    setTagFilter([]);
  };
  // 
  return (
    < >
      <header className=" mb-16 bg-green-600 ">
        <img
          className="w-full"
          src="./images/bg-header-desktop.svg"
          alt="bg-img"
        />
      </header>
      {/* Xử lý thẻ input filter */}
      <div className='container mx-auto'>
      {tagFilter.length > 0 ? (
        <div
          className=" flex bg-white shadow-md z-20 relative my-16 -mt-24 mx-10 p-6 rounded cursor-pointer transition-opacity transition-transform">
          {tagFilter.map((filter) => (
            <div key={filter} className="my-auto">
              <span
                key={filter}
                onClick={() => handleRemoveTagFilter(filter)}
                className="text-green-500  hover:bg-green-200 bg-green-100 font-bold mb-4 p-2 cursor-pointer rounded-l transition-all sm:mt-3"
              >
                {filter}
              </span>
              <span
                className="text-green-500 hover:bg-green-200 bg-green-100 font-bold mr-4 mb-4 p-2 cursor-pointer rounded-r transition-all"
                onClick={() => handleRemoveTagFilter(filter)}
              >
                X
              </span>
            </div>
          ))}
          <span
            onClick={handleClearFilter}
            className="ml-auto text-green-500 hover:bg-green-200 bg-green-100 font-bold rounded p-2 cursor-pointer transition-all"
          >
            Clear
          </span>
        </div>
      ) : (
        ""
      )}
      {/* render UI */}
      {itemsFilter.length === 0 ? (
        <p>Loading...</p>
      ) : (
        itemsFilter.map((job) => (
          <Home key={job.id} jobs={job} handleTagClick={handleTagClick} />
        ))
      )}
      </div>
    </>
  );
}

export default App;
