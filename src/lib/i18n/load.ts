import baguspayWeb from '$lib/assets/baguspay-web.avif';
import dreamtsatsuLanding from '$lib/assets/dreamtsatsu-landing.png';
import laskarayaWeb from '$lib/assets/laskaraya-web.avif';
import miramineApp from '$lib/assets/miramine-app.avif';
import polinemart from '$lib/assets/polinemart.png';
import sgeWeb from '$lib/assets/sge.png';
import en from './en.json';
import id from './id.json';
import type { Dictionary, Locale } from './types';

const dictionaries = {
	en,
	id
};

const projectImageMap: Record<string, string> = {
	'baguspay-web.avif': baguspayWeb,
	'miramine-app.avif': miramineApp,
	'laskaraya-web.avif': laskarayaWeb,
	'sge.png': sgeWeb,
	'polinemart.png': polinemart,
	'dreamtsatsu-landing.png': dreamtsatsuLanding
};

export const getDictionary = (locale: Locale): Dictionary => {
	const dictionary = dictionaries[locale];

	return {
		...dictionary,
		projects: {
			...dictionary.projects,
			items: dictionary.projects.items.map((item) => ({
				...item,
				image: projectImageMap[item.image] ?? item.image
			}))
		}
	} as Dictionary;
};
