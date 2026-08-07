import { Avatar } from './Avatar'
import { BellIcon, MenuIcon } from './icons'
import './Header.css'

interface HeaderProps {
  /** Current page title, e.g. "หน้าหลัก" or "โครงการ". */
  title: string
  onToggleSidebar: () => void
}

/**
 * The sidebar is now a fixed-position overlay rather than a layout element
 * that pushes the content, so it never covers or displaces the header —
 * the hamburger here is always visible and simply toggles the overlay.
 */
export function Header({ title, onToggleSidebar }: HeaderProps) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <button
          type="button"
          className="topbar__toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <MenuIcon />
        </button>
        <h1 className="topbar__title">{title}</h1>
      </div>

      <div className="topbar__right">
        <button type="button" className="topbar__bell" aria-label="Notifications">
          <BellIcon />
        </button>
        <Avatar size={36} />
      </div>
    </header>
  )
}
