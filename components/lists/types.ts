export const listType = ['flex', 'grid'] as const
export type ListType = typeof listType[number]
