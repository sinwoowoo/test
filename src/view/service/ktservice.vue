<template>
  <div class="page-contents">
    <div class="container">
      <div class="page-title">
        <div>
          <h2>kt그룹서비스</h2>
            <p>kt그룹 국가정보통신서비스의 <span class="kt-red-text">A·B·C·D·E Group</span>에 대해 소개 드립니다.</p>
        </div>
        <ul>
					<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
					<li>kt그룹서비스</li>
				</ul>
      </div>

      <div class="service-tab">
        <div class="current-label">
          <a href="javascript:">A. 전용회선서비스</a>
        </div>
        <ul name="tab-control">
          <!-- :checked = "조건" : "checked" : "" -->
          <li v-for="(tab, index) in tabs" :key="index" :class="{ 'active' : activeTab === index }" @click="changeTab(index)">
            <input type="radio" :id="this.activeTab"/>
            <label><span>{{tab}}</span></label>
          </li>
          <!--<li>
            <input type="radio" name="service-tab" id="service-tab-1" value="1" checked="checked" />
            <label for="service-tab-1"><span>A. 전용회선서비스</span></label>
          </li> 
          <li>
            <input type="radio" name="service-tab" id="service-tab-2" value="2" />
            <label for="service-tab-2"><span>B.인터넷서비스 </span></label>
          </li> 
          <li>
            <input type="radio" name="service-tab" id="service-tab-3" value="3" />
            <label for="service-tab-3"><span>C. 인터넷전화서비스</span></label>
          </li> 
          <li>
            <input type="radio" name="service-tab" id="service-tab-4" value="4" />
            <label for="service-tab-4"><span>D. 무선서비스</span></label>
          </li>      
          <li>
            <input type="radio" name="service-tab" id="service-tab-5" value="5" />
            <label for="service-tab-5"><span>E. CCTV서비스</span></label>
          </li>
          -->
        </ul>
      </div>

      <div class="service-info">
        <ul>
          <li class="list" v-for="i in [currentIndex]" :key="i" >
            <div>
              <div class="image">
                <div class="center-align">
                  <img :src="currentInfo.imgSrc" :alt="currentInfo.alt" :class="currentInfo.class1" />
                </div>              
              </div>
              <div class="text" >
                <div v-html="currentInfo.text" />
                <div>
                  <router-link :to="currentInfo.linkSrc" :class="currentInfo.class2">{{currentInfo.linkText}}</router-link>
                </div>
              </div>
            </div>
          </li>
          <!--li class="list hide service-1">
            <div>
              <div class="image">
                <div class="center-align">
                  <img src="@/assets/images/service_01.png" alt="전용회선서비스" class="responsive-img" />
                </div>
              </div>
              <div class="text">
                <h2>A그룹[전용회선서비스]</h2>                  
                <p>전용회선서비스 그룹은 <b>기본회선(망분리회선, 단기이용 포함), 백본회선</b>으로 구성</p>
                <p><b>(망분리회선)</b> 상.하위 주소가 동일한 기본회선서비스에 대하여 인터넷.<br />업무망 분리 용도 등으로 여러 회선을 묶어서 제공하는 서비스</p>
                <p><b>(단기이용)</b> 선거.행사.대회 등 일정 기간 기본회선을 사용일수 기반으로 <br />제공하는 서비스</p>

                <router-link to="/service/leasedline_infra" class="btn">전용회선 인프라</router-link>                
              </div>
            </div>
          </li>
          <li class="list hide service-2">
            <div>
              <div class="image">
                <div class="center-align">
                  <img src="@/assets/images/service_02.png" alt="IP 서비스" class="responsive-img" />
                </div>
              </div>
              <div class="text">
                <h2>B그룹[인터넷서비스]</h2>                  
                <p>인터넷 서비스 그룹은 <b>인터넷 접속을 위한 서비스</b>로 구성</p>
                <p>민간기관 트래픽과 물리적·논리적으로 분리된 전용 인터넷망을 통한 안정적인 인터넷 서비스</p>
                <p><b>(단기이용)</b> 선거.행사.대회 등 일정 기간 인터넷을 사용일수 기반으로  제공하는 서비스</p>

                <router-link to="/service/ipservice_infra" class="btn">인터넷 인프라</router-link>                
              </div>
            </div>
          </li>
          <li class="list hide service-3">
            <div>
              <div class="image">
                <div class="center-align">
                  <img src="@/assets/images/service_03.png" alt="인터넷 전화 서비스" class="responsive-img" />
                </div>
              </div>
              <div class="text">
                <h2>C그룹[인터넷전화서비스]</h2>
                <h4>설치와 사용이 편리한 인터넷 전화 서비스</h4>
                <p>일반전화 대비 저렴한 요금으로 다양한 부가 기능 서비스까지 이용할 수 있는 서비스 환경을 제공합니다. 인터넷전화 서비스 그룹은 인터넷전화 및 모바일행정전화 서비스로 구성됩니다.</p>
                
                <router-link to="/service/ipservice_soip_infra" class="btn">인터넷 전화 인프라</router-link>                
              </div>
            </div>
          </li>
          <li class="list hide service-4">
            <div>
              <div class="image">
                <div class="center-align">
                  <img src="@/assets/images/service_05.png" alt="무선 서비스" class="responsive-img" />
                </div>
              </div>
              <div class="text">
                <h2>D그룹[무선 서비스]</h2>
                <h4>요금제 부담 없이 이용하는 업무용 무선 서비스</h4>
                <p>무선서비스 그룹은 <b>무선데이터</b>와 <b>Iot서비스</b>로 구성됩니다.</p>
                
                <router-link to="/service/wireless_infra" class="btn">무선 인프라</router-link>                
              </div>
            </div>
          </li>
          <li class="list hide service-5">
            <div>
              <div class="image">
                <div class="center-align">
                  <img src="@/assets/images/service_06.png" alt="CCTV 서비스" class="responsive-img" />
                </div>
              </div>
              <div class="text">
                <h2>E그룹[CCTV 서비스]</h2>
                <h4>CCTV서비스 그룹은 CCTV전송회선 서비스로 구성</h4> 
              </div>
            </div>
          </li>-->
        </ul>
      </div>

      <h3>서비스 목록</h3>
      <div class="service-list">
        <ul v-for="i in [currentIndex]" :key="i">
          <li class="list" v-if="currentList.linkSrc1 != ''" >
            <router-link :to="currentList.linkSrc1" >
              <div class="image" style="vertical-align:middle;">
                <img :src="currentList.imgSrc1" :alt="currentList.alt1" :class="currentList.class" />
              </div>
              <div class="text">
                <div v-html="currentList.text1" />
              </div>
            </router-link>
          </li>
          <li class="list" v-if="currentList.linkSrc2 != ''" >
            <router-link :to="currentList.linkSrc2" >
              <div class="image" >
                <img :src="currentList.imgSrc1" :alt="currentList.alt2" :class="currentList.class" />
              </div>
              <div class="text">
                <div v-html="currentList.text2" />
              </div>
            </router-link>
          </li>

          <!--<li class="list hide service-1">
            <router-link to="/service/leased_basic" >             
              <div class="image" style="vertical-align:middle;">
                <img src="@/assets/images/addService_img8.png" alt="기본회선 서비스" class="responsive-img" />
              </div>
              <div class="text">
                <h4>기본회선 서비스</h4>
                <p>기관간 연결수단을 제공하는 전용회선 서비스</p>
                <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
                <p>망분리회선, 단기이용회선 포함</p>
              </div>
            </router-link>
          </li>

          <li class="list hide service-1">
            <router-link to="/service/leased_backbone" >           
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="백본회선 서비스" class="responsive-img" />
              </div>
              <div class="text">
                <h4>백본회선 서비스</h4>
                <p>백본구간의 기관간 연결수단을 제공하는 전용</p>
                <p>회선서비스로 특정 기관에 적용</p>
                <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
              </div>
            </router-link> 
          </li>

          <li class="list hide service-2">
            <router-link to="/service/ipservice_internet" >            
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="인터넷 서비스" class="responsive-img" />
              </div>
              <div class="text">
                <h4>인터넷 서비스</h4>
                <p>이용기관에 인터넷 접속 수단을 제공하는 서비스</p>
                <p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>
                <p>단기이용 서비스 포함</p>
              </div>
            </router-link>
          </li>

          <li class="list hide service-3">
            <router-link to="/service/ipservice_soip" >             
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="인터넷 전화 서비스" class="responsive-img" />
              </div>                
              <div class="text">
                <h4>인터넷전화 서비스</h4>
                <p>기본 서비스와 부가서비스로 구성</p>
              </div>
            </router-link>
          </li>

          <li class="list hide service-3">
            <router-link to="/service/wireless_m_internetphone" >
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="모바일행정전화 서비스" class="responsive-img" />
              </div>                
              <div class="text">
                <h4>모바일행정전화 서비스</h4>
                <p>LTE기반 mVoIP서비스</p>
              </div>
            </router-link>
          </li>

          <li class="list hide service-4">
            <router-link to="/service/wireless_data" >            
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="무선 데이터 서비스" class="responsive-img" />
              </div>
              <div class="text">
                <h4>무선 데이터 서비스</h4>
                <p>스마트 단말등으로 모바일 행정서비스와 현장 업무서비스 등을 이용하기 위한 LTE 기반 데이터 서비스</p>
              </div>
            </router-link>
          </li>

          <li class="list hide service-4">
            <router-link to="/service/iot_service" >            
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="Iot 서비스" class="responsive-img" />
              </div>
              <div class="text">
                <h4>Iot 서비스</h4>
                <p>정보통신기술 기반으로 모든 사물을 연결해 플랫폼·네트워크간 정보를 교류하고 지원하는 지능형 인프라 및 서비스</p>
              </div>
            </router-link>
          </li>
          
          <li class="list hide service-5">
            <router-link to="/service/leased_cctv" >            
              <div class="image">
                <img src="@/assets/images/addService_img8.png" alt="cctv 전송회선 서비스" class="responsive-img" />
              </div>
              <div class="text">
                <h4>CCTV 전송회선 서비스</h4>
                <p>이용기관의 CCTV단말로부터 관제센터까지 영상을 전달하기 위해 제공하는 시내전용회선서비스</p>
                <p>접속방식 : Ethernet 등</p>
              </div>
            </router-link>
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>  
  export default {   
    name:"ktservice",     
    data(){
      return{
        tabs: [ 'A. 전용회선서비스','B.인터넷서비스','C. 인터넷전화서비스','D. 무선서비스','E. CCTV서비스' ],
        infos: [          
					{            
            text: "<h2>A그룹[전용회선서비스]</h2>"+
                  "<p>전용회선서비스 그룹은 <b>기본회선(망분리회선, 단기이용 포함), 백본회선</b>으로 구성</p>"+
                  "<p><b>(망분리회선)</b> 상.하위 주소가 동일한 기본회선서비스에 대하여 인터넷.<br />업무망 분리 용도 등으로 여러 회선을 묶어서 제공하는 서비스</p>"+
                  "<p><b>(단기이용)</b> 선거.행사.대회 등 일정 기간 기본회선을 사용일수 기반으로 <br />제공하는 서비스</p>",                  
            imgSrc: require('@/assets/images/service_01.png'),
            linkSrc: "/service/leasedline_infra",
            linkText: "전용회선 인프라",
            alt:"전용회선서비스",
            class1: "responsive-img",
            class2: "btn",
          },
					{
            text: "<h2>B그룹[인터넷서비스]</h2>"+
                  "<p>인터넷 서비스 그룹은 <b>인터넷 접속을 위한 서비스</b>로 구성</p>"+
                  "<p>민간기관 트래픽과 물리적·논리적으로 분리된 전용 인터넷망을 통한 안정적인 인터넷 서비스</p>"+
                  "<p><b>(단기이용)</b> 선거.행사.대회 등 일정 기간 인터넷을 사용일수 기반으로  제공하는 서비스</p>",
            imgSrc: require('@/assets/images/service_02.png'),
            linkSrc: "/service/ipservice_infra",
            linkText: "인터넷 인프라",
            alt:"IP 서비스",
            class1: "responsive-img",
            class2: "btn"
          },
					{
            text: "<h2>C그룹[인터넷전화서비스]</h2>"+
                  "<h4>설치와 사용이 편리한 인터넷 전화 서비스</h4>"+
                  "<p>일반전화 대비 저렴한 요금으로 다양한 부가 기능 서비스까지 이용할 수 있는 서비스 환경을 제공합니다. 인터넷전화 서비스 그룹은 인터넷전화 및 모바일행정전화 서비스로 구성됩니다.</p>",
            imgSrc: require('@/assets/images/service_03.png'),
            linkSrc: "/service/ipservice_soip_infra",
            linkText: "인터넷 전화 인프라",
            alt:"인터넷 전화 서비스",
            class1: "responsive-img",
            class2: "btn"
          },
          {
            text: "<h2>D그룹[무선 서비스]</h2>"+
                  "<h4>요금제 부담 없이 이용하는 업무용 무선 서비스</h4>"+
                  "<p>무선서비스 그룹은 <b>무선데이터</b>와 <b>Iot서비스</b>로 구성됩니다.</p>",
            imgSrc: require('@/assets/images/service_05.png'),
            linkSrc: "/service/wireless_infra",
            linkText: "무선 인프라",
            alt:"무선 서비스",
            class1: "responsive-img",
            class2: "btn"
          },
          {
            text: "<h2>E그룹[CCTV 서비스]</h2>"+
                  "<h4>CCTV서비스 그룹은 CCTV전송회선 서비스로 구성</h4> ",
            imgSrc: require('@/assets/images/service_06.png'),
            linkSrc: "",
            linkText: "",
            alt:"CCTV 서비스",
            class1: "responsive-img",
            class2: ""
          }
				],
        lists: [          
					{ 
            linkSrc1: "/service/leased_basic",
            linkSrc2: "/service/leased_backbone",
            imgSrc1: require('@/assets/images/addService_img8.png'),
            imgSrc2: require('@/assets/images/addService_img8.png'),
            alt1:"기본회선 서비스",
            alt2:"백본회선 서비스",            
            class: "responsive-img",
            text1:  "<h4>기본회선 서비스</h4>"+
                    "<p>기관간 연결수단을 제공하는 전용회선 서비스</p>"+
                    "<p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>"+
                    "<p>망분리회선, 단기이용회선 포함</p>",
            text2:  "<h4>백본회선 서비스</h4>"+
                    "<p>백본구간의 기관간 연결수단을 제공하는 전용</p>"+
                    "<p>회선서비스로 특정 기관에 적용</p>"+
                    "<p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>"           
          },
					{
            linkSrc1: "/service/ipservice_internet",
            linkSrc2: "",
            imgSrc1: require('@/assets/images/addService_img8.png'),
            alt1:"인터넷 서비스",
            alt2:"",            
            class: "responsive-img",
            text1:  "<h4>인터넷 서비스</h4>"+
                    "<p>이용기관에 인터넷 접속 수단을 제공하는 서비스</p>"+
                    "<p>접속방식 : E1/T1, DS3, SDH, Ethernet 등</p>"+
                    "<p>단기이용 서비스 포함</p>",
            text2:  ""
          },
					{
            linkSrc1: "/service/ipservice_soip",
            linkSrc2: "/service/wireless_m_internetphone",
            imgSrc1: require('@/assets/images/addService_img8.png'),
            alt1:"인터넷 전화 서비스",
            alt2:"모바일행정전화 서비스",            
            class: "responsive-img",
            text1:  "<h4>인터넷전화 서비스</h4>"+
                    "<p>기본 서비스와 부가서비스로 구성</p>",
            text2:  "<h4>모바일행정전화 서비스</h4>"+
                    "<p>LTE기반 mVoIP서비스</p>"
          },
          {
            linkSrc1: "/service/wireless_data",
            linkSrc2: "/service/leased_cctv",
            imgSrc1: require('@/assets/images/addService_img8.png'),
            alt1:"무선 데이터 서비스",
            alt2:"Iot 서비스",            
            class: "responsive-img",
            text1:  "<h4>무선 데이터 서비스</h4>"+
                    "<p>스마트 단말등으로 모바일 행정서비스와 현장 업무서비스 등을 이용하기 위한 LTE 기반 데이터 서비스</p>",
            text2:  "<h4>Iot 서비스</h4>"+
                    "<p>정보통신기술 기반으로 모든 사물을 연결해 플랫폼·네트워크간 정보를 교류하고 지원하는 지능형 인프라 및 서비스</p>"
          },
          {
            linkSrc1: "/service/leased_cctv",
            linkSrc2: "",
            imgSrc1: require('@/assets/images/addService_img8.png'),
            alt1:"cctv 전송회선 서비스",
            alt2:"",            
            class: "responsive-img",
            text1:  "<h4>CCTV 전송회선 서비스</h4>"+
                    "<p>이용기관의 CCTV단말로부터 관제센터까지 영상을 전달하기 위해 제공하는 시내전용회선서비스</p>"+
                    "<p>접속방식 : Ethernet 등</p>",
            text2:  ""
          }
				],
        activeTab:0,
        currentIndex: 0,
        paramIdx: this.$route.params.num,        
      }
    },
    mounted() {
      this.checkNum(this.paramIdx);
    },
    methods: {
      changeTab(index){
        this.activeTab = index;       

        //Computed index 변경
        this.currentIndex = index;
                
        //info 변경
        this.changeInfo(index);

        //list 변경
        this.changeList(index);
      },
      changeInfo(){
        this.currentInfo;
      },
      changeList(){
        this.currentList;        
      },
      checkNum(paramIdx) {        
        if( paramIdx != null){          
          this.changeTab(paramIdx);
        }        
      }
    },
    computed: {            
      currentInfo: function(){
				return this.infos[Math.abs(this.currentIndex) % this.infos.length];
			},
			currentList: function(){
				return this.lists[Math.abs(this.currentIndex) % this.lists.length];
			}
    }
  }
</script>
