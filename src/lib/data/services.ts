import type { ServiceNavItem, ServicePageContent, ServiceProcessStep } from '$lib/types/site';

export const serviceNav: ServiceNavItem[] = [
	{
		name: 'Revenue Cycle Management (RCM)',
		slug: 'revenue-cycle-management',
		href: '/services/revenue-cycle-management',
		description: 'End-to-end eligibility, coding, claims, denials, and collections'
	},
	{
		name: 'Credentialing & Enrollment',
		slug: 'credentialing-and-enrollment',
		href: '/services/credentialing-and-enrollment',
		description: 'Payer contracting, CAQH maintenance, and network participation'
	},
	{
		name: 'Compliance and Auditing',
		slug: 'compliance-and-auditing',
		href: '/services/compliance-and-auditing',
		description: 'HIPAA, OIG, and payer-rule audits before claims leave the practice'
	},
	{
		name: 'Reporting and Analytics',
		slug: 'reporting-and-analytics',
		href: '/services/reporting-and-analytics',
		description: 'Clear financial dashboards, denial trends, and A/R visibility'
	},
	{
		name: 'Denials Management',
		slug: 'denial-management',
		href: '/services/denial-management',
		description: 'Root-cause investigation, appeals, and prevention checklists'
	},
	{
		name: 'Medical Coding',
		slug: 'medical-coding',
		href: '/services/medical-coding',
		description: 'Certified ICD-10, CPT, and HCPCS coding across specialties'
	}
];

const whyChooseShared: ServiceProcessStep[] = [
	{
		title: 'Accuracy & Compliance',
		description:
			'Every claim is reviewed against payer edits, documentation rules, and federal requirements before it is submitted.'
	},
	{
		title: 'Transparency',
		description:
			'Practices receive readable reports, denial context, and open communication so leadership always knows where cash stands.'
	},
	{
		title: 'Technology-Driven Efficiency',
		description:
			'Secure systems and EHR connections reduce duplicate data entry and shorten turnaround from encounter to payment.'
	},
	{
		title: 'Dedicated Account Managers',
		description:
			'A named specialist learns your specialty, payer mix, and workflow instead of rotating tickets across a generic queue.'
	},
	{
		title: 'Proven Results',
		description:
			'Clients typically see cleaner first-pass claims, fewer write-offs, and faster reimbursement across multiple specialties.'
	}
];

