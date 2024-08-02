<template>
	<div>
		<div>			
			<vueper-slides autoplay :bullets="false" :touchable="false" >
				<vueper-slide v-for="(image, i) in images" :key="i"					
					:image="image.imgSrc"
				/>
			</vueper-slides>
			
			<!--<nav class="main-pager">
				<div class="container">
					<img src="@/assets/images/thumbs_3_new.jpg" />
					<img src="@/assets/images/thumbs_2.jpg" />
				</div>
			</nav>-->
		</div>

		<section class="kt-egov-merits">
			<div class="container">
				<div class="row">
					<div class="col s12 center">
						<h1 class="kt-red-text">
							<small>풍부한 관련 사업 경험과 전국 서비스 제공 능력을 통해</small><br /> 최상의 국가정보통신서비스를 구축해 드립니다.
						</h1>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m6 l3-2">
						<router-link to="/service/ktservice" class="merit-link">
							<img src="@/assets/images/service_01.png" alt="전용회선서비스">
							<h3>
								전용회선서비스<br /> <small>두 지점간 완벽한 보안성능을 갖춘 24시간 단독회선 서비스</small>
							</h3>
						</router-link>
					</div>
					<div class="col s12 m6 l3-2">
						<router-link to="/service/ktservice" class="merit-link">
							<img src="@/assets/images/service_02.png" alt="IP서비스">
							<h3>
								인터넷서비스<br /> <small>다양한 속도로 안정적인 네트워크 접속을 제공하는 인터넷 전용회선 서비스</small>
							</h3>
						</router-link>
					</div>
					<div class="col s12 m6 l3-2">
						<router-link to="/service/ktservice" class="merit-link">
							<img src="@/assets/images/service_03.png" alt="인터넷전화서비스">
							<h3>
								인터넷전화서비스<br /> <small>인터넷 전화와 직원간 무료통화가 가능한 LTE기반 mVoIP서비스</small>
							</h3>
						</router-link>
					</div>
					<div class="col s12 m6 l3-2">
						<router-link to="/service/ktservice" class="merit-link">
							<img src="@/assets/images/service_05.png" alt="무선서비스">
							<h3>
								무선서비스<br /> <small>LTE기반의 스마트 단말 행정서비스와 정보통신기술 기반의 IoT서비스</small>
							</h3>
						</router-link>						
					</div>
					<div class="col s12 m6 l3-2">
						<router-link to="/service/ktservice" class="merit-link">
							<img src="@/assets/images/service_06.png" alt="CCTV서비스">
							<h3>
								CCTV서비스<br /> <small>CCTV단말로부터 관제센터까지 영상 전달을 제공하는 시내 전용회선서비스</small>
							</h3>
						</router-link>
					</div>
				</div>
			</div>
		</section>		
	</div>
</template>

<script>		
	import { VueperSlides, VueperSlide } from 'vueperslides'	

	export default {	
		components: { VueperSlides, VueperSlide },
		data() {
			return {
				images: [
					{imgSrc: require('@/assets/images/main_banner_bg3.png'), text: "전용회선과 위성통신을 통해 국가정보통신서비스 선두사업자로 도약하겠습니다."	},
					{imgSrc: require('@/assets/images/main_banner_bg1_new.jpg'), text: "전용회선과 위성통신을 통해 국가정보통신서비스 선두사업자로 도약하겠습니다."	},
				]				
			};
		},
		mounted() {},
		methods: {},
	};
	
</script>