

export const metadata = {
  title: 'ELO Health Redirects',
  description: 'You are here but not for long.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
