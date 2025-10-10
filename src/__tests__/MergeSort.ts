import { merge_sort, merge_sort_return } from "@code/MergeSort";

test("merge-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    merge_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("merge-sort-return", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const sorted = merge_sort_return(arr);
    expect(sorted).toEqual([3, 4, 7, 9, 42, 69, 420]);
});