export const servicePages: ServicePageContent[] = [
	{
		slug: 'revenue-cycle-management',
		name: 'Revenue Cycle Management (RCM)',
		eyebrow: 'Medical billing · End-to-end RCM',
		headline: 'A complete revenue cycle that protects cash from registration to deposit',
		metaTitle: 'Revenue Cycle Management (RCM) Services | RevCycle Medical Billing',
		metaDescription:
			'RevCycle delivers end-to-end medical billing and revenue cycle management: eligibility, certified coding, clean claims, denials, compliance, and financial analytics for U.S. practices.',
		intro: [
			'Revenue cycle management is the operating system of a practice’s cash flow. When eligibility, coding, claims, follow-up, and reporting work as one sequence, clinicians can focus on care while leadership sees predictable collections.',
			'RevCycle, operated by Beeline Medical LLC, runs a six-stage clinical billing engine designed for specialty practices. We connect to your existing EHR, apply certified coding and claim-scrubbing rules, and keep payers moving so underpayments and stale A/R do not silently drain revenue.',
			'Whether you need a full outsourced billing department or a tighter engine around coding and denials, the goal is the same: clean claims on the first pass, shorter days in A/R, and a transparent view of financial performance.'
		],
		processHeading: 'The six-step RevCycle RCM engine',
		process: [
			{
				title: 'Eligibility & data verification',
				description:
					'Coverage, copay, and prior-authorization status are confirmed before the visit so front-desk surprises and downstream rejections drop.'
			},
			{
				title: 'Certified medical coding',
				description:
					'AAPC and AHIMA trained coders apply ICD-10, CPT, and HCPCS with specialty-specific documentation checks.'
			},
			{
				title: 'Clean claims submission & enrollment',
				description:
					'EDI 837 batches are scrubbed against payer edits. Provider enrollment gaps that would otherwise stall payment are identified early.'
			},
			{
				title: 'Denial management & rapid appeals',
				description:
					'Rejected and denied claims are categorized by root cause, reworked, and resubmitted with documented follow-up.'
			},
			{
				title: 'Compliance auditing & scrubbing',
				description:
					'Internal reviews catch HIPAA, OIG, and payer-policy issues before they become recoupments or audit exposure.'
			},
			{
				title: 'Transparent reporting & analytics',
				description:
					'Leadership receives claim, denial, and reimbursement views that support staffing, contracting, and growth decisions.'
			}
		],
		whyHeading: 'Why practices choose RevCycle for RCM',
		whyIntro:
			'Beeline Medical LLC built RevCycle for practices that need hospital-grade billing discipline without disrupting the clinical day.',
		whyItems: whyChooseShared,
		quote:
			'We do not simply push claims. We stabilize the entire revenue path so specialty practices can plan on cash, not chase it.'
	},
	{
		slug: 'credentialing-and-enrollment',
		name: 'Credentialing & Enrollment',
		eyebrow: 'Medical billing · Payer enrollment',
		headline: 'Secure and keep the payer contracts that make reimbursement possible',
		metaTitle: 'Provider Credentialing & Payer Enrollment | RevCycle Medical Billing',
		metaDescription:
			'RevCycle handles medical billing credentialing and enrollment: document intake, CAQH accuracy, insurer prioritization, verification, recertification, and contract maintenance.',
		intro: [
			'Network participation is one of the first financial decisions that can make or break a practice. Without current payer contracts and clean enrollment files, even perfectly coded claims sit unpaid.',
			'Credentialing and ongoing contract maintenance are not clerical afterthoughts. They are core investments. RevCycle, through Beeline Medical LLC, acts as a long-term enrollment partner—building the file, keeping it accurate, and aligning payer mix with how you want to practice.',
			'Provider enrollment in the United States is slower and more fragmented than most groups expect. Insurers apply different portals, attestations, and revalidation calendars, and digital workflows have added steps rather than removed them. Unassisted credentialing often becomes a bottleneck that freezes the rest of the revenue cycle.',
			'Our specialists assemble, stabilize, and maintain the contract mix you need. If a network no longer serves the practice, we can also map a clean exit. Credentialing is not a task to improvise between clinic sessions.'
		],
		processHeading: 'How we enroll and keep you in network',
		process: [
			{
				title: 'Identify required documents',
				description:
					'We inventory licenses, malpractice certificates, W-9s, board credentials, and payer-specific packets so nothing stalls in a “pending information” queue.'
			},
			{
				title: 'Check for accurate information',
				description:
					'Names, NPIs, taxonomy, service locations, and CAQH profiles are reconciled so mismatches do not trigger enrollment rejections.'
			},
			{
				title: 'Prioritize insurers',
				description:
					'Enrollment is sequenced around your highest-volume payers first, so cash-critical panels go live before lower-yield contracts.'
			},
			{
				title: 'Wait for verification—with tracking',
				description:
					'Payer review windows are monitored. We follow status, answer deficiencies, and keep leadership informed instead of hoping a portal updates itself.'
			},
			{
				title: 'Recertification',
				description:
					'Revalidation dates, malpractice renewals, and roster updates are calendared so participation does not lapse after the initial approval.'
			},
			{
				title: 'Following up',
				description:
					'Persistent payer follow-up closes loops on delayed panels, missing effective dates, and demographic changes after a move or new provider join.'
			}
		],
		extraHeading: 'Why enrollment cannot sit on the sidelines',
		extraIntro:
			'Gaining and keeping payer contracts is widely treated as a headache because it is time-consuming and easy to get wrong. When it is incomplete, it blocks the entire reimbursement stream. Enrollment complexity has grown with multi-state networks and online credentialing systems. Practices need specialists who live in that process.',
		extraItems: [
			{
				title: 'Aligned with business objectives',
				description:
					'We match enrollment work to the panels, locations, and specialties that actually drive your collections—not a generic checklist.'
			},
			{
				title: 'Timely, efficient execution',
				description:
					'Files move with defined owners and status reporting so credentialing does not stall behind clinical operations.'
			},
			{
				title: 'Long-term contract maintenance',
				description:
					'Network status is maintained for as long as it benefits the practice, including adding locations, providers, and group NPIs.'
			}
		],
		whyHeading: 'Why choose Beeline Medical LLC for credentialing',
		whyIntro:
			'Enrollment expertise is how practices stay reimbursable. Contact RevCycle to get on track—and stay on track—with payer participation.',
		whyItems: whyChooseShared,
		quote:
			'You should not have to navigate provider credentialing and contracting alone. We keep network participation current so claims can actually pay.'
	},
	{
		slug: 'compliance-and-auditing',
		name: 'Compliance and Auditing',
		eyebrow: 'Medical billing · Compliance',
		headline: 'Catch billing risk early with structured audits, not after a payer take-back',
		metaTitle: 'Medical Billing Compliance and Auditing | RevCycle HIPAA & OIG Reviews',
		metaDescription:
			'RevCycle medical billing compliance and auditing reviews claims against HIPAA, OIG, and payer rules. Internal audits, coding verification, risk reporting, and staff training.',
		intro: [
			'Billing activity has to stand up to healthcare law, payer policy, and documentation standards. RevCycle runs regular internal audits so claims align with HIPAA, OIG guidance, and insurer-specific rules before money is at risk.',
			'A structured compliance program finds errors while they are still inexpensive to fix. Accuracy, transparency, and accountability are built into the workflow rather than added after a denial or recoupment letter arrives.',
			'Beeline Medical LLC owns the compliance workstream: reviews, audit reports, corrective action, and ongoing monitoring. Our target is to complete reviews and deliver audit findings within two weeks so leadership can act while the issue is still contained.'
		],
		processHeading: 'Our compliance and auditing structure',
		process: [
			{
				title: 'Comprehensive documentation review',
				description:
					'Charts and encounter notes are checked for medical necessity language, signatures, and elements required to support the billed service.'
			},
			{
				title: 'Detailed coding and billing verification',
				description:
					'ICD-10, CPT, modifiers, and units are tested against documentation to reduce both undercoding leakage and overcoding exposure.'
			},
			{
				title: 'Thorough internal audits',
				description:
					'Scheduled and focused audits sample claims across providers and payers so patterns—not just one-off mistakes—are visible.'
			},
			{
				title: 'Risk detection and prevention',
				description:
					'Irregularities are classified, assigned, and corrected before they scale into refunds, civil monetary exposure, or payer audits.'
			},
			{
				title: 'Accurate compliance reporting',
				description:
					'Findings are written in plain language with recommended fixes, owners, and dates so the practice can demonstrate due diligence.'
			},
			{
				title: 'Continuous monitoring and evaluation',
				description:
					'Controls stay active after the report. Repeat defects are tracked until the process actually changes.'
			},
			{
				title: 'Staff training on updated regulations',
				description:
					'Coding, billing, and front-office teams receive targeted refreshers when payer rules or federal guidance change.'
			}
		],
		whyHeading: 'Why choose us for compliance-ready billing',
		whyIntro:
			'Practices that want cleaner approvals and defensible reimbursements need more than claim submission. They need a team, tooling, and a two-week audit cadence that keeps operations running without hidden errors. Dedicated support is available when questions arise. Protected health information is handled with layered safeguards. Coverage spans the billing process—not a single checkpoint.',
		whyItems: whyChooseShared,
		quote:
			'We do not just process claims — we build long-term financial stability for healthcare practices, with compliance as a daily discipline.'
	},
	{
		slug: 'reporting-and-analytics',
		name: 'Reporting and Analytics',
		eyebrow: 'Medical billing · Financial insight',
		headline: 'Turn claim data into decisions your practice can actually use',
		metaTitle: 'Medical Billing Reporting and Analytics | RevCycle RCM Dashboards',
		metaDescription:
			'RevCycle reporting and analytics give practices clear views of approvals, denials, reimbursements, and balances—custom financial reports, trend analysis, and growth insights.',
		intro: [
			'Reliable data is how a successful revenue cycle is managed. Reporting and analytics from RevCycle translate operational billing work into a readable picture of financial performance.',
			'We track approvals, denials, reimbursements, and outstanding balances so leadership can see the health of collections in one place. Reports are tailored to the questions your administrators actually ask, with timely insight for staffing, contracting, and service-line planning.',
			'Numbers alone are not the product. Our analysts highlight patterns, bottlenecks, and leakage so the practice can act. Reports are reviewed for accuracy before they reach you. Then we sit with your team to interpret findings and recommend the next operational change.'
		],
		processHeading: 'Analytics that support growth',
		process: [
			{
				title: 'Customized financial reports',
				description:
					'Dashboards and exports are built around your specialties, locations, and payer mix rather than a one-size template.'
			},
			{
				title: 'Detailed claim and denial analysis',
				description:
					'We break down rejection reasons, payer behavior, and provider-level trends so worklists target the highest-dollar issues.'
			},
			{
				title: 'Revenue performance tracking',
				description:
					'Collections, adjustments, and net yield are monitored so month-end surprises become visible earlier in the cycle.'
			},
			{
				title: 'Monthly and quarterly trend reports',
				description:
					'Leadership receives a cadence of summaries that show direction—not just a snapshot of yesterday’s batched claims.'
			},
			{
				title: 'Data-driven decision support',
				description:
					'Analysts help translate findings into actions: coding education, eligibility process changes, or payer follow-up priorities.'
			},
			{
				title: 'Performance benchmarking',
				description:
					'First-pass rates, days in A/R, and denial mix can be compared against internal history and specialty norms.'
			},
			{
				title: 'Insightful analytics for growth',
				description:
					'When you add providers or service lines, reporting expands with you so new volume does not hide new leakage.'
			}
		],
		whyHeading: 'Why practices trust RevCycle reporting',
		whyIntro:
			'If the objective is cleaner claim approvals and higher reimbursements, you need trusted figures and a team that will explain them. Support is prompt. Data protection is treated as a requirement, not a slogan. Service quality is measured against agreed turnaround times. Contact RevCycle to put revenue cycle performance on a clearer map.',
		whyItems: whyChooseShared,
		quote:
			'We deliver more than reports. We deliver the context practices need to improve the revenue cycle on purpose.'
	},
	{
		slug: 'denial-management',
		name: 'Denials Management',
		eyebrow: 'Medical billing · Denial recovery',
		headline: 'Find why claims fail, fix the file, and stop the same denial from repeating',
		metaTitle: 'Medical Billing Denials Management & Appeals | RevCycle',
		metaDescription:
			'RevCycle denials management investigates coding, demographic, and bundling errors, then resubmits claims with follow-up and prevention checklists to speed reimbursement.',
		intro: [
			'Denied and rejected claims are delayed cash. RevCycle treats denials as a diagnostic: identify the true cause, assign the right specialist, resubmit correctly, and record the pattern so the next claim does not fail the same way.',
			'Practices that outsource denial management recover faster because investigation, appeals, and prevention run in parallel. Our team reviews every denial, applies a consistent resolution path, and keeps follow-up on the calendar until the payer responds.',
			'The result we aim for is simple: you get paid sooner because root causes are closed, not because someone blindly rebills the same error.'
		],
		processHeading: 'Common denial reasons we see',
		process: [
			{
				title: 'Procedure or coding mismatches',
				description:
					'Incorrect CPT/ICD pairing, missing modifiers, or outdated codes send claims back before adjudication is complete.'
			},
			{
				title: 'Inaccurate patient or eligibility data',
				description:
					'Wrong member IDs, expired coverage, or mismatched demographics create avoidable rejections at the front of the cycle.'
			},
			{
				title: 'Bundling and unbundling errors',
				description:
					'Services that should be billed together—or separately—trigger payer edits when NCCI and policy logic is ignored.'
			}
		],
		extraHeading: 'How RevCycle works denials',
		extraIntro:
			'Denial work is both recovery and prevention. After we restore the claim, we update checklists so the same reason does not keep hitting the same specialty.',
		extraItems: [
			{
				title: 'Find the real cause',
				description:
					'We look past the remark code to documentation, eligibility, coding, and enrollment so the fix matches the actual failure.'
			},
			{
				title: 'Categorize and assign',
				description:
					'Denials are grouped by type and routed to the team best equipped to rework them—coding, enrollment, or follow-up.'
			},
			{
				title: 'Resubmit with a complete file',
				description:
					'Corrected claims go back with supporting records rather than a hope that a second transmission will suffice.'
			},
			{
				title: 'Follow the status',
				description:
					'Regular tracking keeps appeals from aging out. Payer silence is treated as a work item, not a closed ticket.'
			},
			{
				title: 'Keep a living denial checklist',
				description:
					'Top reasons and the correct response are documented for your specialty so staff and coders can prevent repeats.'
			},
			{
				title: 'Act to reduce future rejections',
				description:
					'Front-end and coding changes are recommended when the data shows a preventable pattern.'
			},
			{
				title: 'Claims management around the denial',
				description:
					'Advanced scrubbing, claims generation, adjudication monitoring, patient statements, and follow-up sit alongside appeals so the rest of the cycle stays healthy.'
			}
		],
		whyHeading: 'Faster results, fewer repeat denials',
		whyIntro:
			'Beeline Medical LLC focuses denial resources on both recovery and the reasons underneath. Contact RevCycle to put denied inventory back on a payment path.',
		whyItems: whyChooseShared,
		quote:
			'Efficient denial management is how practices get paid on time—by resolving each rejection and removing the cause behind it.'
	},
	{
		slug: 'medical-coding',
		name: 'Medical Coding',
		eyebrow: 'Medical billing · Certified coding',
		headline: 'Get coding right the first time so reimbursement is faster and cleaner',
		metaTitle: 'Medical Coding Services | Certified CPT & ICD-10 Coders | RevCycle',
		metaDescription:
			'RevCycle medical coding services use certified coders for ICD-10, CPT, and HCPCS across specialties—superbill review, claim edits, and faster, cleaner submissions.',
		intro: [
			'Accurate medical coding is one of the highest-leverage steps in the revenue cycle. When codes match the documentation on the first pass, payers can adjudicate without a delay loop, and collection rates improve.',
			'RevCycle coding is designed to be straightforward for the practice: certified specialists review encounters, apply the correct codes and modifiers, and make edits before the claim is released.',
			'We support a wide range of specialties so the same partner can keep coding, claims, and follow-up in one workflow. The clinical team stays focused on patients; the coding team stays focused on a clean, timely file.'
		],
		processHeading: 'Coding inside a complete billing workflow',
		process: [
			{
				title: 'Patient registration support',
				description:
					'Demographics and insurance captured at intake feed the coding file so identity errors do not appear as coding denials later.'
			},
			{
				title: 'Financial responsibility clarity',
				description:
					'Covered versus patient-due portions are easier to explain when coding and eligibility data agree before the statement goes out.'
			},
			{
				title: 'Superbill creation and review',
				description:
					'Encounter charges are translated into complete, specialty-aware superbills rather than leftover checkbox lists.'
			},
			{
				title: 'Claims generation',
				description:
					'Coded encounters become 837-ready claims with the modifiers and units payers expect for that service.'
			},
			{
				title: 'Monitor claim adjudication',
				description:
					'Once submitted, we watch payer responses so underpayments and coding-related rejects return to the coding desk quickly.'
			},
			{
				title: 'Patient statement preparation',
				description:
					'Balances that truly belong to the patient are itemized after insurance, reducing confusion-driven call volume.'
			},
			{
				title: 'Following up',
				description:
					'Unpaid coded claims stay on a follow-up list until they are paid, corrected, or documented as a contractual write-off.'
			}
		],
		extraHeading: 'Experienced coding team',
		extraIntro:
			'Designated coders review claims before submission and apply necessary edits so payers receive a file that can process. Speed matters: getting clean claims out quickly is one of the simplest ways to shorten payment time. Services are built to be clear, efficient, and economically practical for independent and multi-site groups.',
		extraItems: [
			{
				title: 'Specialty coverage',
				description:
					'Coding protocols adapt to the service line—from evaluation and management to procedures, diagnostics, and therapy time rules.'
			},
			{
				title: 'Error-resistant submissions',
				description:
					'Pre-bill review reduces the bounce-back cycle that occurs when claims leave the practice unfinished.'
			},
			{
				title: 'Workflow that protects clinic time',
				description:
					'Providers keep documenting care. Coders translate that record into billable, compliant language without adding extra admin to the encounter.'
			}
		],
		whyHeading: 'Why choose RevCycle medical coding',
		whyIntro:
			'Simple, fast, effective coding is how practices raise collection rates without adding internal headcount. Contact Beeline Medical LLC to put certified coding inside a full revenue cycle.',
		whyItems: whyChooseShared,
		quote:
			'We do not just process claims — we build long-term financial stability for healthcare practices, starting with codes that survive the first payer edit.'
	}
];

export function getServiceBySlug(slug: string): ServicePageContent | undefined {
	return servicePages.find((service) => service.slug === slug);
}
