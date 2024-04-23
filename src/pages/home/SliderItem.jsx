const SliderItem = ({ text, image }) => {
	return (
		<>
			<div className='relative border rounded-lg bg-white border-slate-400 flex flex-col pt-40 max-h-72 text-center w-full min-h-64'>
				<img
					src={'/src/pages/home/images/' + image}
					alt={text}
					className='absolute top-[1%] bottom-56 left-0 right-0 m-auto h-[200px]'
				/>
				<p className='text-xl font-bold text-slate-700 mb-3 h-20 px-2 lg:px-4'>
					{text}
				</p>
				<a
					href='#'
					target='_blank'
					className='border border-green-600 text-green-600 rounded-xl bg-white mx-4 mb-4 px-2 py-2 font-bold text-sm lg:text-lg hover:bg-green-600 hover:text-white duration-300'
				>
					Lihat Produk
				</a>
			</div>
		</>
	);
};

export default SliderItem;
