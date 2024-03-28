
const HelpCenter = () => {
    return (
      <div>
        <h2 className="text-3xl font-semibold text-center mb-7">How can we help?</h2>
        <hr />
        <h3 className="text-2xl font-medium mt-7 mb-4 text-center">Here are some topics</h3>
        <div className="flex flex-col">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
            1.Reading list adding Problem
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
            2.wishlist list adding Problem
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
            3.Book vibe Website
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-4">
            4.Other
          </button>
        </div>
      </div>
    );
};

export default HelpCenter;