/* eslint-disable react/prop-types */
const StepMasakan = ({ data }) => {
  return (
    <section id="step">
      <div className="lg:container">
        <div className="mb-2 flex flex-col p-4 lg:mb-4 lg:rounded-lg lg:shadow bg-white">
          <h2 className="mb-4 text-xl font-semibold text-slate-700 sm:text-2xl">
            Cara Membuat
          </h2>

          <div>
            <ol>
              {data.map((item, index) => (
                <li className="mb-4 flex" key={index}>
                  <div className="mr-2 w-6">
                    <div className="h-6 w-6 rounded-full bg-slate-700 text-center font-semibold text-white">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <p className="mb-2">{item.judul}</p>
                    </div>
                    <div className="scroll-bar-hideen -mx-4 mb-2 overflow-auto px-4">
                      <a href="#">
                        <img
                          className="h-[128px] w-[160px] rounded-lg object-cover"
                          src="img/stepbystep/1.webp"
                          alt="1"
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepMasakan;
