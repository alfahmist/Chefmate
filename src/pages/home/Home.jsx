import { Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Card from "./Card";
import { Slider } from "./Slider";
import img from "../../assets/img/resep/pindang-bandeng.jpg";
import img2 from "../../assets/img/resep/Dessert.jpg";
import img3 from "../../assets/img/resep/Menu-Hari-raya.jpg";
import img4 from "../../assets/img/resep/Masakan-Tradisional.jpg";
import img5 from "../../assets/img/resep/Makan-Malam.jpg";
import img6 from "../../assets/img/resep/makan-siang.jpg";
import img7 from "../../assets/img/resep/ayam.jpg";
import img8 from "../../assets/img/resep/daging.jpg";
import img9 from "../../assets/img/resep/sayur.jpg";
import img10 from "../../assets/img/resep/seafood.jpg";
import img11 from "../../assets/img/resep/sarapan.jpg";
import img12 from "../../assets/img/resep/ayam-kuah-kaldu.jpg";

const datas = [
  {
    id: 1,
    image: "ayam.jpg",
    durasi: "1 Jam",
    kesulitan: "sulit",
    deskripsi: "Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah",
  },
  {
    id: 2,
    image: "mie-goreng.jpg",
    durasi: "20 menit",
    kesulitan: "sedang",
    deskripsi:
      "Cara Membuat mie goreng sederhana  a la Rumahan, Enak dan Lezat",
  },
  {
    id: 3,
    image: "sate.jpg",
    durasi: "10 menit",
    kesulitan: "mudah",
    deskripsi:
      "Cara Membuat sate ayam sederhana a la Rumahan, enak dan praktis",
  },
  {
    id: 4,
    image: "tumis.jpg",
    durasi: "40 menit",
    kesulitan: "sulit",
    deskripsi:
      "Cara Membuat tumis buncis tempe tahu sederhana a la Rumahan, Enak dan Mantap",
  },
];

function index() {
  return (
    <MainLayout>
      <main className="bg-slate-100">
        <section
          className="    hero bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="max-w-full mx-auto px-4 py-20 text-center bg-gradient-to-br from-gray-800 to-gray-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Pindang Bandeng Kuah Asam Manis
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Resep Sajian sehat untuk keluarga besar.
            </p>
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block"
            >
              Cek Resep
            </a>
          </div>
        </section>

        <section className="container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20">
          <h1 className="text-slate-700 text-3xl font-bold mb-8">
            Telusuri Berdasarkan
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img2} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">Dessert</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img3} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Masakan Hari raya
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img4} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Masakan Tradisional
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img5} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Menu Makan malam
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img6} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Menu Makan Siang
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img7} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">Resep Ayam</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img8} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Resep Daging
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img9} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Resep Sayuran
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img10} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">
                  Resep Seafood
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
              <img src={img11} alt="Placeholder" className="w-full" />
              <div className="p-4 ">
                <p className="text-gray-800 text-lg text-center">Sarapan</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20">
          <h1 className="text-slate-700 text-3xl font-bold mb-8">
            Unggah Resep
          </h1>

          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src={img12} alt="Placeholder" className="w-full h-auto" />
            </div>
            <div className="lg:w-1/2 p-6">
              <h2 className="text-xl font-bold">Menu kaya nutrisi ala kamu</h2>
              <p className="text-gray-600">Published by: Rizki Fachrizal</p>
              <h3 className="text-lg font-semibold mt-4">Ayam Kuah Kaldu</h3>
              <p className="text-gray-700 mt-2 truncate-height">
                Resep ayam kuah segar adalah menu andalan yang mudah dibuat
                untuk sahur bersama keluarga. Kuahnya yang segar dan hangat
                membuat saya dan keluarga bersemangat untuk santap sahur. Yuk,
                cobain resepnya!
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-6 text-center">
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 mr-4">
              Lihat Resep Lainnya
            </button>
            <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600">
              Unggah Resep Mu
            </button>
          </div>
        </section>

        <section className="container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20">
          <h1 className="text-slate-700 text-3xl font-bold mb-8">
            Resep Terbaru
          </h1>
          <div className="flex flex-col gap-8 mb-8 lg:flex-row justify-center">
            {datas.map((data, index) => {
              return (
                <Link key={index} to={`/detail/${data.id}`}>
                  <Card data={data} />
                </Link>
              );
            })}
          </div>
          <a
            href="#"
            target="_blank"
            className="bg-green-600 text-white w-8/12 h-14 text-2xl font-semibold rounded-lg hover:bg-green-800 duration-500 text-center leading-[56px]"
          >
            Lebih Banyak
          </a>
        </section>

        <section className="bg-white container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20">
          <h1 className="text-slate-700 text-3xl font-bold mb-8">
            Artikel Terbaru
          </h1>
          <div className="flex flex-col gap-8 mb-8 lg:flex-row">
            {datas.slice(1).map((data, index) => {
              return (
                <Link key={index} to={`/detail/${data.id}`}>
                  <Card data={data} />
                </Link>
              );
            })}
          </div>
          <a
            href="#"
            target="_blank"
            className="bg-green-600 text-white w-8/12 h-14 text-2xl font-semibold rounded-lg hover:bg-green-800 duration-500 text-center leading-[56px]"
          >
            Lebih Banyak
          </a>
        </section>

        <section className="relative my-20 h-[430px]">
          <h1 className="text-slate-700 text-3xl font-bold mb-8 text-center">
            Semua Produk
          </h1>
          <Slider />
        </section>

        <section className="container px-6 pt-10 pb-20 flex flex-row justify-center lg:px-20 mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 overflow-hidden">
              <img
                src={"/src/pages/home/images/subscribe.jpg"}
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="flex-1 p-8 bg-white border border-l-0 border-slate-300">
              <h2 className="text-sm sm:text-3xl font-bold mb-3">
                Dapatkan update terbaru resep Chefmate dengan mendaftar
                sekarang!
              </h2>
              <form className="flex flex-col md:flex-row gap-2">
                <input
                  className="flex-1 w-full md:flex-[2] border border-slate-400 rounded-xl py-2 px-3"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <input
                  type="submit"
                  value="Daftar"
                  className="bg-green-600 text-white flex-1 rounded-2xl py-2 font-bold text-xl hover:bg-green-700 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}

export default index;
