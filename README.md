# 🎯 Set

**Set** — учебный проект для демонстрации работы с коллекциями данных в JavaScript. Реализует функциональность управления множеством персонажей (командой) с использованием класса `Set`.

## 🚀 Технологический стек

- **JavaScript (ES6+)**
- **Babel** — транспиляция кода
- **Webpack** — сборка модулей
- **Jest** — тестирование (в `__tests__/`)
- **HTML5 / CSS3** — интерфейс

## 📦 Установка и запуск

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/set.git
   cd set
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите проект в режиме разработки:
   ```bash
   npm start
   ```

4. Для сборки production-версии:
   ```bash
   npm run build
   ```

5. Запуск тестов:
   ```bash
   npm test
   ```

## 💻 Примеры использования

```javascript
// Импорт классов
import Team from './js/team';
import Character from './js/characters';

// Создание персонажей
const hero = new Character('Лучник', 'Bowman');
const mage = new Character('Маг', 'Magician');

// Создание команды
const myTeam = new Team();

// Добавление персонажей
myTeam.add(hero);
myTeam.add(mage);

// Итерация по команде
for (const character of myTeam) {
  console.log(character.name); // 'Лучник', 'Маг'
}
```

## 📁 Структура проекта

```
set/
├── babel.config.json          # Конфигурация Babel
├── package.json               # Зависимости и скрипты
├── package-lock.json          # Lock-файл зависимостей
├── webpack.config.js          # Конфигурация Webpack
├── src/
│   ├── index.html             # Главная HTML-страница
│   ├── index.js               # Точка входа приложения
│   ├── css/
│   │   └── style.css          # Стили
│   └── js/
│       ├── characters.js      # Класс Character
│       ├── team.js            # Класс Team
│       └── __tests__/         # Тесты Jest
```

## 📄 Лицензия

Проект распространяется под лицензией **MIT**. Подробнее — в файле `LICENSE`.