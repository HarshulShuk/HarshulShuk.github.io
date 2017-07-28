<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/nav-bar'
export default {
  name: 'app',
  components: {
    'nav-bar': Navbar
  }
}
</script>


