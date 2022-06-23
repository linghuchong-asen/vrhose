const getUid = (len) => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
  const idArr = new Array(len).fill('').map((item) => {
    const random = Math.floor(Math.random() * 16);
    const randomChar = chars[random];
    return randomChar
  })
  const id = idArr.join('')
  return id
}
console.log(getUid(8));
