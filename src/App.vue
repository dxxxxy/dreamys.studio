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
  <div class="particles"><Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="PARTICLES"/></div>
</template>

<style>
    div.particles {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 0;
        filter: blur(10px) invert(1) hue-rotate(235deg);
    }
    </style>