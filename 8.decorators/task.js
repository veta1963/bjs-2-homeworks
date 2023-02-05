//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

function wrapper(...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((objectInCache) => objectInCache.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) { // если элемент найден
        console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + objectInCache.value;
    }
        
    let value = func(...args); // в кеше результата нет — придётся считать
    cache.push({hash, value}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + value);
    return "Вычисляем: " + value;  
}
return wrapper;
}

//Задача № 2

function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
  
    function wrapper(...args) {
        clearTimeout(timeoutId);
        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }  
         timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
        wrapper.allCount++;
    }
  
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
  }
