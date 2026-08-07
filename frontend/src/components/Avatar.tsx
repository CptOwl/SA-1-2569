interface AvatarProps {
  size?: number
}

/** Solid-blue circular placeholder avatar (no photo support yet). */
export function Avatar({ size = 40 }: AvatarProps) {
  return (
    <div
      className="avatar-circle"
      style={{ width: size, height: size }}
      role="img"
      aria-label="User avatar"
    />
  )
}
