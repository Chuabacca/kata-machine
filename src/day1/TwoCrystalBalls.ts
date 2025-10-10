export default function two_crystal_balls(breaks: boolean[]): number {
  const interval = Math.floor(Math.sqrt(breaks.length))
  let i = 0
  let broken = false

  while (broken === false) {
    i += interval
    broken = breaks[i]
  }

  for (let j = i - interval; j < i; j++) {
    if (breaks[j] === true) { return j }
  }

  return -1
}
