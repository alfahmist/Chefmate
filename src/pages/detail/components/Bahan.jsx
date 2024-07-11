/* eslint-disable react/prop-types */
import TimerIcon from "../../../assets/icons/clock.svg";
import PersonIcon from "../../../assets/icons/person.svg";

const Bahan = ({ data }) => {
  const bahanRecipe = data.bahans;
  return (
    <section id="bahan">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h2 className="mb-4 text-xl font-semibold text-slate-700 sm:text-2xl">
            Bahan-bahan
          </h2>

          {/* <!-- waktu dan berpa banyak --> */}
          <div className="mb-4 flex gap-x-4 text-slate-600">
            <div className="flex items-center gap-x-2">
              <img className="h-[16px] w-[16px]" src={TimerIcon} alt="waktu" />
              <span>{data.durasi} menit</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img className="h-[16px] w-[16px]" src={PersonIcon} alt="orang" />
              <span>{data.porsi} orang</span>
            </div>
          </div>
          {/* <!-- end waktu --> */}

          {/* <!-- start isi bahan --> */}
          <div>
            <ol>
              {bahanRecipe.map((item, index) => (
                <li
                  className="border-b border-dashed border-slate-300 py-2"
                  key={index}
                >
                  {item.nama_bahan}
                </li>
              ))}
            </ol>
          </div>
          {/* <!-- end isi bahan --> */}
        </div>
      </div>
    </section>
  );
};

export default Bahan;
