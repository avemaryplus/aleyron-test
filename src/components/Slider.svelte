<script>
	import backgroundImg from "$lib/assets/images/hero-bg.png";
	import backArrow from "$lib/assets/images/back-arrow.svg";
	import nextArrow from "$lib/assets/images/next-arrow.svg";
	import Button from "./UI/button/Button.svelte";
</script>

<div class="relative h-[450px] container mx-auto mt-10">
	<div
		class=" absolute top-0 w-[100%] h-[100%] bg-cover bg-center"
		style="background-image: url('{backgroundImg}')"
	></div>
	<div
		class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full pb-5"
	>
		<div class="mx-2 bg-white rounded-full w-12 h-12 relative overflow-hidden">
			<img
				src={backArrow}
				alt="Arrow"
				class="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
		<div class="mx-2 bg-white rounded-full w-12 h-12 relative overflow-hidden">
			<img
				src={nextArrow}
				alt="Arrow"
				class="object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
	</div>
	<div
		class="relative z-1 pt-20 pl-10 pb-10 font-[Onest-500] text-[#141317] text-base flex flex-col justify-between h-full items-start"
	>
		<div class="flex flex-col gap-3">
			<h1 class="font-[Onest-700] text-[40px]">Заказать печать для компании</h1>
			<p class="w-[428px]">
				Вы можете заказать у нас практически любой товар с доставкой прямо до
				двери
			</p>
		</div>
		<Button text="Оставить заявку" />
	</div>
</div>

<style>
</style>
