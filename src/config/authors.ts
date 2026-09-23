export type AuthorProfile = {
  name: string
  jobTitle: string
  linkedinUrl: string
  image: string
  bio: string
}

export const FOUNDER_AUTHOR: AuthorProfile = {
  name: 'Singaravelan Srinivasan',
  jobTitle: 'Founder & CEO',
  linkedinUrl: 'https://www.linkedin.com/in/singaravelan-srinivasan-emuski/',
  image: '/assets/team/emuski-founder-ceo.jpg',
  bio: 'Founder and CEO of EMUSKI. Singaravelan Srinivasan has extensive experience in cost engineering, having led teams at Product Cost Optimisation Ltd in the UK and worked across automotive and aerospace industries. He founded EMUSKI to help companies optimize manufacturing costs and accelerate time-to-market.',
}

export function getAuthorProfile(name: string): AuthorProfile | undefined {
  return name === FOUNDER_AUTHOR.name ? FOUNDER_AUTHOR : undefined
}

export function toAbsoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `https://www.emuski.com${path}`
}
