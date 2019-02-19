<template>
  <div id="app">
    <myheader></myheader>
    <router-view/>
    <navitem></navitem>
    <SearchItem></SearchItem>
    <myfooter></myfooter>
    <load v-bind:showLoad="showLoad"></load>
  </div>
</template>

<script>
import myheader from './components/Header.vue'
import navitem from './components/NavItem.vue'
import SearchItem from './components/SearchItem.vue'
import myfooter from './components/Footer.vue'
import load from './components/load.vue'

export default {
  name: 'App',
  components: {
    myheader,
    navitem,
    SearchItem,
    myfooter,
    load
  },
  data(){
    return {
      showsearch:false,
      showLoad:true
    }
  },
  created(){
    setTimeout(()=>{
      this.showLoad = false;
    },2000)
  },

}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
