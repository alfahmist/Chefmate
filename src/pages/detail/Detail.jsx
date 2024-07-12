/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

import MainLayout from "../../layout/MainLayout";

// import data from "./data";

import Judul from "./components/Judul";
import Pembuka from "./components/Pembuka";
// import Favorite from "./components/Favorite";
import Bahan from "./components/Bahan";
import StepMasakan from "./components/StepMasakan";
import Cooksnap from "./components/Cooksnap";
import Komentar from "./components/Komentar";
import Reaksi from "./components/Reaksi";
import Aside from "./components/Aside";
import ProfilPembuat from "./components/Profil-Pembuat";

const Detail = () => {
  const { params } = useParams();

  const [data, setData] = useState(null);

  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/recipe/${params}`);
        setData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params]);

  if (!data) {
    return (
      <MainLayout>
        <div className="text-center p-4">loading</div>;
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <main className="lg:flex justify-center bg-[#f8f6f2]">
        <div className="lg:flex lg:px-4 lg:max-w-[1020px] justify-center">
          {/* start content */}
          <div id="content" className="lg:w-3/5 flex-shrink-0 flex-grow">
            <Judul data={data} />
            <Pembuka data={data} />

            {/* bagian canro */}
            {/* <Favorite /> */}

            <Bahan data={data} />

            <StepMasakan data={data} />
            <Reaksi recipeId={params} data={data} />
            <Cooksnap id_recipe={params} />
            <Komentar id_recipe={params} />

            <ProfilPembuat data={data} />
          </div>
          {/* end content */}

          {/* bagian mas canro */}
          <Aside />
        </div>
      </main>
    </MainLayout>
  );
};

export default Detail;
