<template>
  <div>Login</div>
  <ElButton>login</ElButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  components: {
    ElButton
  }
})
</script>

<style lang="less"></style>
