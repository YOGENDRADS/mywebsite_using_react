import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            
            <h1 className="text-4xl">Web Development</h1>
            <p>
            <span text-bold>"Cafe-Royale-Landing-Page"</span> Creating a landing page for Cafe Royale using HTML, CSS, and JavaScript 
            would involve combining layout design, styling, and interactive elements.
            </p>
            <br /><a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="https://yogendrads.github.io/Cafe-Royale-Landing-Page/" target="_blank">
            Check
          </a>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
           
            <h1 className="text-4xl">Speech-Synthesis-Using-JS</h1>
            <p>
            JavaScript SpeechSynthesis Interface This is the main controller interface for the speech 
            synthesis service which controls the synthesis or creation of speech using the text provided. 
            This interface is used to start the speech, stop the speech, 
            pause it and resume it, along with getting the voices supported by the device.
            </p>
            <br /><a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="https://yogendrads.github.io/Speech-Synthesis-Using-JS/" target="_blank"
          >
            Check
          </a>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            
            <h1 className="text-4xl"> Whack-A-Mole game </h1>
            <p>
            a simple Whack-A-Mole game where moles randomly pop up from holes, and the player has to click on them to score points. The game lasts for 10 seconds.
             You can further customize and enhance this game as per your requirements and preferences!</p>
             
             <br /><a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="https://yogendrads.github.io/Whack-A-Mole/" target="_blank"
          >
            Check
          </a>
             

          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
           
            <h1 className="text-4xl"> Java Backend Development</h1>
            <p>
            Creating an e-commerce website using Java technology involves integrating frontend development with HTML, CSS, and JavaScript, and backend development using Java technologies like Servlets,
             JSP (JavaServer Pages), JDBC (Java Database Connectivity), and MySQL for database management.
            </p>
            <br />
          <a
            className=" text-2xl     px-3  py-2 bg-orange-500  rounded-full shadow-lg"
            href="https://github.com/YOGENDRADS/e-commerce-website-using-java-technology" target="_blank">
          
            Check
          </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
