import type { PageLoad } from "./$types";
import catalogData from "$lib/mocks/catalogData";

export const load: PageLoad = ({ params }) => {
	const productData = catalogData.find((item) => item.id === +params.id);
	return {
		productData,
	};
};
