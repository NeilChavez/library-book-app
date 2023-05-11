import type React from 'react'
import { useEffect, useRef, useState } from 'react'

interface SearchHookResult {
  query: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const useSearch = (): SearchHookResult => {
  const [query, setQuery] = useState('')
  const isFirstInput = useRef(true)
  useEffect(() => {
    if (isFirstInput.current) {
      const newRefValue = query === ''
      isFirstInput.current = newRefValue
    }
  }, [query])
  return {
    query,
    setQuery
  }
}
