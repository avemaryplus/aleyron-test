<script>
	import wpIcon from "$lib/assets/images/whatsAap.svg";
	export let customClass = "";
</script>

<button
	class={`flex gap-2 p-3 border-[0.5px] rounded-lg border-[#838D9E] cursor-pointer ${customClass}`}
>
	<img src={wpIcon} alt="whatsApp" />
	<p class="font-[Onest-500] text-2">WhatsApp</p>
</button>
