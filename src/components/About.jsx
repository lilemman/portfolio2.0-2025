import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Hi, I’m Emmanuel</h1>
      <p className="text-lg mb-4">
        A passionate Full-Stack Web Developer with expertise in building dynamic
        and responsive websites using modern technologies like React, Node.js,
        and MongoDB. With a strong background in front-end design and back-end
        development, I create seamless user experiences and scalable solutions.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why hire me?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Proven experience in delivering high-quality projects, from concept to
          deployment.
        </li>
        <li>
          A problem-solver who thrives on tackling challenges and bringing
          innovative ideas to life.
        </li>
        <li>
          Committed to continuous learning, ensuring I stay ahead with the
          latest industry trends.
        </li>
      </ul>
      <p className="text-lg font-semibold">
        Let’s create something amazing together!
      </p>
    </div>
  );
};

export default About;
