<script>
export default {
  inject: ['name']
}
</script>

<template>
  <h6> ComponentSix </h6>
  <p> {{ name }}</p>
  <p>
    Provide and Inject allows the 'name' variable, which is Rachel, through the tree of six components from the top-most level app or the ancestor of the provide: ['name'], which is App.vue. 
    The variable 'name' is passed through all the components, but it does not appear in any of the other components because none of them have the inject: ['name'] as an export default.
    All the components just export the next component in a line or tree until ComponentSix.
    The last component, ComponentSix, is the only one who has the inject: ['name'], so it is the only component that can use 'name' as a variable.
    If I placed the inject:['name'] elsewhere in one of the componets as an export default, then that component could also have access to the 'name' variable where it could appear using the mustache curly brackets.
  </p>
</template>