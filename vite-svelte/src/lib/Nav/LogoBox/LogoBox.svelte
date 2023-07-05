<script lang="ts">
    export let
        color: "Red" | "Blue",
        letter: string
    ;
</script>

<div class="flex justify-center content-center Box {color}">
  <h1>{letter}</h1>
</div>

<style>
    h1 {
        font-size: 2.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    .Box {
        border: 2px black solid;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        border-radius: 10px;
    }

    .Red {
        background-color: #f6afaf;
    }

    .Blue {
        background-color: #b3e6ff;
    }
</style>
