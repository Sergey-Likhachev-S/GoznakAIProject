📄 HELP.md
# 🚀 Инструкция по работе с репозиторием GoznakAIProject

## 1. Клонирование репозитория (через SSH)

```bash
git clone git@github.com:Sergey-Likhachev-S/GoznakAIProject.git
cd GoznakAIProject
```
⚠️ Если появится ошибка Permission denied (publickey), смотри раздел "Настройка SSH".
## 2. Настройка SSH-доступа (если требуется)
Проверка наличия SSH-ключа:
```bash
ls ~/.ssh
```
Если ключей нет — создать:
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
Жми Enter на всех вопросах.

Добавление ключа на GitHub:
```bash
cat ~/.ssh/id_ed25519.pub
```
Скопируй содержимое и добавь его в GitHub:
https://github.com/settings/keys

Проверка подключения:
```bash
ssh -T git@github.com
```
## 3. Настройка имени и email для Git
```bash
git config --global user.name "Твоё Имя"
git config --global user.email "your_email@example.com"
```

Пример:
```bash
git config --global user.name "Вася Пупкин"
git config --global user.email "mail@company.ru"
```
## 4. Первый коммит и push
Создание файла (пример: Test_name):
```bash
echo "# GoznakAIProject" > Test_name.md
```
Добавление и коммит:
```bash
git add .
git commit -m "Первый коммит: добавлен Test_name.md"
```
Создание ветки main и отправка в GitHub:
```bash
git branch -M main
git push -u origin main
```
## 5. Проверка настроек Git
```bash
git config --list
```
✅ Готово! Теперь ты можешь свободно работать с этим репозиторием: добавлять файлы, коммитить и отправлять изменения на GitHub.

## 6. Посмотри статус файлов
```bash
git status
```
Увидишь, какие файлы изменились или новые.
## 7. Добавь изменения в индекс (staging area)
Чтобы добавить все изменения:
```bash
git add .
```
Или добавить конкретный файл:
```bash
git add имя_файла
```
## 8. Сделай коммит с описанием изменений
```bash
git commit -m "Краткое понятное описание изменений"
```

## 9. Отправь коммит на GitHub
```bash
git push origin main
```

## 10. продолжать работать по такому же принципу:

Вносишь изменения в файлы
```bash
git add <файл> или git add .

git commit -m "описание"

git push origin main
```
## 11. Создание и переход в новую ветку

```bash
git checkout -b имя_ветки
```

Например feature/help-update
Эта команда:

создаст ветку feature/help-update
переключит тебя на неё

Работа в новой ветке
Вноси изменения

Добавляй (git add) и коммить (git commit) как обычно

Отправка новой ветки на GitHub

```bash
git push -u origin имя_ветки
```
Вернуться обратно в main
```bash
git checkout main
```
Примеры для каждого:

Для Бусаровой О.В.:

```bash
git checkout -b busarova_ov
```
Для Лихачева С.С.:
``` bash
git checkout -b likhachev_ss
```
Для Цыбиногиной В.Г.:

```bash
git checkout -b tsybinogina_vg
```
Для Линдера Н.В.:
``` bash
git checkout -b linder_nv
```

Чтобы получить последние изменения с удалённого репозитория (если кто-то ещё пушит туда изменения):
``` bash
git pull
```


