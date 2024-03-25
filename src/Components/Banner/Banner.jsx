 import { Link } from 'react-router-dom';
import pngwing1 from '../../assets/pngwing1.jpg'
const Banner = () => {
    return (
      <div className="hero h-[400px] lg:h-[500px] bg-[#0D0D0D0D] rounded-lg lg:px-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={pngwing1} className="max-w-sm bg-none hidden lg:block" />
          <div>
            <h1 className="text-5xl font-bold mb-12">
              Books to freshen up your bookshelf
            </h1>
            <Link
              to="/listedBooks"
              className="btn font-bold text-white bg-[#23BE0A] hover:text-[#23BE0A]"
            >
              View The List
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;