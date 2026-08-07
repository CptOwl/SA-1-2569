import type { SVGProps } from 'react'

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2a6 6 0 0 0-6 6v3.09c0 .58-.2 1.14-.57 1.59L4 14.5c-.83 1-.1 2.5 1.18 2.5h13.64c1.28 0 2.01-1.5 1.18-2.5l-1.43-1.82a2.5 2.5 0 0 1-.57-1.59V8a6 6 0 0 0-6-6Z" />
      <path d="M9.5 19a2.5 2.5 0 0 0 5 0Z" />
    </svg>
  )
}
