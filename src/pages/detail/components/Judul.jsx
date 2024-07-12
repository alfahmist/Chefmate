/* eslint-disable react/prop-types */
const Judul = ({ data }) => {
  console.log(data, " data");
  return (
    <section id="judul">
      <div className="lg:container">
        <img
          className="max-h-72 w-full object-cover lg:my-4 lg:max-h-[482px] lg:w-[680px] lg:overflow-hidden lg:rounded-lg lg:shadow"
          src={`http://localhost:3000${data.foto_recipe_url}`}
          alt={data.foto_recipe}
        />

        <div className="mb-2 p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h1 className="sm::text-xl text-lg font-semibold md:text-2xl lg:text-3xl">
            {data.judul}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Judul;
