export const EncodeObject = (object: any): string => {
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
};