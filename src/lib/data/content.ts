import type { Metric, RCMStep, Specialty, Testimonial } from '$lib/types/site';

export const metrics: Metric[] = [
	{
		label: 'Providers Trust Us',
		value: '300+',
		detail: 'Independent practitioners, specialty clinics, and regional health networks'
	},
	{
		label: 'Specialties Covered',
		value: '25+',
		detail: 'Customized clinical coding guidelines & dedicated billing specialists'
	},
	{
		label: 'Practices Optimized',
		value: '200+',
		detail: 'Streamlined clinical workflows, reduced days in A/R, and maximized revenue'
	},
	{
		label: 'First-Pass Claim Acceptance Rate',
		value: '98%',
		detail: 'Industry-leading scrub rates powered by AI rules and AAPC certified auditors'
	}
];

export const rcmSteps: RCMStep[] = [
	{
		stepNumber: 1,
		title: 'Eligibility & Data Verification',
		description:
			'Real-time automated insurance verification, co-pay checks, and prior-authorization scrubbing prior to the clinical encounter.'
	},
	{
		stepNumber: 2,
		title: 'Certified Medical Coding',
		description:
			'AAPC & AHIMA certified coders executing ICD-10, CPT, and HCPCS coding with stringent multi-layer specialty compliance checks.'
	},
	{
		stepNumber: 3,
		title: 'Clean Claims Submission & Enrollment',
		description:
			'Automated EDI 837 clearinghouse batching with electronic payer validation to guarantee near-zero transmission errors.'
	},
	{
		stepNumber: 4,
		title: 'Denial Management & Rapid Appeals',
		description:
			'Systematic root-cause denial analytics with aggressive 48-hour turnarounds for payer appeals and overturned revenue.'
	},
	{
		stepNumber: 5,
		title: 'Compliance Auditing & Scrubbing',
		description:
			'Comprehensive pre-submission chart audits ensuring HIPAA, OIG, and MAC compliance while preventing over-coding or under-coding.'
	},
	{
		stepNumber: 6,
		title: 'Transparent Reporting & Financial Analytics',
		description:
			'Executive dashboards, KPI tracking, real-time A/R aging reports, and customized monthly reconciliation conferences.'
	}
];

export const specialties: Specialty[] = [
	{
		id: 'laboratory-services',
		name: 'Laboratory Services',
		icon: 'FlaskConical',
		description:
			'High-throughput toxicology, molecular diagnostics, and clinical pathology billing.'
	},
	{
		id: 'urgent-care',
		name: 'Urgent Care',
		icon: 'Zap',
		description:
			'Fast-paced episodic coding, walk-in patient registration, and rapid reimbursement cycles.'
	},
	{
		id: 'behavioral-health',
		name: 'Behavioral Health',
		icon: 'Brain',
		description:
			'Specialized telehealth, psychiatric evaluations, substance abuse, and ABA billing protocols.'
	},
	{
		id: 'physical-therapy',
		name: 'Physical Therapy',
		icon: 'Activity',
		description:
			'Timed code optimization (8-minute rule), modular plans of care, and modifier compliance.'
	},
	{
		id: 'cardiology',
		name: 'Cardiology',
		icon: 'HeartPulse',
		description:
			'Invasive and non-invasive procedure coding, nuclear stress tests, and catheterization billing.'
	},
	{
		id: 'chiropractic',
		name: 'Chiropractic',
		icon: 'Bone',
		description:
			'Subluxation tracking, spinal manipulation CPTs, and pre-authorized care plan reimbursements.'
	},
	{
		id: 'dentistry',
		name: 'Dentistry',
		icon: 'Smile',
		description:
			'Cross-coding dental CDT with medical billing for sleep apnea, trauma, and oral surgery.'
	},
	{
		id: 'dme',
		name: 'DME',
		icon: 'Truck',
		description:
			'Strict CMN/DIF documentation, rental vs. purchase HCPCS, and Medicare DMEPOS compliance.'
	},
	{
		id: 'orthopedics',
		name: 'Orthopedics',
		icon: 'Crosshair',
		description:
			'Global surgical package management, multiple surgery fee reductions, and fracture care.'
	},
	{
		id: 'radiology',
		name: 'Radiology',
		icon: 'Scan',
		description:
			'Professional and technical component splits (26/TC modifiers) with high-volume PACS integration.'
	},
	{
		id: 'neurology',
		name: 'Neurology',
		icon: 'Network',
		description:
			'EMG/NCS nerve conduction studies, EEG monitoring, and chronic neurological disease management.'
	},
	{
		id: 'internal-medicine',
		name: 'Internal Medicine',
		icon: 'Stethoscope',
		description:
			'Chronic Care Management (CCM), Annual Wellness Visits (AWV), and complex multi-morbid E/M codes.'
	}
];

export const ehrPartners: string[] = [
	'Epic',
	'Cerner',
	'AthenaHealth',
	'Kareo',
	'eClinicalWorks',
	'Practice Fusion',
	'AdvancedMD'
];

export const testimonials: Testimonial[] = [
	{
		quote:
			'Partnering with RevCycle reduced our average days in A/R from 54 days down to 26 days within our first four months. Their specialty-trained coders know our cardiology workflow inside out.',
		author: 'Dr. Marcus Vance, MD, FACC',
		role: 'Managing Partner',
		practice: 'Metro Heart & Vascular Specialists',
		rating: 5
	},
	{
		quote:
			'The 98% first-pass clean claim rate is not just marketing hype—it translated directly into predictable monthly cash flow and eliminated 90% of our internal billing administrative headaches.',
		author: 'Sarah Jenkins, MHA',
		role: 'Chief Operating Officer',
		practice: 'Summit Urgent Care Network',
		rating: 5
	},
	{
		quote:
			'Their deep integration with our EHR and proactive denial management appeal process recovered over $380,000 in previously abandoned aged receivables.',
		author: 'Robert Sterling, CPA',
		role: 'Chief Financial Officer',
		practice: 'Alliance Orthopedic Institute',
		rating: 5
	}
];
