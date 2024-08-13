const base64ToBinary = (base64Data: string) => {
    if (!base64Data) return
    // Remove the base64 prefix (data:image/jpeg;base64,)
    const base64WithoutPrefix = base64Data.split(',')[1];
    
    // Convert base64 to binary data
    const binaryString = atob(base64WithoutPrefix); // atob decodes a base64 string to a binary string
    const len = binaryString.length;
    const binaryArray = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
      binaryArray[i] = binaryString.charCodeAt(i);
    }

    return binaryArray;
  };

export default base64ToBinary