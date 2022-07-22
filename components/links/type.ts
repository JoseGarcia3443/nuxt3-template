export const linkTypes = ['default', 'underline'] as const
export const linkColors = ['light', 'dark'] as const
export type LinkTypes = typeof linkTypes[number]
export type LinkColors = typeof linkColors[number]
