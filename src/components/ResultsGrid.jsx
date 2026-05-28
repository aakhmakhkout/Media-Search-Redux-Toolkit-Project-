import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGifs } from "../api/mediaApi";
import {Bookmark} from "lucide-react"
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { setCollectionData } from "../redux/features/collection";
import { useEffect } from "react";
import Resultscards from "./Resultscards";

const ResultsGrid = () => {
  const dispatch = useDispatch();
  const resultData = useSelector((state) => state.search.results);
  const { query, activetab, results, loading, error, page } = useSelector(
    (store) => store.search,
  );
  const iconobj = {
    icon: <Bookmark size={25} strokeWidth={2} />
  }

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
      <div className="w-[80%] h-full flex flex-wrap gap-5 overflow-y-scroll resultdiv justify-start items-center pb-10">
        {!loading ? (
          resultData.map((items) => {
            return (
              <div key={items.id}>
              <Resultscards data = {{items}} icon ={iconobj} whichPage={page}/>
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
