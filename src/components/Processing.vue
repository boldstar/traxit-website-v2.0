<template>
    <div class="processing">
        <div class="processing-bar" v-bind:style="{ width: progress + '%'}">
          <span class="progress">{{ progress + '%' }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Processing',
    data() {
      return {
        startProcess: true,
        progress: 0,
        done: false
      }
    },
    methods: {
     startProgress() {
        var vm = this
        var width = 20
        var increase = setInterval(() => {
          vm.progress += width
          if(vm.progress >= 100) {
            clearInterval(increase);
            this.done = true
          }
      }, 800)
      }
    },
    mounted() {
      this.startProgress()
    },
    created() {
        window.scrollTo(0,0)
    }
}
</script>

<style scoped>
.processing {
    margin: 0 auto;
    height: 30px;
    width: 600px;
    background: white;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
    border-radius: 5px;
    transition: all 1s;
}

.processing-bar {
    height: 30px;
    background: #0077ff;
    color:  white;
    align-self: center;
    border-radius: 5px;
    transition: width 1s;
}

.progress {
    position: relative;
    left: 48%;
    top: 5px;
}

@media screen and (max-width: 767px) {
    .processing {
        max-width: 300px;
        width: 90%;
    }
}
</style>
