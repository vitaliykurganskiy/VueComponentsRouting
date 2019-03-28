<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <div>Входящее название машины: </div>

   <!--  <app-car :msg="msg" @changeMsg="msg = $event"></app-car>
 -->    <app-car :msg="msg"></app-car>
    <hr>
    <app-man></app-man>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'I am vue component $$$',
    }
  }
}
</script>

<style>

</style>
