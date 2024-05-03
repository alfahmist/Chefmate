/* eslint-disable react/prop-types */
// import { useParams } from "react-router-dom"
import MainLayout from "../../layout/MainLayout";

import data from "./data";

import Judul from "./components/Judul";
import Pembuka from "./components/Pembuka";
import Favorite from "./components/Favorite";
import Bahan from "./components/Bahan";
import StepMasakan from "./components/StepMasakan";
import Cooksnap from "./components/Cooksnap";
import Komentar from "./components/Komentar";
import Reaksi from "./components/Reaksi";
import Aside from "./components/Aside";
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
      <main className="lg:flex justify-center bg-[#f8f6f2]">
        <div className="lg:flex lg:px-4 lg:max-w-[1020px] justify-center">
          {/* start content */}
          <div id="content" className="lg:w-3/5 flex-shrink-0 flex-grow">
            <Judul data={dataDetail} />
            <Pembuka />

            {/* bagian canro */}
            <Favorite />

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
            <Cooksnap />
            {/* end section cooksnap */}

            {/* bagian mas canro */}
            {/* start section komentar */}
            <Komentar />
            {/* end section komentar */}

            <ProfilPembuat />
          </div>
          {/* end content */}

          {/* bagian mas canro */}
          <Aside className="w-[292px] hidden lg:block ml-6" />
        </div>
      </main>
    </MainLayout>
  );
};

export default Detail;
