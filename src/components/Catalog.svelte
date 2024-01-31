<script lang="ts">
	import catalogData from "$lib/mocks/catalogData";
	import { goto } from "$app/navigation";

	function navigateToProductPage(productId: number) {
		goto(`/products/${productId}`);
	}

	function handleOrderClick(event: MouseEvent) {
		event.stopPropagation();
	}
</script>

<div class="container mx-auto my-10">
	<h2 class="font-[Onest-700] text-[40px] leading-10 mb-10">Каталог товаров</h2>
	<div class="flex justify-between gap-5 flex-wrap font-[Onest-500] text-base">
		{#each catalogData as item (item.id)}
			<button
				on:click={() => navigateToProductPage(item.id)}
				class="card w-[305px] cursor-pointer p-4 flex flex-col gap-4 items-center rounded-xl border border-[#F0F0F4]"
			>
				<img src={item.image} alt={item.catalogTitle} />
				<h2>{item.catalogTitle}</h2>
				<button
					on:click={handleOrderClick}
					class="card-button bg-[#F0F0F4] rounded-lg w-full p-3"
					>Заказать</button
				>
			</button>
		{/each}
	</div>
</div>

<style>
	.card {
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	}
	.card:hover,
	.card-button:hover {
		box-shadow: 0px 5px 5px 3px rgba(0, 0, 0, 0.25);
	}
</style>
