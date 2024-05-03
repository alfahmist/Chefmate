const Favorite = () => {
  return (
    <section id="favorite">
      <div className="container">
        <div className="mb-2 p-4 md:hidden lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <div className="w-full">
            <button className="mb-2 w-full rounded-lg border border-orange-700 bg-transparent px-10 py-2 font-semibold text-orange-700 shadow-md">
              Favorite
            </button>
            <br />
            <button className="h-15 mb-2 w-full rounded-lg border border-black bg-transparent px-10 py-2 font-semibold text-slate-950 shadow-md">
              Bagikan
            </button>
            <br />
            <button className="h-15 mb-2 w-full rounded-lg border border-black bg-transparent px-10 py-2 font-semibold text-slate-950 shadow-md">
              Print
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
