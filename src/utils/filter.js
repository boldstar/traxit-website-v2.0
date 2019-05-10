// this is a function use to format phone numbers on the form.vue component
export function formatNumber(value) {
    //regex removes special characters and white space so that the number can be compared
    if(value) {
        value = value.replace(/[^0-9]/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
      return value
    }
    return value
  }