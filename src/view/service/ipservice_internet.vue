<template>
	<div class="page-contents">
		<div class="container">
			<div class="page-title">
				<div>
					<h2>인터넷 서비스</h2>
					<p>
						kt그룹 국가정보통신서비스의 <span class="kt-red-text">인터넷서비스</span>를 알려드리겠습니다.
					</p>
				</div>
				<ul>
					<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
					<li>kt그룹서비스</li>
					<li><router-link to="/service/ktservice?id=" @click="pushParam(1)">B. 인터넷 서비스</router-link></li>			
				</ul>
			</div>

			<div class="page-tab">
				<div class="current-label">
					<a href="javascript:">인터넷 서비스</a>
				</div>
				<ul>
					<li class="active"><router-link to="/service/ipservice_internet">인터넷 서비스 </router-link></li>
					<li><router-link to="/service/ipservice_infra">인터넷 서비스 인프라</router-link></li>   
				</ul>
			</div>

			<div class="radio-tab">
				<ul>
					<li><input type="radio" name="radio-tab" id="t1"
						value="service_info" checked="checked" /> <label for="t1"><i
							class="material-icons"> live_help</i> 서비스 정보</label></li>
					<li><input type="radio" name="radio-tab" id="t2"
						value="price_info" /> <label for="t2"><i
							class="material-icons">receipt</i> 요금 안내</label></li>
				</ul>
			</div>
		</div>

		<div class="container service_info">
			<div class="row">
				<div class="col s12">
					<h3>인터넷 서비스 개요</h3>
					<ul class="list-style1">
						<li>이용기관에 64Kbps~10Gbps(속도별 정액제)까지의 다양한 속도로 안정적인 인터넷 접속을 제공하는 인터넷 전용회선 서비스
						</li>
					</ul>
					
				</div>
			</div>

			<div class="row">
				<div class="col s12">
					<h3>단기간 이용 서비스란?</h3>
					<ul class="list-style1">
						<li>대회ㆍ행사ㆍ선거 등 한시적인 통신 수요에 대해 기본회선을 사용기간 동안만 과금 하는 서비스<br>
							(이용요금) 기본회선 1일 24시간, 한 달 30일 기준으로 사용한 기간을 나누어 일할 계산방식을 적용하며,<br>
							사용기간 등이 모호할 경우 신청시 협의ㆍ조정 
						</li>
					</ul>
					<div class="left-align">
						<img src="@/assets/images/img_ipservice_internet_new.png" alt="tset" class="responsive-img2" />
					</div>
				</div>
			</div>

		</div>

		<!--
		<div class="container price_info display:none">
			<div class="col s12 m3 right-align">
				<a href="javascript:" class="btn show-on-small" >요금상세조회</a>
			</div>
			<jsp:include page="../service/ipservice_internet_fee.jsp" />
		</div>-->
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
