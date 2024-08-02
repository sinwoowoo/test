<template>
	<div class="page-contents">
		<div class="container">
			<div class="page-title">
				<div>
					<h2>전용회선 서비스</h2>
					<p>kt그룹 국가정보통신서비스의 <span class="kt-red-text">전용회선 서비스</span>를 알려드리겠습니다.</p>
				</div>
				<ul>
					<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
					<li>kt그룹서비스</li>
					<li><router-link to="/service/ktservice" @click="pushParam(0)" >A. 전용회선 서비스</router-link></li>
					<li><router-link to="/service/leased_basic">기본회선 서비스</router-link></li>
				</ul>
			</div>

			<div class="page-tab">
				<div class="current-label">
					<a href="javascript:">기본회선 서비스</a>
				</div>
				<ul>
					<li class="active"><router-link to="/service/leased_basic">기본회선 서비스</router-link></li> 
					<li><router-link to="/service/leased_backbone">백본회선 서비스</router-link></li>      
					<li><router-link to="/service/leasedline_infra">전용회선 인프라</router-link></li> 
				</ul>
			</div>

			<div class="radio-tab">
				<ul>
					<li>
						<input type="radio" name="radio-tab" id="t1" value="service_info" checked="checked" />
						<label for="t1"><i class="material-icons"> live_help</i> 서비스 정보</label>
					</li>
					<li>
						<input type="radio" name="radio-tab" id="t2" value="price_info" />
						<label for="t2"><i class="material-icons">receipt</i> 요금 안내</label>
					</li>
				</ul>
			</div>
		</div>

		<div class="container service_info">
			<div class="row">
				<div class="col s12">
					<h3>기본회선 서비스 개요</h3>
					<ul class="list-style1">
						<li>기관간 연결수단을 제공하는 전용회선 서비스</li>
						<li>* 접속방식 : E1/T1, DS3, SDH, Ethernet 등</li>
						<li> - 망분리 회선, 단기이용 서비스 포함</li>
					</ul>
					<h3>제공내용</h3>
					<ul class="list-style1">
						<li>9.6Kbps~10Gbps</li>
						<li>(속도별/거리별 정액제)</li>
						<li>*단기이용은 2Mbps 이상부터 적용</li>
					</ul>
				</div>
			</div>	

			<div class="row">
				<div class="col s12">
					<h3>[ 참고 : 단기간 이용서비스 개요 ]</h3>
					<div class="left-align">
						<img src="@/assets/images/img_leased_basic_new.png" alt="tset" class="responsive-img2" />
					</div>
					<ul class="list-style1">
						<li><b>(정의)</b> 대회·행사·선거 등 한시적인 통신수요에 대해 기본회선을 사용기간 동안만 과금하는 서비스 </li>
						<li><b>(이용요금)</b> 기본회선 1일 24시간, 한 달 30일 기준으로 사용한 기간을 나누어 일할 계산방식을 적용하며, 사용기간 등이 모호할 경우 신청시 협의·조정</li>								
						<li>※ 단기이용은 2M 이상부터 제공, 설치 및 철거비 별도 협의</li>
						<li>※  설치 및 철거비 산정기준 : 장비투자비, 제공거리에 따른 선로설비, 루트의 이원화 여부 등의 직접비 요소와 인건비 및 제반경비요소를 고려하여 산정</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="container price_info display:none">
		<div class="col s12 m3 right-align">
			<a href="" class="btn show-on-small">요금상세조회</a>
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