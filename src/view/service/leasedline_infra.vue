<template>	
	<div class="page-contents">
	  <div class="container">	   
	    <div class="page-title">
	      <div>
	        <h2>전용회선 서비스</h2>
	        <p>kt그룹 국가정보통신서비스 <span class="kt-red-text">전용회선 서비스</span>를 알려드리겠습니다.</p>
	      </div>
		  <ul>
			<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
			<li>kt그룹서비스</li>
			<li><router-link to="/service/ktservice" @click="pushParam(0)">A. 전용회선 서비스</router-link></li>
	       	<li><router-link to="/service/leasedline_infra">전용회선 인프라</router-link></li>
		  </ul>
	    </div>
	    
	    <div class="page-tab">
	      <div class="current-label">
	        <a href="javascript:">전용회선 인프라</a>
	      </div>
	      <ul>
	        <li><router-link to="/service/leased_basic">기본회선 서비스</router-link></li> 
	        <li><router-link to="/service/leased_backbone">백본회선 서비스</router-link></li>	        
	        <li class="active"><router-link to="/service/leasedline_infra">전용회선 인프라</router-link></li>
	      </ul>
	    </div>
	    
	    <div class="row">	      
	      <div class="col s12">
	      	<h3>전용 회선서비스 구성방안</h3>
			<div class="center-align">
				<div class="center-align">
					<img src="@/assets/images/img_formation_map.png" alt="tset" class="responsive-img" />
				</div>
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