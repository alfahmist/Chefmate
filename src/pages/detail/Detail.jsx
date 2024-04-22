/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom"
import MainLayout from "../../layout/MainLayout";

import data from "./data";

import Judul from "./components/Judul";
import Pembuka from "./components/Pembuka";
import Bahan from "./components/Bahan";
import StepMasakan from "./components/StepMasakan";
import Reaksi from "./components/Reaksi";
import ProfilPembuat from "./components/Profil-Pembuat";

const Detail = () => {
  // const { params } = useParams()
  const dataDetail = data[0];
  const detailCaraMembuat = dataDetail.detail["cara-membuat"];
  const bahanBaku = dataDetail["bahan-bahan"][0]["bahan-baku"];
  const bahanSaus = dataDetail["bahan-bahan"][1]["saus"];
  const bahanSambal = dataDetail["bahan-bahan"][2]["sambal"];

  return (
    <MainLayout>
      <main className="lg:flex justify-center bg-bgdetailbase">
        <div className="lg:flex lg:px-4 lg:max-w-[1020px] justify-center">
          {/* start content */}
          <div id="content" className="lg:w-3/5 flex-shrink-0 flex-grow">
            <Judul data={dataDetail} />
            <Pembuka />

            {/* bagian mas canro */}
            <section id="favorite"></section>

            <Bahan
              data={dataDetail}
              bahanBaku={bahanBaku}
              bahanSaus={bahanSaus}
              bahanSambal={bahanSambal}
            />

            <StepMasakan data={detailCaraMembuat} />
            <Reaksi />

            {/* bagian mas canro */}
            {/* start section cooksnap */}
            <section id="cooksnap"></section>
            {/* end section cooksnap */}

            {/* bagian mas canro */}
            {/* start section komentar */}
            <section id="Komentar"></section>
            {/* end section komentar */}

            <ProfilPembuat />
          </div>
          {/* end content */}

          {/* bagian mas canro */}
          <aside className="w-[292px] hidden lg:block ml-6"></aside>
        </div>
      </main>
    </MainLayout>
  );
};

export default Detail;
