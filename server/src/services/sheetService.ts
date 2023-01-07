import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet
import Sheet = GoogleAppsScript.Spreadsheet.Sheet

export class SheetService {
  /**
   * 新しいスプレッドシートを作成する
   * @param sheetName 指定のスプレッドシート名
   */
  static createNewFile(sheetName: string): void {
    SheetService.createInitialSpreadsheet(sheetName)
  }

  /**
   * スプレッドシートを取得する
   * @param sheetUrl 指定のスプレッドシートURL
   */
  static getSpreadsheet(sheetUrl: string): Spreadsheet {
    return SpreadsheetApp.openByUrl(sheetUrl)
  }

  /**
   * スプレッドシートを追加する
   * @param sheetName 指定のスプレッドシート名
   */
  static createInitialSpreadsheet(sheetName: string): void {
    SpreadsheetApp.create(sheetName)
  }

  /**
   * シートを取得する
   * @param ss Spreadsheetオブジェクト
   * @param sheetName 指定のスプレッドシート名
   */
  static getSheetByName(ss: Spreadsheet, sheetName: string): Sheet {
    return ss.getSheetByName(sheetName)
  }

  /**
   * 指定の範囲のデータ(指定)を取得する
   * @param sheet Sheetオブジェクト
   * @param row 指定の行
   * @param column 指定の列
   */
  static getSpecifiedDataOnRange(sheet: Sheet, row: number, column: number): string | object {
    const range = sheet.getRange(row, column)
    return range.getValue()
  }

  /**
   * 指定の範囲のデータ(座標形式)を取得する
   * @param sheet Sheetオブジェクト
   * @param row 指定の行
   * @param column 指定の列
   */
  static getCoordinateDataOnRange(sheet: Sheet, row: number, column: number): string | object {
    const range = sheet.getRange(row, column)
    return range.getValue()
  }

  /**
   * 指定の範囲のデータ(指定)を更新する
   * @param sheet Sheetオブジェクト
   * @param row 指定の行
   * @param column 指定の列
   * @param data 指定のデータ
   */
  static updateSpecifiedDataToRange(sheet: Sheet, row: number, column: number, data: string): void {
    const range = sheet.getRange(row, column)
    range.setValue(data)
  }

  /**
   * 指定の範囲のデータ(座標形式)を更新する
   * @param sheet Sheetオブジェクト
   * @param row 指定の行
   * @param column 指定の列
   * @param data 指定のデータ
   */
  static updateCoordinateDataToRange(
    sheet: Sheet,
    row: number,
    column: number,
    data: string,
  ): void {
    const range = sheet.getRange(row, column)
    range.setValue(data)
  }
}
