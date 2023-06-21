export const metadata = {
  title: 'Secoda Interview Assignment',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default RootLayout
