<script lang="ts">
  import LogoBox from "./LogoBox/LogoBox.svelte";

  let href = window.location.href;
  let queryIndex = href.indexOf('?') !== -1 ? href.indexOf('?') : href.length;
  let root = href.substring(0, queryIndex);
</script>

<nav class="Navbar">
  <a class="mx-auto md:mx-0 flex px-1 py-3 w-max" href="{root}">
    <LogoBox letter="W" color="Blue" />
    <LogoBox letter="S" color="Red" />
    <LogoBox letter="C" color="Blue" />
    <LogoBox letter="R" color="Red" />
  </a>
</nav>

<style>
  .Navbar {
    background-color: #e0e0e0;
    border-bottom: 2px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
</style>
