<template>
    <PageSubtab label="" :tabs="tabs" />
</template>

<script setup lang="ts">
  import Basic from "./price/basic/Basic.vue";
  import Backbone  from "./price/basic/Backbone.vue";

  import Ip  from "./price/ip/Ip.vue";

  import Internet  from "./price/internet/Internet.vue";
  import Wirelessinternet  from "./price/internet/Wireless_internet.vue";

  import Wirelessdata  from "./price/wireless_data/Wireless_data.vue";
  import Iot  from "./price/wireless_data/Iot.vue";
  
  import Cctv  from "./price/cctv/Cctv.vue";

  const tabs = [    
    { name: 'basic', label: '전용회선 서비스', component: Basic},
    { name: 'ip', label: '인터넷 서비스', component: Ip},
    { name: 'internet', label: '인터넷전화 서비스', component: Internet},
    { name: 'wireless', label: '무선서비스', component: Wirelessdata},
    { name: 'cctv', label: 'CCTV 서비스', component: Cctv},
    { name: 'select', label: '상품분류', icon:"devices"},
    
  ];
</script>

<script lang="ts">
export default {
  name: 'Basic'
}
</script>