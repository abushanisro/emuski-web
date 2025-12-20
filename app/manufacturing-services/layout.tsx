import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing Excellence | EMUSKI',
  description: 'AI-driven manufacturing excellence solutions from EMUSKI. Your strategic partner delivering cost-effective, high-quality manufacturing services.',
  alternates: {
    canonical: 'https://www.emuski.com/manufacturing-services',
  },
}

export default function ManufacturingServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
