const GDOC = 'https://docs.google.com/document/d/1dqueBM16AB1KzhyibDjwv_4bRdGkBIRZeX8luy1wHdM'

export const downloadsByLang = {
  de: [
    {
      id: 'karten-de',
      titleKey: 'downloads.items.karten.title',
      descKey: 'downloads.items.karten.desc',
      file: '/downloads/karten-set.pdf',
      external: false,
    },
    {
      id: 'leitfaden-de',
      titleKey: 'downloads.items.moderationsleitfaden.title',
      descKey: 'downloads.items.moderationsleitfaden.desc',
      file: `${GDOC}/edit?tab=t.jl2wxs6myb1q`,
      external: true,
    },
  ],
  fr: [
    {
      id: 'karten-fr',
      titleKey: 'downloads.items.karten.title',
      descKey: 'downloads.items.karten.desc',
      file: '/downloads/karten-set.pdf',
      external: false,
    },
    {
      id: 'leitfaden-fr',
      titleKey: 'downloads.items.moderationsleitfaden.title',
      descKey: 'downloads.items.moderationsleitfaden.desc',
      file: `${GDOC}/edit?tab=t.0`,
      external: true,
    },
  ],
  pl: [
    {
      id: 'karten-pl',
      titleKey: 'downloads.items.karten.title',
      descKey: 'downloads.items.karten.desc',
      file: '/downloads/karten-set.pdf',
      external: false,
    },
    {
      id: 'leitfaden-pl',
      titleKey: 'downloads.items.moderationsleitfaden.title',
      descKey: 'downloads.items.moderationsleitfaden.desc',
      file: `${GDOC}/edit?tab=t.c0kr9ya17ma7`,
      external: true,
      comingSoon: true,
    },
  ],
}

// Legacy flat list kept for any components that still need it
export const downloads = [
  ...downloadsByLang.de,
  ...downloadsByLang.fr.filter(d => d.id !== 'karten-fr'),
  ...downloadsByLang.pl.filter(d => d.id !== 'karten-pl'),
]
