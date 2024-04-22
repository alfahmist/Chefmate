/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom"
import data from "./data.json";
import StepMasakan from "./components/StepMasakan";

const Detail = () => {
  // const { params } = useParams()
  const dataDetail = data[0];
  const detailCaraMembuat = dataDetail.detail["cara-membuat"];
  console.log(detailCaraMembuat);

  return (
    <main className="lg:flex justify-center bg-bgdetailbase">
      <div className="lg:flex lg:px-4 lg:max-w-[1020px] justify-center">
        {/* <!-- start content --> */}
        <div id="content" className="lg:w-3/5 flex-shrink-0 flex-grow">
          {/* <!-- start section judul.. --> */}
          <section id="judul">
            <div className="lg:container">
              <img
                className="max-h-72 w-full object-cover lg:my-4 lg:max-h-[482px] lg:w-[680px] lg:overflow-hidden lg:rounded-lg lg:shadow"
                src="img/ayam.jpg"
                alt="donat"
              />

              <div className="mb-2 p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
                <h1 className="sm::text-xl text-lg font-semibold md:text-2xl lg:text-3xl">
                  {dataDetail["nama-resep"]}
                </h1>
              </div>
            </div>
          </section>
          {/* <!-- end section judul --> */}

          {/* <!-- start section pembuat --> */}
          <section id="pembuat">
            <div className="lg:container">
              <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
                {/* <!-- profile --> */}
                <div className="profile mb-4">
                  <a href="#" className="flex items-center gap-x-2">
                    <img
                      className="max-h-[40px] max-w-[40px] rounded-full"
                      src="img/unnamed.png"
                      alt="pembuat"
                    />
                    <div>
                      {/* <!-- nama pembuat --> */}
                      <div>
                        <span className="text-base font-semibold">sadam</span>
                        <span className="text-sm text-slate-600">
                          @sadammahendra
                        </span>
                      </div>
                      {/* <!-- location --> */}
                      <div className="flex items-center text-sm text-slate-600">
                        <img
                          className="h-[16px] w-[16px]"
                          src="img/icon/location.png"
                          alt="lokasi"
                        />
                        <span>jakarta Selatan</span>
                      </div>
                    </div>
                  </a>
                </div>
                {/* <!-- end profile --> */}

                {/* <!-- isi content --> */}
                <div className="contents">
                  <p className="mb-2">
                    Bismillah <br />
                    Saya share ide menu sahur yang masaknya gampang, tapi bikin
                    keluarga semangat makannya. <br />
                    Fyi, saya recook dari mas canro dan saya hanya bikin 2/3
                    dari resep asli.
                  </p>
                  <p className="mb-2 text-primary">
                    <a href="#" className="block">
                      #godainramsay_ayamstrong
                    </a>
                    <a href="#">#godapaders_2024</a>
                  </p>
                </div>
                {/* <!-- end isi content --> */}
              </div>
            </div>
          </section>
          {/* <!-- end section pembuat --> */}

          {/* <!-- bagian mas canro --> */}
          {/* <!-- start section favorite --> */}
          <section id="favorite"></section>
          {/* <!-- end section favorite --> */}

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
                    <span>30 menit</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <img
                      className="h-[16px] w-[16px]"
                      src="img/icon/person.png"
                      alt="orang"
                    />
                    <span>6 porsi</span>
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

          {/* <!-- start section reaksi --> */}
          <section id="reaksi">
            <div className="lg:container">
              <div className="mb-2 flex flex-col p-4 text-slate-700 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
                <div className="flex items-center gap-2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g data-name="Layer 2">
                      <g data-name="heart">
                        <rect width="24" height="24" opacity="0" />
                        <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z" />
                      </g>
                    </g>
                  </svg>
                  <span className="text-lg font-semibold">Reaksi</span>
                </div>
                {/* <!-- reaction --> */}
                <div>
                  <div className="mb-1 text-sm font-normal normal-case text-slate-600">
                    <a href="#">
                      Canro Sigalingging dan pengguna lainnya memberikan reaksi
                    </a>
                  </div>
                  <ul>
                    <button className="mr-2 flex items-center rounded-full bg-slate-300 px-2 py-1 text-sm hover:bg-slate-400 focus:outline-none">
                      <span className="btn__icon">😋</span>
                      <span>5</span>
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- end section reaksi --> */}

          {/* <!-- bagian mas canro --> */}
          {/* <!-- start section cooksnap --> */}
          <section id="cooksnap"></section>
          {/* <!-- end section cooksnap --> */}

          {/* <!-- bagian mas canro --> */}
          {/* <!-- start section komentar --> */}
          <section id="Komentar"></section>
          {/* <!-- end section komentar --> */}

          {/* <!-- start section profil pembuat --> */}
          <section id="profil-pembuat">
            <div className="lg:container">
              <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
                <h2 className="mb-4 text-lg font-semibold text-slate-700">
                  Ditulis Oleh
                </h2>

                <div id="author-profil">
                  <div className="mb-4 flex items-stretch gap-x-4">
                    <a href="#">
                      <img
                        className="w-14 rounded-full md:w-24"
                        src="img/unnamed.png"
                        alt="profil author"
                      />
                    </a>

                    <div>
                      {/* <!-- nama pembuat --> */}
                      <div>
                        <span className="text-base font-semibold">sadam</span>
                        <span className="text-sm text-slate-600">
                          @sadammahendra
                        </span>
                      </div>
                      {/* <!-- dibuat pada tanggal --> */}
                      <div className="text-sm text-slate-600">
                        Pada 11 Maret 2024
                      </div>
                      {/* <!-- location --> */}
                      <div className="flex items-center text-sm text-slate-600">
                        <img
                          className="h-[16px] w-[16px]"
                          src="img/icon/location.png"
                          alt="lokasi"
                        />
                        <span>jakarta Selatan</span>
                      </div>
                      {/* <!-- tombol ikuti --> */}
                      <div className="mt-2">
                        <button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700 transition">
                          Ikuti
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-base text-slate-600">
                    Awalnya saya coba-coba, akhirnya saya ketagihan untuk
                    membuat segala masakan yang ada, semoga resep yang saya buat
                    bermanfaat bagi kalian, jangan lupa follow ya agar tidak
                    ketinggalan, terima kasih.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- end section profil pembuat --> */}
        </div>
        {/* <!-- end content --> */}

        {/* <!-- bagian mas canro --> */}
        <aside className="w-[292px] hidden lg:block ml-6"></aside>
      </div>
    </main>
  );
};

export default Detail;
