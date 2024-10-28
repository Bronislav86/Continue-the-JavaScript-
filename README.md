# **Continue-the-JavaScript**
## **Домашнее заданее к Урок 2. Семинар. Введение в DOM (Document Object Model)**

В этом задании вам предстоит работать с элементами на веб-странице, используя
JavaScript. Вам нужно выполнить несколько действий, связанных с изменением и
извлечением информации из элементов HTML. Ниже приводится список задач

**Дан HTML**
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Homework</title>
</head>
<body>
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>
<div class="card" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title" data-number="100">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text" data-number="50">
Some quick example text to build on the card title and make
up the bulk
of the card's
content.
</p>
<a href="#" id="super_link" class="card-link">Card link</a>
<a href="#" class="card-link" data-number="50">Another
link</a>
</div>
</div>
</body>
</html>
```

**Задачи:**
1. Найдите элемент по id, используя getElementById, элемент с id равным
"super_link" и выведите этот элемент в консоль.
2. Внутри всех элементов на странице, которые имеют класс card-link,
поменяйте текст внутри элемента на "ссылка".
3. Найдите все элементы на странице с классом card-link, которые лежат в
элементе с классом card-body, и выведите полученную коллекцию в консоль.
4. Найдите первый попавшийся элемент на странице, у которого есть атрибут
data-number со значением 50, и выведите его в консоль.
5. Выведите содержимое тега title в консоль.
6. Получите элемент с классом card-title и выведите его родительский узел в
консоль.
7. Создайте тег `<p>`, запишите внутри него текст `"Привет"` и добавьте созданный
тег в начало элемента, который имеет класс card.
8. Удалите тег h6 на странице.



## Урок 4. Семинар. Работа с DOM

_В этом задании вам предстоит выполнять различные манипуляции с элементами на веб-странице, используя JavaScript и Document Object Model (DOM). Ниже приводится список задач_

**Дан HTML:**
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Homework</title>
</head>
<body>
<p class="dropdown">Привет :)</p>
<div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button"
id="dropdownMenuButton" data-toggle="dropdown"
aria-haspopup="true"
aria-expanded="false">
Dropdown button
</button>
<div class="menu dropdown-menu"
aria-labelledby="dropdownMenuButton">
<a class="dropdown-item" href="#">Action</a>
<a class="dropdown-item" href="#">Another action</a>
<a class="dropdown-item" href="#">Something else here</a>
</div>
</div>
</body>
</html>
```

**Задачи:**
1. Ко всем элементам, имеющим класс dropdown-item, добавьте еще один класс
super-dropdown. Используйте методы forEach и __querySelectorAll__, а
также свойство __classList__ у элементов.
2. У элемента с классом btn необходимо убрать класс btn-secondary, если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
3. Необходимо удалить класс dropdown-menu у элемента, у которого
присутствует класс menu.
4. Используя метод __insertAdjacentHTML,__ добавьте после div с классом
dropdown следующую разметку: ```<a href="#">link</a>```.
5. У элемента с __id="dropdownMenuButton"__ замените id на superDropdown.
6. Добавьте атрибут __data-dd__ со значением 3 элементу, у которого существует
атрибут __aria-labelledby__, равный dropdownMenuButton, используя
dataset.
7. Удалите атрибут type у элемента с классом __dropdown-toggle__.