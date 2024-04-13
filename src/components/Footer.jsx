const Footer = () => {
  return (
    <>
      <div className=" mt-20">
        <div className="flex justify-between  h-40 w-full bg-white items-cente bg-slate-500 text-white">
          <div className="w-80 h-full flex items-start flex-col  justify-center ml-8">
            <img
              src="https://propelmentorship.com/wp-content/uploads/2024/02/Screenshot_2024-02-28_170822-removebg-preview-120x54.png"
              alt=""
              className=""
            />
            <h4>
              Step into the future of effortless assistance, where innovation
              meets simplicity.
            </h4>
          </div>

          <div className="right flex m-4 w-2/4 justify-around items-center h-full ">
            <div className="">
              <h4 className=" m-1">Product</h4>
              <h4>Intigrator</h4>
              <h4>Examples</h4>
            </div>

            <div>
              <h4>Product</h4>
              <h4>Intigrator</h4>
              <h4>Examples</h4>
            </div>

            <div>
              <h4>Product</h4>
              <h4>Intigrator</h4>
              <h4>Examples</h4>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="left">
            <h4></h4>
          </div>

          <div className="right">
            <h4>Product</h4>
            <h4>Intigrator</h4>
            <h4>Examples</h4>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
