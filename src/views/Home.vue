<template>
<div class="row">
      <div class="col-md-8 col-7">
     <Main></Main>
      </div>

      <div class="col-md-4 col-5">
        <SideBar></SideBar>
      </div>
    </div>
</template>

<script>
import Main from "../components/Main.vue";
import SideBar from "../components/SideBar.vue";

export default {
components:{
    Main,
    SideBar,
}
}
</script>

<style>

</style>