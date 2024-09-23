import { inter } from "../font";

export default function Home() {
	return (
		<main className="w-full grid grid-col-1 gap-4 p-2 md:p-4 mx-auto h-auto">
			<div className="col-span-1 md:col-span-2">
				<img src="/images/image-web-3-mobile.jpg" className="w-full md:hidden" alt="web3-mobile" />
				<img src="/images/image-web-3-desktop.jpg" className="hidden w-full md:block bg-cover w-[600px]" alt="web3-desktop" />
			</div>

			<div className="h-fit md:row-start-2">
				<h1 className={`${inter.className} antialiased text-black text-8xl font-extrabold md:text-5xl`}>The Bright Future of WEB 3.0?</h1>
			</div>
			<div className="h-fit md:row-start-2">
				<div className={`${inter.className} text-gray-800 text-3xl leading-10 mr-12 font-normal md:text-xs`}>
					We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
					But is it really fulfilling its promise?
				</div>
				<button
					className={`${inter.className} antialiased text-gray-800 font-extrabold text-xl text-black bg-[color:hsl(5,85%,63%)] px-10 py-4 mt-4 hover:text-white hover:bg-black md:text-xs`}
				>
					R E A D  M O R E
				</button>
			</div>
			<aside className="grid gap-4 md:col-start-3 row-start-0 row-span-2 bg-black text-white px-8 py-10 md:px-4 py-2">
				<h1 className={`${inter.className} text-[color:hsl(35,77%,62%)] text-6xl font-extrabold py-4 md:text-3xl md:py-0`}>New</h1>
				<div className="flex flex-col gap-4 pt-8 md:block md:pt-0">
					<label className={`${inter.className} text-white text-5xl font-extrabold md:text-xl`}>
						Hydrogen vs Electric Cars
					</label>
					<p className={`${inter.className} text-gray-400 text-3xl font-normal leading-8 pt-2 leading-5 md:text-xs`}>
						Will hydrogen fueled cars ever catch up to EVs?
					</p>
					<div className="border border-gray-400 my-8 md:my-0 md:mt-4"></div>
				</div>
				<div className="flex flex-col gap-4 md:block ">
					<label className={`${inter.className} text-white text-5xl font-extrabold md:text-xl`}>
						The Downsides of AI Artistry
					</label>
					<p className={`${inter.className} text-gray-400 text-3xl font-normal leading-8 pt-2 md:text-xs leading-4 `}>
						What are the possible adverse effects of on-demand AI image generation?
					</p>
					<div className="border border-gray-400 my-8 md:my-0 md:mt-4"></div>
				</div>
				<div className="flex flex-col gap-4 md:block">
					<label className={`${inter.className} text-white text-5xl font-extrabold md:text-xl`}>
						Is VC Funding Drying Up?
					</label>
					<p className={`${inter.className} text-gray-400 text-3xl font-normal leading-8 pt-2 leading-4 leading-5 md:text-xs`}>
						Private funding by VC firms is down 50% YOY. We take a look at what that means.
					</p>
				</div>
			</aside>
		</main>
	);
}
