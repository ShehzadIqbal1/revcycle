import { error } from '@sveltejs/kit';
import { getServiceBySlug, servicePages } from '$lib/data/services';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => {
	return servicePages.map((service) => ({ slug: service.slug }));
};

export const load: PageLoad = ({ params }) => {
	const service = getServiceBySlug(params.slug);
	if (!service) {
		throw error(404, 'Service not found');
	}
	return { service };
};
