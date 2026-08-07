/** A single navigation entry rendered as a pill button in the Sidebar. */
export interface NavItem {
  label: string
  active: boolean
}

/** Minimal user info shown in the Sidebar's bottom profile card. */
export interface UserInfo {
  name: string
  role: string
}
