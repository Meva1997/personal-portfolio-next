export default function ProjectCardSkeleton() {
  return (
    <div className="max-w-4xl p-6 mx-auto my-16 bg-gray-800 rounded-lg animate-pulse">
      {/* Título del proyecto */}
      <div className="w-1/3 h-6 mx-auto mb-5 bg-gray-600 rounded"></div>

      {/* Imagen y descripción */}
      <div className="flex items-center justify-center my-4 space-x-5">
        <div className="w-32 h-32 bg-gray-600 rounded"></div>
        <div className="flex-1 space-y-4">
          <div className="w-full h-4 bg-gray-600 rounded"></div>
          <div className="w-5/6 h-4 bg-gray-600 rounded"></div>
          <div className="w-4/6 h-4 bg-gray-600 rounded"></div>
        </div>
      </div>

      {/* Enlaces */}
      <div className="flex items-center justify-center mt-8 space-x-5">
        <div className="w-24 h-4 bg-gray-600 rounded"></div>
        <div className="w-32 h-4 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
}
