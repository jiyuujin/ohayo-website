/**
 * プロパティ値を設定する
 * @param key
 * @param id
 */
export const setPropertyValue = (key: string, id: string): void => {
  PropertiesService.getScriptProperties().setProperty(key, id)
}

/**
 * プロパティ値を取得する
 * @param key
 */
export const getPropertyValue = (key: string): string => {
  return PropertiesService.getScriptProperties().getProperty(key)
}

/**
 * 日付を設定する
 * @param date
 */
export const getDayFormat = (date = new Date()): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}
