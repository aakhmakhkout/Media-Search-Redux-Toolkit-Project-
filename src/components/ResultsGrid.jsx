import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import {Bookmark} from "lucide-react"
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultsGrid = () => {
  const dispatch = useDispatch();
  const resultData = useSelector((state) => state.search.results);
  const { query, activetab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  console.log(resultData);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        let result;
        if (activetab === "Photos") {
          data = await fetchPhotos(query);
          result = data.results.map((items) => {
            return {
              id: items.id,
              type: "Photos",
              title: items.alt_description,
              thumbnail: items.urls.small,
              src: items.urls.full,
            };
          });
        } else if (activetab === "GIFs") {
          data = await fetchGifs(query);
          result = data.data.map((items) => {
            return {
              id: items.id,
              type: "GIFs",
              title: items.title,
              thumbnail: items.images.preview_gif.url,
              src: items.url,
            };
          });
        } else if (activetab === "Videos") {
          data = await fetchVideos(query);
          result = data.videos.map((items) => {
            return {
              id: items.id,
              type: "Videos",
              title: items.user.name || "Video",
              thumbnail: items.video_files[0].link,
              src: items.url,
            };
          });
        }

        dispatch(setResults(result));
      } catch (err) {
        setError(err);
      }
    };
    if (query !== "") {
      getData();
    }
  }, [query, activetab]);

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="w-full h-[70vh] flex justify-center flex-col items-center ">
    <div className="text-white flex w-[80%] h-8 text-xl font-bold my-4">Searched: {query}</div>
      <div className="w-[80%] h-full flex flex-wrap gap-5 overflow-y-scroll resultdiv justify-evenly pb-10">
        {!loading ? (
          resultData.map((items) => {
            return (
              <div key={items.id} className="flex w-80 object-cover bg-white/30 overflow-hidden rounded-xl relative">
                <a href={items.src} target="_blank" className="flex flex-col items-center w-full h-50 overflow-hidden relative">
                    {items.type !== "Videos"? <img src={items.thumbnail} alt={items.title} className="w-full h-full object-cover object-center hover:scale-110 transition duration-300" />: <video src={items.thumbnail} alt={items.title} className="w-full h-full object-cover object-center hover:scale-110 transition duration-300" autoPlay loop muted/>}

                    <div className="absolute z-10 bottom-0 px-2">
                        <p className="text-white text-sm font-bold capitalize bg-black/30 p-1 rounded-md shadow-md">{items.title}</p>
                    </div>
                
                </a>
              </div>
            );
          })
        ) : (
          <h1 className="text-white text-5xl font-bold">Loading....</h1>
        )}
      </div>
    </div>
  );
};

export default ResultsGrid;
