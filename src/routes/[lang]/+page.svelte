<script lang="ts">
	import type { Dictionary, Locale } from '$lib/i18n/types';

	let { data }: { data: { locale: Locale; baseUrl: string; dictionary: Dictionary } } = $props();

	let mobileSidebarOpen = $state(false);
	let contactName = $state('');
	let contactEmail = $state('');
	let contactMessage = $state('');

	const locale = $derived(data.locale as Locale);
	const t = $derived(data.dictionary);
	const currentUrl = $derived(`${data.baseUrl}/${locale}`);
	const previewImage = '/portfolio-desktop-reference.png';

	const yearNow = new Date().getFullYear();

	const submitContact = () => {
		const subject = encodeURIComponent(t.contact.subject);
		const body = encodeURIComponent(
			`${t.contact.bodyLabelName}: ${contactName || '-'}\n${t.contact.bodyLabelEmail}: ${contactEmail || '-'}\n\n${t.contact.bodyLabelMessage}:\n${contactMessage || '-'}`
		);
		window.location.href = `mailto:${t.identity.email}?subject=${subject}&body=${body}`;
	};

	const jsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: t.identity.name,
		jobTitle: t.identity.role,
		email: t.identity.email,
		telephone: t.identity.phone,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Tulungagung',
			addressRegion: locale === 'id' ? 'Jawa Timur' : 'East Java',
			addressCountry: 'ID'
		},
		url: currentUrl,
		sameAs: [t.identity.linkedin, t.identity.github, t.identity.instagram, t.identity.facebook],
		knowsAbout: [...t.skills.webItems, ...t.skills.mobileItems]
	});

	const navItems = $derived([
		{ href: '#education', label: t.nav.education },
		{ href: '#experience', label: t.nav.experience },
		{ href: `#projects`, label: t.nav.projects },
		{ href: '#skills', label: t.nav.skills },
		{ href: '#contact', label: t.nav.contact }
	]);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Be+Vietnam+Pro:wght@400;500;700&display=swap"
	/>
	<title>{t.seo.home.title}</title>
	<meta name="description" content={t.seo.home.description} />
	<meta name="keywords" content={t.seo.home.keywords} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={currentUrl} />
	<link rel="alternate" hreflang="id" href={`${data.baseUrl}/id`} />
	<link rel="alternate" hreflang="x-default" href={`${data.baseUrl}/id`} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={t.seo.home.title} />
	<meta property="og:description" content={t.seo.home.description} />
	<meta property="og:url" content={currentUrl} />
	<meta property="og:locale" content={t.seo.home.ogLocale} />
	<meta property="og:image" content={`${data.baseUrl}${previewImage}`} />
	<meta property="og:image:alt" content={t.identity.name} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={t.seo.home.title} />
	<meta name="twitter:description" content={t.seo.home.description} />
	<meta name="twitter:image" content={`${data.baseUrl}${previewImage}`} />

	<script type="application/ld+json">
{JSON.stringify(jsonLd)}
	</script>
</svelte:head>

<button
	type="button"
	aria-label="Close mobile menu"
	class="mobile-drawer-overlay"
	class:open={mobileSidebarOpen}
	onclick={() => (mobileSidebarOpen = false)}
></button>

