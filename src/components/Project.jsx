import { useContext } from "react";
import useImage from "./hooks/useImage";

const Project = ({ title, description, img, techStack, link, github }) => {
  const { image } = useImage(img);

  return (
    <main>
      <div className="mx-auto max-w-sm w-full p-4 ">
        <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div className="mb-5">
            <p className="text-2xl uppercase text-gray-900 font-bold">
              {title}
            </p>
            <p className="uppercase text-sm text-gray-400">{description}</p>
          </div>
          <div>
            <img
              src={img}
              alt="img projects"
              className="w-full object-cover object-center rounded-lg"
            />
          </div>
          <div className="grid gap-10">
            <div className="mt-3 text-center">{techStack}</div>
            <div className="flex md:flex-row justify-between items-center text-gray-900">
              <a
                href={link}
                target="_blank"
                className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              >
                Visit 😉
              </a>
              <a
                href={github}
                target="_blank"
                className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              >
                Code 👀
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
