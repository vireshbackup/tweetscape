<template>
  <canvas :id="name" class="canvas-interactive" width="512" height="512"></canvas>
</template>

<script>

  import Granim from 'granim'

  export default {
    name: 'GradientCanvas',
    props: {
      name: {
        type: String,
        required: true
      },
      defaultState: {
        type: String,
        required: true
      }
    },
    mounted () {

      let granimInstance = new Granim({
         element: `#${this.name}`,
         direction: 'diagonal',
         defaultStateName: this.defaultState,
         opacity: [1, 1],
         states : {
             'home-state': {
                 gradients: [
                     ['#21C2CC', '#6B4BBA'],
                     ['#229EA6', '#3F28B1']
                 ]
             },
             'timeline-state': {
                 gradients: [
                     ['#021941', '#021432']
                 ]
             }
         }
      })

      this.$el.width = 512
      this.$el.height = 512

      this.$store.dispatch('addGranimGradient', { name: this.name, gradient: granimInstance })


    }
  }

</script>

<style lang="scss" scoped>

  .canvas-interactive {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-transition: opacity .5s ease-in-out;
    -moz-transition: opacity .5s ease-in-out;
    -o-transition: opacity .5s ease-in-out;
    transition: opacity .5s ease-in-out;
  }

</style>
