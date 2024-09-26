<template>
  <main>
    <div class="radio-tab">
        <ul>
            <li>
            <input type="radio" name="radio-tab" id="t1" value="dedicated_service" checked="checked" />
            <label for="t1"> 전용회선 서비스</label>
            </li>          
            <li>
            <input type="radio" name="radio-tab" id="t2" value="internet_service" />
            <label for="t2">인터넷 서비스</label>
            </li>
            <li>
            <input type="radio" name="radio-tab" id="t3" value="internetTel_service" />
            <label for="t3"> 인터넷전화 서비스</label>
            </li>
            <li>
            <input type="radio" name="radio-tab" id="t4" value="wireless_service"/>
            <label for="t4"> 무선 서비스</label>
            </li>
            <li>
            <input type="radio" name="radio-tab" id="t5" value="cctv_service" />
            <label for="t5"> CCTV 서비스</label>
            </li>                   
        </ul>
        <ul>
            <li id="selectbox"> 
            <label for="b1">상품분류</label>
            <input type="selectbox" name="selectBox" id="b1" value="" />            
            </li>
        </ul>
    </div>
        
    <div class="container price_info ">
        <div class="col s12 m3 right-align">
            <a href="javascript:" class="btn show-on-small" onclick="openPop();">1단계 요금표</a>
            <a href="javascript:" class="btn show-on-small" onclick="openPop();">2단계 요금표</a>
            <a href="javascript:" class="btn show-on-small" onclick="openPop();">3단계 요금표</a>
        </div>
    </div> 
  </main>

</template>

<script setup lang="ts">
  import basic from '@/components/page/charge/chargebasic.vue';
  import backbone  from '@/components/page/charge/chargebackbone.vue';
  import ip  from '@/components/page/charge/chargeip.vue';
  import internet  from '@/components/page/charge/chargeinternet.vue';
  import wireinternet  from '@/components/page/charge/chargewireinternet.vue';
  import wiredata  from '@/components/page/charge/chargewiredata.vue';
  import iot  from '@/components/page/charge/chargeiot.vue';
  import cctv  from '@/components/page/charge/chargecctv.vue';

  const tabs = [    
    { name: 'charges', label: '요금표'},
    { name: 'area', label: '권역/거리/속도체계'},
    { name: 'reckoning', label: '이용요금계산'},
  ];
</script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  background: url("@/assets/images/line_h2_text.gif") 0 100% repeat-x;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.page-title div h2 {
  margin: 0;
  margin-right: 1rem;
  display: inline-block;
  color: #e51c23;
  font-size: 2rem;
  font-weight: normal;
  height: 100%;
  background: url("@/assets/images/line_h2_title.gif") 0 100% repeat-x;
  position: absolute;
}

.page-title div p {
  font-size: 13px;
  display: inline-block;
  color: #9e9e9e;
  margin: 0;
  padding: 3.5rem 0 2rem 0;
}

.page-title ul {
  position: absolute;
  right: 0;
  top: 10px;
  overflow: hidden;
  margin: 0;
}

.page-title ul li {
  float: left;
  height: 28px;
  line-height: 28px;
  display: inline-block;
  color: #9e9e9e;
  padding-right: 1.5rem;
  padding-left: 0.5rem;
  background: url("@/assets/images/bullet_rocation_arrow.gif") 100% 0 no-repeat;
  font-size: 0.9rem;
}

.page-title ul li:last-child {
  padding-right: 0;
  background: none;
  color: #424242;
}
.page-title ul li:last-child a {
  color: #039be5;
}
.kt-red-text {
  color: #e51c23 !important;
}

div.page-contents h3 {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  position: relative;
  line-height: 2.6rem;
  color: #424242;
}

div.page-contents ul.list-style1 li {
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.4rem;
}

div.page-contents h3:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2rem;
  height: 2px;
  background: #e51c23;
}

div.page-contents {
  margin-bottom: 5rem;
  line-height: 1.5;
  color: #757575;
}

