/* eslint-disable react/prop-types */
import { useState } from "react";

const StepMasakan = ({ data }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImageUrl, setExpandedImageUrl] = useState("");

  const handleImageExpand = (imageUrl) => {
    setIsImageExpanded(true);
    setExpandedImageUrl(imageUrl);
  };

  const handleCloseImage = () => {
    setIsImageExpanded(false);
    setExpandedImageUrl("");
  };

  return (
    <section id="step">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h2 className="mb-4 text-xl font-semibold text-slate-700 sm:text-2xl">
            Cara Membuat
          </h2>

          <div>
            <ol>
              {data.map((item, index) => (
                <li className="mb-4 flex relative" key={index}>
                  <div className="mr-2 w-6">
                    <div className="h-6 w-6 rounded-full bg-slate-700 text-center font-semibold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <p className="mb-2">{item.judul}</p>
                    </div>
                    <div className="scroll-bar-hideen -mx-4 mb-2 overflow-auto px-4">
                      <button onClick={() => handleImageExpand(item.img)}>
                        <img
                          className="h-[128px] w-[160px] rounded-lg object-cover"
                          src={item.img}
                          alt={index + 1}
                        />
                      </button>
                    </div>
                  </div>
                  {isImageExpanded && expandedImageUrl === item.img && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                      <div className="relative">
                        <img
                          src={item.img}
                          alt={index + 1}
                          className="max-w-full max-h-full"
                        />
                        <button
                          className="absolute top-0 right-0 mt-4 mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full"
                          onClick={handleCloseImage}
                        >
                          X
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepMasakan;
