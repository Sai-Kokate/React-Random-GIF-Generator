import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const [tag, setTag] = useState("");
  const { gif, loading, fecthData } = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border-black border flex flex-col items-center justify-center gap-y-5 mt-[15px]">
      <h2 className="font-bold underline text-2xl uppercase mt-[15px]">
        Random {tag} Gif
      </h2>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <input
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        placeholder="Search Here.."
        className="w-10/12 bg-white text-black  text-lg border rounded-lg text-center"
      />

      <button
        className="w-10/12 bg-white text-black opacity-50 text-lg border rounded-lg mb-[15px]"
        onClick={() => fecthData(tag)}
      >
        Generate GIF
      </button>
    </div>
  );
}
