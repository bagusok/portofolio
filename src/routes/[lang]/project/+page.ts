import { getDictionary } from '$lib/i18n/load';
import type { Locale } from '$lib/i18n/types';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const supportedLocales = ['id'] as const;

const isLocale = (value: string): value is Locale => {
	return supportedLocales.includes(value as Locale);
};

export const load: PageLoad = ({ params, url }) => {
	const lang = params.lang?.toLowerCase() ?? '';
	if (!isLocale(lang)) {
		throw error(404, 'Locale not found');
	}

	const baseUrl = `${url.protocol}//${url.host}`;

	return {
		locale: lang,
		baseUrl,
		dictionary: getDictionary(lang)
	};
};
