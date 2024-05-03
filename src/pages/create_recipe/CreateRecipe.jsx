/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import imgCamera from "../../assets/img/creat_resep/camera.png";
import imgCamera2 from "../../assets/img/creat_resep/camera2.png";
import MainLayout from "../../layout/MainLayout";

function index() {
  const [resep, setResep] = useState({});
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [judul, setJudul] = useState();
  const [porsi, setPorsi] = useState();
  const [durasi, setDurasi] = useState();
  const [inspirasi, setInspirasi] = useState();
  const [bahan, setBahan] = useState();
  const [listBahan, setListBahan] = useState([]);
  const [langkah, setLangkah] = useState();
  const [listLangkah, setListLangkah] = useState([]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const handleTambahBahan = (e) => {
    e.preventDefault();
    setListBahan([...listBahan, bahan]);

    setBahan("");
  };

  const handleTambahLangkah = (e) => {
    e.preventDefault();
    setListLangkah([...listLangkah, langkah]);

    setLangkah("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(listBahan);
  console.log(listLangkah);

  return (
    <MainLayout>
      <main className="bg-bgdetailbase">
        <form onSubmit={handleSubmit}>
          <section id="contact" className="pt-36 pb-32">
            <div className="container">
              <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                  <div className="bg-cookpad-gray-200">
                    <div className="py-rg md:py-lg image-upload text-center">
                      <div className="text-cookpad-gray-600">
                        <img
                          className="w-28 mx-auto"
                          src={selectedFile ? preview : imgCamera2}
                        />

                        <p className="text-cookpad-20 font-semibold mt-md">
                          Tambahkan foto resep
                        </p>

                        <p className="text-cookpad-14">
                          Tunjukkan foto hasil akhir masakanmu
                        </p>
                      </div>
                      <input
                        type="file"
                        name="file"
                        aria-label="Tambahkan foto resep"
                        accept="image/*"
                        onChange={onSelectFile}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="max-w-xl mx-auto mb-16 shadow-lg bg-orange-500 lg:rounded-lg p-4">
              <textarea
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Masukkan Judul Masakan Anda"
                type="text"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                required
              ></textarea>
            </div>

            <div className="max-w-xl mx-auto mb-16 shadow-lg bg-orange-500 lg:rounded-lg p-4">
              <div className="w-full lg:mx-auto">
                <div className="w-full px-4 mb-8">
                  <label className="text-base font-bold text-primary">
                    Porsi
                  </label>
                  <input
                    onChange={(e) => setPorsi(e.target.value)}
                    type="text"
                    id="name"
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    required
                  />
                </div>
                <div className="w-full px-4 mb-8">
                  <label className="text-base font-bold text-primary">
                    Lama memasak
                  </label>
                  <input
                    onChange={(e) => setDurasi(e.target.value)}
                    type="text"
                    id="email"
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                    required
                  />
                </div>
                <div className="w-full px-4 mb-8">
                  <textarea
                    onChange={(e) => setInspirasi(e.target.value)}
                    placeholder="Ceritakan apa inspirasi anda untuk memasakan masakan tersebut, dan sebuatkan dari mana inspirasi anda tersebut"
                    type="text"
                    id="email"
                    className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="max-w-xl mx-auto mb-16 shadow-lg bg-orange-500 lg:rounded-lg p-4">
              <h2 className="font-semibold text-lg mb-2 text-primary ">
                Bahan-Bahan
              </h2>
              <div className="flex items-center gap-4 mb-2">
                <input
                  onChange={(e) => setBahan(e.target.value)}
                  type="text"
                  name="bahan-bahan"
                  placeholder="1/2 ekor ayam"
                  className="resep-list bg-gray-300 h-10 px-4 rounded-md text-xl"
                  value={bahan}
                />
                <button
                  className="bg-gray-300 h-10 px-4 rounded-md text-xl mb-2"
                  onClick={handleTambahBahan}
                >
                  +
                </button>
              </div>

              <div className="bg-slate-300 rounded-md mb-2">
                {listBahan.length > 0
                  ? listBahan.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <span>{index + 1}.</span>
                        <p>{item}</p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </section>

          <section>
            <div className="max-w-xl mx-auto shadow-xl bg-orange-500 lg:rounded-lg p-4">
              <h2 className="font-semibold text-lg mb-2 text-primary">
                Langkah - Langkah
              </h2>
              <div>
                <div className="flex items-center">
                  <div className="mr-2">
                    <div className="bg-black rounded-md w-6 text-center text-white">
                      1
                    </div>
                  </div>
                  <input
                    onChange={(e) => setLangkah(e.target.value)}
                    type="text"
                    name="Langkah - Langkah"
                    placeholder="Langkah 1"
                    className="resep-list bg-gray-300 h-10 px-4 rounded-md text-xl"
                    value={langkah}
                  />

                  <button
                    className="bg-gray-300 h-10 px-4 rounded-md text-xl mb-2 ml-3"
                    onClick={handleTambahLangkah}
                  >
                    +
                  </button>
                </div>

                <div className="w-32 h-28 p-2">
                  <div className="w-full h-full bg-slate-200 rounded-lg">
                    <img src={imgCamera} className="w-28 mx-auto p-4 pt-3" />
                  </div>
                </div>
              </div>

              {/* onclick */}
              <div className="bg-slate-300 rounded-md mb-2">
                {listLangkah.length > 0
                  ? listLangkah.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <span>{index + 1}.</span>
                        <p>{item}</p>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </section>

          <div className="max-w-xl mx-auto">
            <button
              className="h-10 px-4 bg-gray-500 rounded-md my-8"
              type="submit"
            >
              Simpan
            </button>
          </div>
        </form>
      </main>
    </MainLayout>
  );
}

export default index;
