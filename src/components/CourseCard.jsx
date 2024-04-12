let CourseCard = ({ img }) => {
  return (
    <>
      <div className=" border-2  w-96 pt-8 pb-8 text-center">
        <h4 className=" text-3xl text-black m-2  font-normal text-start font-medium">
          AI powered <br /> fullstack development
        </h4>
        <p className="text-xl text-black m-1  font-normal text-start">
          chhose from over 100+ Ai avtars or <br />
          create your own
        </p>
        <img className="  h-74 w-full mb-8 mt-3 " src={img} />
        <a
          href=""
          className="no-underline  bg-pink-500 text-white text-xl pt-2 pb-2 pl-20 pr-20 rounded-md w-full"
        >
          explore
        </a>
      </div>
    </>
  );
};

export default CourseCard;
