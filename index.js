const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
# ⚗️ Learning is for The *[Courage](https://steamcommunity.com/profiles/76561198179920187)* With Others.
### 🌱 Hi, Lost lambs 😈<br/><br/>👁️The Self of us will one day be strong enough to influence others.<br/>Can We Control That?👿
<img align="left" src="https://github.com/VoluntieTsai/VoluntieTsai/blob/main/Elias.png" height="225" width="auto" >  
<br/><br/><br/>
🤝Credit is productivity.<br/>
🎭Don't be too rational to enjoy things like art in culture, just feel it.<br/>
👻Life and education need humor and entertainment too.<br/>
💬Infer by essence and information gap to face the confusion and anxiety.<br/>
❤️The things you chain yourself to, are the things that set you free.<br/>
🌎Even if only malicious voices remain, don't ignore kind people.<br/>
🕯️Time flies so fast, we will meet again.
<br/><br/>

---
### ⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %
⏰ Updated on ${new Date().toUTCString()}

---
🎮[Steam](https://steamcommunity.com/profiles/76561198179920187) 🗒️[Blog](https://steamcommunity.com/profiles/76561198179920187) 🏠[Home](https://steamcommunity.com/profiles/76561198179920187) More🍀[Linktree](https://linktr.ee/)
## 💡 I Hope These Will Help You.
### 📚Small Books written by me<br/><br/>
🍃Anger is easy, but same to forget.<br/>
🛡️Guarding the bottom line of everything.<br/>
🔥Let's do something for our lovely worlds, again and again.<br/><br/>
## “Something Need and Deserve a Lifetime to Practice”<br>“有些事需要并值得终生实践”<br/>
![Progress Bar CI By liununu](https://github.com/liununu/liununu/workflows/Progress%20Bar%20CI/badge.svg)\
`

console.log(readme)
