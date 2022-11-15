import { Link } from "react-router-dom";

const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
        <div className="absolute inset-0 flex items-center">
          <img
            src={
              artistId
                ? artist?.artwork?.url
                    .replace("{width}", "500")
                    .replace("height", "500")
                : songData?.images?.coverart
            }
            alt="art"
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          />
          <div className="ml-5">
            <p className="font-bold sm:text-3xl text-xl text-[#3e3e3e]">
              {artistId ? artist?.name : songData?.title}
            </p>
            {!artistId && (
              <Link to={`/artists/${songData?.artists[0].adamid}`}>
                <p className="text-base text-[#3e3e3e] mt-2">
                  {songData?.subtitle}{" "}
                  <p className="text-base text-[#3e3e3e] mt-2">
                    {artistId
                      ? artist?.genreNames[0]
                      : songData?.genres?.primary}
                  </p>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24"></div>
    </div>
  );
};

export default DetailsHeader;
