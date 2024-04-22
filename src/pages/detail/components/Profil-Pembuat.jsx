const ProfilPembuat = () => {
  return (
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
                  <span className="text-sm text-slate-600">@sadammahendra</span>
                </div>
                {/* <!-- dibuat pada tanggal --> */}
                <div className="text-sm text-slate-600">Pada 11 Maret 2024</div>
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
              Awalnya saya coba-coba, akhirnya saya ketagihan untuk membuat
              segala masakan yang ada, semoga resep yang saya buat bermanfaat
              bagi kalian, jangan lupa follow ya agar tidak ketinggalan, terima
              kasih.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilPembuat;
