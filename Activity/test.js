let inp = ["aeiouaeiou", "aeiouhjkl", "aei", "a"];
let vowel_len = (str_inp) => {
  console.log(str_inp);
  let chars = str_inp.split("");

  let vowels = 0;
  for (let i = 0; i < chars.length; i++) {
    if (
      chars[i] == "a" ||
      chars[i] == "e" ||
      chars[i] == "i" ||
      chars[i] == "o" ||
      chars[i] == "u"
    ) {
      vowels += 1;
    }
  }
  if (vowels > 3) {
    return str_inp;
  }
};
let out = inp.filter(vowel_len);

console.log(out);
/**
 * 014, 029,011, 040, 033, 002
 */
