<template>
  <section class="screen--quiz" id="quiz">
    <div class="section">
      <router-view />
    </div>
  </section>
</template>

<style lang="scss" scope>
 .screen--quiz .section-title {
   font-family: 'Noto Sans';
   font-style: normal;
   font-weight: 900;
   font-size: 25px;
   line-height: 34px;

   text-align: right;
   
   color: #F8E9CB;
 }
 .screen--quiz .pitch {
   font-family: 'Noto Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 25px;
   line-height: 34px; 

   color: #666460;
 }
</style>