<aside class="mobile-drawer" class:open={mobileSidebarOpen}>
	<div class="mb-6 flex items-center justify-between">
		<p class="headline text-xl font-bold">{t.identity.brand}</p>
		<button
			type="button"
			class="rounded-full bg-slate-200 p-2 text-sm font-bold"
			onclick={() => (mobileSidebarOpen = false)}>✕</button
		>
	</div>
	<nav class="flex flex-col gap-3">
		{#each navItems as item (item.href)}
			<a
				href={item.href}
				class="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
				onclick={() => (mobileSidebarOpen = false)}>{item.label}</a
			>
		{/each}
	</nav>
	<div class="mt-6 flex gap-2">
		<a
			href={`/${locale}`}
			class="rounded-full bg-[#ffd709] px-3 py-1 text-xs font-bold text-[#5b4b00]"
			>{locale.toUpperCase()}</a
		>
	</div>
</aside>

<main class="bg-[#f5f6f7] text-[#2c2f30] antialiased">
	<nav class="fixed top-6 right-0 left-0 z-50">
		<div class="mx-auto max-w-7xl px-8">
			<div
				class="flex items-center justify-between rounded-full bg-white/75 px-5 py-4 shadow-[0px_24px_48px_-12px_rgba(44,47,48,0.1)] backdrop-blur-xl md:px-8"
			>
				<div class="headline text-xl font-black tracking-tighter text-slate-900 md:text-2xl">
					{t.identity.brand}
				</div>

				<div class="hidden items-center space-x-6 text-sm md:flex">
					{#each navItems as item (item.href)}
						<a
							class="headline font-bold text-slate-700 transition hover:scale-105 hover:text-slate-900"
							href={item.href}>{item.label}</a
						>
					{/each}
				</div>

				<div class="hidden items-center gap-2 md:flex">
					<a
						href={`/${locale}`}
						class="rounded-full bg-[#ffd709] px-3 py-1 text-xs font-bold text-[#5b4b00]"
						>{locale.toUpperCase()}</a
					>
					<a
						href="#contact"
						class="rounded-full bg-[#ffd709] px-4 py-2 text-sm font-bold text-[#5b4b00]"
						>{t.nav.cta}</a
					>
				</div>

				<button
					type="button"
					class="rounded-full bg-slate-200 p-2 text-sm font-bold md:hidden"
					onclick={() => (mobileSidebarOpen = true)}>☰</button
				>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="hero-grid-section animate-rise pt-44 pb-24">
		<div class="hero-grid-bg" aria-hidden="true"></div>
		<div class="hero-grid-glow" aria-hidden="true"></div>
		<div
			class="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-8 md:flex-row"
		>
			<div class="flex-1 space-y-8">
				<div
					class="inline-block rounded-full bg-sky-300 px-4 py-1 text-sm font-bold tracking-wider text-[#00414f] uppercase"
				>
					{t.hero.badge}
				</div>
				<h1 class="headline text-4xl leading-[0.9] font-extrabold tracking-tighter md:text-7xl">
					{t.hero.title} <span class="text-[#6c5a00]">{t.hero.highlight}</span>
				</h1>
				<p class="max-w-2xl text-xl leading-relaxed text-slate-600">{t.hero.subtitle}</p>
				<div class="flex flex-wrap gap-4 pt-4">
					<a
						href={`/${locale}/project`}
						class="rounded-full border border-[#e3b900]/60 bg-linear-to-r from-[#ffe27a] via-[#ffd709] to-[#f4bf00] px-8 py-4 text-lg font-bold text-[#5b4b00] shadow-[0_10px_24px_-10px_rgba(108,90,0,0.45)] transition-all duration-300 hover:scale-105 hover:brightness-105"
						>{t.hero.primaryCta}</a
					>
					<a
						href="#contact"
						class="rounded-full bg-slate-200 px-8 py-4 text-lg font-bold transition-transform duration-300 hover:scale-105"
						>{t.hero.secondaryCta}</a
					>
				</div>
			</div>
			<div class="relative flex-1">
				<div
					class="hover-float relative aspect-square w-full rotate-3 overflow-hidden rounded-3xl shadow-2xl"
				>
					<img
						class="h-full w-full object-cover"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9MFXg0D3KehjNjqkenjKpB8WBcprGfYTmfZxMRX9gXjAJmkTqrJfqP22vdp4VLXrq5DG-yLLLPTjgQlid9gqjr6PML-wFgGzle7ojWxDn_PoJ-XNrs7sfayYS0KB5gD0OH80LUq9vOdDryJASeGyGRbeZD5jnIVCaYoHPtvJSBGgJhJwhQtT6CpMszDBtEckM95wuyPsu0nzabKoGX1-Z7_Xdm_V3oTjZxH6K8ZP3MQEHvPPAACUU8ry0jvqQBe5qxnnG8kLS9IQ"
						alt="Portfolio visual"
					/>
				</div>
				<div
					class="absolute -bottom-6 -left-6 max-w-65 -rotate-6 rounded-2xl bg-orange-200 p-6 shadow-xl"
				>
					<p class="font-bold text-[#693d00]">{t.hero.note}</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Education Section -->
	<section id="education" class="section-grid-light py-20">
		<div class="mx-auto max-w-7xl px-8">
			<div class="mb-10">
				<h2 class="headline text-4xl font-extrabold tracking-tight">{t.education.title}</h2>
				<p class="mt-3 text-slate-600">{t.education.subtitle}</p>
			</div>
			<div class="space-y-6">
				{#each t.education.items as item (item.school)}
					<article
						class="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 class="headline text-2xl font-bold">{item.school}</h3>
							<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
								>{item.period}</span
							>
						</div>
						<p class="font-semibold text-slate-700">{item.major}</p>
						<p class="mt-1 text-sm text-[#6c5a00]">{item.grade}</p>
						<ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
							{#each item.highlights as highlight (highlight)}
								<li>{highlight}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Experience Section -->
	<section id="experience" class="section-grid-muted py-20">
		<div class="mx-auto max-w-7xl px-8">
			<div class="mb-10">
				<h2 class="headline text-4xl font-extrabold tracking-tight">{t.experience.title}</h2>
				<p class="mt-3 text-slate-600">{t.experience.subtitle}</p>
			</div>
			<div
				class="relative pl-8 before:absolute before:top-0 before:left-2 before:h-full before:w-0.5 before:bg-slate-300"
			>
				{#each t.experience.timeline as item (item.role)}
					<article
						class="relative mb-8 rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div
							class="absolute top-8 -left-8 h-4 w-4 rounded-full border-4 border-white bg-[#6c5a00]"
						></div>
						<div class="mb-2 flex flex-wrap items-center justify-between gap-2">
							<h3 class="headline text-xl font-bold">{item.role}</h3>
							<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
								>{item.period}</span
							>
						</div>
						<p class="text-sm font-semibold text-slate-700">{item.organization}</p>
						<ul class="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
							{#each item.details as detail (detail)}
								<li>{detail}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- Certifications Section -->
	<section id="certifications" class="section-grid-light py-20">
		<div class="mx-auto max-w-7xl px-8">
			<div class="mb-10">
				<h2 class="headline text-4xl font-extrabold tracking-tight">{t.certifications.title}</h2>
				<p class="mt-3 text-slate-600">{t.certifications.subtitle}</p>
			</div>
			<ul class="grid gap-4 md:grid-cols-3">
				{#each t.certifications.items as cert (cert)}
					<li
						class="rounded-2xl bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						{cert}
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section id="projects" class="section-grid-muted py-20">
		<div class="mx-auto max-w-7xl px-8">
			<div class="mb-10 flex flex-wrap items-end justify-between gap-4">
				<div>
					<h2 class="headline text-4xl font-extrabold tracking-tight">{t.projects.title}</h2>
					<p class="mt-3 text-slate-600">{t.projects.subtitle}</p>
				</div>
				<a
					href={`/${locale}/project`}
					class="rounded-full bg-slate-200 px-5 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-300"
					>{t.nav.viewProjects}</a
				>
			</div>
			<div class="grid gap-6 md:grid-cols-3">
				{#each t.projects.items.slice(0, 3) as project (project.name)}
					<article
						class="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="relative aspect-video overflow-hidden">
							<img
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								src={project.image}
								alt={project.name}
							/>
							{#if project.githubUrl || project.liveUrl}
								<div
									class="absolute inset-0 flex items-start justify-end bg-black/25 p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
								>
									<div class="flex flex-wrap justify-end gap-2">
										{#if project.githubUrl}
											<button
												type="button"
												onclick={() =>
													window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
												class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800 transition hover:bg-slate-100"
											>
												{t.projects.githubCta}
											</button>
										{/if}
										{#if project.liveUrl}
											<button
												type="button"
												onclick={() =>
													window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
												class="rounded-full bg-[#ffd709] px-3 py-1 text-xs font-semibold text-[#5b4b00] transition hover:brightness-95"
											>
												{t.projects.liveCta}
											</button>
										{/if}
									</div>
								</div>
							{/if}
						</div>
						<div class="space-y-3 p-5">
							<div class="text-xs font-bold tracking-widest text-[#6c5a00] uppercase">
								{project.period}
							</div>
							<h3 class="headline text-lg leading-snug font-bold">{project.name}</h3>
							<p class="text-sm text-slate-600">{project.description}</p>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="skills" class="section-grid-light py-20">
		<div class="mx-auto max-w-7xl px-8">
			<div class="mb-10">
				<h2 class="headline text-4xl font-extrabold tracking-tight">{t.skills.title}</h2>
				<p class="mt-3 text-slate-600">{t.skills.subtitle}</p>
			</div>
			<div class="grid gap-6 md:grid-cols-2">
				<div class="rounded-2xl bg-white p-6 shadow-sm">
					<h3 class="headline mb-4 text-2xl font-bold">{t.skills.webTitle}</h3>
					<div class="flex flex-wrap gap-2">
						{#each t.skills.webItems as skillName (skillName)}
							<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
								>{skillName}</span
							>
						{/each}
					</div>
				</div>
				<div class="rounded-2xl bg-white p-6 shadow-sm">
					<h3 class="headline mb-4 text-2xl font-bold">{t.skills.mobileTitle}</h3>
					<div class="flex flex-wrap gap-2">
						{#each t.skills.mobileItems as skillName (skillName)}
							<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
								>{skillName}</span
							>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="contact" class="section-grid-muted py-24">
		<div class="mx-auto max-w-7xl px-8">
			<div class="relative overflow-hidden rounded-3xl bg-[#ffd709] p-10 md:p-16">
				<div
					class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#6c5a00] opacity-20"
				></div>
				<div class="relative z-10 grid gap-12 md:grid-cols-2">
					<div>
						<h2 class="headline mb-5 text-4xl leading-tight font-extrabold text-[#5b4b00]">
							{t.contact.title}
						</h2>
						<p class="mb-6 text-sm leading-relaxed text-[#5b4b00]/80">{t.contact.subtitle}</p>
						<div class="space-y-2 text-sm font-semibold text-[#5b4b00]">
							<p>{t.identity.role}</p>
							<p>{t.identity.location}</p>
							<p>{t.identity.phone}</p>
							<p>{t.identity.email}</p>
						</div>
					</div>
					<form
						class="space-y-4"
						onsubmit={(event) => {
							event.preventDefault();
							submitContact();
						}}
					>
						<input
							class="w-full rounded-xl bg-white p-4"
							type="text"
							bind:value={contactName}
							placeholder={t.contact.namePlaceholder}
						/>
						<input
							class="w-full rounded-xl bg-white p-4"
							type="email"
							bind:value={contactEmail}
							placeholder={t.contact.emailPlaceholder}
						/>
						<textarea
							class="w-full rounded-xl bg-white p-4"
							rows="4"
							bind:value={contactMessage}
							placeholder={t.contact.messagePlaceholder}
						></textarea>
						<button
							type="submit"
							class="w-full rounded-full bg-[#5b4b00] py-4 text-lg font-extrabold text-[#fff2cd] transition-transform hover:scale-[1.01]"
							>{t.contact.send}</button
						>
					</form>
				</div>
			</div>
		</div>
	</section>

	<footer class="border-t border-slate-200 bg-white py-14">
		<div class="mx-auto grid max-w-7xl gap-10 px-8 md:grid-cols-3">
			<div>
				<h3 class="headline text-2xl font-black text-slate-900">{t.identity.brand}</h3>
				<p class="mt-3 max-w-xs text-sm text-slate-600">{t.footer.tagline}</p>
			</div>
			<div>
				<h4 class="headline text-lg font-bold text-slate-900">{t.footer.navigation}</h4>
				<div class="mt-3 flex flex-col gap-2 text-sm">
					{#each navItems as item (item.label)}
						<a class="text-slate-600 transition hover:text-slate-900" href={item.href}
							>{item.label}</a
						>
					{/each}
				</div>
			</div>
			<div>
				<h4 class="headline text-lg font-bold text-slate-900">{t.footer.social}</h4>
				<div class="mt-3 flex flex-wrap gap-3 text-sm">
					<a
						class="rounded-full bg-slate-100 px-3 py-1 text-slate-700 transition hover:bg-slate-200"
						href={t.identity.linkedin}
						target="_blank"
						rel="noreferrer">LinkedIn</a
					>
					<a
						class="rounded-full bg-slate-100 px-3 py-1 text-slate-700 transition hover:bg-slate-200"
						href={t.identity.github}
						target="_blank"
						rel="noreferrer">GitHub</a
					>
					<a
						class="rounded-full bg-slate-100 px-3 py-1 text-slate-700 transition hover:bg-slate-200"
						href={t.identity.instagram}
						target="_blank"
						rel="noreferrer">Instagram</a
					>
					<a
						class="rounded-full bg-slate-100 px-3 py-1 text-slate-700 transition hover:bg-slate-200"
						href={t.identity.facebook}
						target="_blank"
						rel="noreferrer">Facebook</a
					>
					<a
						class="rounded-full bg-slate-100 px-3 py-1 text-slate-700 transition hover:bg-slate-200"
						href={`mailto:${t.identity.email}`}>Email</a
					>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-8 pt-5 text-xs text-slate-500">
			© {yearNow}
			{t.identity.name}. {t.footer.copyright}
		</div>
	</footer>
</main>

<style>
	:global(body) {
		font-family: 'Be Vietnam Pro', sans-serif;
	}

	.headline {
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	.mobile-drawer-overlay {
		position: fixed;
		inset: 0;
		background: rgba(12, 15, 16, 0.35);
		opacity: 0;
		pointer-events: none;
		transition: opacity 300ms ease;
		z-index: 60;
	}

	.mobile-drawer-overlay.open {
		opacity: 1;
		pointer-events: auto;
	}

	.mobile-drawer {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 280px;
		background: white;
		box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.28);
		padding: 1.25rem;
		transform: translateX(-100%);
		transition: transform 300ms ease;
		z-index: 70;
	}

	.mobile-drawer.open {
		transform: translateX(0);
	}

	.animate-rise {
		animation: rise 700ms ease-out both;
	}

	.hover-float {
		transition: transform 350ms ease;
	}

	.hover-float:hover {
		transform: rotate(4deg) translateY(-8px);
	}

	.section-grid-light,
	.section-grid-muted {
		position: relative;
		overflow: hidden;
		isolation: isolate;
	}

	.section-grid-light > *,
	.section-grid-muted > * {
		position: relative;
		z-index: 1;
	}

	.section-grid-light {
		background: linear-gradient(180deg, #f7f8f9 0%, #f3f5f6 100%);
	}

	.section-grid-muted {
		background: linear-gradient(180deg, #eef2f5 0%, #f2f4f6 100%);
	}

	.section-grid-light::before,
	.section-grid-muted::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(to right, rgba(108, 90, 0, 0.09) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(108, 90, 0, 0.09) 1px, transparent 1px);
		background-size: 38px 38px;
		animation: grid-drift 28s linear infinite;
		z-index: 0;
	}

	.section-grid-light::before {
		opacity: 0.32;
		mask-image: radial-gradient(circle at 18% 30%, black 30%, transparent 75%);
	}

	.section-grid-muted::before {
		opacity: 0.26;
		mask-image: radial-gradient(circle at 78% 35%, black 26%, transparent 74%);
	}

	.section-grid-light::after,
	.section-grid-muted::after {
		content: '';
		position: absolute;
		width: min(32vw, 360px);
		height: min(32vw, 360px);
		border-radius: 18px;
		border: 1px solid rgba(255, 206, 72, 0.3);
		z-index: 0;
		pointer-events: none;
	}

	.section-grid-light::after {
		right: -8%;
		top: 12%;
		background:
			radial-gradient(circle at 30% 30%, rgba(255, 215, 9, 0.2), rgba(255, 215, 9, 0.02) 66%),
			linear-gradient(145deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0));
		transform: rotate(-7deg);
	}

	.section-grid-muted::after {
		left: -8%;
		top: 18%;
		background:
			radial-gradient(circle at 68% 24%, rgba(154, 230, 255, 0.2), rgba(154, 230, 255, 0.02) 64%),
			linear-gradient(155deg, rgba(255, 255, 255, 0.38), rgba(255, 255, 255, 0));
		transform: rotate(8deg);
	}

	.hero-grid-section {
		position: relative;
		overflow: hidden;
		background: linear-gradient(180deg, #f8f9fa 0%, #f5f6f7 100%);
	}

	.hero-grid-bg {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(to right, rgba(108, 90, 0, 0.12) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(108, 90, 0, 0.12) 1px, transparent 1px);
		background-size: 44px 44px;
		mask-image: radial-gradient(circle at 30% 30%, black 30%, transparent 78%);
		opacity: 0.75;
		animation: grid-drift 20s linear infinite;
	}

	.hero-grid-glow {
		position: absolute;
		inset: -10% -10% auto auto;
		width: min(38vw, 520px);
		height: min(38vw, 520px);
		border: 1px solid rgba(255, 206, 72, 0.55);
		border-radius: 24px;
		background:
			radial-gradient(circle at 30% 30%, rgba(255, 215, 9, 0.35), rgba(255, 215, 9, 0.02) 65%),
			linear-gradient(145deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
		transform: rotate(-8deg);
		box-shadow: 0 35px 80px -40px rgba(108, 90, 0, 0.4);
		animation: glow-float 8s ease-in-out infinite;
	}

	@keyframes grid-drift {
		from {
			background-position:
				0 0,
				0 0;
		}
		to {
			background-position:
				44px 18px,
				22px 44px;
		}
	}

	@keyframes glow-float {
		0%,
		100% {
			transform: rotate(-8deg) translateY(0);
		}
		50% {
			transform: rotate(-6deg) translateY(12px);
		}
	}

	@media (max-width: 767px) {
		.hero-grid-bg {
			background-size: 32px 32px;
			opacity: 0.55;
		}

		.hero-grid-glow {
			width: 70vw;
			height: 70vw;
			right: -25%;
			top: -6%;
		}

		.section-grid-light::before,
		.section-grid-muted::before {
			background-size: 28px 28px;
		}

		.section-grid-light::after,
		.section-grid-muted::after {
			width: 58vw;
			height: 58vw;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.section-grid-light::before,
		.section-grid-muted::before,
		.hero-grid-bg,
		.hero-grid-glow {
			animation: none;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (min-width: 768px) {
		.mobile-drawer,
		.mobile-drawer-overlay {
			display: none;
		}
	}
</style>
