<script setup lang="ts">

</script>
<template>
  <a class="flex sm:justify-start sm:flex-row lg:flex-col lg:justify-center lg:items-center p-6 cursor-pointer bg-white border-2 border-gray-light rounded-md shadow-sm hover:-border-t-blueViolet">
    <div class="text-[28px]"> 
      <slot name="icon" ></slot>
    </div>
    <span class="font-thin mt-2 text-sm text-neutral-700 sm:mx-auto sm:mt-2 sm:my-0">
      <slot name="description"></slot>
    </span>
    <slot></slot>
  </a>
</template>
<style></style>
