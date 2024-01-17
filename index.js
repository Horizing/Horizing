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
### ⚗️ Learning is for The Courage With Other People.

<img align="left" src="https://github.com/VoluntieTsai/VoluntieTsai/blob/main/Elias.png" height="225" width="auto" >  
<br/><br/><br/>
🤝Credit is productivity.<br/>
🎭Don't try to understand things like culture, just feel it.<br/>
❤️The things you chain yourself to, are the things that set you free.<br/>
🌎Even if only malicious voices remain, don't ignore kind people.<br/>
🛡️Guarding the bottom line of everything.<br/>
🍃Anger is easy, but same to forget.
<br/><br/><br/>
⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

![Progress Bar CI By liununu](https://github.com/liununu/liununu/workflows/Progress%20Bar%20CI/badge.svg)

---

📚Books written by me
\`

console.log(readme)
