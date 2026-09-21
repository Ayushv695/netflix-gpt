const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-[100%] aspect-video px-6 md:px-24 pt-[30%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-2/3">{overview}</p>
      <div className="my-4 md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80">
          ▶︎ Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg mx-2">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
