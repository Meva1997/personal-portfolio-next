import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    id: 1,
    src: "/udemy-python-alex.jpg",
    alt: "Python Certification on Udemy",
    link: "https://www.udemy.com/certificate/UC-bc9f4a22-6eaa-4511-a585-bded18665d76/",
  },
  {
    id: 2,
    src: "/fullstack-node.jpg",
    alt: "Fullstack Node.js Certification on Udemy",
    link: "https://www.udemy.com/certificate/UC-22ecbe6d-aee4-4117-98b3-fd92fb9d49e6/",
  },
  {
    id: 3,
    src: "/react-certificate-udemy.jpg",
    alt: "React Certification on Udemy",
    link: "https://www.udemy.com/certificate/UC-e3adbd34-09d0-4885-9ec1-e35363577f8f/",
  },
  {
    id: 4,
    src: "/javascript-certificate-udemy.jpg",
    alt: "JavaScript Certification on Udemy",
    link: "https://www.udemy.com/certificate/UC-824ca5f5-ca6b-4bc4-ae0c-c01130bc2ea8/",
  },
  {
    id: 5,
    src: "/freeCodeCamp-JavaScript.png",
    alt: "freeCodeCamp JavaScript Algorithms and Data Structures Certification",
    link: "https://freecodecamp.org/certification/meva1997/javascript-algorithms-and-data-structures-v8",
  },
  {
    id: 6,
    src: "/freeCodeCamp-responsive-webDesign.png",
    alt: "freeCodeCamp Responsive Web Design Certification",
    link: "https://freecodecamp.org/certification/meva1997/responsive-web-design",
  },
];

export default function Certifications() {
  return (
    <section className="max-w-5xl p-8 mx-auto my-10">
      <h3 className="mb-12 text-4xl font-bold text-center gradient-text">
        Certifications
      </h3>
      <article className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {certifications.map((cert, index) => (
          <Link
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden transition-all duration-300 border border-gray-800 group glass-effect rounded-xl hover:scale-105 hover:border-orange-500"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
              opacity: 0,
            }}
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              width={300}
              height={200}
              className="object-cover w-full h-auto transition-all duration-300 rounded-xl group-hover:blur-sm"
            />
            <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-orange-900/90 to-transparent">
              <div className="px-6 py-3 font-semibold text-white border border-orange-400 rounded-lg bg-gray-900/80">
                View Certification
              </div>
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
