public class seminar6 {

public static int binarySearch(int[] arr, int target) {
int left = 0;
int right = arr.length - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) {
        return mid;
    }
    if (arr[mid] > target) {
        right = mid - 1;
    }
    else {
        left = mid + 1;
    }
}
return -1;
}

public static void main(String[] args) {
int[] arr = {1, 3, 4, 6, 7, 8, 10, 13, 14, 16};
int target = 13;
int result = binarySearch(arr, target);
if (result != -1) {
        System.out.println("Элемент " + target + " найден в массиве с индексом " + result);
} else {
        System.out.println("Элемент " + target + " не найден в массиве");
}
}
}