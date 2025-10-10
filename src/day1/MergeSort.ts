// Custom exercise created to practice Merge Sort
export function merge_sort_return(array: number[]): number[] {
  if (array.length <= 1) { return array }

  const mid = Math.floor(array.length / 2)
  const left = merge_sort_return(array.slice(0, mid))
  const right = merge_sort_return(array.slice(mid, array.length))
  return merge(left, right)
}

const merge = (left: number[], right: number[]): number[] => {
  let l = 0
  let r = 0
  let res: number[] = []


  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      res.push(left[l])
      l ++
    } else if (right[r] < left[l]) {
      res.push(right[r])
      r ++
    } else {
      res.push(left[l])
      l ++
    }
  }

  while (l < left.length) {
    res.push(left[l])
    l ++
  }

  while (r < right.length) {
    res.push(right[r])
    r ++
  }

  return res
}

export function merge_sort(array: number[]) {
  console.log(array)
}
