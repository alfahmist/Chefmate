/* eslint-disable react/prop-types */
import commentpic from "../../../assets/icons/comment.svg";

import { useEffect, useState } from "react";
import api from "../../../services/api";
import axios from "axios";

const Komentar = ({ id_recipe }) => {
  const [data, setData] = useState(null);
  const [comment, setComment] = useState("");
  const [token, setToken] = useState("");

  const getToken = () => {
    setToken(localStorage.getItem("token"));
  };
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/komentar/${id_recipe}`);
        setData(response.data.data);

        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id_recipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/komentar/${id_recipe}`,
        {
          deskripsi: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert(response.data.message);
        setData((prevData) => [...prevData, response.data.data]);
        setComment("");
      }
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

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
          <div className="max-h-80 overflow-scroll">
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
                    <p className="text-sm text-gray-500">
                      pada {formattedDate}
                    </p>
                    <p className="mt-1">{item.deskripsi}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              className="px-4 py-2 w-full resize-none rounded-full border border-black focus:outline-none"
              name="Tulis Komentar"
              id="Komentar"
              cols="30"
              rows="1"
              placeholder="Beri Komentar"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
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
