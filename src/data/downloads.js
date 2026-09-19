const GDOC = 'https://docs.google.com/document/d/1dqueBM16AB1KzhyibDjwv_4bRdGkBIRZeX8luy1wHdM'

export const downloadsByLang = {
  de: [
    {
      id: 'karten-de-fr',
      titleKey: 'downloads.items.karten_DE-FR.title',
      descKey: 'downloads.items.karten_DE-FR.desc',
      file: '/dokumente/karten-set_DE-FR.pdf',
      external: false,
    },
    {
      id: 'karten-de-pol',
      titleKey: 'downloads.items.karten_DE-POL.title',
      descKey: 'downloads.items.karten_DE-POL.desc',
      file: '/dokumente/karten-set_DE-POL.pdf',
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
      id: 'karten-fr-de',
      titleKey: 'downloads.items.karten_FR-DE.title',
      descKey: 'downloads.items.karten_FR-DE.desc',
      file: '/dokumente/karten-set_DE-FR.pdf',
      external: false,
    },
    {
      id: 'karten-fr-pol',
      titleKey: 'downloads.items.karten_FR-POL.title',
      descKey: 'downloads.items.karten_FR-POL.desc',
      file: '/dokumente/karten-set_FR-POL.pdf',
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
      id: 'karten-pl-de',
      titleKey: 'downloads.items.karten-POL-DE.title',
      descKey: 'downloads.items.karten-POL-DE.desc',
      file: '/dokumente/karten-set_DE-POL.pdf',
      external: false,
    },
    {
      id: 'karten-pl-fr',
      titleKey: 'downloads.items.karten-POL-FR.title',
      descKey: 'downloads.items.karten-POL-FR.desc',
      file: '/dokumente/karten-set_FR-POL.pdf',
      external: false,
    },
    {
      id: 'leitfaden-pl',
      titleKey: 'downloads.items.moderationsleitfaden.title',
      descKey: 'downloads.items.moderationsleitfaden.desc',
      file: `${GDOC}/edit?tab=t.c0kr9ya17ma7`,
      external: true,
      comingSoon: false,
    },
  ],
}

// Legacy flat list kept for any components that still need it
export const downloads = [
  ...downloadsByLang.de,
  ...downloadsByLang.fr.filter(d => d.id !== 'karten-fr'),
  ...downloadsByLang.pl.filter(d => d.id !== 'karten-pl'),
]
