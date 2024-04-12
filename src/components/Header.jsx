const Header = () => {
  return (
    <>
      <div className=" w-full text-center h-full flex flex-col justify-center  h-lvh bg-slate-300">
        <h3 className=" text-black text-8xl font-semibold">
          LEARN FROM <br /> INDUSTRY EXPERTS
        </h3>
        <p className=" text-sm  text-xs w-full text-center text-xl mt-12 ">
          Rapidly Develop a Tailored AI Assistant with OpenAI GPT-3.5:
          Seamlessly Connect to <br /> Resources and Upload Files for
          Comprehensive Assistance.
        </p>
        <div className=" mt-12">
          <a
            href=""
            className=" no-underline  bg-pink-500 text-white text-lg pt-3 pb-3 pl-10 pr-10 rounded-md"
          >
            get started
          </a>
          <a
            href=""
            className=" no-underline  bg-black text-white text-lg pt-3 pb-3 pl-10 pr-10 rounded-md m-2"
          >
            view prising
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
