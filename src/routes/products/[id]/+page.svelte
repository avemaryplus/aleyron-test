<script lang="ts">
	import Button from "../../../components/UI/button/Button.svelte";
	import ButtonWpp from "../../../components/UI/button/ButtonWpp.svelte";
	import type { PageData } from "./$types";
	export let data: PageData;
	let { productData } = data;
</script>

<div class="container mx-auto my-20">
	<div class="flex gap-10">
		<div
			class="card rounded-xl py-1 bg-[#F0F0F4] basis-1/2 flex items-center justify-center"
		>
			<img
				class="h-full"
				src={productData?.image}
				alt={productData?.pageTitle}
			/>
		</div>
		<div
			class="flex flex-col gap-5 basis-1/2 text-[#141317] font-[Onest-400] text-base leading-6"
		>
			<h2 class="text-[40px] font-[Onest-700] leading-[45px]">
				{productData?.pageTitle
					? productData?.pageTitle
					: productData?.catalogTitle}
			</h2>
			<div>
				{#each productData?.info || [] as infoLine}
					<p>{infoLine}</p>
				{/each}
			</div>
			<div class="flex gap-[42px]">
				<Button text="Оставить заявку" />
				<ButtonWpp customClass="basis-1/2 justify-center" />
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-5 font-[Onest-400] text-base leading-6 mt-10">
		<h3 class="text-[40px] font-[Onest-700] leading-[45px]">Описание</h3>
		{#each productData?.description || [] as descLine}
			<p>{@html descLine}</p>
		{/each}
	</div>
</div>

<style>
	.card {
		box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
	}
</style>