.page-tab {
  position: relative;
  margin-bottom: 2rem;
}
.page-tab.active ul {
  display: block;
}
.page-tab.active div.current-label > a:after {
  content: "expand_less";
}
.page-tab div.current-label > a {
  display: block;
  font-size: 1.2rem;
  padding: 0.8rem 0.2rem;
  color: #e51c23;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
  position: relative;
}
.page-tab div.current-label > a:after {
  position: absolute;
  top: calc(50% - 12px);
  right: 1rem;
  font-size: 24px;
  content: "expand_more";
  font-family: "Material Icons";
  color: inherit;
}
.page-tab ul {
  display: none;
  position: absolute;
  width: 100%;
  top: calc(100% + 2rem);
  left: 0;
  margin: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 1px 7px 0 rgba(0, 0, 0, 0.22),
    0 3px 3px -2px rgba(0, 0, 0, 0.3);
  z-index: 890;
}
.page-tab ul li a {
  display: block;
  font-size: 1.2rem;
  padding: 1rem;
  color: #757575;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
}
.page-tab ul li a:hover {
  color: #e51c23;
}
.page-tab ul li.active > a {
  color: #e51c23;
}
.page-tab ul li:last-child > a {
  border-bottom: none;
}

.page-tab div.current-label {
  display: none;
}
.page-tab ul {
  display: block;
  position: static;
  overflow: hidden;
  border-radius: 0;
  background: url("@/assets/images/tab_line.gif") 0 100% repeat-x;
  box-shadow: none;
}
.page-tab ul li {
  float: left;
  display: inline-block;
}
.page-tab ul li a {
  color: #9e9e9e;
  margin-right: 0.2rem;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  border: 1px solid transparent;
  border-bottom: none;
}
.page-tab ul li a:hover {
  color: #e51c23;
  background: #eaeaea;
}
.page-tab ul li.active > a {
  background: #fff;
  color: #e51c23;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #e51c23;
  box-shadow: inset 0 1px 0 #e51c23;
}

