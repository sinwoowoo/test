<template>
  <div>    
    <header id="header">
      <div class="container">
        <div class="kt-egov-logo">
          <router-link to="/main">
            <img src="@/assets/images/kt_egov_logo_new.png" alt="kt국가정보통신서비스" />
            <img src="@/assets/images/kt_egov_logo_mobile_new.png" alt="kt국가정보통신서비스" class="mobile" />
          </router-link>
        </div>
        <a href="javascript:" class="hamberger-btn">
          <i class="material-icons">&#xE5D2;</i>
        </a>
        <div class="mini">
          <a href="javascript:" class="account-btn">
            <i class="material-icons">&#xE851;</i>
          </a>          
        </div>
      </div>
      <nav class="gnb">
        <ul>
          <li>
            <a href="javascript:">제도소개</a>
            <div class="submenu intro">
              <div class="container">
                <div class="menu-title">
                  <h3>제도소개</h3>
                  <p>kt그룹 국가정보통신서비스<br />제도소개 입니다.</p>
                </div>
                <dl>
                  <dt>                    
                    <router-link to="/intro/definition">정의</router-link>
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/intro/feature">특징</router-link>                    
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/intro/service">서비스체계</router-link>                    
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/intro/changepoint">제도변경사항</router-link>                    
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/intro/counsel">추진체계</router-link>
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/intro/propulsion">추진경과</router-link>                    
                  </dt>
                </dl>
              </div>
            </div>
          </li>

          <li>
            <a href="javascript:">kt그룹서비스</a>
            <div class="submenu service">
              <div class="container">
                <div class="menu-title">
                  <h3>kt그룹 서비스</h3>
                  <p>kt그룹 국가정보통신서비스<br />입니다.</p>
                </div>
                <dl>
                  <dt>
                    <router-link to="/service/ktservice" @click="pushParam(0)">A. 전용회선서비스</router-link>
                  </dt>
                  <dd>
                    <router-link to="/service/leased_basic">기본회선서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/leased_backbone">백본회선서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/leasedline_infra">전용회선 인프라</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/service/ktservice" @click="pushParam(1)">B. 인터넷서비스</router-link>
                  </dt>
                  <dd>
                    <router-link to="/service/ipservice_internet">인터넷서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/ipservice_infra">인터넷 인프라</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/service/ktservice" @click="pushParam(2)">C .인터넷전화서비스</router-link>
                  </dt>
                  <dd>
                    <router-link to="/service/ipservice_soip">인터넷전화서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/wireless_m_internetphone">모바일행정전화 서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/ipservice_soip_infra">인터넷 전화 인프라</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/wireless_m_internetphone_infra">모바일행정전화 인프라</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/service/ktservice" @click="pushParam(3)">D. 무선서비스</router-link>
                  </dt>
                  <dd>
                    <router-link to="/service/wireless_data">무선데이터서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/iot_service">IoT서비스</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/wireless_infra">무선 인프라</router-link>
                  </dd>
                  <dd>
                    <router-link to="/service/iot_infra">IoT 인프라</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/service/ktservice" @click="pushParam(4)">E. CCTV서비스</router-link>
                  </dt>
                  <dd>
                    <router-link to="/service/leased_cctv">CCTV 전송회선 서비스</router-link>
                  </dd>
                </dl>
              </div>
            </div>
          </li>

          <li>
            <a href="javascript:">이용안내</a>
            <div class="submenu guide">
              <div class="container">
                <div class="menu-title">
                  <h3>이용안내</h3>
                  <p>kt그룹 국가정보통신서비스<br />이용안내 입니다.</p>
                </div>
                <dl>
                  <dt>
                    <a href="javascript:">이용절차</a>
                  </dt>
                  <dd>
                    <router-link to="/guide/procedure">이용절차</router-link>
                  </dd>
                  <dd>
                    <router-link to="/guide/procedure1">청약절차</router-link>
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <a href="javascript:">요금정보</a>
                  </dt>
                  <dd>
                    <router-link to="/guide/charges">요금표</router-link>
                  </dd>
                  <dd>
                    <router-link to="/guide/area">권역/거리/속도체계</router-link>
                  </dd>                  
                </dl>
                <dl>
                  <dt>
                    <router-link to="/guide/counsel">상담안내</router-link>
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <a href="javascript:">운영/장애 안내</a>
                  </dt>
                  <dd>
                    <router-link to="/guide/kt_merit">KT특장점</router-link>
                  </dd>
                  <dd>
                    <router-link to="/guide/ktsat_merit">KTsat특장점</router-link>
                  </dd>
                  <dd>
                    <router-link to="/guide/formation">조직/체계</router-link>
                  </dd>
                  <dd>
                    <router-link to="/guide/hindrance">장애대응 방안</router-link>
                  </dd>
                  <dd>
                    <router-link to="/guide/control">망관리/감시</router-link>
                  </dd>
                </dl>
              </div>
            </div>
          </li>

          <li>
            <a href="javascript:">고객지원</a>
            <div class="submenu support">
              <div class="container">
                <div class="menu-title">
                  <h3>고객지원</h3>
                  <p>kt그룹 국가정보통신서비스<br />고객지원 입니다.</p>
                </div>                
                <dl>
                  <dt>
                    <router-link to="/support/faq">FAQ</router-link>
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/support/agreement">홈페이지 이용약관</router-link>
                  </dt>
                </dl>
                <dl>
                  <dt>
                    <router-link to="/support/personal">개인정보처리방침</router-link>
                  </dt>
                </dl>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
	export default {		
		methods: {
			pushParam(index){
				this.$router.push({
					name: "ktservice",
					params: {
						"num": index
					}
				})
			}
		}
	}
</script>

<style>
/* Add your styles here */
</style>
