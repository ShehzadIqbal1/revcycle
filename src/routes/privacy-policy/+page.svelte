<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		ShieldCheck,
		Activity,
		PhoneCall,
		Lock,
		FileText,
		Scale,
		EyeOff,
		CheckCircle2,
		AlertCircle
	} from '@lucide/svelte';
</script>

<svelte:head>
	<title>HIPAA Compliance &amp; Privacy Policy | Beeline Medical LLC</title>
	<meta
		name="description"
		content="Review the HIPAA Notice of Privacy Practices and Privacy Policy for Beeline Medical LLC. Learn how we safeguard Protected Health Information (PHI) and guarantee zero sharing of mobile SMS consent."
	/>
</svelte:head>

	<!-- Policy Header Banner -->
	<section class="relative overflow-hidden bg-navy py-16 text-white">
		<div class="mx-auto max-w-4xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-emerald/30 bg-emerald/20 px-3.5 py-1 text-xs font-semibold text-emerald"
			>
				<ShieldCheck class="h-4 w-4" /> Official Notice of Privacy Practices &bull; HIPAA Compliant
			</div>
			<h1 class="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
				Privacy Policy &amp; Data Safeguards
			</h1>
			<p class="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
				Beeline Medical LLC and Beeline Medical USA LLC are committed to safeguarding Protected
				Health Information (PHI) and client confidentiality in strict compliance with federal and
				state regulations.
			</p>
			<div class="pt-2 text-xs text-slate-400">
				Effective &amp; Last Updated: September 2026 &bull; State of Missouri Entity
			</div>
		</div>
	</section>

	<!-- Strict SMS / Carrier Non-Disclosure Callout -->
	<section class="mx-auto -mt-6 max-w-4xl px-4 sm:px-6 lg:px-8">
		<div
			class="flex items-start gap-4 rounded-2xl border-2 border-emerald/60 bg-mint p-6 shadow-md"
		>
			<div
				class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald text-white"
			>
				<EyeOff class="h-5 w-5" />
			</div>
			<div class="space-y-1 text-sm">
				<h3 class="text-base font-bold text-navy">
					Strict Non-Disclosure Guarantee &bull; Mobile &amp; SMS Consent Protection
				</h3>
				<p class="text-xs leading-relaxed text-slate-700 sm:text-sm">
					<strong
						>No mobile information will be shared with third parties or affiliates for marketing or
						promotional purposes.</strong
					> All other categories exclude text messaging originator opt-in data and consent; this information
					will not be shared with or sold to any third parties under any circumstances.
				</p>
			</div>
		</div>
	</section>

	<!-- Policy Content Body -->
	<main
		class="mx-auto max-w-4xl space-y-12 px-4 py-16 text-sm leading-relaxed text-slate-700 sm:px-6 sm:text-base lg:px-8"
	>
		<!-- Section 1 -->
		<section class="space-y-4">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<FileText class="h-6 w-6 text-blue" /> 1. Executive Introduction &amp; Scope
			</h2>
			<p>
				Thank you for choosing <strong>Beeline Medical LLC</strong> (and its operational affiliates, collectively
				referred to as "Beeline Medical," "we," "our," or "us") to manage your medical billing, claims
				adjudication, and revenue cycle requirements.
			</p>
			<p>
				As a premier healthcare revenue management organization operating under the laws of the
				State of Missouri and serving providers across the United States, we prioritize the utmost
				transparency and uncompromising protection of patient and practice data. This Privacy Policy
				clarifies how we gather, process, retain, and protect confidential information and explains
				your rights under the Health Insurance Portability and Accountability Act (HIPAA), the
				Health Information Technology for Economic and Clinical Health (HITECH) Act, and applicable
				state laws.
			</p>
		</section>

		<!-- Section 2 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<ShieldCheck class="h-6 w-6 text-emerald" /> 2. HIPAA Compliance Statement &amp; Safeguards
			</h2>
			<p>
				Beeline Medical USA LLC operates under comprehensive HIPAA compliance standards designed to
				safeguard Protected Health Information (PHI) and electronic Protected Health Information
				(ePHI) across both physical and digital infrastructures.
			</p>
			<div class="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
				<div class="space-y-2 rounded-xl border border-slate-200 bg-white p-5">
					<div class="flex items-center gap-2 text-sm font-bold text-navy">
						<Lock class="h-4 w-4 text-blue" /> Technical Safeguards
					</div>
					<p class="text-xs text-slate-600">
						AES-256 bit data encryption at rest, TLS 1.3 cryptographic protocols in transit,
						multi-factor authentication (MFA), role-based access privileges, and automated
						clearinghouse session timeout controls.
					</p>
				</div>
				<div class="space-y-2 rounded-xl border border-slate-200 bg-white p-5">
					<div class="flex items-center gap-2 text-sm font-bold text-navy">
						<Scale class="h-4 w-4 text-blue" /> Administrative Safeguards
					</div>
					<p class="text-xs text-slate-600">
						Mandatory annual workforce HIPAA clearance, signed Business Associate Agreements (BAAs)
						with all covered entities, designated Security and Privacy Officers, and continuous
						monitoring of CMS/OIG regulatory developments.
					</p>
				</div>
			</div>
			<p class="mt-2 text-xs text-slate-500 italic">
				All healthcare software, clearinghouse gateways, and claims analytics tools utilized by
				Beeline Medical USA LLC for revenue cycle management strictly conform to national HIPAA
				transaction and code set standards (EDI 837, 835, 270/271, and 276/277).
			</p>
		</section>

		<!-- Section 3 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<AlertCircle class="h-6 w-6 text-blue" /> 3. Notice of Privacy Practices &amp; Non-Disclosure
			</h2>
			<p>
				In compliance with federal regulations, Beeline Medical maintains rigid protocols governing
				employee access to your clinical and demographic records. Our internal governance guarantees
				that:
			</p>
			<ul class="list-disc space-y-2 pl-4 text-sm marker:text-emerald">
				<li>
					We will <strong>never sell, lease, monetize, or trade</strong> your personal or clinical information
					to any third party.
				</li>
				<li>
					<strong>Mobile numbers and SMS opt-in consent</strong> are strictly confidential and will never
					be disclosed to third parties or marketing affiliates under any circumstances.
				</li>
				<li>
					Access to records is limited exclusively to authorized billing and credentialed coding
					staff on a strict "minimum necessary" basis to complete claims adjudication.
				</li>
			</ul>
		</section>

		<!-- Section 4 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<FileText class="h-6 w-6 text-blue" /> 4. Categories of Information We Collect
			</h2>
			<p>
				To successfully pursue insurance reimbursement, overturn denials, and fulfill our
				contractual obligations as your Revenue Cycle Management partner, we collect and process:
			</p>
			<div class="space-y-3 rounded-xl border border-slate-200 bg-white p-6">
				<div class="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2 sm:text-sm">
					<div class="flex items-center gap-2">
						<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
						<span>Legal Patient &amp; Guarantor Names</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
						<span>Residential Addresses &amp; Contact Info</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
						<span>Dates of Birth &amp; Identification</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
						<span>Social Security Numbers (when payer-required)</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
						<span>Primary &amp; Secondary Insurance Coverage</span>
					</div>
					<div class="flex items-center gap-2">
						<CheckCircle2 class="h-4 w-4 shrink-0 text-emerald" />
						<span>ICD-10 Diagnoses &amp; CPT Procedure Codes</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Section 5 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<Activity class="h-6 w-6 text-blue" /> 5. Data Intake &amp; Methods of Processing
			</h2>
			<p>
				Information is provided to Beeline Medical through secured, encrypted channels to ensure
				zero data leakage:
			</p>
			<ul class="list-disc space-y-2 pl-4 text-sm marker:text-emerald">
				<li>
					<strong>Bi-Directional EHR/PM Gateways:</strong> Secure API interfaces with systems such as
					Epic, Cerner, AthenaHealth, Kareo, eClinicalWorks, Practice Fusion, and AdvancedMD.
				</li>
				<li>
					<strong>Encrypted Web Portal Intake:</strong> TLS-encrypted web interfaces allowing practices
					to upload encounter forms, prior authorizations, and fee tickets.
				</li>
				<li>
					<strong>Clearinghouse Electronic Data Interchange (EDI):</strong> Validated connections to commercial
					clearinghouses and Medicare/Medicaid regional MACs.
				</li>
			</ul>
		</section>

		<!-- Section 6 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<Scale class="h-6 w-6 text-blue" /> 6. Individual Rights Concerning Your Data
			</h2>
			<p>
				In accordance with federal privacy frameworks, healthcare providers and individual patients
				maintain distinct legal rights:
			</p>
			<div class="space-y-3 text-xs sm:text-sm">
				<div class="rounded-lg border border-slate-200 bg-white p-4">
					<strong class="text-navy">Right to Access &amp; Inspection:</strong> You may request an electronic
					copy of billing and account records maintained by Beeline Medical.
				</div>
				<div class="rounded-lg border border-slate-200 bg-white p-4">
					<strong class="text-navy">Right to Request Amendment:</strong> If records contain erroneous
					demographic or payer details, you hold the right to petition for immediate correction.
				</div>
				<div class="rounded-lg border border-slate-200 bg-white p-4">
					<strong class="text-navy">Right to Deletion:</strong> You may request the deletion of your personal
					data; however, please note that federal Centers for Medicare &amp; Medicaid Services (CMS) and
					state statutory retention rules require billing and claim documentation to be retained for statutory
					minimum periods (typically 5 to 7 years).
				</div>
				<div class="rounded-lg border border-slate-200 bg-white p-4">
					<strong class="text-navy">Right to Restrict Disclosures:</strong> You may specify limitations
					regarding certain disclosures of confidential health information.
				</div>
			</div>
		</section>

		<!-- Section 7 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<ShieldCheck class="h-6 w-6 text-blue" /> 7. Children's Privacy (COPPA Compliance)
			</h2>
			<p>
				Our services do not directly target or collect marketing data from individuals under 13
				years of age. Pediatric clinical encounters and billing data are received solely through
				authorized covered healthcare entities and legal guardians in full compliance with the
				Children's Online Privacy Protection Act (COPPA) and HIPAA pediatric guidelines.
			</p>
		</section>

		<!-- Section 8 -->
		<section class="space-y-4 border-t border-slate-200 pt-8">
			<h2 class="flex items-center gap-2.5 text-2xl font-bold text-navy">
				<PhoneCall class="h-6 w-6 text-blue" /> 8. Inquiries &amp; Privacy Officer Contact
			</h2>
			<p>
				If you have questions regarding this Privacy Policy, wish to exercise any of your data
				rights, or need to verify a Business Associate Agreement, please contact our designated
				HIPAA Compliance Officer:
			</p>
			<div class="space-y-2 rounded-xl border border-slate-200 bg-white p-6 text-xs sm:text-sm">
				<div class="text-base font-bold text-navy">
					Beeline Medical USA LLC &bull; HIPAA Compliance Office
				</div>
				<div>State of Missouri, United States</div>
				<div>
					Toll-Free Telephone: <a
						href="tel:18005557382"
						class="font-semibold text-blue hover:underline">(800) 555-REV2</a
					>
				</div>
				<div>
					Email: <a
						href="mailto:privacy@revcycle.com"
						class="font-semibold text-blue hover:underline">compliance@revcycle.com</a
					>
				</div>
				<div>
					Website: <a href={resolve('/')} class="font-semibold text-blue hover:underline"
						>revcycle.com</a
					>
				</div>
			</div>
		</section>
	</main>

