import MethodologyCard from "./MethodologyCard";

let Methodology = () => {
  return (
    <>
      <h3 className=" text-3xl font-medium w-full text-center mb-16 mt-20">
        Our Unique Learning Methodology
      </h3>
      <div className=" flex justify-around">
        <MethodologyCard />
        <MethodologyCard />
        <MethodologyCard />
      </div>
    </>
  );
};

export default Methodology;
