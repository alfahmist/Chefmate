import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import Card from './Card';
import { Slider } from './Slider';

const datas = [
	{
		id: 1,
		image: 'ayam.jpg',
		durasi: '1 Jam',
		kesulitan: 'sulit',
		deskripsi: 'Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah',
	},
	{
		id: 2,
		image: 'mie-goreng.jpg',
		durasi: '20 menit',
		kesulitan: 'sedang',
		deskripsi:
			'Cara Membuat mie goreng sederhana  a la Rumahan, Enak dan Lezat',
	},
	{
		id: 3,
		image: 'sate.jpg',
		durasi: '10 menit',
		kesulitan: 'mudah',
		deskripsi:
			'Cara Membuat sate ayam sederhana a la Rumahan, enak dan praktis',
	},
	{
		id: 4,
		image: 'tumis.jpg',
		durasi: '40 menit',
		kesulitan: 'sulit',
		deskripsi:
			'Cara Membuat tumis buncis tempe tahu sederhana a la Rumahan, Enak dan Mantap',
	},
];

function index() {
	return (
		<MainLayout>
			<main className='bg-slate-100'>
				<section
					className='hero bg-cover bg-center'
					// style='background-image: url(./Images/pindang/bandeng.jpg);'
				>
					<div class='max-w-full mx-auto px-4 py-20 text-center bg-gradient-to-br from-gray-800 to-gray-0'>
						<h1 class='text-4xl md:text-6xl font-bold text-white mb-4'>
							Pindang Bandeng Kuah Asam Manis
						</h1>
						<p class='text-lg md:text-xl text-white mb-8'>
							Resep Sajian sehat untuk keluarga besar.
						</p>
						<a
							href='#'
							class='bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full inline-block'
						>
							Cek Resep
						</a>
					</div>
				</section>

				<section class='container mx-auto w-4/5'>
					<h2 class='text-2xl font-semibold text-center mb-4'>
						Telusuri Berdasarkan
					</h2>
					<div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/Dessert.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>Dessert</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/Menu Hari raya.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>
									Masakan Hari raya
								</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/Masakan Tradisional.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>
									Masakan Tradisional
								</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/Makan Malam.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>
									Menu Makan malam
								</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/makan siang.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>
									Menu Makan Siang
								</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img src='./Images/ayam.jpg' alt='Placeholder' class='w-full' />
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>Resep Ayam</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img src='./Images/daging.jpg' alt='Placeholder' class='w-full' />
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>Resep Daging</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img src='./Images/sayur.jpg' alt='Placeholder' class='w-full' />
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>Resep Sayuran</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/seafood.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>Resep Seafood</p>
							</div>
						</div>
						<div class='bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center'>
							<img
								src='./Images/sarapan.jpg'
								alt='Placeholder'
								class='w-full'
							/>
							<div class='p-4 '>
								<p class='text-gray-800 text-lg text-center'>Sarapan</p>
							</div>
						</div>
					</div>
				</section>

				<section class='container mx-auto w-4/5'>
					<h2 class='text-2xl font-semibold text-center mb-4'>Unggah Resep</h2>

					<div class='max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row'>
						<div class='lg:w-1/2'>
							<img
								src='./Images/ayam kuah kaldu.jpg'
								alt='Placeholder'
								class='w-full h-auto'
							/>
						</div>
						<div class='lg:w-1/2 p-6'>
							<h2 class='text-xl font-bold'>Menu kaya nutrisi ala kamu</h2>
							<p class='text-gray-600'>Published by: Putri Habibie</p>
							<h3 class='text-lg font-semibold mt-4'>
								Nama resep: Ayam Kuah Kaldu
							</h3>
							<p class='text-gray-700 mt-2'>
								Deskripsi: Halo apakabar ayam kuah kaldu ini.
							</p>
						</div>
					</div>

					<div class='max-w-4xl mx-auto mt-6 text-center'>
						<button class='bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 mr-4'>
							Lihat Resep Lainnya
						</button>
						<button class='bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600'>
							Unggah Resep Mu
						</button>
					</div>
				</section>

				<section className='container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20'>
					<h1 className='text-slate-700 text-3xl font-bold mb-8'>
						Resep Terbaru
					</h1>
					<div className='flex flex-col gap-8 mb-8 lg:flex-row justify-center'>
						{datas.map((data, index) => {
							return (
								<Link key={index} to={`/detail/${data.id}`}>
									<Card data={data} />
								</Link>
							);
						})}
					</div>
					<a
						href='#'
						target='_blank'
						className='bg-green-600 text-white w-8/12 h-14 text-2xl font-semibold rounded-lg hover:bg-green-800 duration-500 text-center leading-[56px]'
					>
						Lebih Banyak
					</a>
				</section>

				<section className='container mx-auto px-6 pt-10 pb-4 flex flex-col items-center lg:px-20'>
					<h1 className='text-slate-700 text-3xl font-bold mb-8'>
						Artikel Terbaru
					</h1>
					<div className='flex flex-col gap-8 mb-8 lg:flex-row'>
						{datas.slice(1).map((data, index) => {
							return (
								<Link key={index} to={`/detail/${data.id}`}>
									<Card data={data} />
								</Link>
							);
						})}
					</div>
					<a
						href='#'
						target='_blank'
						className='bg-green-600 text-white w-8/12 h-14 text-2xl font-semibold rounded-lg hover:bg-green-800 duration-500 text-center leading-[56px]'
					>
						Lebih Banyak
					</a>
				</section>

				<section className='relative my-20 h-[430px]'>
					<h1 className='text-slate-700 text-3xl font-bold mb-8 text-center'>
						Semua Produk
					</h1>
					<Slider />
				</section>

				<section className='container px-6 pt-10 pb-20 flex flex-row justify-center lg:px-20 mx-auto'>
					<div className='flex flex-col md:flex-row'>
						<div className='flex-1 overflow-hidden'>
							<img
								src={'/src/pages/home/images/subscribe.jpg'}
								alt=''
								className='w-full h-full'
							/>
						</div>
						<div className='flex-1 p-8 bg-white border border-l-0 border-slate-300'>
							<h2 className='text-sm sm:text-3xl font-bold mb-3'>
								Dapatkan update terbaru resep Chefmate dengan mendaftar
								sekarang!
							</h2>
							<form className='flex flex-col md:flex-row gap-2'>
								<input
									className='flex-1 w-full md:flex-[2] border border-slate-400 rounded-xl py-2 px-3'
									type='text'
									name='email'
									id='email'
									placeholder='E-mail'
								/>
								<input
									type='submit'
									value='Daftar'
									className='bg-green-600 text-white flex-1 rounded-2xl py-2 font-bold text-xl hover:bg-green-700 cursor-pointer'
								/>
							</form>
						</div>
					</div>
				</section>
			</main>
		</MainLayout>
	);
}

export default index;
