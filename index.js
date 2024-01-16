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
<img align="left" src="https://github.com/VoluntieTsai/VoluntieTsai/blob/main/Elias.png" height="225" width="auto" >  
<br/><br/><br/>
Credit is productivity.

<!---
Raincrow9/Raincrow9 is a ✨ special ✨ repository because its md file of README (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->


⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

![Progress Bar CI](https://github.com/liununu/liununu/workflows/Progress%20Bar%20CI/badge.svg)\
Power by liununu

console.log(readme)
