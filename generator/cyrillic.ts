export const cyrillicLookup = {
    
  // Cyrillic lowercase
  'а': 'a',
  'е': 'e',
  'о': 'o',
  'р': 'p',
  'с': 'c',
  'у': 'y',
  'х': 'x',
  'і': 'i',
  'ј': 'j',
  'к': 'k',
  'м': 'm',
  'т': 't',
  'н': 'H',
  'һ': 'h',
  'ӏ': 'I',

  // Cyrillic uppercase
  'А': 'A',
  'В': 'B',
  'Е': 'E',
  'К': 'K',
  'М': 'M',
  'Н': 'H',
  'О': 'O',
  'Р': 'P',
  'С': 'C',
  'Т': 'T',
  'Х': 'X',
  'І': 'I',
  'Ј': 'J',

  // Greek commonly abused as Latin
  'Α': 'A',
  'Β': 'B',
  'Ε': 'E',
  'Ζ': 'Z',
  'Η': 'H',
  'Ι': 'I',
  'Κ': 'K',
  'Μ': 'M',
  'Ν': 'N',
  'Ο': 'O',
  'Ρ': 'P',
  'Τ': 'T',
  'Υ': 'Y',
  'Χ': 'X',

  'α': 'a',
  'ι': 'i',
  'ο': 'o',
  'ρ': 'p',
  'υ': 'u',
  'χ': 'x',

  // Cyrillic lowercase
  'b': 'b',
  'ԁ': 'd',
  'ԍ': 'G',
  'ѵ': 'v',
  'ҽ': 'e',
  'ԛ': 'q',
  'ԝ': 'w',
  'ᴫ': 'n', // if encountered from other sets, visually n-ish

  // Cyrillic uppercase
  'Ь': 'b',
  'Ъ': 'b',
  'Ԍ': 'G',
  'Ԛ': 'Q',
  'Ԝ': 'W',

  // Greek lowercase
  'ν': 'v',
  'κ': 'k',
  'τ': 't',
  'ε': 'e',

  // Greek uppercase/lowercase sometimes abused
  'ϲ': 'c',
  'Ϲ': 'C',
  'Ϸ': 'p', // only if you want aggressive handling

  'γ': 'y', // too aggressive
  'λ': 'A', // very aggressive
  'ω': 'w', // not reliable enough in many fonts
}