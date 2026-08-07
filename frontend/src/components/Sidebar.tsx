import { Avatar } from './Avatar'
import { MenuIcon } from './icons'
import type { NavItem, UserInfo } from './types'
import './Sidebar.css'

interface SidebarProps {
  /** App name shown next to the hamburger icon, e.g. "Work management". */
  appTitle?: string
  /** Data-driven nav list — differs per role, so it is never hardcoded here. */
  items: NavItem[]
  onItemClick?: (index: number) => void
  user: UserInfo
  /** Whether the sidebar is currently slid into view. Always mounted; this only
   *  drives the transform so it can animate as an overlay. */
  open: boolean
  /** Collapses/hides the sidebar. Controlled by the parent Layout. */
  onToggle: () => void
}

export function Sidebar({
  appTitle = 'Work management',
  items,
  onItemClick,
  user,
  open,
  onToggle,
}: SidebarProps) {
  return (
    <aside className={`sidebar${open ? ' sidebar--open' : ''}`}>
      <div className="sidebar__top">
        <button
          type="button"
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label="Collapse sidebar"
        >
          <MenuIcon />
        </button>
        <span className="sidebar__title">{appTitle}</span>
      </div>

      <nav className="sidebar__nav">
        {items.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            type="button"
            className={`sidebar__nav-item${item.active ? ' sidebar__nav-item--active' : ''}`}
            onClick={() => onItemClick?.(index)}
            aria-current={item.active ? 'page' : undefined}
          >
            <span className="sidebar__nav-dot" />
            <span className="sidebar__nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__profile">
        <Avatar size={40} />
        <div className="sidebar__profile-text">
          <span className="sidebar__profile-name">{user.name}</span>
          <span className="sidebar__profile-role">{user.role}</span>
        </div>
      </div>
    </aside>
  )
}
