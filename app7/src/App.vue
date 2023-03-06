<script>
  import Slideshow from './components/Slideshow.vue'
  import Slideshow1 from './components/Slideshow1.vue'
  export default{
    components: {
      Slideshow,
      Slideshow1
    }
  }
</script> 

<template>
<Slideshow></Slideshow>
<br>
<p>The below works, you have to click on the next button for it to load properly. Once you do that, the previous image loads as well.</p>
<Slideshow1></Slideshow1>

</template>