.radio-tab ul {
  margin: 0;
  margin-bottom: 2rem;
  background: #d1d1d1;
  border-radius: 0.4rem;
  display: inline-block;
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
}
.radio-tab ul li {
  float: left;
}
.radio-tab ul li input[type="radio"] {
  display: none;
}
.radio-tab ul li input[type="radio"]:checked ~ label {
  background: #e51c23;
  color: #fff;
  position: relative;
}
.radio-tab ul li input[type="radio"]:checked ~ label:after {
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
.radio-tab ul li input[type="radio"] ~ label {
  display: block;
  border-radius: 0.4rem;
  line-height: 3em;
  height: 3em;
  padding: 0 2rem;
}
.radio-tab ul li input[type="radio"] ~ label i {
  vertical-align: middle;
  font-size: 24px;
}

.popup{
    position: fixed;
    top:0;
    height: 100vh;
    background: #00000050;
    z-index: 10000;
    width: 100%;

    .page-contents{
        padding-top: 5%;
           margin: auto;
           
        .container{
            background: #fff;
            border:1px solid #e1e1e1;
            padding: 0 20px;
            
        }
    }
}

.user-info-write {
  width: 100%;
  display: table;
  margin-bottom: 1rem; }
  .user-info-write.read dl:first-child > dd {
    font-weight: bold; }
  .user-info-write dl {
    display: table-row; }
    .user-info-write dl dt, .user-info-write dl dd {
      display: table-cell;
      padding: 1rem;
      border-top: 1px solid #d0d0d0;
      vertical-align: middle; }
    .user-info-write dl:first-child dd {
      border-top: 2px solid #909090; }
    .user-info-write dl:first-child dt {
      border-top: 2px solid #e51c23; }
    .user-info-write dl dt {
      width: 15%;
      color: #616161;
      font-weight: bold; }
    .user-info-write dl:last-child > dt, .user-info-write dl:last-child > dd {
      border-bottom: 1px solid #909090; }
    .user-info-write dl textarea {
      width: calc(100% - 1rem);
      font-size: 1rem;
      border-radius: 2px;
      border: 1px solid #d0d0d0;
      padding: 0 .5rem; }

      .kt-input {
    padding: 0 .4rem;
    height: 32px;
    line-height: 32px;
    font-size: 1rem;
    border-radius: 2px;
    border: 1px solid #d0d0d0;
    margin: .2rem 0;
    vertical-align: middle;
}

.select-wrap {
  height: 32px;
  overflow: hidden;
  position: relative;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  background: url(../images/down_arrow.gif) no-repeat 100% 50%; }
  .select-wrap select {
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    cursor: pointer;
    padding: 0 .5rem;
    font-size: 1rem;
    border: 0;
    border-radius: 0;
    height: 32px;
    line-height: 32px;
    padding-right: 3rem;
    background: transparent; }
    .select-wrap select::-ms-expand {
      display: none; }

      table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse; }
  table.body-scroll {
    overflow-y: scroll; }
  table thead tr:first-child > th {
    border-top: 2px solid #909090; }
    table thead tr:first-child > th:first-child {
      border-top: 2px solid #e51c23; }
  table thead tr > th {
    border-right: none; }
  table thead tr:last-child > th, table thead tr:only-child > th {
    border-bottom: 1px solid #9e9e9e; }
  table th {
    background: #eaeaea;
    color: #616161;
    font-weight: bold; }
  table tr td, table tr th {
    font-size: 1rem;
    padding: .6rem .8rem;
    display: table-cell;
    vertical-align: middle;
    border-top: 1px solid #d0d0d0; }
    table tr td:not(:last-child), table tr th:not(:last-child) {
      border-right: 1px dotted #d0d0d0; }
    table tr td.border-end-bottom, table tr th.border-end-bottom {
      border-bottom: 1px solid #9e9e9e; }
    table tr td.border-end-right, table tr th.border-end-right {
      border-right: 1px dotted #d0d0d0; }
  table tr:last-child td, table tr:last-child th {
    border-bottom: 1px solid #9e9e9e; }
  table.centered thead tr th, table.centered tbody tr td {
    text-align: center; }
  table.highlight > tbody > tr {
    transition: background-color .25s ease; }
    table.highlight > tbody > tr:hover {
      background-color: #fdeaeb; }
  table.striped > tbody > tr:nth-child(odd) {
    background-color: #fafafa; }
  table.striped > tbody > tr > td {
    border-radius: 0; }
  table.vertical-table {
    display: block;
    position: relative; }
    table.vertical-table td:empty:before {
      content: '\00a0'; }
    table.vertical-table th, table.vertical-table td {
      vertical-align: top;
      box-sizing: border-box;
      border-right: 1px dotted #d0d0d0; }
    table.vertical-table thead {
      display: block;
      float: left; }
      table.vertical-table thead tr {
        display: block; }
        table.vertical-table thead tr th {
          border: 1px solid #d0d0d0;
          border-bottom: none; }
          table.vertical-table thead tr th:first-child {
            border-top: 2px solid #e51c23; }
          table.vertical-table thead tr th:last-child {
            border-bottom: 1px solid #909090; }
          table.vertical-table thead tr th::before {
            content: "\00a0"; }
    table.vertical-table tbody {
      display: block;
      width: auto;
      position: relative;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      border-right: 1px solid #d0d0d0;
      font-size: 0; }
      table.vertical-table tbody tr {
        display: inline-block;
        vertical-align: top;
        border-bottom: 1px solid #909090 !important; }
        table.vertical-table tbody tr td, table.vertical-table tbody tr th {
          border-top: 1px solid #d0d0d0; }
        table.vertical-table tbody tr td:first-child, table.vertical-table tbody tr th:first-child {
          border-top: 2px solid #909090; }
        table.vertical-table tbody tr:last-child td, table.vertical-table tbody tr:last-child th {
          border-bottom: none; }
    table.vertical-table th {
      display: block; }
    table.vertical-table td {
      display: block;
      min-height: 1.25em; }
    table.vertical-table tr {
      padding: 0; }
      table.vertical-table tr td.border-end-bottom, table.vertical-table tr td.border-end-bottom {
        border-bottom: none; }
</style>
