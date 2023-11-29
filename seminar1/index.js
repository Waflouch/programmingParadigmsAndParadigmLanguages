/* Дан список целых чисел numbers. Необходимо написать в императивном стиле процедуру для
сортировки числа в списке в порядке убывания. Можно использовать любой алгоритм сортировки. */

const Data = [ 0, -2, 7, 3, 5, -1, 8 ];
const SortData = (arr) => {
  let hasSwapped = false;
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        hasSwapped = true;
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}

const iterationsData = SortData(Data);

console.log(Data);

/* Написать точно такую же процедуру, но в декларативном стиле */

const sortDataArray = Data.sort();
console.log(sortDataArray);