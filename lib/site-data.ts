export const INSTAGRAM_URL = 'https://instagram.com/tattoobysoul'

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Styles', href: '#styles' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact', href: '#contact' },
] as const

export const SLIDER_IMAGES = [
  {
    src: '/slider-1.png',
    title: 'Ornamental Sleeve',
    caption: 'Blackwork · Full arm · 14 hours',
  },
  {
    src: '/slider-2.png',
    title: 'Spine Botanical',
    caption: 'Fine line · Back · 6 hours',
  },
  {
    src: '/slider-3.png',
    title: 'Portrait Study',
    caption: 'Realism · Forearm · 9 hours',
  },
] as const

export type GalleryCategory =
  | 'Blackwork'
  | 'Fine Line'
  | 'Realism'
  | 'Geometric'
  | 'Ornamental'
  | 'Custom'

export const GALLERY_FILTERS = [
  'All',
  'Blackwork',
  'Fine Line',
  'Realism',
  'Geometric',
  'Ornamental',
  'Custom',
] as const

export type GalleryItem = {
  src: string
  title: string
  category: GalleryCategory
  span: 'tall' | 'wide' | 'normal'
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { src: '/gallery-blackwork-1.png', title: 'Solid Geometry', category: 'Blackwork', span: 'tall' },
  { src: '/gallery-fineline-1.png', title: 'Wildflower', category: 'Fine Line', span: 'normal' },
  { src: '/gallery-realism-1.png', title: 'The Gaze', category: 'Realism', span: 'normal' },
  { src: '/gallery-geometric-1.png', title: 'Sacred Mandala', category: 'Geometric', span: 'wide' },
  { src: '/gallery-ornamental-1.png', title: 'Filigree Hand', category: 'Ornamental', span: 'tall' },
  { src: '/gallery-custom-1.png', title: 'Abstraction', category: 'Custom', span: 'normal' },
  { src: '/gallery-blackwork-2.png', title: 'Negative Space', category: 'Blackwork', span: 'normal' },
  { src: '/gallery-fineline-2.png', title: 'Constellation', category: 'Fine Line', span: 'tall' },
  { src: '/gallery-realism-2.png', title: 'Rose & Bone', category: 'Realism', span: 'wide' },
  { src: '/gallery-geometric-2.png', title: 'Linear Field', category: 'Geometric', span: 'normal' },
  { src: '/gallery-ornamental-2.png', title: 'Nape Mandala', category: 'Ornamental', span: 'normal' },
  { src: '/gallery-custom-2.png', title: 'Moth & Moon', category: 'Custom', span: 'tall' },
]

export const STYLES = [
  {
    name: 'Blackwork',
    src: '/gallery-blackwork-2.png',
    description:
      'Bold, uncompromising fields of solid black and negative space. Graphic, permanent, unmistakable.',
  },
  {
    name: 'Fine Line',
    src: '/gallery-fineline-1.png',
    description:
      'Whisper-thin linework and delicate detail. Quiet pieces that live close to the skin.',
  },
  {
    name: 'Realism',
    src: '/gallery-realism-1.png',
    description:
      'Depth, shadow and light rendered with obsessive precision. Portraits that breathe.',
  },
  {
    name: 'Ornamental',
    src: '/gallery-ornamental-1.png',
    description:
      'Symmetry, lace and filigree that follow the body. Adornment as architecture.',
  },
  {
    name: 'Custom',
    src: '/gallery-custom-1.png',
    description:
      'One idea, one body, one design. Built from scratch and never repeated.',
  },
] as const

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Idea',
    description:
      'It starts with a conversation. Your story, references and intent — everything that makes the piece yours.',
  },
  {
    number: '02',
    title: 'Consultation',
    description:
      'We meet in the private studio to refine concept, placement and scale until the vision is exact.',
  },
  {
    number: '03',
    title: 'Creation',
    description:
      'A single, focused session. Custom-drawn, hand-executed, and never rushed.',
  },
  {
    number: '04',
    title: 'Aftercare',
    description:
      'Detailed guidance and follow-up so the work heals as sharp as the day it was made.',
  },
] as const

export const QUOTES = [
  {
    text: 'Soul understood something I could not explain. What I left with was more me than I was before.',
    author: 'M. Renner',
    meta: 'Blackwork sleeve',
  },
  {
    text: 'Every line was intentional. It never felt like a transaction — it felt like being seen.',
    author: 'A. Voss',
    meta: 'Fine line spine',
  },
  {
    text: 'The most patient, precise artist I have ever sat with. Worth every hour.',
    author: 'J. Okafor',
    meta: 'Realism portrait',
  },
] as const

export const INSTAGRAM_GRID = [
  '/tattoo-no1.jpg',
  '/tattoo-no2.jpg',
  '/tattoo-no3.jpg',
  '/tattoo-no4.jpg',
  '/tattoo-no5.jpg',
  '/tattoo-no6.jpg',
]

export const TATTOO_STYLE_OPTIONS = [
  'Blackwork',
  'Fine Line',
  'Realism',
  'Geometric',
  'Ornamental',
  'Custom / Not sure',
]
