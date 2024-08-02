<template>
	<div class="page-contents">
	  <div class="container">
	   
	    <div class="page-title">
	      <div>
	        <h2>IoT 서비스</h2>
	        <p>kt그룹 국가정보통신서비스의 <span class="kt-red-text">IoT 서비스</span>를 알려드리겠습니다.</p>
	      </div>
	      <ul>
			<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
			<li>kt그룹서비스</li>
			<li><router-link to="/service/ktservice" @click="pushParam(3)">D. 무선 서비스</router-link></li>
			<li><router-link to="/service/wireless_infra">무선 인프라</router-link></li>		        
	      </ul>
	    </div>
	    
	    <div class="page-tab">
	      <div class="current-label">
	        <a href="javascript:">IoT 서비스</a>
	      </div>
	      <ul>
	        <li><router-link to="/service/wireless_data">무선데이터 서비스</router-link></li>
			<li><router-link to="/service/iot_service">IoT 서비스</router-link></li>   
			<li class="active"><router-link to="/service/wireless_infra">무선 인프라 </router-link></li>
			<li><router-link to="/service/iot_infra">IoT 인프라</router-link></li> 
	      </ul>
	    </div>

	    <div class="row">
	      <div class="col s12">
	      	<h3>무선 인프라</h3>
	        <div class="center-align">
	        	<img src="@/assets/images/img_infra2.gif" alt="tset" class="responsive-img" />
	        </div>
	      </div>
	      <div class="col s12">
	        <div class="center-align">
	        	<img src="@/assets/images/img_infra3.gif" alt="tset" class="responsive-img" />
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