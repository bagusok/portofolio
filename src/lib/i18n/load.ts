import en from './en.json';
import id from './id.json';
import type { Dictionary, Locale } from './types';

const dictionaries: Record<Locale, Dictionary> = {
	en,
	id
};

export const getDictionary = (locale: Locale): Dictionary => {
	return dictionaries[locale];
};
