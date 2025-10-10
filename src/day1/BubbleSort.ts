export default function bubble_sort(arr: number[]): void {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      const left = arr[i]
      const right = arr[i + 1]

      if (left > right) {
        arr[i] = right
        arr[i + 1] = left
      }
    }
  }
}
