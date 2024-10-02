let words = {
    "你好 (nǐ hǎo)": "Hello",
    "再见 (zàijiàn)": "Bye",
    "谢谢(xièxiè)": "Thank you",
    "对不起 (duìbuqǐ)": "sorry",
  };
  let words2 = [
    "你好",
    "再见",
    "谢谢",
    "对不起"
  ];
    let corwords = "";
    
function rword() {
  let keys = Object.keys(words);
  let r = Math.floor(Math.random() * keys.length);
  corwords = keys[r];
  return corwords
}

let word = document.getElementById('word')
word.innerText = rword()

let check = document.getElementById('check')
check.addEventListener('click', () => {
  let input = document.getElementById('input').value
  if (words[corwords].toLowerCase() === input.toLowerCase().trim()) {
    word.innerText = 'correct'
    setTimeout(() => {
      word.innerText = rword()
    }, 2000)
  }
  else {
    word.innerText = `incorrect its '${words[corwords]}'`
    setTimeout(() => {
      word.innerText = rword()
    }, 2000)
  }
})

let hear = document.getElementById('hear')
hear.addEventListener('click',
() => { 
  let speak = new SpeechSynthesisUtterance(word.innerText)
  speak.lang = 'zh-CN'
  window.speechSynthesis.speak(speak)
})
