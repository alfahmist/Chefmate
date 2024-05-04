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
