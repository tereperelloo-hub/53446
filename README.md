Analizador Sintáctico - Tablero

Este proyecto es un analizador sintáctico hecho con ANTLR4 y JavaScript.  
Sirve para reconocer un lenguaje simple donde se pueden definir tableros con fuentes de datos.

Requisitos
- Node.js
- Java

Cómo usarlo

Primero clonar el repositorio:

git clone https://github.com/TU_USUARIO/TU_REPO.git

Después instalar dependencias:

npm install

Y para ejecutarlo:

npm start

El programa lee lo que está en el archivo `input.txt`.

Ejemplos

En la carpeta `ejemplos/` hay:

- 2 ejemplos correctos
- 2 ejemplos con errores

Para probarlos, copiar el contenido de alguno en `input.txt` y ejecutar el programa.

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