<template>

</template>

<script>
export default {
  mounted () {
    if (!JSON.parse(sessionStorage.getItem('user'))) {
      this.$router.push('./login')
    } else {
    }
  }
}
</script>

<style>

</style>
