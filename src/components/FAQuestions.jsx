import QuestionAns from "./QuestionAns";

const FAQuestions = () => {
  return (
    <>
      <h2 className=" text-4xl  w-full tex font-medium text-center m-4 mb-12 mt-14">
        Frequently asked <span className=" text-pink-500">question</span>
      </h2>
      <div>
        <QuestionAns />
        <QuestionAns />
        <QuestionAns />
        <QuestionAns />
      </div>
    </>
  );
};

export default FAQuestions;
