const FooterIntro = () => {
  return (
    <>
      <div className=" w-full flex justify-center mt-16">
        <div className=" border-2 border-blue-950 w-fit p-10 pl-20 pr-20  text-center rounded-lg">
          <h2 className=" text-4xl  w-full tex font-medium text-center m-4 mb-8 mt-8">
            Ready <span className=" text-pink-500">Begin ?</span>
          </h2>

          <p className=" text-lg   w-full text-center text-xl mt-8 ">
            Embark on the journey of creating your very own AI-powered assistant
            effortlessly.
          </p>
          <a
            href=""
            className=" no-underline  bg-pink-500 text-white text-lg pt-3 pb-3 pl-10 pr-10 rounded-md m-8 inline-block"
          >
            get started
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterIntro;
