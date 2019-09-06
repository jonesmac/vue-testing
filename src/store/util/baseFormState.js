export const baseFormStateObject = function({ mainKey, mainValue, errorMessages }) {
  return {
    [mainKey]: mainValue,
    isFetching: false,
    error: null,
    messages: [],
    errorMessages,
    cssClass: ''
  }
}