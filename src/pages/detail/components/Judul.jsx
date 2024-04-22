/* eslint-disable react/prop-types */
const Judul = ({ data }) => {
  return (
    <section id="judul">
      <div className="lg:container">
        <img
          className="max-h-72 w-full object-cover lg:my-4 lg:max-h-[482px] lg:w-[680px] lg:overflow-hidden lg:rounded-lg lg:shadow"
          src="img/ayam.jpg"
          alt="donat"
        />

        <div className="mb-2 p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h1 className="sm::text-xl text-lg font-semibold md:text-2xl lg:text-3xl">
            {data["nama-resep"]}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Judul;
