/* export const EncodeObject = (object: any): string => {
  if (object) {
      const jsonString = JSON.stringify(object);
      const encodedString = btoa(jsonString);
      return encodedString;
  }
  return '';
};

export const DecodeObject = (encodedString: string): any => {
  if (encodedString.trim() !== "") {
      const decodedString = atob(encodedString);
      const jsonObject = JSON.parse(decodedString);
      return jsonObject;
  }
  return null;
}; */
// Hàm mã hóa chuỗi UTF-8 thành Base64
function utf8_to_b64(str: string | number | boolean) {
  return btoa(unescape(encodeURIComponent(str)));
}

// Hàm giải mã chuỗi Base64 thành UTF-8
function b64_to_utf8(str: string) {
  return decodeURIComponent(escape(atob(str)));
}

export const EncodeObject = (object: any): string => {
  console.log(object)
  if (object) {
      const jsonString = JSON.stringify(object);
      const encodedString = utf8_to_b64(jsonString);
      return encodedString;
  }
  return '';
};

export const DecodeObject = (encodedString: string): any => {
  if (encodedString.trim() !== "") {
      const decodedString = b64_to_utf8(encodedString);
      const jsonObject = JSON.parse(decodedString);
      return jsonObject;
  }
  return null;
};