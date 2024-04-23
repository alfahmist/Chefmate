const Card = ({ image }) => {
	return (
		<>
			<div className='relative'>
				<button className='w-10 h-10 bg-orange-500 rounded-full flex absolute right-4 top-4 text-slate-50 cursor-pointer duration-500 hover:bg-orange-700 hover:text-slate-200 z-10'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-7 h-7 inline-block m-auto'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
						/>
					</svg>
				</button>
				<div className='w-full overflow-hidden rounded-2xl h-64'>
					<img
						src={image}
						alt='ayam geprek'
						className='cursor-pointer hover:scale-105 duration-500 w-full '
					/>
				</div>
				<div className='flex flex-row justify-start gap-x-2 my-4'>
					<button className='border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path
								fillRule='evenodd'
								d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='font-bold'>1 Jam</span>
					</button>
					<button className='border-2 border-orange-500 text-orange-500 rounded-xl flex p-1 hover:text-white hover:bg-orange-500 duration-500 cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='w-6 h-6'
						>
							<path
								fillRule='evenodd'
								d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z'
								clipRule='evenodd'
							/>
						</svg>
						<span className='font-bold'>Sedang</span>
					</button>
				</div>
				<p className='text-slate-700 text-2xl font-bold hover:text-green-600 duration-500 cursor-pointer'>
					Cara Membuat Ayam Geprek a la Rumahan, Pedas dan Renyah
				</p>
			</div>
		</>
	);
};

export default Card;
