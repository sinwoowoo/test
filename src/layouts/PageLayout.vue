<template>
  <div>
    <LayoutHeader />
    <div class="contents">
      <div class="content_box">
        <router-view></router-view>
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from '@/view/common/header.vue'
import LayoutFooter from '@/view/common/footer.vue'

export default {
  name: 'App',
  components : {
    LayoutHeader,
    LayoutFooter
  },
  computed: {},
  created() {},
}
</script>