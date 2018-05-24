<template>
  <div id="app">
    <!-- <font-awesome-icon :icon="icon" /> -->
    <font-awesome-icon icon="edit" symbol/>
    <font-awesome-icon icon="home" border/>
    <font-awesome-icon icon="signal" size="xs"/>
    <font-awesome-icon icon="database" pull="right"/>
    <font-awesome-icon icon="user" flip="vertical"/>
    <!-- <font-awesome-icon :icon="['fab', 'signal']" /> -->
  </div>
</template>
 
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'
 
export default { 
  // computed: {
  //   icon () {
  //     return { faCoffee }
  //   }
  // },
 
  components: {
    FontAwesomeIcon
  }
}
</script>