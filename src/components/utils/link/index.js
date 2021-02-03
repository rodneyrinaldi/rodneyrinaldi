import Link from 'next/link'

export default function PLink({ children, href, ...props }) {
  return (
    <Link href={href}>
      <a {...props}>
        {children}
      </a>
    </Link>
  )
}
