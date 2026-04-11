export type Locale = 'id' | 'en';

export type EducationItem = {
	school: string;
	major: string;
	period: string;
	grade: string;
	highlights: string[];
};

export type ExperienceItem = {
	role: string;
	organization: string;
	period: string;
	details: string[];
};

export type ProjectItem = {
	name: string;
	description: string;
	stack: string;
	period: string;
	image: string;
	githubUrl?: string;
	liveUrl?: string;
};

export type Dictionary = {
	nav: {
		about: string;
		education: string;
		experience: string;
		projects: string;
		skills: string;
		contact: string;
		cta: string;
		viewProjects: string;
	};
	hero: {
		badge: string;
		title: string;
		highlight: string;
		subtitle: string;
		primaryCta: string;
		secondaryCta: string;
		note: string;
	};
	about: {
		title: string;
		description: string;
		points: string[];
	};
	education: {
		title: string;
		subtitle: string;
		items: EducationItem[];
	};
	experience: {
		title: string;
		subtitle: string;
		timeline: ExperienceItem[];
	};
	certifications: {
		title: string;
		subtitle: string;
		items: string[];
	};
	projects: {
		title: string;
		subtitle: string;
		githubCta: string;
		liveCta: string;
		items: ProjectItem[];
	};
	skills: {
		title: string;
		subtitle: string;
		webTitle: string;
		mobileTitle: string;
		webItems: string[];
		mobileItems: string[];
	};
	contact: {
		title: string;
		subtitle: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		messagePlaceholder: string;
		send: string;
		subject: string;
		bodyLabelName: string;
		bodyLabelEmail: string;
		bodyLabelMessage: string;
	};
	footer: {
		tagline: string;
		navigation: string;
		social: string;
		copyright: string;
	};
	seo: {
		home: {
			title: string;
			description: string;
			keywords: string;
			ogLocale: string;
		};
		project: {
			title: string;
			description: string;
			keywords: string;
			ogLocale: string;
		};
	};
	identity: {
		brand: string;
		name: string;
		role: string;
		email: string;
		phone: string;
		location: string;
		linkedin: string;
		github: string;
		instagram: string;
		facebook: string;
	};
};
