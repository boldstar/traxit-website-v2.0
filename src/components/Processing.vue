<template>
    <div class="register-content">
        <h4 class="processing-header">Building Your Account</h4>
        <div class="processing">
            <div class="processing-bar" v-bind:style="{ width: progress + '%'}">
            <span class="progress" v-if="!done">{{ progress + '%' }}</span>
            <span class="progress" v-if="done">Almost Done</span>
            </div>
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
        var width = 5
        var increase = setInterval(() => {
          vm.progress += width
          if(vm.progress >= 100) {
            clearInterval(increase);
            this.done = true
          }
      }, 1000)
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
    align-self: center;
    margin: auto;
    height: 30px;
    width: 80%;
    background: white;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.25);
    border-radius: 5px;
    transition: all 1s;
}

.processing-header {
    margin: 0 auto;
    position: absolute;
    left: 25%;
    top: 175px;
    font-size: 2rem;
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
    left: 45%;
    top: 5px;
    font-weight: bold;
}

@media screen and (max-width: 767px) {
    .processing {
        max-width: 300px;
        width: 90%;
    }

    .processing-header {
        font-size: 1rem;
    }
}
</style>
