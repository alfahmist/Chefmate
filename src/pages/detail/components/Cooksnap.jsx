import img1 from "../../../assets/img/detail/cooksnap/bubur.webp";
import img2 from "../../../assets/img/detail/cooksnap/photo.webp";
import img3 from "../../../assets/img/detail/cooksnap/santan.webp";
import img4 from "../../../assets/img/detail/step/7.webp";
import img5 from "../../../assets/img/detail/cooksnap/santan2.webp";
import img6 from "../../../assets/img/person_dummy.jpg";

const Cooksnap = () => {
  return (
    <section id="cooksnap">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 text-slate-700 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h2 className="mb-4 text-lg font-semibold text-slate-700">
            Cooksnap(3)
          </h2>
          <div className="flex flex-wrap">
            <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow sm:mr-2">
              <img
                className="h-[120px] w-[120px] rounded-lg object-cover"
                src={img1}
                alt="8"
              />
              <div className="flex">
                <img
                  className="mr-2 mt-2 h-[30px] w-[30px] rounded-full object-cover"
                  src={img2}
                  alt="icon"
                />
                <span className="mt-3 text-sm font-semibold truncate">
                  Annisa Rahim
                </span>
              </div>
              <p className="mt-2 text-sm font-light truncate">
                Enak ada Wanginya
              </p>
            </div>
            <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow sm:mr-2">
              <img
                className="h-[120px] w-[120px] rounded-lg object-cover"
                src={img3}
                alt="9"
              />
              <div className="flex">
                <img
                  className="mr-2 mt-2 h-[30px] w-[30px] rounded-full object-cover"
                  src={img4}
                  alt="icon"
                />
                <span className="mt-3 text-sm font-semibold truncate">
                  Anton Budi
                </span>
              </div>
              <p className="mt-2 text-sm font-light truncate">Mantap</p>
            </div>
            <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow sm:mr-2">
              <img
                className="h-[120px] w-[120px] rounded-lg object-cover"
                src={img5}
                alt="10"
              />
              <div className="flex">
                <img
                  className="mt-2 h-[30px] w-[30px] rounded-full object-cover"
                  src={img6}
                  alt="profil"
                />
                <span className="ml-2 mt-3 text-sm font-semibold truncate">
                  Nadeo
                </span>
              </div>
              <p className="mt-2 text-sm font-extralight truncate">
                Lumayan lah
              </p>
            </div>
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
