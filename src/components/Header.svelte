<script>
	import searchIcon from "$lib/assets/images/search.svg";
	import wpIcon from "$lib/assets/images/whatsAap.svg";
	import mailIcon from "$lib/assets/images/Mail.svg";
	import logo from "$lib/assets/images/logo.svg";
</script>

<div class="header-wrapper">
	<header class="container mx-auto flex gap-5 py-4 items-center">
		<a href="/"><img src={logo} alt="logo" /></a>

		<div class="relative flex-1">
			<input
				class="bg-[#f0f0f4] h-12 rounded-lg px-3 py-5 w-full"
				placeholder="Поиск"
			/>
			<img
				class="absolute top-[50%] right-5 translate-y-[-50%] cursor-pointer"
				src={searchIcon}
				alt="search"
			/>
		</div>
		<button
			class="flex gap-2 p-3 border-[0.5px] rounded-lg border-[#838D9E] cursor-pointer"
		>
			<img src={wpIcon} alt="whatsApp" />
			<p class="font-[Onest-500] text-2">WhatsApp</p>
		</button>

		<button class="flex gap-2">
			<img src={mailIcon} alt="mail" />
			<p class="font-[Onest-500] text-2">sales@aleyron.com</p>
		</button>
	</header>
</div>

<style>
	.header-wrapper {
		border-bottom: 1px solid #f0f0f4;
		box-shadow:
			0px 1px 3px 0px rgba(136, 141, 150, 0.05),
			0px 5px 5px 0px rgba(136, 141, 150, 0.04),
			0px 11px 7px 0px rgba(136, 141, 150, 0.03),
			1px 20px 8px 0px rgba(136, 141, 150, 0.01),
			1px 31px 9px 0px rgba(136, 141, 150, 0);
	}
	input::placeholder {
		font-family: "Onest-400";
		color: #838d9e;
		font-size: 16px;
		line-height: 24px;
	}
</style>
