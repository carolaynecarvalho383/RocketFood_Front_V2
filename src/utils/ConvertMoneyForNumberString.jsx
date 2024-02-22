
 export function ConvertMoneyForNumberString(value) {
  let money = String(value)
  
  const strNum = money.replace(/[^0-9]/g, '')

  return strNum
}

