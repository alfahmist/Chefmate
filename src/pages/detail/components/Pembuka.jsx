/* eslint-disable react/prop-types */
// import LocationIcon from "../../../assets/icons/location.svg";
import PersonImg from "../../../assets/img/person_dummy.jpg";

const Pembuka = ({ data }) => {
  const dataUser = data.users;
  const dataJenis = data.jenis_makanans;
  console.log(dataJenis);

  return (
    <section id="Pembuka">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          {/* <!-- profile --> */}

          <div className="profile mb-4">
            <a href="#" className="flex items-center gap-x-2">
              <img
                className="max-h-[40px] max-w-[40px] rounded-full"
                src={PersonImg}
                alt="pembuat"
              />
              <div>
                {/* <!-- nama pembuat --> */}
                <div>
                  <span className="text-base font-semibold mr-1">
                    {dataUser.name_user}
                  </span>
                  {/* <span className="text-sm text-slate-600">@sadammahendra</span> */}
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
              </div>
            </a>
          </div>
          {/* <!-- end profile --> */}

          {/* <!-- isi content --> */}
          <div className="contents">
            <p className="mb-2">{data.deskripsi_resep}</p>
            <p className="mb-2 text-[#f97316]">
              {dataJenis.map((item, index) => (
                <a href="#" className="block" key={index}>
                  {item.nama_jenis_makanan}
                </a>
              ))}
            </p>
          </div>
          {/* <!-- end isi content --> */}
        </div>
      </div>
    </section>
  );
};

export default Pembuka;
