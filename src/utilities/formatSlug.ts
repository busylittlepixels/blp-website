import type { FieldHook } from 'payload/types'

const format = (val: string): string =>
  val
    .replace(' ', '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()

const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return format(value)
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData)
    }

    return value
  }

export default formatSlug
