const Reaksi = () => {
  return (
    <section id="reaksi">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 text-slate-700 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <div className="flex items-center gap-2">
            <svg
              className="fill-current"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g data-name="Layer 2">
                <g data-name="heart">
                  <rect width="24" height="24" opacity="0" />
                  <path d="M12 21a1 1 0 0 1-.71-.29l-7.77-7.78a5.26 5.26 0 0 1 0-7.4 5.24 5.24 0 0 1 7.4 0L12 6.61l1.08-1.08a5.24 5.24 0 0 1 7.4 0 5.26 5.26 0 0 1 0 7.4l-7.77 7.78A1 1 0 0 1 12 21zM7.22 6a3.2 3.2 0 0 0-2.28.94 3.24 3.24 0 0 0 0 4.57L12 18.58l7.06-7.07a3.24 3.24 0 0 0 0-4.57 3.32 3.32 0 0 0-4.56 0l-1.79 1.8a1 1 0 0 1-1.42 0L9.5 6.94A3.2 3.2 0 0 0 7.22 6z" />
                </g>
              </g>
            </svg>
            <span className="text-lg font-semibold">Reaksi</span>
          </div>
          {/* <!-- reaction --> */}
          <div>
            <div className="mb-1 text-sm font-normal normal-case text-slate-600">
              <a href="#">
                Canro Sigalingging dan pengguna lainnya memberikan reaksi
              </a>
            </div>
            <ul>
              <button className="mr-2 flex items-center rounded-full bg-slate-300 px-2 py-1 text-sm hover:bg-slate-400 focus:outline-none">
                <span className="btn__icon">😋</span>
                <span>5</span>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reaksi;
