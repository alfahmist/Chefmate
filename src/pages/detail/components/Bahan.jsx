/* eslint-disable react/prop-types */
import TimerIcon from "../../../assets/icons/clock.svg";
import PersonIcon from "../../../assets/icons/person.svg";

const Bahan = ({ data, bahanBaku, bahanSaus, bahanSambal }) => {
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
              <span>{data.waktu}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <img className="h-[16px] w-[16px]" src={PersonIcon} alt="orang" />
              <span>{data.porsi}</span>
            </div>
          </div>
          {/* <!-- end waktu --> */}

          {/* <!-- start isi bahan --> */}
          <div>
            <ol>
              {bahanBaku.map((item, index) => (
                <li
                  className="border-b border-dashed border-slate-300 py-2"
                  key={index}
                >
                  <span className="font-semibold mr-1">{item.jumlah}</span>
                  {item["nama-bahan"]}
                </li>
              ))}
              <li className="mb-2 mt-4 py-2">
                <span className="font-semibold">Saus</span>
              </li>
              {bahanSaus.map((item, index) => (
                <li
                  className="border-b border-dashed border-slate-300 py-2"
                  key={index}
                >
                  <span className="font-semibold mr-1">{item.jumlah}</span>
                  {item["nama-bahan"]}
                </li>
              ))}
              <li className="mb-2 mt-4 py-2">
                <span className="font-semibold">Sambal</span>
              </li>
              {bahanSambal.map((item, index) => (
                <li
                  className="border-b border-dashed border-slate-300 py-2"
                  key={index}
                >
                  <span className="font-semibold mr-1">{item.jumlah}</span>
                  {item["nama-bahan"]}
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
