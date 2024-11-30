@echo off
:: Criação de diretórios
mkdir src
mkdir src\components
mkdir src\pages
mkdir src\data

:: Criação de arquivos vazios
type nul > src\components\Button.js
type nul > src\components\UserCard.js
type nul > src\components\Navbar.js
type nul > src\pages\HomePage.js
type nul > src\pages\UserListPage.js
type nul > src\pages\UserFormPage.js
type nul > src\data\users.json
type nul > src\App.js
type nul > src\index.js
type nul > src\styles.css

echo Estrutura criada com sucesso!
pause
