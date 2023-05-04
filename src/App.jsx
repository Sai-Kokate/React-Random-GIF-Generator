import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="flex flex-col items-center background w-full h-full overflow-x-hidden">
      <h1 className="bg-white rounded-lg text-center w-11/12 mx-auto mt-[40px] font-bold text-4xl">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col w-full mt-10 mb-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
