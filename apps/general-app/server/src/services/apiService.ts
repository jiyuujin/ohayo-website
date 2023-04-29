export class ApiService {
  /**
   * GET通信を行う
   * @param api
   * @param options
   * @param payload
   */
  static getAuthenticationApi(
    api: string,
    options: { Authorization: string; Accept: string },
    payload: string,
  ) {
    return UrlFetchApp.fetch(api, {
      headers: options,
      method: 'get',
      contentType: 'application/json',
      muteHttpExceptions: true,
      payload: payload,
    })
  }

  /**
   * POST通信を行う
   * @param api
   * @param payload
   */
  static postApi(api: string, payload: string) {
    return UrlFetchApp.fetch(api, {
      method: 'post',
      contentType: 'application/json',
      muteHttpExceptions: true,
      payload: payload,
    })
  }

  /**
   * POST通信(Auth)を行う
   * @param api
   * @param options
   * @param payload
   */
  static postAuthenticationApi(
    api: string,
    options: { Authorization: string; Accept: string },
    payload: string,
  ) {
    return UrlFetchApp.fetch(api, {
      headers: options,
      method: 'post',
      contentType: 'application/json',
      muteHttpExceptions: true,
      payload: payload,
    })
  }
}
