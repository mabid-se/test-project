const Loading = () => {
  return (
    <div className="max-w-screen-xl w-full px-6 lg:p-4 mx-auto">
      <div className="grid grid-cols-12 gap-4 lg:gap-5 xl:gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <div
            key={i}
            className="group relative col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-2 shadow-md px-4 lg:px-6 py-4 rounded-lg animate-pulse"
          >
            <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
            <div className="h-6 bg-gray-300 rounded w-full mt-2"></div>
            <div className="flex flex-col gap-1 mt-2">
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-1/2 mt-1"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mt-1"></div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 rounded w-1/3 mt-1"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mt-1"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
