<script setup lang="ts">
import * as vNG from "v-network-graph"
import data from "./data"
import Navbar from './components/Navbar.vue'


const paths: vNG.Paths = {
  path1: { edges: ["edge1", "edge3", "edge5", "edge7"] },
  path2: { edges: ["edge2", "edge4", "edge6", "edge10"] },
}
</script>

<template>


<div>
<h1>Alejo Flórez</h1>
<h1>Jose David González</h1>

  <v-network-graph
  class="graph"
    :nodes="data.nodes"
    :edges="data.edges"
    :layouts="data.layouts"
    :paths="paths"
    :configs="data.configs"
  />
</div>
</template>

<style>


.graph{
    width: 800px;
    height: 600px;
    border: 1px solid #000;
  }

  

</style>