import React from "react";
import GoPic from "../assets/techPhotos/go.png";
import NodePic from "../assets/techPhotos/node.png";
import ReactPic from "../assets/techPhotos/react.png";
import GitPic from "../assets/techPhotos/git.png";
import MySQLPic from "../assets/techPhotos/mysql.png";
import MongoDBPic from "../assets/techPhotos/mongo.png";
import GrpcPic from "../assets/techPhotos/grpc.png";
import Python from "../assets/techPhotos/python.png";
import CPic from "../assets/techPhotos/C.png";
import RedisPic from "../assets/techPhotos/redis.png";
import PostgresPic from "../assets/techPhotos/pg.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: GoPic,
      name: "Go",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: Python,
      name: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 9,
      src: CPic,
      name: "C",
      style: "shadow-sky-600",
    },
    {
      id: 2,
      src: NodePic,
      name: "Node.js",
      style: "shadow-lime-500",
    },
    {
      id: 3,
      src: ReactPic,
      name: "React",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: GrpcPic,
      name: "gRPC",
      style: "shadow-teal-400",
    },
    {
      id: 10,
      src: PostgresPic,
      name: "PostgreSQL",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: MongoDBPic,
      name: "MongoDB",
      style: "shadow-lime-500",
    },
    {
      id: 5,
      src: MySQLPic,
      name: "MySQL",
      style: "shadow-sky-600",
    },

    {
      id: 8,
      src: GitPic,
      name: "Git",
      style: "shadow-red-500",
    },
    {
      id: 9,
      src: RedisPic,
      name: "Redis",
      style: "shadow-red-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-100">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Experience
          </p>
          {/* <p className="py-6">A list of technologies I've used:</p> */}
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {technologies.map(({ id, src, name, style }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md hover:scale-110" />
            </div>
          ))}
        </div> */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto justify-center " />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
