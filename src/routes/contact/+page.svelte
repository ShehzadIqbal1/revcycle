<script lang="ts">
	import { resolve } from '$app/paths';
	import {
		Phone,
		Mail,
		MapPin,
		ArrowRight,
		Users
	} from '@lucide/svelte';

	let activeTab = $state<'form' | 'emails' | 'locations'>('form');
	let messageLength = $state(0);
	let formData = $state({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		address: '',
		practiceName: '',
		specialty: '',
		desiredService: '',
		heardAbout: '',
		consent: false,
		message: ''
	});

	const emails = [
		{
			name: 'Sales & Demo',
			email: 'sales@revcycle.com',
			description: 'Schedule demos and discuss billing solutions'
		},
		{
			name: 'Clinical Support',
			email: 'support@revcycle.com',
			description: 'Technical assistance and account management'
		},
		{
			name: 'Billing Inquiries',
			email: 'billing@revcycle.com',
			description: 'Invoice and payment related questions'
		},
		{
			name: 'Executive Leadership',
			email: 'leadership@revcycle.com',
			description: 'Enterprise partnerships and strategic initiatives'
		}
	];

	const locations = [
		{
			city: 'New York',
			state: 'NY',
			address: '123 Medical Plaza Drive',
			suite: 'Suite 500',
			phone: '(212) 555-0123',
			hours: 'Mon-Fri: 9 AM - 6 PM EST'
		},
		{
			city: 'Houston',
			state: 'TX',
			address: '456 Healthcare Center Boulevard',
			suite: 'Suite 300',
			phone: '(713) 555-0456',
			hours: 'Mon-Fri: 8 AM - 5 PM CST'
		},
		{
			city: 'Los Angeles',
			state: 'CA',
			address: '789 Clinical Park Way',
			suite: 'Suite 200',
			phone: '(310) 555-0789',
			hours: 'Mon-Fri: 8 AM - 5 PM PST'
		},
		{
			city: 'Chicago',
			state: 'IL',
			address: '321 Medical Center Drive',
			suite: 'Suite 400',
			phone: '(312) 555-0321',
			hours: 'Mon-Fri: 8 AM - 5 PM CST'
		}
	];

	const services = [
		'Medical Billing',
		'Medical Coding',
		'Credentialing & Enrollment',
		'Denial Management & Appeals',
		'Compliance & Auditing',
		'Reporting & Analytics',
		'Claims Management'
	];

	const sources = [
		'Google Search',
		'Social Media (Facebook, Instagram, LinkedIn, etc.)',
		'Friend/Family Referral',
		'Other'
	];

	function handleSubmit() {
		console.log('Form submitted:', formData);
		// Form submission logic will go here
	}

	function updateMessageLength(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		messageLength = target.value.length;
		formData.message = target.value;
	}
</script>

<!-- Hero Section -->
<section class="relative overflow-hidden bg-gradient-to-b from-blue/10 via-white to-slate-50 py-16 md:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
				Get in Touch with RevCycle
			</h1>
			<p class="mt-4 text-lg text-slate-600">
				Whether you're ready to schedule a demo, have questions, or need support, our team is here to help
				your practice maximize revenue.
			</p>
		</div>
	</div>
</section>

<!-- Tabs Navigation -->
<section class="border-b border-slate-200 bg-white sticky top-0 z-40">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex overflow-x-auto">
			<button
				type="button"
				onclick={() => (activeTab = 'form')}
				class="flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-semibold transition-colors {activeTab ===
				'form'
					? 'border-blue text-navy'
					: 'border-transparent text-slate-600 hover:text-navy'}"
			>
				<Mail class="h-4 w-4" />
				<span class="whitespace-nowrap">Contact Form</span>
			</button>
			<button
				type="button"
				onclick={() => (activeTab = 'emails')}
				class="flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-semibold transition-colors {activeTab ===
				'emails'
					? 'border-blue text-navy'
					: 'border-transparent text-slate-600 hover:text-navy'}"
			>
				<Mail class="h-4 w-4" />
				<span class="whitespace-nowrap">Email Contacts</span>
			</button>
			<button
				type="button"
				onclick={() => (activeTab = 'locations')}
				class="flex items-center gap-2 border-b-2 px-6 py-4 text-sm font-semibold transition-colors {activeTab ===
				'locations'
					? 'border-blue text-navy'
					: 'border-transparent text-slate-600 hover:text-navy'}"
			>
				<MapPin class="h-4 w-4" />
				<span class="whitespace-nowrap">Locations</span>
			</button>
		</div>
	</div>
</section>

