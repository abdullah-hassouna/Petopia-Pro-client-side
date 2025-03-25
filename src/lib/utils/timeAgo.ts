import { formatDistanceToNow } from 'date-fns'

/**
 * Formats a timestamp into a human-readable relative time string
 * @param timestamp - The timestamp to format (can be Date object or ISO string)
 * @returns A string like "2 hours ago", "5 minutes ago", etc.
 */
export const timeAgo = (timestamp: string | Date): string => {
  try {
    let date: Date
    
    if (typeof timestamp === 'string') {
      // Handle different date string formats
      if (timestamp.includes('T')) {
        // ISO format
        date = new Date(timestamp)
      } else {
        // Try parsing as local date string
        const [datePart, timePart] = timestamp.split(' ')
        if (datePart && timePart) {
          const [year, month, day] = datePart.split('-').map(Number)
          const [hours, minutes, seconds] = timePart.split(':').map(Number)
          date = new Date(year, month - 1, day, hours, minutes, seconds)
        } else {
          date = new Date(timestamp)
        }
      }
    } else {
      date = timestamp
    }

    // Validate the date
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', timestamp)
      return 'Invalid date'
    }

    const result = formatDistanceToNow(date, { addSuffix: true })
    
    // Special case for very recent timestamps
    if (result === 'less than a minute ago') {
      return 'Just now'
    }
    
    return result
  } catch (error) {
    console.error('Error formatting time:', error)
    return 'Invalid date'
  }
} 