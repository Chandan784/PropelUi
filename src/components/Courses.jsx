import CourseCard from "./CourseCard";

let Courses = () => {
  let cardData = [
    {
      title: "",
      img: "",
      des: "",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-around">
        <CourseCard
          img={
            "https://propelmentorship.com/wp-content/uploads/2024/03/vr-baner-2.png"
          }
        />
        <CourseCard
          img={
            "https://propelmentorship.com/wp-content/uploads/2024/03/ai-corse-banner-3.png"
          }
        />
        <CourseCard
          img={
            "https://propelmentorship.com/wp-content/uploads/2024/03/MERN-BANNER.png"
          }
        />
      </div>
    </>
  );
};

export default Courses;
