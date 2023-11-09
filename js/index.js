function jHeapSort(arr) {
    const n = arr.length;
  
    // Побудова зеркальної купи з сортуванням вставками
    for (let i = 1; i < n; i++) {
      let current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] < current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    // Починаємо вилучати елементи один за одним з купи
    for (let i = n - 1; i > 0; i--) {
      // Переміщуємо поточний корінь (найбільший елемент) на кінець масиву
      [arr[0], arr[i]] = [arr[i], arr[0]];
  
      // Викликаємо heapify на зменшеній купі для забезпечення властивості купи
      heapify(arr, i, 0);
    }
  }
  
  function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }
  
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      // Обмін елементів та рекурсивне викликання heapify для підкучі
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }
  
  // Приклад використання:
  const arr = [3, 15, 11, 6, 9, 14, 10, 12, 1, 7, 8, 2, 13, 4, 5];
  jHeapSort(arr);
  console.log(arr);
  