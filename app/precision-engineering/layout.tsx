import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering Innovation | EMUSKI',
  description: 'Mastering costs through engineering success with teardown analysis, design benchmarking, and advanced cost modeling solutions from EMUSKI.',
  alternates: {
    canonical: 'https://www.emuski.com/precision-engineering',
  },
}

export default function PrecisionEngineeringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
