<template>
    <nav class="navbar navbar-light vue-navbar justify-content-between">
  <a class="navbar-brand">Reactive Forms
 com Vue.js</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
  </form>
</nav>
</template>

<style>

.vue-navbar{
    min-height: 4rem;
    background-color: #41b883;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1);
}
.vue-navbar .navbar-brand {
  color: #fff !important;
  font-weight: 400;
}

</style>