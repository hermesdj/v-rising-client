<template>
  <b-button
      v-if="isReady && isLoggedIn"
      :href="connectSteam"
      variant="primary"
      class="text-light"
      v-bind="$attrs"
  >
    {{ $t('server.connect') }}
  </b-button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ConnectToServerBtn",
  computed: {
    ...mapGetters('server', ['serverInfo', 'isReady']),
    ...mapGetters('settings', ['hostSettings']),
    ...mapGetters('auth', ['isLoggedIn']),
    serverPassword() {
      return this.hostSettings ? this.hostSettings.Password : '';
    },
    connectSteam() {
      return process.env.NODE_ENV === 'development' ? `steam://connect/127.0.0.1:${this.serverInfo.queryPort}/${this.serverPassword}` : `steam://connect/${this.serverInfo.publicIp}:${this.serverInfo.queryPort}/${this.serverPassword}`
    }
  }
}
</script>

<style scoped>

</style>
