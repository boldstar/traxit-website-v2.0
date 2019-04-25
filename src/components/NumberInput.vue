<template>
    <input 
    :placeholder="placeholder" 
    v-model="addDashes" 
    @blur="handleInputState"
    @focus="handleInputState"
    maxlength="10"
  >
</template>

<script>
const masks = {
  number: {
    mask (value) {
      return value
    },
    unmask (value) {
      value = value.replace(/[^0-9]/g, '')
                .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
      return value
    },
  },
}

export default {
    name: 'number-input',
    props: {
        value: null,
        maskType: String,
        placeholder: ''
    },
    data: function() {
        return {
            inputFocused: false
        }
    },
    methods: {
        handleInputState (event) {
            this.inputFocused = event.type === 'focus'
        },
        unmask (value) {
            return masks[this.maskType].unmask(value)
        },
        mask (value) {
            return masks[this.maskType].mask(value)
        },
    },
    computed: {
        addDashes: {
            get: function() {
                if (this.inputFocused) {
                return this.value
                } else {
                return this.mask(this.value)
                }
            },
            set: function(modifiedValue) {        
                this.$emit('input', this.unmask(modifiedValue))
            }
        }
    }
}
</script>

<style scoped>
    input {
        padding: 10px;
        border: .5px solid #b4b4b4;
        border-radius: 3px;
        margin-bottom: 10px;
        font-size: 1.1rem;
        width: 95%;
    }
</style>
