 
## Tienda Dólar - Front end Developer


In the project directory, you can run:

### Tecnología a utilizar

- Un framework de front, puede ser el que desee a gusto
- Cualquier librería que considere necesaria
- Cualquier set de imágenes open source como puede ser Flaticon


## Problema

La fecha es 20 de marzo de 2015, trabajando en Reddit se le ocurre como broma de "April fools day" realizar sacar una sección de la página que contenga un botón grande y un contador que indica una cantidad descendente de segundos. 

El contador desciende de 60 segundos a 0 y solo se resetea si alguien con la página abierta presiona el botón. Solo se pude presionar una vez por usuario y cuando un usuario lo presiona le queda asignado como recuerdo un color en función de esta tabla.

> Time clicked    Color
> 60-52s          Purple
> 51-42s          Blue
> 41-32s          Green
> 31-22           Yellow
> 21-12s          Orange
> 11-0s           Red
> Not clicked     Grey
> Not Able to     White

## Se pide

Que se realize una single page application que implemente la idea del botón considerando los siguientes aspectos:

- El 'clickeo' del botón es una acción irreversible. Se desea evitar presiones accidentales.
- Se pide que la single page sea minimalista.
- Dado que es para una broma, no se debe explicar nada de como funciona el botón de manera explicita.
- Se puede tomar decisiones de cuanta y que tipo de información contextual proveer.
- Simular clicks de otra gente y que todo funcione de manera offline ( con alguna función de random estándar ).

## No es necesario

Implementar networking / sockets.
Que la página mantenga el estado en el front vía sesiones / cookies / files o cualquier otra mezcla de estrategias.
Que la página sea bella.

## Adicionales
De manera adicional se podrá desarrollar cualquiera de los siguientes puntos:

[ ] Utilizar Angular 2+ como framework. Se puede usar Angular Material como libreria de UX.
[ ] Sumar visualizaciones para los distintos eventos que ocurren de manera automática.
[x] Sumar visualizaciones para indicar el color del usuario.
[x] Llevar un registro de los clicks automáticos y mostrar alguna estadística o visualización relacionada.

