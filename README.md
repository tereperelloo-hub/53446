Analizador Sintáctico - Tablero

Este proyecto es un analizador sintáctico hecho con ANTLR4 y JavaScript.  
Sirve para reconocer un lenguaje simple donde se pueden definir tableros con fuentes de datos.

Requisitos

- Node.js
- Java

Cómo usarlo

Primero clonar el repositorio:

git clone https://github.com/tereperelloo-hub/53446

Después instalar dependencias:

npm install

Y para ejecutarlo:

A mi me funciona al poner primero 
cd analizador y luego npm start


El programa lee lo que está en el archivo `input.txt`.

Qué hace el programa

- Reconoce tokens (análisis léxico)
- Verifica la sintaxis
- Muestra el árbol de derivación
- Detecta errores
- Tiene una pequeña interpretación usando Visitor

Archivos importantes

- `Tablero.g4`: la gramática
- `index.js`: donde se ejecuta todo
- `CustomTableroVisitor.js`: lógica del visitor
- `generated/`: archivos que genera ANTLR
- `ejemplos/`: casos de prueba