<!-- Content Sections -->
<div class="bg-white">
	<!-- Contact Form Tab -->
	{#if activeTab === 'form'}
		<section class="py-16 md:py-24">
			<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12">
					<h2 class="text-3xl font-extrabold text-navy mb-2">We'd love to hear from you!</h2>
					<p class="text-slate-600">
						Fill out the form below and our team will get back to you within 24 business hours.
					</p>
				</div>

				<form onsubmit={handleSubmit} class="space-y-8">
					<!-- Name Fields -->
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div>
							<label for="firstName" class="block text-sm font-semibold text-navy mb-2">
								First Name <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="firstName"
								bind:value={formData.firstName}
								required
								placeholder="John"
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
							/>
						</div>

						<div>
							<label for="lastName" class="block text-sm font-semibold text-navy mb-2">
								Last Name <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="lastName"
								bind:value={formData.lastName}
								required
								placeholder="Doe"
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
							/>
						</div>
					</div>

					<!-- Email & Phone -->
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div>
							<label for="email" class="block text-sm font-semibold text-navy mb-2">
								Email <span class="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								placeholder="john@practice.com"
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
							/>
						</div>

						<div>
							<label for="phone" class="block text-sm font-semibold text-navy mb-2">
								Phone <span class="text-red-500">*</span>
							</label>
							<div class="flex gap-2">
								<select
									class="rounded-lg border border-slate-300 px-3 py-3 text-sm bg-slate-50 text-slate-600 focus:border-blue focus:outline-none"
								>
									<option>United States +1</option>
								</select>
								<input
									type="tel"
									id="phone"
									bind:value={formData.phone}
									required
									placeholder="(201) 555-0123"
									class="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
								/>
							</div>
						</div>
					</div>

					<!-- Address -->
					<div>
						<label for="address" class="block text-sm font-semibold text-navy mb-2">
							Address <span class="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="address"
							bind:value={formData.address}
							required
							placeholder="123 Medical Plaza Drive"
							class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
						/>
					</div>

					<!-- Practice & Specialty -->
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div>
							<label for="practiceName" class="block text-sm font-semibold text-navy mb-2">
								Practice Name <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="practiceName"
								bind:value={formData.practiceName}
								required
								placeholder="Your Medical Practice"
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
							/>
						</div>

						<div>
							<label for="specialty" class="block text-sm font-semibold text-navy mb-2">
								Specialty <span class="text-red-500">*</span>
							</label>
							<select
								id="specialty"
								bind:value={formData.specialty}
								required
								class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base text-slate-600 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
							>
								<option value="">Select your specialty</option>
								<option value="orthopedics">Orthopedics</option>
								<option value="cardiology">Cardiology</option>
								<option value="dermatology">Dermatology</option>
								<option value="gastroenterology">Gastroenterology</option>
								<option value="neurology">Neurology</option>
								<option value="general">General Practice</option>
								<option value="other">Other</option>
							</select>
						</div>
					</div>

					<!-- Desired Service -->
					<div>
						<fieldset>
							<legend class="block text-sm font-semibold text-navy mb-3">
								Desired Service <span class="text-red-500">*</span>
							</legend>
							<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
								{#each services as service}
									<label class="flex items-center gap-3 cursor-pointer">
										<input
											type="radio"
											name="service"
											value={service}
											bind:group={formData.desiredService}
											class="w-4 h-4 text-blue"
											required
										/>
										<span class="text-sm text-slate-700">{service}</span>
									</label>
								{/each}
							</div>
						</fieldset>
					</div>

					<!-- Where Did You Hear About Us -->
					<div>
						<fieldset>
							<legend class="block text-sm font-semibold text-navy mb-3">
								Where Did You Hear About Us? <span class="text-red-500">*</span>
							</legend>
							<div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
								{#each sources as source}
									<label class="flex items-center gap-3 cursor-pointer">
										<input
											type="radio"
											name="source"
											value={source}
											bind:group={formData.heardAbout}
											class="w-4 h-4 text-blue"
											required
										/>
										<span class="text-sm text-slate-700">{source}</span>
									</label>
								{/each}
							</div>
						</fieldset>
					</div>

					<!-- Consent Checkbox -->
					<div>
						<label class="flex items-start gap-3 cursor-pointer">
							<input
								type="checkbox"
								bind:checked={formData.consent}
								required
								class="w-4 h-4 text-blue mt-1"
							/>
							<span class="text-sm text-slate-600">
								By checking this box and by providing my contact information to <strong>RevCycle LLC</strong>,
								I acknowledge and give my explicit consent to be contacted via SMS, Calls and receive emails for
								various purposes, which may include marketing and promotional content. Message and data rates may
								apply. Reply STOP to opt out.
								<a href={resolve('/privacy-policy')} class="text-blue hover:text-navy font-semibold">
									Read Our Privacy Policy
								</a>
								<span class="text-red-500">*</span>
							</span>
						</label>
					</div>

					<!-- Message -->
					<div>
						<label for="message" class="block text-sm font-semibold text-navy mb-2">Message</label>
						<textarea
							id="message"
							oninput={updateMessageLength}
							placeholder="Enter your message..."
							rows="5"
							class="w-full rounded-lg border border-slate-300 px-4 py-3 text-base placeholder-slate-400 focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue resize-none"
						></textarea>
						<div class="mt-2 text-sm text-slate-500 text-right">
							{messageLength} / 180
						</div>
					</div>

					<!-- Submit Button -->
					<button
						type="submit"
						class="w-full rounded-lg bg-navy px-6 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-navy-light hover:shadow-lg active:scale-[0.98]"
					>
						Submit
						<ArrowRight class="inline-block h-4 w-4 ml-2" />
					</button>
				</form>
			</div>
		</section>
	{/if}

	<!-- Emails Tab -->
	{#if activeTab === 'emails'}
		<section class="py-16 md:py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl mb-12 text-center">
					<h2 class="text-3xl font-extrabold text-navy mb-3">Our Team</h2>
					<p class="text-lg text-slate-600">
						Reach out to the right department based on your needs
					</p>
				</div>

				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
					{#each emails as contact}
						<div
							class="group rounded-2xl border border-slate-200 bg-white p-7 hover:border-blue hover:shadow-lg transition-all"
						>
							<div class="flex items-start gap-4">
								<div
									class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10 group-hover:bg-blue/20 transition-colors"
								>
									<Mail class="h-6 w-6 text-blue" />
								</div>
								<div class="flex-1">
									<h3 class="text-lg font-bold text-navy mb-1">{contact.name}</h3>
									<p class="text-sm text-slate-600 mb-4">{contact.description}</p>
									<a
										href="mailto:{contact.email}"
										class="inline-flex items-center gap-2 font-semibold text-blue hover:text-navy transition-colors"
									>
										{contact.email}
										<ArrowRight class="h-4 w-4" />
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- General Support Card -->
				<div class="mt-12 rounded-2xl bg-gradient-to-br from-blue/5 to-mint/5 border border-blue/20 p-8">
					<div class="flex items-start gap-4">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue text-white shrink-0">
							<Users class="h-6 w-6" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-navy mb-2">Dedicated Support Team</h3>
							<p class="text-slate-600 mb-4">
								After you become a client, you'll be assigned a dedicated account manager who knows your
								practice inside and out. They're just a phone call away for any questions or support.
							</p>
							<a
								href="tel:18005557382"
								class="inline-flex items-center gap-2 font-semibold text-blue hover:text-navy transition-colors"
							>
								Call Support: (800) 555-REV2
								<ArrowRight class="h-4 w-4" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	{/if}

	<!-- Locations Tab -->
	{#if activeTab === 'locations'}
		<section class="py-16 md:py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-3xl mb-12 text-center">
					<h2 class="text-3xl font-extrabold text-navy mb-3">Our Offices</h2>
					<p class="text-lg text-slate-600">
						Visit us at any of our locations across the United States
					</p>
				</div>

				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
					{#each locations as location}
						<div
							class="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-blue hover:shadow-lg transition-all"
						>
							<div class="flex items-start gap-4 mb-6">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 shrink-0">
									<MapPin class="h-5 w-5 text-blue" />
								</div>
								<div>
									<h3 class="text-xl font-bold text-navy">{location.city}, {location.state}</h3>
								</div>
							</div>

							<div class="space-y-4 border-t border-slate-100 pt-6">
								<div>
									<p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
										Address
									</p>
									<p class="text-base text-slate-700 font-medium">{location.address}</p>
									<p class="text-sm text-slate-600">{location.suite}</p>
								</div>

								<div>
									<p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
										Phone
									</p>
									<a
										href="tel:{location.phone.replace(/[^\d]/g, '')}"
										class="text-base font-semibold text-blue hover:text-navy transition-colors"
									>
										{location.phone}
									</a>
								</div>

								<div>
									<p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
										Hours
									</p>
									<p class="text-sm text-slate-700">{location.hours}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!-- Main Support Line -->
				<div class="mt-12 rounded-2xl bg-navy text-white p-8">
					<div class="max-w-3xl mx-auto text-center">
						<h3 class="text-2xl font-bold mb-3">Need Immediate Assistance?</h3>
						<p class="text-slate-300 mb-6 text-lg">
							Call our main support line anytime during business hours
						</p>
						<a
							href="tel:18005557382"
							class="inline-flex items-center gap-2 bg-blue px-7 py-3.5 rounded-lg font-bold text-white hover:bg-blue-600 transition-colors text-lg"
						>
							<Phone class="h-5 w-5" />
							(800) 555-REV2
						</a>
					</div>
				</div>
			</div>
		</section>
	{/if}
</div>

<!-- CTA Section -->
<section class="bg-slate-50 py-16 md:py-20 border-t border-slate-200">
	<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
		<h2 class="text-3xl font-extrabold text-navy mb-4">Ready to Transform Your Revenue Cycle?</h2>
		<p class="text-lg text-slate-600 mb-8">
			Take the first step with a free practice audit and see exactly where revenue is being lost.
		</p>
		<a
			href="{resolve('/')}#audit"
			class="inline-flex items-center gap-2 bg-navy px-8 py-4 rounded-lg font-bold text-white hover:bg-navy-light transition-colors shadow-md"
		>
			Schedule Your Free Audit
			<ArrowRight class="h-5 w-5" />
		</a>
	</div>
</section>
