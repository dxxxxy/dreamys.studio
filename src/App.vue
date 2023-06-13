<script setup lang="ts">
  import { loadFull } from "tsparticles";
  import PARTICLES from "./assets/particles.json"

  const particlesInit = async engine => {
      await loadFull(engine);
  };

  const particlesLoaded = async container => {
      console.log("Particles container loaded", container);
  };

</script>

<template>
  <h1>Text Gradient</h1>
  <div class="particles"><Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="PARTICLES"/></div>
</template>

<style>
h1 {
  margin: 0;
  font-size: 72px;
  width: fit-content;
  font-weight: 800;
  background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-stroke: 4px transparent;
}

    div.particles {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 0;
        filter: blur(10px) invert(1) hue-rotate(230deg) brightness(1);
    }
    </style>