// import axios from "axios";
// import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, loading, fecthData } = useGif();

  return (
    <div className="w-1/2 bg-green-500 mx-auto rounded-lg border-black border flex flex-col items-center justify-center gap-y-5 mt-[15px]">
      <h2 className="font-bold underline text-2xl uppercase mt-[15px]">
        A Random Gif
      </h2>
      {loading ? <Spinner /> : <img src={gif} width="450" />}

      <button
        className="w-10/12 bg-white text-black opacity-50 text-lg border rounded-lg mb-[15px]"
        onClick={() => fecthData()}
      >
        Generate Random GIF
      </button>
    </div>
  );
}
