import Image from "next/image";
import Link from "next/link";

export default function Certifications() {
  return (
    <section className="my-20 max-w-4xl p-8 ">
      <h3 className="text-orange-500 font-bold text-2xl text-center mb-10">
        Certifications
      </h3>
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <Link
          href="https://www.udemy.com/certificate/UC-e3adbd34-09d0-4885-9ec1-e35363577f8f/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src="/react-certificate-udemy.jpg"
            alt="React Certification on Udemy"
            width={300}
            height={200}
            className="w-auto h-auto rounded-lg group-hover:blur-xs transition-all duration-300"
          />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 bg-opacity-80 font-semibold text-orange-500 px-4 py-2 rounded">
              View Certification
            </div>
          </span>
        </Link>
        <Link
          href="https://www.udemy.com/certificate/UC-824ca5f5-ca6b-4bc4-ae0c-c01130bc2ea8/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src="/javascript-certificate-udemy.jpg"
            alt="JavaScript Certification on Udemy"
            width={300}
            height={200}
            className="w-auto h-auto rounded-lg group-hover:blur-sm transition-all duration-300"
          />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 bg-opacity-80 font-semibold text-orange-500 px-4 py-2 rounded">
              View Certification
            </div>
          </span>
        </Link>
        <Link
          href="https://freecodecamp.org/certification/meva1997/javascript-algorithms-and-data-structures-v8"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src="/freeCodeCamp-JavaScript.png"
            alt="freeCodeCamp JavaScript Algorithms and Data Structures Certification"
            width={300}
            height={200}
            className="w-auto h-auto rounded-lg group-hover:blur-sm transition-all duration-300"
          />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 bg-opacity-80 font-semibold text-orange-500 px-4 py-2 rounded">
              View Certification
            </div>
          </span>
        </Link>
        <Link
          href="https://freecodecamp.org/certification/meva1997/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative hover:scale-105 transition-transform duration-300 overflow-hidden"
        >
          <Image
            src="/freeCodeCamp-responsive-webDesign.png"
            alt="freeCodeCamp Responsive Web Design Certification"
            width={300}
            height={200}
            className="w-auto h-auto rounded-lg group-hover:blur-sm transition-all duration-300"
          />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 bg-opacity-80 font-semibold text-orange-500 px-4 py-2 rounded">
              View Certification
            </div>
          </span>
        </Link>
      </article>
    </section>
  );
}
