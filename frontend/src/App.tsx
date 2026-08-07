import { useState } from 'react'
import { Layout } from './components/Layout'
import { LoginPage } from './components/LoginPage'
import type { NavItem } from './components/types'

const NAV_LABELS = ['หน้าหลัก', 'พนักงาน', 'โครงการ', 'คำร้องขอเพิ่มพนักงาน', 'จัดสรรงาน']

const SAMPLE_USER = {
  name: 'พีรพัฒน์ โพธิ์นางรอง',
  role: 'ผู้จัดการโครงการ',
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)

  const navItems: NavItem[] = NAV_LABELS.map((label, index) => ({
    label,
    active: index === activeIndex,
  }))

  if (!loggedIn) {
    return <LoginPage onSubmit={() => setLoggedIn(true)} />
  }

  return (
    <Layout
      appTitle="Work management"
      pageTitle={NAV_LABELS[activeIndex]}
      navItems={navItems}
      onNavItemClick={setActiveIndex}
      user={SAMPLE_USER}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: 16,
          padding: 24,
          maxWidth: 480,
        }}
      >
        <p style={{ margin: 0, color: '#14161c' }}>
          Content area placeholder — replace with real page content for
          &ldquo;{NAV_LABELS[activeIndex]}&rdquo;.
        </p>
      </div>
    </Layout>
  )
}

export default App
