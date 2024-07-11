/* eslint-disable react/prop-types */
// import LocationIcon from "../../../assets/icons/location.svg";
// import PersonImg from "../../../assets/img/person_dummy.jpg";

const ProfilPembuat = ({ data }) => {
  const dataUser = data.users;

  const dateObject = new Date(data.created_at);

  // Mendapatkan komponen tanggal
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  // Format tanggal
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <section id="profil-pembuat">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h2 className="mb-4 text-lg font-semibold text-slate-700">
            Ditulis Oleh
          </h2>

          <div id="author-profil">
            <div className="mb-4 flex items-center gap-x-4">
              <a href="#">
                <img
                  className="w-14 rounded-full md:w-24"
                  src={`/assets/img/user/${dataUser.gambar}`}
                  alt={dataUser.name_user}
                />
              </a>

              <div>
                {/* <!-- nama pembuat --> */}
                <div>
                  <span className="text-base font-semibold mr-1">
                    {dataUser.name_user}
                  </span>
                  {/* <span className="text-sm text-slate-600">@sadammahendra</span> */}
                </div>
                {/* <!-- dibuat pada tanggal --> */}
                <div className="text-sm text-slate-600">
                  Pada {formattedDate}
                </div>
                {/* <!-- location --> */}
                {/* <div className="flex items-center text-sm text-slate-600">
                  <img
                    className="h-[16px] w-[16px]"
                    src={LocationIcon}
                    alt="lokasi"
                  />
                  <span className="ml-2">jakarta Selatan</span>
                </div> */}
                {/* <!-- tombol ikuti --> */}
                {/* <div className="mt-2">
                  <button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700 transition">
                    Ikuti
                  </button>
                </div> */}
              </div>
            </div>
            <p className="text-base text-slate-600">
              {dataUser.deskripsi_user}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilPembuat;
