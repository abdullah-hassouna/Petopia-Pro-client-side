export type tCategories = 'adoption' | 'help' | 'discuss' | 'product' | 'other'

const viaColorClass = (category?: tCategories | 'help') => {
    let colorScheme = ['adoption', 'help', 'discuss', 'product'].includes(category) ? category : 'help'
    return { colorScheme, via: `via-${colorScheme.toLowerCase()}` }
}

export default viaColorClass