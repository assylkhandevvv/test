# Тестовое в 3205.

## Get started

запустить проект можно через docker-compose командой `docker-compose up` или отдельно backend командой `npm run start:dev` и frontend командной `npm run start`

## Frontend
Написан на фреймворке next.js. Фронтенд представляет из себя одну страничку с формой. В форме два поля: email и number. Перед отправкой значения в форме валидируются. После нажатия на кнопку Search отправляется форма на бэкенд. Если было заполнено только поле email, то при совпадении на бэкенде двух пользователей с таким емейлом, вернутся оба. При отправке с заполненным number вернется гарантированно один пользователь при соответствии, если соответствия не будет, то во всех кейсах появится сообщение, что пользователи не найдены.

## Backend
Написан на фреймворке nest.js с использованием TypeScript.

### Реализованные пукты из ТЗ на бэкенде:

- Задержка запроса на 5 секунд реализована с помощью декоратора Delay. Таким образом отделяется бизнес логика метода от ненужных действий внутри самого метода.
- Валидация полей на бэкенде реализована через DTO и class-validator. Валидация есть в обоих частях приложения, потому что если абстрагироваться от того, что это тестовое задание, то сервер ничего не должен знать о том, кто именно у него клиент. На фронте тоже реализована валидация, чтобы не загружать бэкенд лишними запросами.
- Повторная отмена на бэкенде реализована через CancelationInterceptor. Именно для этого подобного функционала и нужны интерсепторы. Из альтернатив можно было закостылить через debounce, но в реальном приложении так точно делать не стоит ввиду того, что кроме таймаута запрос будет выполнять еще какое-то время. Пользователь определяется через куки. Можно было бы сделать через FingerPrint, но сомневаюсь, что это будет хоть чуть-чуть юзер-френдли.