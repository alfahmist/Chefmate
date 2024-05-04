import { Link } from "react-router-dom";
import img from "../../assets/img/ayam.jpg";
import MainLayout from "../../layout/MainLayout";

function index() {
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
          <div className="flex flex-col gap-8 mb-8 lg:flex-row justify-center ">
            <div className=" relative flex flex-row justify-start gap-x-2 my-4">
              <button className=" border-orange-500 text-white rounded-xl flex p-1 bg-orange-500 border">
                <span className="font-bold text-xl">Semua</span>
              </button>

              <button className=" border-orange-500 text-orange-500 rounded-xl flex p-1 hover:bg-orange-500 hover:text-white">
                <span className="font-bold text-xl">Resep</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-8 mb-8 lg:flex-row justify-center">
            <div className="relative">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt="ayam-geprek"
                  className="cursor-pointer hover:scale-105 duration-500"
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
                  <span className="font-bold">1 Jam</span>
                </button>
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
                  <span className="font-bold">Sedang</span>
                </button>
              </div>
              <p className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer">
                Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
              </p>
            </div>
            <div className="relative">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt="ayam geprek"
                  className="cursor-pointer hover:scale-105 duration-500"
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
                  <span className="font-bold">1 Jam</span>
                </button>
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
                  <span className="font-bold">Sedang</span>
                </button>
              </div>
              <p className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer">
                Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
              </p>
            </div>
            <div className="relative">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt="ayam geprek"
                  className="cursor-pointer hover:scale-105 duration-500"
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
                  <span className="font-bold">1 Jam</span>
                </button>
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
                  <span className="font-bold">Sedang</span>
                </button>
              </div>
              <p className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer">
                Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
              </p>
            </div>
            <div className="relative">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src={img}
                  alt="ayam geprek"
                  className="cursor-pointer hover:scale-105 duration-500"
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
                  <span className="font-bold">1 Jam</span>
                </button>
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
                  <span className="font-bold">Sedang</span>
                </button>
              </div>
              <p className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer">
                Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
              </p>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default index;
