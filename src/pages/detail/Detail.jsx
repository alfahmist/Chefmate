/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom"
import data from "./data.json";

import Judul from "./components/Judul";
import Pembuka from "./components/Pembuka";
import StepMasakan from "./components/StepMasakan";
import Reaksi from "./components/Reaksi";
import ProfilPembuat from "./components/Profil-Pembuat";

const Detail = () => {
  // const { params } = useParams()
  const dataDetail = data[0];
  const detailCaraMembuat = dataDetail.detail["cara-membuat"];

  return (
    <main className="lg:flex justify-center bg-bgdetailbase">
      <div className="lg:flex lg:px-4 lg:max-w-[1020px] justify-center">
        {/* <!-- start content --> */}
        <div id="content" className="lg:w-3/5 flex-shrink-0 flex-grow">
          <Judul data={dataDetail} />
          <Pembuka />

          {/* <!-- bagian mas canro --> */}
          <section id="favorite"></section>

          {/* <!-- start section bahan --> */}
          <section id="bahan">
            <div className="lg:container">
              <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
                <h2 className="mb-4 text-xl font-semibold text-slate-700 sm:text-2xl">
                  Bahan-bahan
                </h2>

                {/* <!-- waktu dan berpa banyak --> */}
                <div className="mb-4 flex gap-x-4 text-slate-600">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="h-[16px] w-[16px]"
                      src="img/icon/clock.png"
                      alt="waktu"
                    />
                    <span>{dataDetail.waktu}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <img
                      className="h-[16px] w-[16px]"
                      src="img/icon/person.png"
                      alt="orang"
                    />
                    <span>{dataDetail.porsi}</span>
                  </div>
                </div>
                {/* <!-- end waktu --> */}

                {/* <!-- start isi bahan --> */}
                <div>
                  <ol>
                    <li className="list-bahan">
                      <span className="font-semibold">2 potong</span>
                      paha ayam
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">4 siung</span>
                      bawang merah
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">4 siung</span>
                      bawang putih
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1 jempol</span>
                      jahe
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">2 batang</span>
                      daun bawang
                    </li>
                    <li className="mb-2 mt-4 py-2">
                      <span className="font-semibold">Saus</span>
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">2 sdm</span>
                      kecap manis
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">2 sdm</span>
                      kecap asin
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1 1/3 sdm</span>
                      saus tiram
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">2/3 sdt</span>
                      kaldu bubuk
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/3 sdt</span>
                      lada bubuk
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">2/3 sdt</span>
                      gula pasir
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1 1/3 sdm</span>
                      minyak wijen
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/3 sdt</span>
                      cuka
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">50-75 ml</span>
                      air
                    </li>
                    <li className="mb-2 mt-4 py-2">
                      <span className="font-semibold">Sambal</span>
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">50-75 ml</span>
                      air
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">3 buah</span>
                      cabe rawit
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/4</span>
                      buat tomat
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/2 siung</span>
                      bawang putih
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/2 ruas jari</span>
                      jahe
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1.5 sdm</span>
                      saus sambal
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/2 buah</span>
                      jeruk nipis ambil airnya
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1 sdt</span>
                      gula pasir
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/4 sdt</span>
                      kaldu jamur
                    </li>
                    <li className="list-bahan">
                      <span className="font-semibold">1/4 sdt</span>
                      garam
                    </li>
                  </ol>
                </div>
                {/* <!-- end isi bahan --> */}
              </div>
            </div>
          </section>
          {/* <!-- end section bahan --> */}

          <StepMasakan data={detailCaraMembuat} />
          <Reaksi />

          {/* <!-- bagian mas canro --> */}
          {/* <!-- start section cooksnap --> */}
          <section id="cooksnap"></section>
          {/* <!-- end section cooksnap --> */}

          {/* <!-- bagian mas canro --> */}
          {/* <!-- start section komentar --> */}
          <section id="Komentar"></section>
          {/* <!-- end section komentar --> */}

          <ProfilPembuat />
        </div>
        {/* <!-- end content --> */}

        {/* <!-- bagian mas canro --> */}
        <aside className="w-[292px] hidden lg:block ml-6"></aside>
      </div>
    </main>
  );
};

export default Detail;
