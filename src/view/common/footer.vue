<template>
	<div>		
		<div class="slides-container">
			<vueper-slides autoplay :touchable="false" >
				<vueper-slide v-for="(image, i) in images" :key="i"	
					:image="image.imgSrc"				
					:content="image.content"
				/>			
				<template #bullet="{ active, index }">
					<i class="icon">{{ active ? 'KT 서비스 특장점'+index : index}}</i>
				</template>	
			</vueper-slides>
		</div>
		<div class="help-banner">
			<div class="container">
				<div class="row">
					<div class="col s12 m8">
						<div class="title">
							<img src="<%=request.getContextPath()%>/images/speach_bul</div>l.png"
								alt="말풍선">
							<h3>
								도움이 필요하세요? <small>상담 및 전화 서비스 신청 가능합니다.</small>
							</h3>
						</div>
					</div>
					<div class="col s12 m2 center box">
						<a
							href="javascript:menuMove('<%=request.getContextPath()%>/support/faq.do')"
							class="box">FAQ</a>
					</div>
					<div class="col s12 m2 center box">
						<a
							href="javascript:menuMove('<%=request.getContextPath()%>/guide/counsel.do')">서비스신청</a>
					</div>
					<!-- <div class="col s12 m2 center box">
					2018.06.29 긴급반영 상담번호 수정
					</div>	<a href="javascript:">1588-0114 (ARS 2>2)</a>
					</div> -->
				</div>
			</div>
		</div>
		<div class="sitemap">
			<div class="container">
				<div class="row">
					<div class="col s12 m6 l2 kt-logo">
						<img src="<%=request.getContextPath()%>/images/icon_kt_new.png" alt="korea telecom">
					</div>
					<div class="col s12 m6 l2">
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/definition.do')" class="main">제도소개</a>
						<div class="divider"></div>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/definition.do')" class="sub">정의</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/feature.do')" class="sub">특징</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/service.do')" class="sub">서비스체계</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/changepoint.do')" class="sub">제도변경사항</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/counsel.do')" class="sub">추진체계</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/intro/propulsion.do')" class="sub">추진경과</a>
					</div>
					<div class="col s12 m6 l2">
						<a href="javascript:menuMove('<%=request.getContextPath()%>/service/ktservice.do',1)" class="main">kt그룹서비스</a>
						<div class="divider"></div>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/service/ktservice.do', 1);" class="sub">전용회선서비스</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/service/ktservice.do', 2);" class="sub">인터넷서비스</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/service/ktservice.do', 3);" class="sub">인터넷전화서비스</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/service/ktservice.do', 4);" class="sub">무선서비스</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/service/ktservice.do', 5);" class="sub">CCTV서비스</a>
					</div>
					<div class="col s12 m6 l2">
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/procedure.do')" class="main">이용안내</a>
						<div class="divider"></div>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/kt_merit.do')" class="sub">KT특장점</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/ktsat_merit.do')" class="sub">KTsat특장점</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/procedure.do')" class="sub">이용절차</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/charges.do')" class="sub">요금정보</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/counsel.do')" class="sub">상담안내</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/guide/kt_merit.do')" class="sub">운영/장애 안내</a>
					</div>
					<div class="col s12 m6 l2">
						<a href="javascript:menuMove('<%=request.getContextPath()%>/traffic/traffic1.do')" class="main">트래픽조회</a>
						<div class="divider"></div>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/traffic/traffic1.do')" class="sub">트래픽조회서비스</a>
					</div>
					<div class="col s12 m6 l2">
						<a href="javascript:menuMove('<%=request.getContextPath()%>/support/notice_list.do')" class="main">고객지원</a>
						<div class="divider"></div>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/support/notice_list.do')" class="sub">공지사항</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/support/dataroom_list.do')" class="sub">자료실</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/support/faq.do')" class="sub">FAQ</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/member/agreement.do')" class="sub">홈페이지 이용약관</a>
						<a href="javascript:menuMove('<%=request.getContextPath()%>/member/personal.do')" class="sub">개인정보처리방침</a>
					</div>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="container">
				<div class="row">
					<div class="col s12 m12 l5">
						<div class="contact2">
							<div class="row">
								<div class="col s12 m6 l6">
									<ul class="footer-list">
										<h4><i class="material-icons">perm_phone_msg</i>서비스신청 및 상담문의</h4>
										<li>A · E그룹</li>
										<li><a href="tel:1899-3773">1899-3773</a><span> (ARS1번)</span></li>
										<li class="sbtxt">FAX : <a href="tel:1899-3773">0502-918-7798</a> <span></span></li>
										<li class="sbtxt">고장접수 : <a href="tel:1899-3773">1899-3773</a> <span>(ARS2번)</span></li>
									</ul>
								</div>
								<div class="col s12 m6 l6">
									<ul class="footer-list">
										<h4><i class="material-icons">perm_phone_msg</i>서비스신청 및 상담문의</h4>
										<li>B · C · D그룹</li>
										<li><a href="tel:1588-0114">1588-0114</a> <span>(ARS2 &gt; 2)</span></li>
										<li class="sbtxt">FAX : <a href="tel:1588-0114">080-789-0001</a> <span>(ARS1번)</span></li>
										<li class="sbtxt">고장접수 : <a href="tel:1588-0114">1588-0114</a> <span>(ARS3 &gt; 0)</span></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col s12 m12 l7">
						<div class="row legal2">
							<div class="col s12">
								<ul class="footer-list">
									<li>회사소개<a href="https://corp.kt.com" target="_blank">(KT</a>·<a href="https://ktsat.net" target="_blank">KT sat)</a></li>
									<li><a href="javascript:menuMove('/member/agreement.do')">홈페이지 이용약관</a></li>
									<li><a href="javascript:menuMove('/member/personal.do')">개인정보처리방침</a></li>
								</ul>
							</div>
						</div>
						<div class="row family-site2">
							<div class="col s12">
								<ul class="footer-list">
									<li><a href="http://www.mois.go.kr" target="_blank"><img src="<%=request.getContextPath()%>/images/family_01_new.png" alt="행정안전부" class="responsive-img"></a></li>
									<li><a href="http://www.ncia.go.kr/index.jsp" target="_blank"><img src="<%=request.getContextPath()%>/images/family_02_new.png" alt="국가정보관리원" class="responsive-img"></a></li>
									<li><a href="http://www.nia.or.kr" target="_blank"><img src="<%=request.getContextPath()%>/images/family_03_new.png" alt="한국정보진흥원(NIA)" class="responsive-img"></a></li>
									<li><a href="http://www.gns.or.kr" target="_blank"><img src="<%=request.getContextPath()%>/images/family_04_new.png" alt="GNS서비스홈페이지" class="responsive-img"></a></li>
								</ul>
							</div>
						</div>
						<div class="row copyright2">
							<div class="col s12">
								Copyright ?2017 KT corp.
								모든 권리 보유.<br>
								<span>463-711 경기도 성남시 분당구 불정로 90(정자동 206번지 (주)케이티 대표이사 김영섭 사업자등록번호 102-81-42945</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<script>	
	import { VueperSlides, VueperSlide } from 'vueperslides'
	import 'vueperslides/dist/vueperslides.css'

	export default {
		components: { VueperSlides, VueperSlide },
		data() {			
			return {				
				images: [
					{content: "국내 통신사 사업자 중<br><span>최대 통신인프라를 통한 <strong>전국 커버리지를 제공</strong>합니다.</span>",
					imgSrc: require('@/assets/images/bottom_banner_bg1.jpg'),
					bullet:"KT 서비스 특장점 1"
					},
					{content: "공중망과 분리된 별도의 자체망<br><span>다양한 보안기능 제공으로 <strong>완벽한 보안성 </strong>을 제공 합니다.</span>",
					imgSrc: require('@/assets/images/bottom_banner_bg2.jpg'),
					bullet:"KT 서비스 특장점 2"
					},
					{content: "전문 KT 전담인력으로<br><span><strong>24시간 안정적으로 유지보수</strong>를 제공 합니다.</span>",
					imgSrc: require('@/assets/images/bottom_banner_bg3.jpg'),
					bullet:"KT 서비스 특장점 3"
					}
				]
			};
		},
		methods: {}			
	};
	
</script>			

<style >


</style>