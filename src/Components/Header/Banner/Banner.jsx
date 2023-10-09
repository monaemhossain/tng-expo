
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner min-h-[620px] relative text-gray-200">
      <div className='max-w-screen-lg mx-auto grid lg:grid-cols-2 grid-cols-1'>
        <div className='space-y-3 pl-4' data-aos="fade-up"
          data-aos-anchor-placement="center-bottom">
          <h1 className="text-6xl font-bold">
            Biggest Tech and Gaming Event in 2023
          </h1>
          <ul className='text-left list-disc ml-5 space-y-1'>
            <li>GameTech Fusion: Where Innovation Meets Gaming</li>
            <li>NextGenTech: Unleashing the Future of Gaming</li>
            <li>Digital Playgrounds: A Convergence of Tech and Gaming</li>
            <li>Gamer&apos;s Nexus: Exploring the Tech Behind the Games</li>
            <li>Code & Play: Elevate Your Gaming Experience</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;