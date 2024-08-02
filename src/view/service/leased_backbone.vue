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
					<li><router-link to="/service/ktservice" @click="pushParam(0)">A. 전용회선 서비스</router-link></li>
					<li><router-link to="/service/leased_backbone">백본회선 인프라</router-link></li>				
				</ul>
			</div>
			
			<div class="page-tab">
				<div class="current-label">
					<a href="">백본회선 서비스</a>
				</div>
				<ul>
					<li><router-link to="/service/leased_basic">기본회선 서비스</router-link></li> 
					<li class="active"><router-link to="/service/leased_backbone">백본회선 서비스</router-link></li>					
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
					<h3>백본회선 서비스 개요</h3>
					<ul class="list-style1">
						<li>백본구간의 기관간 연결수단을 제공하는 전용</li>
						<li>회선서비스로 특정기관에 적용</li>
						<li>* 접속방식 : E1/T1, DS3, SDH, Ethernet 등</li>
					</ul>
					<h3>제공내용</h3>
					<ul class="list-style1">
						<li>2Mbps~10Gbps</li>
						<li>(속도별/거리별 정액제)</li>		        
					</ul>			
				</div>
			</div>
			
			<div class="row">
				<div class="col s12">
					<h3>백본회선서비스 정의</h3>
					<ul class="list-style1">
						<li>국가기관 및 지자체의 상위기관과 하위기관 간을 광대역 통신망으로 연결하는 대용량의 회선의 모음으로 구축‧운영 관리 및 요금의 회계 처리를 단일 국가기관에서 함<br>
							※ (국가기관) 본부와 소속기관 간, (지자체) 광역자치단체와 기초자치단체간 연결</li>
					</ul>
				</div>
			</div>
			
			<div class="row">
				<div class="col s12">
					<h3>백본회선서비스 이용요건</h3>
					<ul class="list-style1">
						<li>(지방자치단체) 광역시청 ↔ 군구간, 도청 ↔ 시ㆍ군간 연결하는 회선으로, 사업소 등 시·도 본청 직속기관도 백본회선서비스 대상기관에 포함</li>
						<li>(국가기관) 노드기준과 회선기준을 모두 만족하는 경우에 한하여 이용 가능 
							<ul>
								<li>노드기준은 전국망을 구성하고, 17개 광역시‧도 중 8개 이상에 백본 노드를 갖추고 있는 기관으로, 노드의 적용기준은 본부 기준 1차 소속기관으로 함</li>
								<li><b>회선기준은 백본회선 대역폭의 합이 45Mbps 이상이며, 백본회선 하위에 연결되는 기본회선이 5회선 이상인 경우</b><br>
								※ 단, 회선기준은 만족하나, 노드기준이 충족 안 되는 기관은 백본회선서비스 요금을 이용하되 기본회선 할인율 적용</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			
			<div class="row">
				<div class="col s12">
					<h3>백본회선서비스 이용 상세조건</h3>
					<ul class="list-style1">
						<li>회선속도는 이용기관에 설치된 전송장비와 통신국사에 설치된 전송장비간 논리적 채널 기준 <br>
								※ 통신사업자가 이용기관에 설치한 전송장비를 통해 백본회선서비스 제공</li>
						<li><b>2Mbps 회선은 인터넷전화 등 음성 전용으로 한정</b></li>
						<li>장기계약과 다량이용 또는 다회선이용에 대하여 중복할인 적용</li>
						<li> 다회선 이용에 따른 할인율 산정 시 다음 회선은 제외</li>
						<ul>
							<li><b>2Mbps 회선(음성 전용)</b></li>
							<li>지방자치단체 본청 직속기관인 사업소 등의 회선</li>
							<li>동일한 상위노드와 하위 노드간의 백업/부하분산용 회선</li>
							<li>다회선 이용에 따른 할인율 산정에는 제외를 하되, 전체 할인율은 적용</li>
						</ul>				
					</ul>
				</div>
			</div>
		</div>
		<!--	/* POPUP 기능 차후 활성화 */
		<div class="container price_info " class="display:none">
			<div class="col s12 m3 right-align">
				<a href="javascript:" class="btn show-on-small" onclick="openPop();">요금상세조회</a>
			</div>
			<jsp:include page="../service/leased_backbone_fee.jsp" />
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
