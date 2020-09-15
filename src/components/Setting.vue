<template>
  <div class="container-fluid dashboard">
    <div class="card">
      <center>
        <h1>Comming soon...</h1>
      </center>
    </div>
  </div>
</template>

<script>
export default {
    name: 'setting',
    methods: {
      changeColor() {
        var color = ["#32064A", "#E56B1F", "#FCD02C", "E42C6A", "#292930", "#3EB650", "#FCC133", "#E12B38"];
        var i = 0;
        document.querySelector("button").addEventListener("click", 
        function() {
          i = i < color.length ? ++i : 0;
          document.querySelector("container-fluid dashboard").style.background = color[i];
        });
        console.log(color);
      }
    }
}
</script>

<style>

</style>

<style scoped src="../assets/css/Setting.css"></style>