export interface Specialty {
	id: string;
	name: string;
	icon: string;
	description: string;
}

export interface RCMStep {
	stepNumber: number;
	title: string;
	description: string;
}

export interface Metric {
	label: string;
	value: string;
	detail: string;
}

export interface Testimonial {
	quote: string;
	author: string;
	role: string;
	practice: string;
	rating: number;
}

export interface ServiceNavItem {
	name: string;
	slug: string;
	href: string;
	description: string;
}

export interface ServiceProcessStep {
	title: string;
	description: string;
}

export interface ServicePageContent {
	slug: string;
	name: string;
	eyebrow: string;
	headline: string;
	metaTitle: string;
	metaDescription: string;
	intro: string[];
	processHeading: string;
	process: ServiceProcessStep[];
	extraHeading?: string;
	extraIntro?: string;
	extraItems?: ServiceProcessStep[];
	whyHeading: string;
	whyIntro: string;
	whyItems: ServiceProcessStep[];
	quote: string;
}
