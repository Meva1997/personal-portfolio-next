export default function TechStackSkeleton() {
  return (
    <article className="flex items-center justify-center mt-6 space-x-6">
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-20 h-20 bg-gray-300 rounded-full animate-pulse"
          ></div>
        ))}
    </article>
  );
}
