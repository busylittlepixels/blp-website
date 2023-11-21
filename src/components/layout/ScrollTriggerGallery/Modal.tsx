'use client'
export const Modal = ({ data, closeModal, isTriggered }: any) => {
	// console.log(closeModal)
	return (
		<div className={`modal ${isTriggered ? 'active' : ''}`}>
			<div className="flex flex-col md:flex-row align-center">
				<img
					src={`/assets/images/heart.webp`}
					className={`w-full md:w-1/2 shadow-md`}
				/>
				<div className={`text-container max-md:pt-4 md:pl-4`}>
					<h2 className={`font-black text-3xl`}>{data?.title}</h2>
					<p className={`mt-4`}>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Ullam unde id dolor, illum maiores amet alias
						saepe sint a, optio expedita quam! Tempore officiis
						sequi magnam quia at voluptate, sapiente tenetur, ea rem
						natus repellat, sit aliquid! Atque modi doloribus dolore
						maiores velit, ut fugiat enim, aut dolores dolorem
						rerum.
					</p>
				</div>
			</div>
			{/* <button onClick={closeModal} className={`absolute top-0 right-0`}>Close Modal</button> */}
			<div
				className={`absolute top-0 right-0 cursor-pointer duration-150 ease-linear bg-black text-white h-[50px] w-[50px] ${
					isTriggered ? 'active' : ''
				}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					className="w-full h-full hover:stroke-red-600 ease-in-out duration-150"
					onClick={closeModal}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
		</div>
	)
}
