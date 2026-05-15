let name = "とんペディア"
const maxCount = 10
console.log(name)
const greet = (name) => {
  return "こんにちは、" + name + "！"
}
const score = 90
 
if (score >= 80) {
  console.log("合格")
} else if (score >= 60) {
  console.log("もう少し")
} else {
  console.log("不合格")
}
const fruits = ["りんご", "みかん", "バナナ"]
for (const fruit of fruits) {
  console.log(fruit)
}
const messages = fruits.map((fruit) => fruit + "が好き")
console.log(messages)
const user = {
  name: "田中",
  age: 19,
  university: "東北大学"
}
const button = document.getElementById("btn") 
const message = document.getElementById("message") 
 
button.addEventListener("click", () => {
  message.textContent = "クリックされました！"
})

const count2 = document.getElementById("count")
const Button2 = document.getElementById("increment")
const Button3= document.getElementById("reset")
let count = 0
Button2.addEventListener("click", function() {
  count = count + 1
  count2.textContent = count
})
Button3.addEventListener("click", function() {
  count = 0
  count2.textContent = count
})
require('dotenv').config()
