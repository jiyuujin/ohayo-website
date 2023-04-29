const JP_CAL = 'ja.japanese#holiday@group.v.calendar.google.com'

/**
 * 現在の日付を取得する
 */
export const getCurrentYear = (date) => {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy')
}

/**
 * 現在の日付を取得する
 */
export const getCurrentMonth = (date) => {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'MM')
}

/**
 * 現在の日を取得する
 */
export const getCurrentDay = (date) => {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'dd')
}

/**
 * 現在の日付を取得する
 */
export const getCurrentDate = () => {
  return Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm')
}

/**
 * 平日か否かを判定する
 */
export const isBusinessDay = (date) => {
  if (date.getDay() == 0 || date.getDay() == 6) {
    return false
  }

  // 金曜は送信しない
  if (date.getDay() == 5) {
    return false
  }

  if (isSpecialDay(date) == false) {
    return false
  }

  const calJa = CalendarApp.getCalendarById(JP_CAL)

  return calJa.getEventsForDay(date).length <= 0
}

/**
 * 特別対応
 * 2021-2022 年末年始
 * 2022 ゴールデンウィーク
 * 2022 盆
 * 2022 シルバーウィーク
 * 2022-2023 年末年始
 */
export const isSpecialDay = (date) => {
  if (date.getFullYear() == 2021 && date.getMonth() + 1 == 12 && date.getDate() > 28) {
    return false
  }
  if (date.getFullYear() == 2022 && date.getMonth() + 1 == 1 && date.getDate() < 5) {
    return false
  }
  if (date.getFullYear() == 2022 && date.getMonth() + 1 == 4 && date.getDate() == 25) {
    return false
  }
  if (date.getFullYear() == 2022 && date.getMonth() + 1 == 5 && date.getDate() < 9) {
    return false
  }
  if (date.getFullYear() == 2022 && date.getMonth() + 1 == 8 && (date.getDate() > 8 && date.getDate() < 15)) {
    return false
  }
  if (date.getFullYear() == 2022 && date.getMonth() + 1 == 9 && (date.getDate() > 17 && date.getDate() < 25)) {
    return false
  }
  if (date.getFullYear() == 2022 && date.getMonth() + 1 == 12 && date.getDate() > 22) {
    return false
  }
  if (date.getFullYear() == 2023 && date.getMonth() + 1 == 1 && date.getDate() < 6) {
    return false
  }
  return true
}
