import { useState } from "react";
import bannerImage from "../assets/bi2.png";
const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Frontend Developer & Java Developer",
    desc1: `I'm Learn Core Java, frontend development, SQL, data structures, and algorithms. Let's grow and learn together!`,
    desc2: ` "An accomplished IT professional with a Master's degree in Computer Applications, equipped with proficiency in Java and web development. Proven ability in 
    collaborative problem-solving and project management, consistently delivering high-quality solutions. Passionate about leveraging technology for innovation and 
    enhancing user experiences. Seeking opportunities to contribute expertise and further develop skills in a challenging and growth-oriented environment."

`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  });
  return (
    <>
      <div className="main-container bg-gray-100 border py-16">
        <h1 className="text-center pb-16  text-5xl underline font-bold">
          About Me
        </h1>

        <div className="flex items-center">
          {/* image container */}
          <div className="w-full flex justify-center">
            <img
              className="w-fit"
              src={data.image}
              alt="durgesh kumar tiwari"
            />
          </div>

          {/* text container  */}
          <div className="w-full  flex justify-center">
            <div className="space-y-5   w-2/3">
              <h1 className="text-5xl  font-semibold ">{data.title}</h1>
              <p>{data.desc1}</p>
              <p>{data.desc2}</p>
              <button className="bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg">
                {data.actionButton.title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
