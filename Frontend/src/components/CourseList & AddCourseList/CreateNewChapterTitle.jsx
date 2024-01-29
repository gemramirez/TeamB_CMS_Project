//display chapter title

import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";

//import mockdata
import data from "../../mockData/CourseOverviewCard.json";

//save icon
import { TfiSave } from "react-icons/tfi";

//back icon and back function
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const CreateNewChapterTitle = () => {
  /*January 17 2023 API connection from backend to front end displaying data */

  const [chapter, setChapter] = useState({
    chapter_id: '',
    chapter_title: '',
  });

  
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    loadChapters();
  }, []);

  const loadChapters = async () => {
    const result = await axios.get("http://localhost:8080/api/chapters");
    setChapters(result.data);
  };


  const handleInputChange = (e) => {
    setChapter({...chapter,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', chapter);
    await axios.post('http://localhost:8080/api/chapters', chapter);
    navigate(-1);
  };
  //mockdata chapter destructure
  const { chapter_title } = chapter;

  //back function
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  console.log(chapters);

  return (
    <>
      {/*January 19 2024 -gem modify responsiveness*/}
      <div className="relative w-full h-full mt-[70px]  ">
        <div className="relative w-full h-full mt-5 ">
          <div
            className="absolute left-2 top-0 flex items-center cursor-pointer w-[10%]"
            onClick={goBack}>
            <span className="text-[2.5rem]">
              <IoArrowBackCircle />
            </span>
            <span className="text-[1rem] pl-1">Back</span>
          </div>
          <div className="h-full w-[90%] mt-10 flex mx-auto flex-col lg:w-[70%] lg:m-auto lg:mt-5 items-center gap-5">
            <div className="lg:font-bold py-1 lg:py-0 lg:text-[2rem] w-full flex justify-center items-center">
              <p className="mb-2 lg:font-bold text-shadow">
                Create New Chapter Title
              </p>
            </div>
            <div>
              <div className="pb-2 w-[100%] mt-10 flex mx-auto flex-col lg:text-[1.5rem] lg:right-row lg:w-[98%] lg:m-auto lg:mt-5 items-right">
                <p className="lg:font-bold text-shadow">HTML And CSS</p>
              </div>
              <div className="w-[69vw] bg-[#BCE8B1] h-[2vh] items-center lg:rounded-lg">
                <div className="w-[20vw] bg-[#126912] h-[2vh] lg:rounded-lg"></div>
              </div>
              <div className="w-[98%] font-medium text-[1.4rem] 2xl:text-[36px] m-auto pt-2">
                <span className=" text-shadow">Lessons</span>
              </div>
            </div>

            {chapters.map((chapter, idx) => {
              return (
                <div
                  key={idx}
                  className="flex 2xl:w-[1186px] 2xl:h-[65px] lg:w-[80%] justify-between items-center">
                  <div className="h-[1.5rem] w-[1.5rem] bg-[#126912] rounded-[100%]"></div>
                  <div
                    className=" 2xl:rounded-[20px] lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] w-[90%] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]">
                    <p className="text-shadow">CHAPTER {chapter.chapter_id}:</p>
                    <p className="pl-2 lg:font-medium text-shadow">
                      {chapter.chapter_title}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex 2xl:w-[1186px] 2xl:h-[65px] lg:w-[80%] justify-between items-center">
              <div className="h-[1.5rem] w-[1.5rem] bg-[#126912] rounded-[100%]"></div>
              <form onSubmit={handleSubmit} 
                className=" 2xl:rounded-[20px] lg:flex lg:items-center lg:font-medium lg:text-[1rem] 2xl:text-[24px] w-[90%] bg-[#126912]  py-1 text-center text-[.8rem]  lg:p-5 text-white
              lg:h-[50px] lg:rounded-[1rem]">
               <input
                  type="text"
                  placeholder="Add New Chapter"
                  className="bg-[#126912] placeholder:text-white w-[100vw] outline-none placeholder:text-opacity-[25%]"
                  name="chapter_title"
                  value={chapter_title}
                  onChange={(e) => handleInputChange(e)}
                />
             
         
            {/*January 19 2024 -gem modify responsiveness*/}

            {/*January 17 2023 API connection from backend to front end displaying data */}
            {/*January 19 2024 -gem modify buttonUI and add footer*/}

            <div className="2xl:w-[297px] 2xl:h-[65px] lg:w-[20%] lg:flex lg:justify-center lg:items-center gap-5 ml-16">
              <div
                className=" h-[10vh] flex items-center justify-center w-[100%] lg:w-[100%] cursor-pointer">
                <div className="bg-[#BCE8B1] w-[100%] flex justify-center items-center pr-2 h-[5vh] lg:h-[50px] rounded-sm lg:rounded-[1rem]">
                  <span className="pr-3">
                    <TfiSave className="text-[2rem] text-white" />
                  </span>
                  <button className="text-shadow lg:font-bold lg:text-[1rem] 2xl:text-[24px]  text-[#070101] text-opacity-[55%]">
                    Save
                  </button>
                </div>
              </div>
              
            </div>
            </form>
            </div>
            
            {/*footer */}
            <div>
              <footer className="flex justify-center p-10">
                <div>
                  <p className="text-[#4D9349] font-medium">
                    All Rights Reserved | Copyright 2024
                  </p>
                </div>
              </footer>
            </div>
            {/*January 19 2024 -gem modify buttonUI and add footer*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewChapterTitle;
// 1/19/2024