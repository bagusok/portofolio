import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

const supported = ['id', 'en'] as const;
type Locale = (typeof supported)[number];

const isLocale = (value: string): value is Locale => {
	return supported.includes(value as Locale);
};

export const load: LayoutLoad = ({ params, url }) => {
	const lang = params.lang?.toLowerCase() ?? '';
	if (!isLocale(lang)) {
		const pathname = url.pathname;
		const suffix = pathname.startsWith('/') ? pathname : `/${pathname}`;
		const fallback = `/en${suffix.replace(/^\/[^/]+/, '')}`;
		throw redirect(307, fallback);
	}

	return {
		lang
	};
};
