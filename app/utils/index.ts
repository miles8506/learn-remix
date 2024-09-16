export const validationLength = (v: string, max: number) => {
  const l = v.trim().length
  if (!l || l > max) return false
  return true
}

export const validationEmail = (v: string) => {
  return v.includes('@')
}
