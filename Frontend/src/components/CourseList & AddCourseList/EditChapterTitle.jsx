import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAdd } from "react-icons/io5";

//import mockdata
import data from "../../mockData/CourseOverviewCard.json";

//save icon
import { TfiSave } from "react-icons/tfi";

//back icon and back function
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditChapterTitle = () => {
  /*January 17 2023 API connection from backend to front end displaying data */
  const [chapters, setChapters] = useState([]);

  //user params to navigate specific id
  let { id } = useParams();

  const [chapter, setChapter] = useState({
    chapter_id: "",
    chapter_title: "",
  });

  const handleInputChange = (e) => {
    setChapter({ ...chapter, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadChapters();
  }, []);

  //mockdata chapter
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", chapter);
    await axios.put(`http://localhost:8080/api/chapters/${id}`, chapter);
    navigate(-1);
  };

  const loadChapters = async () => {
    const result = await axios.get(`http://localhost:8080/api/chapters/${id}`);
    setChapter(result.data);
  };
  const { chapter_title } = chapter;
  console.log(chapter)

  //back function
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/*January 19 2024 -gem modify responsiveness*/}

      <div className="mt-[200px] absolute">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Edit Title</label>
          <input
            type="text"
            name="chapter_title"
            value={chapter_title}
            onChange={handleInputChange}
            id=""
          />
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default EditChapterTitle;
// 1/19/2024