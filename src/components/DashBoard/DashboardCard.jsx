import React, { useState } from "react";

//import mock data json file
import data from "../../mockData/MockData.json";

const DashboardCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  //*NOTE
  //use GET function of axios and use useEffect hook
  /*sample: useEffect(() => {
  loadCourses();

  }, []);
  
    const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
    }
    */

  //after getting the data display it using map
  //get your react hook where you store the data coming from db
  //sample: courses.map((course, idx) {return(your code here)});

  //*NOTE
  //for now I'll be displaying a data coming from a json format file
  //destructure the data
  const { courses } = data;
  return (
    <div className="w-full h-[100vh]">
      {/* change bg color to provided img */}

      {/* 1/18/204 bg height 323px */}
      <div className="xl:h-[323px] relative flex flex-col items-center justify-center w-full py-10 mt-3 bg-[url('https://img.freepik.com/fotos-premium/acuarela-abstracta-verde-textura-papel-blanco_7190-1311.jpg?w=996')] bg-cover shadow-lg lg:py-15">
        <p className="text-[1.8rem] font-bold text-white w-[80%] text-center xl:text-[64px] ">
          月伝で自分のやり方を学びましょう。
        </p>

        <p className="xl:text-[64px] italic lg:text-[1.7rem] font-bold text-[#67836B]  pb-10 lg:pb-15">
          Learn your way at Tsukiden.
        </p>

        <button className="px-5 font-normal lg:absolute btn-style lg:rounded-lg lg:bottom-[-1.5rem] xl:h-[86px] xl:w-[280px] xl:text-[32px] xl:text-[rgba(255, 255, 255, 1)] ">
          View Courses
        </button>
      </div>
      <div className=" xl:h-[330px] xl:w-[1519px] flex flex-col lg:flex-row lg:w-[90vw] lg:m-auto lg:justify-center lg:mt-[6rem] items-center gap-5 mt-2 ">
        {courses.map((course, idx) => {
          return (
            // 1/11/2024

            <div
              key={idx}
              className="w-[95%] lg:w-[17vw] shadow-md rounded-sm xl:w-[271px] xl:h-[330px] bg-[#87D275] ">
              <div className="bg-[#BCE8B1] flex flex-col rounded-t-sm p-5">
                <p className="text-[#278510]">{course.courseNum}:</p>
                <p className="text-[#278510] font-bold xl:text-[1.1rem] lg:h-[30%] line-clamp-1">
                  {course.courseTitle}
                </p>
              </div>
              <div className="  p-3 rounded-b-sm text-justify h-[70%]">
                <p className=" line-clamp-4 xl:line-clamp-6">
                  {course.description}
                </p>
                <button className="text-[#1E6C0B] pt-3 font-bold">
                  See more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardCard;
// 1/17/2024
