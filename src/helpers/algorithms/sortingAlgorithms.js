function bubbleSort(arr, index) {
  let min_index = index;
  for (let i = 0; i < arr.length - index - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      min_index = i;
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return { arr, j: min_index };
}

function selectionSort(arr, index) {
  let min_index = index;
  for (let j = index + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_index]) min_index = j;
  }
  let temp = arr[min_index];
  arr[min_index] = arr[index];
  arr[index] = temp;

  return { arr, j: min_index };
}

function insertionSort(arr, index) {
  let key = arr[index];
  let j = index - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j -= 1;
  }
  arr[j + 1] = key;

  return { arr, j: j + 1 };
}

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
};
