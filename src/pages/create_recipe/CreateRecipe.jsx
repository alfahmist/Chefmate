import { useState } from "react";
import imgCamera from "../../assets/img/creat_resep/camera.png";
import imgCamera2 from "../../assets/img/creat_resep/camera2.png";
import MainLayout from "../../layout/MainLayout";

function index() {
  const [resep, setResep] = useState({});
  const [judul, setJudul] = useState();
  const [porsi, setPorsi] = useState();
  const [durasi, setDurasi] = useState();
  const [inspirasi, setInspirasi] = useState();
  const [bahan, setBahan] = useState();
  const [langkah, setLangkah] = useState();

  const handleSubmitBahan = () => {};
  const handleSubmitLangkah = () => {};

  return (
    <MainLayout>
      <main className="bg-bgdetailbase">
        <section id="contact" className="pt-36 pb-32">
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-16">
                <div className="bg-cookpad-gray-200">
                  <div className="py-rg md:py-lg image-upload text-center">
                    <div className="text-cookpad-gray-600">
                      <img className="w-28 mx-auto" src={imgCamera2} />

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
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <form>
            <div className="max-w-xl mx-auto mb-16 shadow-lg bg-orange-500 lg:rounded-lg p-4">
              <textarea
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Masukkan Judul Masakan Anda"
                type="text"
                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
              ></textarea>
              <button
                className="max-w-xl p-2 m-4  mx-auto shadow-lg bg-slate-300 lg:rounded-lg"
                type="submit"
              >
                Simpan
              </button>
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
          </form>
        </section>

        <section>
          <form onSubmit={handleSubmitBahan}>
            <div className="max-w-xl mx-auto mb-16 shadow-lg bg-orange-500 lg:rounded-lg p-4">
              <div className="flex">
                <h2 className="font-semibold text-lg mb-2 text-primary ">
                  Bahan-Bahan
                </h2>
                <button type="submit">+</button>
              </div>
              <input
                onChange={(e) => setBahan(e.target.value)}
                type="text"
                name="bahan-bahan"
                placeholder="1/2 ekor ayam"
                className="resep-list bg-slate-200 rounded-md"
              />
            </div>
          </form>
        </section>

        <section>
          <form onSubmit={handleSubmitLangkah}>
            <div className="max-w-xl mx-auto mb-16 shadow-xl bg-orange-500 lg:rounded-lg p-4">
              <h2 className="font-semibold text-lg mb-2 text-primary">
                Langkah
              </h2>
              <ul>
                <li>
                  <div className="flex items-center">
                    <div className="mr-2">
                      <div className="bg-black rounded-md w-6 rounded-full text-center text-white">
                        1
                      </div>
                    </div>
                    <input
                      onChange={(e) => setLangkah(e.target.value)}
                      type="text"
                      name="bahan-bahan"
                      placeholder="Langkah 1"
                      className="resep-list bg-slate-200 rounded-md"
                    />
                  </div>
                  <div className="w-32 h-28 p-2">
                    <div className="w-full h-full bg-slate-200 rounded-lg">
                      <img src={imgCamera} className="w-28 mx-auto" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </form>
        </section>
      </main>
    </MainLayout>
  );
}

export default index;
