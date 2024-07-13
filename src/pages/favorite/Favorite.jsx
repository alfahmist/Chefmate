/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
// import img from "../../assets/img/ayam.jpg";
import MainLayout from "../../layout/MainLayout";

import { useEffect, useState } from "react";
import api from "../../services/api";

function index() {
  const [data, setData] = useState(null);
  const [token, setToken] = useState("");
  console.log(data);
  console.log(token);

  const getToken = () => {
    setToken(localStorage.getItem("token"));
  };
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/favorite`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);

        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  if (!data) {
    return (
      <MainLayout>
        <div className="text-center p-4">loading</div>;
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main>
        <section className="container mx-2 px-5 pt-10 pb-4 flex flex-col items-start lg:px-20">
          <nav
            className="flex px-5 py-3 text-orange-500 border border-orange-500 rounded-lg bg-gray-50 dark:bg-transparent dark:border-orange-500"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700  dark:text-orange-500 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 block w-3 h-3 mx-1 text-orange-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/favorite"
                    className="ms-1 text-sm font-medium  md:ms-2 dark:text-orange-500 dark:hover:text-white"
                  >
                    Favorit
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </section>

        <section className="container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20">
          <h1 className="text-slate-700 text-3xl font-bold mb-8">Favorit</h1>
        </section>

        <section className="container mx-auto px-6 pt-10 pb-4 flex flex-col items-start lg:px-20">
          {/* <div className="flex flex-col gap-8 mb-8 lg:flex-row justify-center ">
            <div className=" relative flex flex-row justify-start gap-x-2 my-4">
              <button className=" border-orange-500 text-white rounded-xl flex p-1 bg-orange-500 border">
                <span className="font-bold text-xl">Semua</span>
              </button>

              <button className=" border-orange-500 text-orange-500 rounded-xl flex p-1 hover:bg-orange-500 hover:text-white">
                <span className="font-bold text-xl">Resep</span>
              </button>
            </div>
          </div> */}

          <div className="flex flex-col gap-8 mb-8 lg:flex-row justify-center">
            {data.map((item, index) => {
              return (
                <div className="relative w-[240px]" key={index}>
                  <button className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-7 h-7 inline-block m-auto"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                  <Link to={`/detail/${item.id}`}>
                    <div className="w-full overflow-hidden rounded-2xl h-64">
                      <img
                        src={`http://localhost:3000${item.foto_recipe_url}`}
                        alt={data.judul}
                        className="cursor-pointer hover:scale-105 duration-500 h-full w-full object-cover object-center "
                      />
                    </div>
                    <div className="flex flex-row justify-start gap-x-2 my-4">
                      <button className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-bold">{item.durasi}</span>
                      </button>
                    </div>
                    <p className="text-slate-700 text-xl font-bold hover:text-green-600 duration-500 cursor-pointer truncate">
                      {item.judul}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default index;
