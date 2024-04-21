import MainLayout from '../../layout/MainLayout'

function index() {

  return (
    <MainLayout>
      <main className="bg-slate-100">
			<section
				className="container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20"
			>
				<h1 className="text-slate-700 text-3xl font-bold mb-8">Resep Terbaru</h1>
				<div className="flex flex-col gap-8 mb-8 lg:flex-row justify-center">
					<div className="relative">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="w-full overflow-hidden rounded-2xl">
							<img
								src="./img/makanan-resep.webp"
								alt="ayam geprek"
								className="cursor-pointer hover:scale-105 duration-500"
							/>
						</div>
						<div className="flex flex-row justify-start gap-x-2 my-4">
							<button
								className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="font-bold">1 Jam</span>
							</button>
							<button
								className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="font-bold">Sedang</span>
							</button>
						</div>
						<p
							className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
						</p>
					</div>
					<div className="relative">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="w-full overflow-hidden rounded-2xl">
							<img
								src="./img/makanan-resep.webp"
								alt="ayam geprek"
								className="cursor-pointer hover:scale-105 duration-500"
							/>
						</div>
						<div className="flex flex-row justify-start gap-x-2 my-4">
							<button
								className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="font-bold">1 Jam</span>
							</button>
							<button
								className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="font-bold">Sedang</span>
							</button>
						</div>
						<p
							className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
						</p>
					</div>
					<div className="relative f">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="w-full overflow-hidden rounded-2xl">
							<img
								src="./img/makanan-resep.webp"
								alt="ayam geprek"
								className="cursor-pointer hover:scale-105 duration-500"
							/>
						</div>
						<div className="flex flex-row justify-start gap-x-2 my-4">
							<button
								className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="font-bold">1 Jam</span>
							</button>
							<button
								className="border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="w-6 h-6"
								>
									<path
										fillRule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
										clipRule="evenodd"
									/>
								</svg>
								<span className="font-bold">Sedang</span>
							</button>
						</div>
						<p
							className="text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
						</p>
					</div>
				</div>
				<a
					href="#"
					target="_blank"
					className="bg-green-600 text-white w-8/12 h-14 text-2xl font-semibold rounded-lg hover:bg-green-800 duration-500 text-center leading-[56px]"
				>
					Lebih Banyak
				</a>
			</section>

			<section
				className="container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20"
			>
				<h1 className="text-slate-700 text-3xl font-bold mb-8">Artikel Terbaru</h1>
				<div className="flex flex-col gap-8 mb-8 lg:flex-row">
					<div className="relative lg:w-1/4">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="overflow-hidden rounded-2xl">
							<div
								className="w-full h-48 bg-article-1 bg-cover bg-no-repeat bg-center hover:scale-105 duration-300 cursor-pointer"
							></div>
						</div>
						<p
							className="text-slate-700 mt-2 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							17 Resep Masakan 10 Ribu yang Enak dan Mudah Dibuat
						</p>
					</div>
					<div className="relative lg:w-1/4">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="overflow-hidden rounded-2xl">
							<div
								className="w-full h-48 bg-article-2 bg-cover bg-no-repeat bg-center hover:scale-105 duration-300 cursor-pointer"
							></div>
						</div>
						<p
							className="text-slate-700 mt-2 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							14 Resep Makanan yang Cocok Untuk Tahun Baru, Enak dan Mudah
						</p>
					</div>
					<div className="relative lg:w-1/4">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="overflow-hidden rounded-2xl">
							<div
								className="w-full h-48 bg-article-3 bg-cover bg-no-repeat bg-center hover:scale-105 duration-300 cursor-pointer"
							></div>
						</div>

						<p
							className="text-slate-700 mt-2 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							11 Resep Ayam Goreng Tepung Rumahan, Renyah dan Lezat
						</p>
					</div>
					<div className="relative lg:w-1/4">
						<button
							className="w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-7 h-7 inline-block m-auto"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
								/>
							</svg>
						</button>
						<div className="overflow-hidden rounded-2xl">
							<div
								className="w-full h-48 bg-article-4 bg-cover bg-no-repeat bg-center hover:scale-105 duration-300 cursor-pointer"
							></div>
						</div>

						<p
							className="text-slate-700 mt-2 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer"
						>
							12 Resep Mie Goreng Spesial, Enak dan Mudah Dibuat
						</p>
					</div>
				</div>
				<a
					href="#"
					target="_blank"
					className="bg-green-600 text-white w-8/12 h-14 text-2xl font-semibold rounded-lg hover:bg-green-800 duration-500 text-center leading-[56px]"
				>
					Lebih Banyak
				</a>
			</section>

			<section className="relative my-20 h-[430px]">
				<h1 className="text-slate-700 text-3xl font-bold mb-8 text-center">
					Semua Produk
				</h1>
				<div className="swiper mySwiper relative">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/bango-kecap-manis.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Kemasan Isi Ulang 500ml
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 w-96 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/bango-hitam.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Bango Kecap Manis Hitam...
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/buavita-guava.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Buavita Guava
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/buavita-korean.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Buavita Korean Peach
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/jawara-bawang-goreng.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Jawara Cabai Tabur Bawang
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/royco-ayam-spesial.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Royco Kaldu Ayam Special
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/royco-kaldu-ayam.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Royco Kaldu Rasa Ayam
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/royco-kaldu-jamur.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Royco Kaldu Rasa Jamur
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/royco-kaldu-sapi.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Royco Kaldu Rasa Sapi
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/royco-saus-tiram.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Royco Saus Tiram
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/sariwangi-teh-asli.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									SariWangi Teh Asli
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
						<div className="swiper-slide">
							<div
								className="relative border rounded-lg bg-white border-slate-400 min-h-64 flex flex-col pt-40 max-h-72 text-center w-full"
							>
								<img
									src="./img/product/saus-sambal-jawara-extra-hot.png"
									alt="Bango Kecap Manis Hitam"
									className="absolute w-full top-[1%] bottom-56 left-0 right-0 m-auto"
								/>
								<p
									className="text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4"
								>
									Jawara Saus Sambal Extra
								</p>
								<a
									href="#"
									target="_blank"
									className="border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300"
								>
									Lihat Produk
								</a>
							</div>
						</div>
					</div>
					<div className="swiper-button-next"></div>
					<div className="swiper-button-prev"></div>
					<div className="swiper-pagination"></div>
				</div>
			</section>

			<section
				className="container mx-auto px-6 pt-10 pb-20 flex flex-row items-center lg:px-20"
			>
				<div className="flex flex-col lg:flex-row">
					<div className="flex-1 overflow-hidden">
						<img src="./img/subscribe.jpg" alt="" className="w-full h-full" />
					</div>
					<div className="flex-1 p-8 bg-white border border-l-0 border-slate-300">
						<h2 className="text-sm sm:text-3xl font-bold mb-3">
							Dapatkan update terbaru resep MAHI dengan mendaftar sekarang!
						</h2>
						<form className="flex flex-col md:flex-row gap-2">
							<input
								className="flex-1 w-full md:flex-[2] border border-slate-400 rounded-xl py-2 px-3"
								type="text"
								name="email"
								id="email"
								placeholder="E-mail"
							/>
							<input
								type="submit"
								value="Daftar"
								className="bg-green-600 text-white flex-1 rounded-2xl py-2 font-bold text-xl hover:bg-green-700 cursor-pointer"
							/>
						</form>
					</div>
				</div>
			</section>
		</main>
    </MainLayout>
  )
}

export default index

