# Vue Pokedex

Just open index.html and it will work :)

![screensot demo](images/screenshot-demo.png "Screenshot Demo")

### ES6 version

If you know git, checkout to the branch 'es6' for a cleaner ES6 version (but could not work in all browsers)

### Credits
Nice input from @Takumari85: https://codepen.io/Takumari85/pen/RaYwpJ

Nice checkbox from [@hansmaad](https://twitter.com/hansmaad): https://codepen.io/hansmaad/pen/qaGrQL

https://vuejs.org/

Anotaciones html:
Con interpolacion {{}}, podemos mostrar el objeto deseado del elemento
El interpolado permite javascript
En los atributos no se permite interpolacion. Usamos v-bind:att="atrr.name". O directamente :att="atrr.name".
v-for="pokemon in pokemons": me ha molado bastante el concepto
    :key : ayuda a vue a seguir a los elementos dentro de los bucles. Permite que si agregamos algo nuevo,no tenga que repintar todo.
v-on:click="removePokemon(pokemon)" o tambien @click
v-model="": doble data binding (recuperamos y podemos escribir)
    azucar sintactico de :value= @input="event... turra
   