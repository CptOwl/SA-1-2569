import { useState, type ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import type { NavItem, UserInfo } from './types'
import './Layout.css'

interface LayoutProps {
  appTitle?: string
  pageTitle: string
  navItems: NavItem[]
  onNavItemClick?: (index: number) => void
  user: UserInfo
  children: ReactNode
}

/**
 * Shared shell composing Sidebar + Header around a content area.
 * Owns the open/closed state for the sidebar: the hamburger in the Sidebar
 * or the Header can both toggle it. The sidebar is an always-mounted overlay
 * (fixed position, slid in/out via transform) so it never displaces the
 * content area — a backdrop is shown behind it while open and closes it on
 * click.
 */
export function Layout({ appTitle, pageTitle, navItems, onNavItemClick, user, children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app-shell">
      <Sidebar
        appTitle={appTitle}
        items={navItems}
        onItemClick={onNavItemClick}
        user={user}
        open={sidebarOpen}
        onToggle={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="app-shell__backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="app-shell__main">
        <Header
          title={pageTitle}
          onToggleSidebar={() => setSidebarOpen((open) => !open)}
        />
        <main className="app-shell__content">{children}</main>
      </div>
    </div>
  )
}
