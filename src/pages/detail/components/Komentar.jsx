/* eslint-disable react/prop-types */
import commentpic from "../../../assets/icons/comment.svg";

import { useEffect, useState } from "react";
import api from "../../../services/api";

const Komentar = ({ id_recipe }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/komentar/${id_recipe}?limit=5`);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id_recipe]);

  console.log(data);

  if (!data) {
    return <div className="text-center p-4">loading</div>;
  }

  return (
    <section id="Komentar">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <div className="flex">
            <img
              className="mr-5 h-[30px] w-[30px]"
              src={commentpic}
              alt="logo"
            />
            <h1 className="mb-4 text-lg font-semibold text-slate-700">
              Komentar
            </h1>
          </div>

          {data.map((item, index) => {
            const dateObject = new Date(item.created_at);

            // Mendapatkan komponen tanggal
            const year = dateObject.getFullYear();
            const month = dateObject.getMonth() + 1;
            const day = dateObject.getDate();

            // Format tanggal
            const formattedDate = `${day}/${month}/${year}`;

            return (
              <div className="flex p-4" key={index}>
                <div>
                  <img
                    className="mr-3 h-[30px] w-[30px] rounded-full"
                    src={`http://localhost:3000/${item.img_user_url}`}
                    alt={item.img_user}
                  />
                </div>
                <div>
                  <h2 className="font-semibold">{item.name_user}</h2>
                  <p className="text-sm text-gray-500">pada {formattedDate}</p>
                  <p className="mt-1">{item.deskripsi}</p>
                </div>
              </div>
            );
          })}

          {/* send komentar bla bla bla */}
          <form action="Tulis Komentar">
            <textarea
              className="px-4 py-2 w-full resize-none rounded-full border border-black focus:outline-none"
              name="Tulis Komentar"
              id="Komentar"
              cols="30"
              rows="1"
              placeholder="Beri Komentar"
            ></textarea>
            <button
              id="Komentar"
              className="mt-3 h-[30px] w-[50px] rounded bg-gray-800 hover:bg-gray-700 transition text-white"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Komentar;
