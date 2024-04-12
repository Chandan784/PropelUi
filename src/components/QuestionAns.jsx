import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const QuestionAns = () => {
  let ans = document.getElementById("ans");

  let [isPlus, setIsPlus] = useState(1);

  let handelOnclick = () => {
    if (isPlus) {
      setIsPlus(false);
    } else {
      setIsPlus(true);
    }
  };
  return (
    <>
      <div className=" flex flex-col  items-center  text-white  pl-10 pr-10 w-full ">
        <div className=" w-fit pl-10 pr-10">
          <div className=" flex justify-around  items-center w-fit bg-black pl-10 pr-10 pt-4 pb-4">
            <h2 className=" ml-20 mr-20 text-2xl ">
              What is the limit on creating assistants?
            </h2>
            {isPlus ? (
              <FaPlus onClick={handelOnclick} />
            ) : (
              <FaMinus onClick={handelOnclick} />
            )}
          </div>

          <p
            id="ans"
            className={`text-start  text-lg bg-black pl-10 pr-10 pb-4 ${
              isPlus ? "invisible" : "visible"
            }`}
          ></p>
        </div>
      </div>
    </>
  );
};

export default QuestionAns;
