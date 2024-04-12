const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex justify-between  h-24 w-full bg-slate-300 text-black text-lg items-center sm:w-full">
          <div className="w-80 h-full flex items-start flex-col  justify-center ml-8">
            <img
              src="https://propelmentorship.com/wp-content/uploads/2024/02/Screenshot_2024-02-28_170822-removebg-preview-120x54.png"
              alt=""
              className=" w-40"
            />
          </div>

          <div className="right flex m-4 w-2/4 justify-around items-center h-full font-medium pt-2 pb-2 ">
            <a href="">Home</a>
            <a href="">What We Do</a>
            <a href="">Case Studies</a>
            <a href="">Contact</a>
            <a href="">About Us</a>
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

export default Navbar;
