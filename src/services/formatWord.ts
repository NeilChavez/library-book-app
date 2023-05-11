export const formatWord = (word: string): string => {
  const capitalized = word.charAt(0).toUpperCase()
  const restOfWord = word.slice(1)
  return capitalized + restOfWord
}
