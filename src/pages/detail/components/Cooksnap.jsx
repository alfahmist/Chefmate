/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import api from "../../../services/api";

const Cooksnap = ({ id_recipe }) => {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/cooksnap/${id_recipe}`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id_recipe]);

  console.log(data, "cooksnap");

  if (!data) {
    return <div className="text-center p-4">loading</div>;
  }

  return (
    <section id="cooksnap">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 text-slate-700 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h2 className="mb-4 text-lg font-semibold text-slate-700">
            Cooksnap({data[0].total_cooksnaps})
          </h2>
          <div className="flex flex-wrap">
            {data.map((item, index) => (
              <div
                className="mb-2 flex flex-col w-[150px] p-4 lg:mb-4 lg:rounded-lg lg:shadow sm:mr-2"
                key={index}
              >
                <img
                  className="h-[120px] w-[120px] rounded-lg object-cover"
                  src={`http://localhost:3000/${item.img_url}`}
                  alt="8"
                />
                <div className="flex">
                  <img
                    className="mr-2 mt-2 h-[30px] w-[30px] rounded-full object-cover"
                    src={`http://localhost:3000/${item.img_user_url}`}
                    alt="icon"
                  />
                  <span className="mt-3 text-sm font-semibold truncate">
                    {item.name_user}
                  </span>
                </div>
                <p className="mt-2 text-sm font-light truncate">
                  {item.name_cooksnap}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center">
            <button className="h-15 mb-2 w-60 justify-normal rounded-lg border-black bg-gray-800 px-10 py-2 font-semibold text-gray-200 shadow-md hover:bg-gray-700 transition">
              Kirim Foto Cooksnap
            </button>

            <a href="#" className="justify-center underline">
              selengkapnya mengenai cooksnap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cooksnap;
