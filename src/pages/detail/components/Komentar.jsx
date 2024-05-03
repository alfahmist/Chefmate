import commentpic from "../../../assets/icons/comment.svg";

const Komentar = () => {
  return (
    <section id="Komentar">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <div className="flex">
            <img
              className="mr-5 h-[30px] w-[30px]"
              src={commentpic}
              alt="logo"
            />
            <br />
            <h1 className="mb-4 text-lg font-semibold text-slate-700">
              Komentar
            </h1>
          </div>
          <form action="Tulis Komentar">
            <textarea
              className="px-4 py-2 w-full resize-none rounded-full border border-black focus:outline-none"
              name="Tulis Komentar"
              id="Komentar"
              cols="30"
              rows="1"
              placeholder="Beri Komentar"
            ></textarea>
            <button
              id="Komentar"
              className="mt-3 h-[30px] w-[50px] rounded bg-gray-800 hover:bg-gray-700 transition text-white"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Komentar;
