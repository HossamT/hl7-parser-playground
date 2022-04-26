export function normalizeName(name?: string): string {
    return (name || '').toUpperCase()
        .replace(new RegExp(' ', 'g'), '_')
        .replace(new RegExp('#', 'g'), '')
        .replace(new RegExp('-', 'g'), '')
        .replace(new RegExp(',', 'g'), '_');
}
