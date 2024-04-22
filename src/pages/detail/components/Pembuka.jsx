const Pembuka = () => {
  return (
    <section id="Pembuka">
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
                  <span className="text-sm text-slate-600">@sadammahendra</span>
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
              Fyi, saya recook dari mas canro dan saya hanya bikin 2/3 dari
              resep asli.
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
  );
};

export default Pembuka;
