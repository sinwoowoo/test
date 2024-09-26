<template>
  <h3>이용절차</h3>
  <div class="row">
    <div class="col s6 m4 l2">
      <div class="process">
        <i class="material-icons md-48">account_box</i>
        <p>1. 이용대상 확인</p>
      </div>
    </div>
    <div class="col s6 m4 l2">
      <div class="process">
        <i class="material-icons md-48">shopping_cart</i>
        <p>2. 이용서비스 확정</p>
      </div>
    </div>
    <div class="col s6 m4 l2">
      <div class="process">
        <i class="material-icons md-48">playlist_add_check</i>
        <p>3. 서비스 이용신청 작성 및 kt 송부</p>
      </div>
    </div>
    <div class="col s6 m4 l2">
      <div class="process">
        <i class="material-icons md-48">event</i>
        <p>4. 서비스 개통일자 확인 및 이용요금 안내</p>
      </div>
    </div>
    <div class="col s6 m4 l2">
      <div class="process">
        <i class="material-icons md-48">thumb_up</i>
        <p>5. 서비스 개통</p>
      </div>
    </div>
    <div class="col s6 m4 l2">
      <div class="process">
        <i class="material-icons md-48">receipt</i>
        <p>
          6. 이용요금 납부<br />
          <small>(개통 다음날)</small>
        </p>
      </div>
    </div>
  </div>
  
  <div class="row process-bg">
    <h3>이용대상</h3>
    <ul class="list-style1">
      <li>국가기관(행정기관, 입법기관, 사법기관) 및 지방자치단체</li>
      <li>공공기관 운영에 관한 법률 제4조에 따른 공공기관(준정부기관)</li>										          
    </ul>
    <li>※ 단, 공공기관은 "B"그룹 서비스 이용불가, "C"그룹(인터넷전화서비스)을 사용하고자 하는 경우에만 "B"그룹 서비스 이용가능(음성 용도)</li>
  </div> 

</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.process-bg{
  position: inherit;
  background: url("@/assets/images/img_procedure1.png") ;
}
</style>