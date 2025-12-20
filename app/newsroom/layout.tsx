import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsroom | EMUSKI Manufacturing Solutions',
  description: 'Latest news, updates, and insights from EMUSKI Manufacturing Solutions. Stay informed about our precision engineering innovations, manufacturing excellence, and industry leadership.',
  alternates: {
    canonical: 'https://www.emuski.com/newsroom',
  },
}

export default function NewsroomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
