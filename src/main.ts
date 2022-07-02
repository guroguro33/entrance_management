
const SP: GoogleAppsScript.Properties.Properties = PropertiesService.getScriptProperties();
SP.setProperty('SSID', '1QN1SbJwhBVe1QerW9wD_aHCS8z2iqZiNoEpLfT2cyvY');
SP.setProperty('SHEET_NAME', '入退室管理');
SP.setProperty('LAST_LEAVE', '最終退室');
let message:string;

/**
 * Top画面初期表示
 *
 * @export
 * @param {*} e
 * @return {*}
 */
export function doGet(e){
  // Top画面を表示
  return HtmlService.createTemplateFromFile("index").evaluate();
};

/**
 *
 *
 * @export
 * @param {*} e
 * @return {*}
 */
export function doPost(e){

  // スプレッドシートへの書き込み処理
  if(this.checkPostData(e)){
    this.execWriteSpreadsheet(e);
  };

  // Top画面を表示
  return HtmlService.createTemplateFromFile("index").evaluate();
};

/**
 *　スプレッドシートから書き込み用シートを取得し返却する
 *
 * @export
 * @param {string} name シート名
 * @return {GoogleAppsScript.Spreadsheet.Sheet} sheet シート
 */
export function getSheet(name: string){
  // SSIDからスプレッドシートを取得
  let ss:GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.openById(SP.getProperty('SSID'));

  // シート名からシートを取得
  let sheet:GoogleAppsScript.Spreadsheet.Sheet = ss.getSheetByName(name);
  return sheet;
};

/**
 * スプレッドシートへの書き込み処理
 *
 * @export
 * @param {*} e
 */
export function execWriteSpreadsheet(e){
  // シート名からシートを取得
  let sheet:GoogleAppsScript.Spreadsheet.Sheet = getSheet(SP.getProperty('SHEET_NAME'));

  // 最終行に記入
  sheet.appendRow([new Date(), e.parameter.button, e.parameter.name, e.parameter.airConditioner, e.parameter.pc, e.parameter.extinction, e.parameter.fan, e.parameter.alsok, e.parameter.remarks]);
};

/**
 * 入力データのチェックを行う
 *
 * @export
 * @param {*} e
 * @return {*}
 */
export function checkPostData(e){

  // 担当者氏名は必須
  if(!e.parameter.name){
    this.setMessage('担当者氏名は必須です。')
    return false;
  };

  // 最終退室の場合のチェック処理
  if(e.parameter.button === SP.getProperty('LAST_LEAVE')){
    if(!this.checkLastLeave(e)){
      return false;
    };
  };

  // チェック完了
  return true;
};

/**
 * 最終退室の場合のチェック処理
 *
 * @export
 * @param {*} e
 * @return {*}
 */
export function checkLastLeave(e){
  // 最終退室の場合はチェック項目が必須
  if(!e.parameter.airConditioner ||!e.parameter.pc || !e.parameter.extinction || !e.parameter.fan || !e.parameter.alsok){
    this.setMessage('最終退室時のチェックはお済みですか？')
    return false;
  }
  return true;
};

/**
 * 画面表示用メッセージを設定する
 *
 * @export
 * @param {string} string 設定するメッセージ
 * @return {string}
 */
export function setMessage(string:string){
  message = string;
  return message;
};

/**
 * 画面表示用メッセージを返却する
 *
 * @export
 * @return {string} message 画面表示用メッセージ
 */
export function getMessage(){
  return message;
};
