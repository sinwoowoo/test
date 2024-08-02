<template>
	<div class="page-contents">
	  <div class="container">
	   
	    <div class="page-title">
	      <div>
	        <h2>모바일행정전화 인프라</h2>
	        <p>kt그룹 국가정보통신서비스의 <span class="kt-red-text">모바일행정전화 인프라</span>를 알려드리겠습니다.</p>
	      </div>
	      <ul>
	        <li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
			<li>kt그룹서비스</li>
			<li><router-link to="/service/ktservice" @click="pushParam(2)">C. 인터넷 전화 서비스</router-link></li>
			<li><router-link to="/service/wireless_m_internetphone_infra">모바일행정전화 인프라</router-link></li>	
	      </ul>
	    </div>
	    
	    <div class="page-tab">
	      <div class="current-label">
	        <a href="javascript:">모바일행정전화 인프라</a>
	      </div>
	      <ul>
	        <li><router-link to="/service/ipservice_soip">인터넷 서비스 </router-link></li>
			<li><router-link to="/service/wireless_m_internetphone">모바일행정전화 서비스</router-link></li>   
			<li><router-link to="/service/ipservice_soip_infra">인터넷전화 인프라 </router-link></li>
			<li class="active"><router-link to="/service/wireless_m_internetphone_infra">모바일행정전화 인프라</router-link></li>    
	      </ul>
	    </div>
	    
	    <div class="row">
	      <div class="col s12">
	      <h3>모바일행정전화 인프라</h3>
	        <div class="center-align">
	        	<img src="@/assets/images/img_infra5_new.png" alt="tset" class="responsive-img2" />
	        </div>
	      </div>
	      
	    </div>
	    
	  </div>
	  
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