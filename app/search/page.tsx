import { Suspense } from 'react'
import SearchContent from './SearchContent'

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="py-16 text-center text-gray-500">
        Loading search...
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}