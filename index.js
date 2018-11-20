(() => {
  const
    ROT_VAL = 0x8000,
    e = id => document.getElementById(id),
    button = e('button'),
    input = e('input'),
    whitespace = /\s/,
    tests = [whitespace],
    isValid = char => {
      return !tests.some(reg => reg.test(char))
    },
    rot = int => {
      return int < ROT_VAL
        ? int + ROT_VAL
        : int - ROT_VAL
    }
    doWork = () => {
      const
        source = input.value,
        len = source.length,
        result = new Array(len)
      let
        v, x, y, z
      for (x=0; x<len; x++) {
        y = source[x]
        v = isValid(y)
        z = source.codePointAt(x)
        result[x] = v ? rot(z) : z
      }
      input.value = String.fromCodePoint.apply(String, result)
    }
  button.id = ''
  button.onclick = doWork
})()
