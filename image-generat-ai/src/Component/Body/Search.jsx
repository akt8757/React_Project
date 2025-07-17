import React, { useContext, useEffect, useState } from "react";
import { apiImageProvider } from "../../assets/Provider";

export default function Search() {
  const [value, setValue] = useState("");
  // const [onSubmit, setOnSubmit] = useState("");
  const [isAdvance, setIsAdvance] = useState({
    search: "",
    model: "",
    height: "1024",
    width: "1024",
  });
  const [isAdvanceChange, setIsadvanceChange] = useState();
  const { apiData } = useContext(apiImageProvider);
  const { fetchData, isModel } = apiData;

  const handleAdvanceSetting = (e) => {
    setIsAdvance({
      ...isAdvance,
      [e.target.name]: e.target.value,
    });
  };

  // daymanic data set with clicking aspect ratio button
  const handleSetRatio = (ratio) => {
    if (ratio === "1:1") {
      setIsAdvance({
        ...isAdvance,
        height: "1024",
        width: "1024",
      });
    } else if (ratio === "16:9") {
      setIsAdvance({
        ...isAdvance,
        height: "1920",
        width: "1080",
      });
    } else if (ratio === "4:3") {
      setIsAdvance({
        ...isAdvance,
        height: "1024",
        width: "768",
      });
    } else if (ratio === "3:2") {
      setIsAdvance({
        ...isAdvance,
        height: "1500",
        width: "1000",
      });
    }
  };

  console.log("get input value", isAdvance);

  const handleSubmit = () => {
    const { height, model, width, search } = isAdvance;
    if (search === "") {
      alert("REQUARD");
    } else if (model === "") {
      alert("REQUARD");
    } else if (width === "") {
      alert("REQUARD");
    } else if (height === "") {
      alert("REQUARD");
    } else {
      fetchData(search, width, height, model);
    }

    //
  };

  return (
    <div>
      <div className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm">
        <div className="flex items-center">
          <div className="pl-5 pr-2">
            <svg
              className="w-5 h-5 text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            onChange={handleAdvanceSetting}
            name="search"
            value={isAdvance.search}
            type="text"
            placeholder="Create with Prompts"
            className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
          />
          <button
            onClick={handleSubmit}
            className="bg-zinc-800 hover:bg-zinc-700 transition-colors p-4 mr-1 rounded-full"
          >
            <svg
              className="w-6 h-6 text-white transform rotate-90"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Advanced Settings</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label
              for="model"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Model
            </label>
            <select
              onChange={handleAdvanceSetting}
              name="model"
              value={isAdvance.model}
              id="model"
              className="w-full px-3 py-2 bg-zinc-900/10 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              {isModel.map((item) => (
                <option
                  key={item}
                  className="bg-zinc-900"
                  value={item}
                  selected
                >
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              for="seed"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Seed (for reproducible results)
            </label>
            <input
              type="number"
              id="seed"
              disabled="true"
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Random"
            />
          </div>

          <div>
            <label
              for="width"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Width
            </label>
            <input
              onChange={handleAdvanceSetting}
              name="width"
              type="number"
              id="width"
              value={isAdvance.width}
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label
              for="height"
              className="block text-sm font-medium text-zinc-700 mb-1"
            >
              Height
            </label>
            <input
              onChange={handleAdvanceSetting}
              name="height"
              type="number"
              id="height"
              value={isAdvance.height}
              className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Aspect Ratio Presets
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleSetRatio("1:1")}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                1:1
              </button>
              <button
                onClick={() => handleSetRatio("16:9")}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                16:9
              </button>
              <button
                onClick={() => handleSetRatio("4:3")}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                4:3
              </button>
              <button
                onClick={() => handleSetRatio("3:2")}
                className="bg-zinc-900/10  px-3 py-3 text-xs  hover:bg-zinc-800 rounded transition-colors"
              >
                3:2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
