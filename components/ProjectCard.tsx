type ProjectCardProps = {
  projectTitle: string;
  projectDescription: string;
  demoLink: string;
  codeLink: string;
  image: React.ReactNode;
};

export default function ProjectCard({
  projectTitle,
  projectDescription,
  demoLink,
  codeLink,
  image,
}: ProjectCardProps) {
  return (
    <>
      <div className="max-w-4xl p-6 mx-auto my-16 bg-gray-900 rounded-lg">
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
      </div>
    </>
  );
}
