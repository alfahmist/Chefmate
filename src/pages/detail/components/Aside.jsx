const Aside = () => {
  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link telah disalin ke clipboard!");
    } catch (error) {
      console.error("Gagal menyalin link:", error);
      alert("Gagal menyalin link");
    }
  };

  return (
    <aside className="w-[292px] hidden lg:block ml-6">
      <div className="py-4 h-full">
        <div className="sticky pb-4 top-20">
          <div className="lg:container">
            <div className="mb-2 p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
              <button className="mb-2 w-full rounded-lg border border-orange-500 bg-transparent px-10 py-2 font-semibold text-orange-500 shadow-md">
                Favorite
              </button>
              <br />
              <button
                className="h-15 mb-2 w-full rounded-lg border border-black bg-transparent px-10 py-2 font-semibold text-slate-950 shadow-md"
                onClick={handleShare}
              >
                Bagikan
              </button>
              <br />
              <button
                className="h-15 mb-2 w-full rounded-lg border border-black bg-transparent px-10 py-2 font-semibold text-slate-950 shadow-md"
                onClick={handlePrint}
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
