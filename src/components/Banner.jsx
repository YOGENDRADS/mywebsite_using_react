import bannerImage from "../assets/bi1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef } from "react";
import { useEffect } from "react";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Java Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center"
    >
      {/* first dabba */}
      <div className="w-full flex items-center justify-center text-white ">
        {/* text */}
        <div className="w-2/3 space-y-2  ms-10">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-5xl font-bold">Yogendra Kumar</h1>
          <h2 className="text-3xl ">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="">
          👋 Hi, I'm Yogendra Kumar, a final year MCA student with a passion for coding and exploring the vast world of technology. Currently exploring Java, and web development.
            </p>

          <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"
            href="https://www.linkedin.com/in/yogendra-yadav-269692273/" target="_blank">
            <i class="fa-brands text-4xl fa-linkedin"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800" href="https://www.instagram.com/_yogi74/" target="_blank">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"href="https://twitter.com/yogiads74" target="_blank">
            <i class="fa-brands text-4xl fa-x-twitter"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"href="https://github.com/YOGENDRADS" target="_blank">
            <i class="fa-brands text-4xl  fa-github"></i>
            </a>
            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800"href="mailto:yogiads74@gmail.com" target="_blank">
            <i class="fa-solid text-4xl fa-envelope"></i>
            </a>
          </div>
          <br />
          <a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="tel:7417618798" target="_blank">
          
            Contact Me
          </a> 
          <a
            className=" text-2xl  m-8   px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="https://drive.google.com/file/d/1p5CF2EiEgGHKuApd6bRfsIGvpgJQtLZ6/view?usp=sharing" target="_blank">
          
            Download CV
          </a>
        </div>
      </div>

      {/* second  dabba */}

      <div className=" w-full flex justify-center">
        {/* image */}
        <img className="rounded-full my-2 shadow-lg w-fit" src={bannerImage} />
      </div>
    </div>
  );
};

export default Banner;