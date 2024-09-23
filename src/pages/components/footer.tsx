import Card from "./card";

export default function Footer() {
	return (
		<footer className="w-full grid grid-cols-1 gap-2 mx-auto md:grid-cols-3">
			<Card
				imageSrc={"/images/image-retro-pcs.jpg"}
				num="01"
				title="Reviving Retro PCs"
				desc="What happens when old PCs are given modern upgrades?"
			/>
			<Card
				imageSrc={"/images/image-top-laptops.jpg"}
				num="02"
				title="Top 10 Laptops of 2022"
				desc="Our best picks for various needs and budgets."
			/>
			<Card
				imageSrc={"/images/image-gaming-growth.jpg"}
				num="03"
				title="The Growth of Gaming"
				desc="How the pandemic has sparked fresh opportunities."
			/>
		</footer>
	)
}