grammar tablero;

programa: 'tablero' IDENTIFICADOR '{' elemento* '}' ;

elemento
    : fuente
    | metrica
    | grafico
    | filtro
    | alerta
    ;

fuente: 'fuente' IDENTIFICADOR 'tipo' tipo_fuente 'ruta' CADENA ';' ;

tipo_fuente: 'csv' | 'api' | 'json' ;

metrica: 'metrica' IDENTIFICADOR '=' agregacion '(' campo ')' ';' ;

agregacion: 'suma' | 'promedio' | 'maximo' | 'minimo' | 'contar' ;

grafico: 'grafico' IDENTIFICADOR '{'
          'tipo' '=' tipo_grafico ';'
          'usar' '=' IDENTIFICADOR ';'
         '}' ;

tipo_grafico: 'barras' | 'lineas' | 'torta' | 'tabla' ;

filtro: 'filtro' campo operador valor ';' ;

alerta: 'alerta' 'si' IDENTIFICADOR operador valor 'entonces' CADENA ';' ;

campo: IDENTIFICADOR ('.' IDENTIFICADOR)* ;

valor: CADENA | NUMERO | BOOLEANO ;

operador: '==' | '!=' | '>' | '<' | '>=' | '<=';

// TOKENS

BOOLEANO: 'verdadero' | 'falso';

IDENTIFICADOR: [a-zA-Z] [a-zA-Z0-9_]*;

CADENA: '"' .*? '"';

NUMERO: [0-9]+ ('.' [0-9]+)?;


WS: [ \t\r\n]+ -> skip;