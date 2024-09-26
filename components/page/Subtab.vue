<template>
  <div class="radio-tab">
    <ul>
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: activeTab === tab.name }"
      >
        <span @click="changeTab(tab.name)">
          <i>{{ tab.icon }}</i>
          {{ tab.label }}
        </span>        
      </li>
      <li>
        <select id="selectBox" v-if="activeTab ==='basic'" @change="changeList($event)">
          <option v-for="basic in Basics" :key="index" :value="basic.value">{{ basic.name }}</option>
        </select>
        <select id="selectBox" v-else-if="activeTab ==='ip'" @change="changeList($event)">
          <option v-for="ip in Ips" :key="index" :value="ip.value">{{ ip.name }}</option>
        </select>
        <select id="selectBox" v-else-if="activeTab ==='internet'" @change="changeList($event)">
          <option v-for="internet in Internets" :key="index" :value="internet.value">{{ internet.name }}</option>
        </select>
        <select id="selectBox" v-else-if="activeTab ==='wireless'" @change="changeList($event)">
          <option v-for="wire in Wireless" :key="index" :value="wire.value">{{ wire.name }}</option>
        </select>
        <select id="selectBox" v-else-if="activeTab ==='cctv'" @change="changeList($event)">
          <option v-for="cctv in Cctvs" :key="index" :value="cctv.value">{{ cctv.name }}</option>
        </select>        
      </li>
    </ul>
  </div>

  <section>
    <component :is="activeComponent" />
  </section>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

/* 동적 셀렉트박스 생성 */
const Basics = ref([ {name: "기본회선", value: "basic"}, {name: "백본회선", value: "backbone"} ]);
const Ips = ref([ {name: "인터넷서비스", value: "ip"} ]);
const Internets = ref([{name: "인터넷전화", value: "internet"}, {name: "모바일행정전화", value: "wireless_internet"} ]);
const Wireless = ref([{name: "무선데이터 서비스", value: "wireless_data"}, {name: "IoT 서비스", value: "iot"} ]);
const Cctvs = ref([ {name: "CCTV", value: "cctv"} ]);

const selectValue = ref(""); //selectbox 값 
/* 동적 셀렉트박스 생성 */

const props = defineProps({
  label: String,
  tabs: {
    type: Array as () => { name: string; label: string; component: any }[],
    default: () => [],
  },  
});

const emits = defineEmits(["tab-change"]);

const route = useRoute();
const router = useRouter();

const activeTab = ref("");

onMounted(() => {
  const tabFromQuery = route.query.subtab as string | undefined;
  if (tabFromQuery && props.tabs.some((tab) => tab.name === tabFromQuery)) {
    activeTab.value = tabFromQuery;
  } else {
    activeTab.value = props.tabs.length > 0 ? props.tabs[0].name : "";
  }
});

const changeTab = (tab: string) => {
  if(tab === "select"){
    return;
  }
  activeTab.value = tab;
  emits("tab-change", tab);  
  router.push({ query: { ...route.query, subtab: tab } });  
};

const changeList = (e : event) => {
    selectValue.value =  e.target.value;
    console.log("select  :: " + selectValue.value);

    switch(selectValue.value){
      case "basic":
        router.push("/price/basic/basic.vue");
        break;
      case "backbone":
        router.push("charges?subtab=backbone&tab=price");
        break;
      default:
        break;
    }
};

const activeComponent = computed(() => {
  const activeTabData = props.tabs.find((tab) => tab.name === activeTab.value);
  return activeTabData ? activeTabData.component : null;
});
</script>

<style lang="scss" scoped>
.radio-tab ul {
  margin: 0;
  margin-bottom: 2rem;
  display: inline-block;
  background: #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
  li {
    display: inline-block;
    > span {
        cursor: pointer;
        background: #d1d1d1;
        border-radius: 0.1rem;
        padding: 2px 20px;
        display: block;
        box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
        i {
          font-family: "Material Icons";
          font-style: normal;
          vertical-align: middle;
          font-size: 20px;
        }
    }
    &.active {
      > span {
        background: #e51c23;
        color: #fff;
        position: relative;
       
        &:after {
          position: absolute;
          content: "";
          width: 0;
          height: 0;
          top: 100%;
          left: calc(50% - 0.3rem);
          border-left: 0.6rem solid transparent;
          border-right: 0.6rem solid transparent;
          border-top: 0.6rem solid #f00;
        }
      }
    }
  }
}
</style>
