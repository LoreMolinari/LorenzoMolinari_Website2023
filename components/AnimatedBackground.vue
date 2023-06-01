<template>
    <div class="animated-background">
      <div class="animated-circle"></div>
    </div>
  </template>
  
  <style scoped>
  .animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    background-color: #212529;
  }

  .animated-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #6c757d;
    opacity: 0.8;
    animation: circleAnimation 10s infinite;
  }

  @keyframes circleAnimation {
    0% {
      transform: translate(-50%, -50%) scale(1);
      background-color: #6c757d;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      background-color: #adb5bd;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      background-color: #6c757d;
    }
  }
</style>

  