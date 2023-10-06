const Downlayout = () => {
    return (
      <section className="w-screen mx-auto p-4 flex flex-col justify-center w-full h-full border-gray-300">
        <div className="border border-solid border-gray-500 bg-black flex items-start h-60">
          <p className="my-4 text-lg ml-4">Develop.Preview.Ship.</p>
          <div className="ml-auto mr-20 mt-4">
            <img
              src="brain.png"
              alt="Brain"
              className="h-16"
              // 'ml-auto' pushes the image to the right
              // 'mr-4' adds margin to the right of the image
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Downlayout;
  