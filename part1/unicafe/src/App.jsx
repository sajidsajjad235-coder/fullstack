import { useState } from 'react'

<<<<<<< HEAD
const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad, veryBad }) => {
  const total = good + neutral + bad + veryBad
=======
const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
>>>>>>> 50c4915f86a78d2a6f2b4d57b36545263d1360fd

  if (total === 0) {
    return <p>No feedback given</p>
  }

<<<<<<< HEAD
  const score =
    good * 1 +
    neutral * 0 +
    bad * -1 +
    veryBad * -2

  const average = score / total
=======
  const average = (good - bad) / total
>>>>>>> 50c4915f86a78d2a6f2b4d57b36545263d1360fd
  const positive = (good / total) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
<<<<<<< HEAD
        <StatisticLine text="very bad" value={veryBad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positive" value={`${positive.toFixed(2)} %`} />
=======
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive + ' %'} />
>>>>>>> 50c4915f86a78d2a6f2b4d57b36545263d1360fd
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
<<<<<<< HEAD
  const [veryBad, setVeryBad] = useState(0)
=======
>>>>>>> 50c4915f86a78d2a6f2b4d57b36545263d1360fd

  return (
    <div>
      <h1>give feedback</h1>

<<<<<<< HEAD
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <Button text="very bad" onClick={() => setVeryBad(veryBad + 1)} />

      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        veryBad={veryBad}
      />
=======
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h2>statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
>>>>>>> 50c4915f86a78d2a6f2b4d57b36545263d1360fd
    </div>
  )
}

export default App
