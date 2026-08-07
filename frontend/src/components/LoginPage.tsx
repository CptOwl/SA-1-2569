import { useState, type FormEvent } from 'react'
import './LoginPage.css'

interface LoginPageProps {
  onSubmit: (username: string, password: string) => void
}

/**
 * Standalone login screen — full-viewport two-column layout, no Sidebar/Header.
 */
export function LoginPage({ onSubmit }: LoginPageProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(username, password)
  }

  return (
    <div className="login-page">
      <div className="login-page__brand">
        <h1 className="login-page__brand-text">
          ระบบจัดการองค์กร
          <br />
          และพนักงาน
        </h1>
      </div>

      <div className="login-page__panel">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2 className="login-card__title">เข้าสู่ระบบ</h2>

          <label className="login-card__label" htmlFor="login-username">
            ชื่อผู้ใช้(Username)
          </label>
          <input
            id="login-username"
            type="text"
            className="login-card__input"
            placeholder="กรอกชื่อผู้ใช้งาน"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <label className="login-card__label" htmlFor="login-password">
            รหัสผ่าน(Password)
          </label>
          <input
            id="login-password"
            type="password"
            className="login-card__input"
            placeholder="********"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="login-card__submit">
            เข้าสู่ระบบ
          </button>

          <p className="login-card__hint">ลืมรหัสผ่าน? ติดต่อ admin</p>
        </form>
      </div>
    </div>
  )
}
