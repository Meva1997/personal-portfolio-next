import { db } from "@/db";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <>
      {db.map((project) => (
        <div
          key={project.id}
          className="max-w-4xl p-6 mx-auto my-10 bg-gray-900 rounded-lg"
        >
          <h2 className="mb-5 text-xl font-semibold text-center text-orange-500 ">
            {project.title}
          </h2>
          <div className="flex flex-col items-center justify-center mx-auto space-y-10 md:space-x-10 md:flex-row ">
            <Image
              src={project.image}
              alt={project.title}
              className="items-center object-contain mb-8 rounded-lg w-fit h-fit md:m-0"
              width={300}
              height={100}
            />
            <p className="text-lg font-bold text-justify text-white ">
              {project.description}
            </p>
          </div>
          <div className="flex items-center justify-center mt-8 space-x-5">
            <a
              href={project.demoLink}
              className="text-orange-500 hover:text-green-600 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              className="text-orange-500 hover:text-green-600 hover:underline"
              href={project.codeLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              View Project Code
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

{
  /* <div className="max-w-4xl p-6 mx-auto my-16 bg-gray-900 rounded-lg">
        <h2 className="mb-5 text-xl font-semibold text-center text-orange-500 ">
          {projectTitle}
        </h2>
        <div className="flex items-center justify-center my-4 space-x-5">
          {image}
          <p className="mt-2 text-lg font-bold text-justify text-white">
            {projectDescription}
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 space-x-5">
          <a
            href={demoLink}
            className="text-orange-500 hover:text-green-600 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Demo
          </a>
          <a
            className="text-orange-500 hover:text-green-600 hover:underline"
            href={codeLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            View Project Code
          </a>
        </div>
      </div> */
}
