import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer class='bg-orange-600 text-white min-h-48 max-sm:h-[500px]'>
			<div class='container mx-auto flex flex-col md:flex-row justify-center'>
				<div class='px-6 pt-10 pb-4 flex flex-row justify-around'>
					<div class='flex flex-col lg:flex-row lg:gap-24 md:mr-14'>
						<div class='flex flex-col gap-3'>
							<Link
								to={'/'}
								className='hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
							>
								Beranda
							</Link>

							<Link
								className='hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Resep
							</Link>

							<Link
								className='hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Artikel
							</Link>
						</div>
						<div class='flex flex-col gap-3 mt-2 sm:mt-0'>
							<Link
								className='hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Produk Artikel
							</Link>

							<Link
								className='hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Favorit Artikel
							</Link>
						</div>
					</div>
					<div class='flex flex-col lg:flex-row lg:gap-36 sm:mt-0'>
						<div class='flex flex-col gap-3'>
							<Link
								class='flex gap-1 hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Pemberitahuan Privasi
								<img src='./img/icon/arrow-out.svg' alt='' />
							</Link>

							<Link
								class='flex gap-1 hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Pemberitahuan Cookie
								<img src='./img/icon/arrow-out.svg' alt='' />
							</Link>
							<Link
								class='flex gap-1 hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Kontak Kami <img src='./img/icon/arrow-out.svg' alt='' />
							</Link>
						</div>
						<div class='flex flex-col gap-3 mt-2 sm:mt-0'>
							<Link
								class='flex gap-1 hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Informasi Legal
								<img src='./img/icon/arrow-out.svg' alt='' />
							</Link>

							<Link
								class='hover:underline decoration-2 border-white font-semibold max-sm:text-sm text-xl'
								to={'/'}
							>
								Sitemap
							</Link>
						</div>
					</div>
				</div>
				<div class='flex flex-col gap-3 items-center self-center py-4 px-4 border-y-2 max-md:w-9/12 md:border-0'>
					<h5 class='font-bold sm:mt-0'>Ikuti Kami</h5>
					<div class='flex flex-row gap-2'>
						<a href='https://www.instagram.com/' target='_blank'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='h-12 w-12 fill-white'
							>
								<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
							</svg>
						</a>
						<a href='https://www.youtube.com/' target='_blank'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='h-12 w-12 fill-white'
							>
								<path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z' />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
