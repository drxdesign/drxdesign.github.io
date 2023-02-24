import './globals.css'

export const metadata = {
  title: 'DRXDESIGN | Web Designer & Front End Developer',
  description: 'Hello, my name is Ziane Maamar, and I am a 31-year-old self-taught designer & frontend developer, focused on user experience, accessibility and modern web tech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
