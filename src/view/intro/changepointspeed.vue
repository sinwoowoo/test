<template>
	<div class="page-contents">
		<div class="container">
			<div class="page-title">
				<div>
					<h2>제도변경사항</h2>
					<p>kt그룹 4단계 국가정보통신서비스의 1,2,3단계 대비 달라진 <span class="kt-red-text">제도변경사항</span>을 알려드리겠습니다.</p>
				</div>
				<ul>
					<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
					<li>제도소개</li>
					<li><router-link to="/intro/changepoint">제도변경사항</router-link></li>
				</ul>
			</div>

			<div class="page-tab">
				<div class="current-label">
					<a href="javascript:">제도변경사항</a>
				</div>
				<ul>
					<li><router-link to="/intro/changepoint">서비스</router-link></li> 
					<li class="active"><router-link to="/intro/changepointspeed">속도체계</router-link></li> 
					<li><router-link to="/intro/changepointsla">SLA</router-link></li>   
					<li><router-link to="/intro/changepointdis">할인율</router-link></li> 
				</ul>
			</div>


			<div class="row">
				<div class="col s12">
					<h3>속도 체계-전용회선 서비스</h3>
					<ul class="list-style1">
						<li>통신수요가 감소하는 저속구간은 속도체계를 단순화하고, 중.고속구간은 더욱 세분화하여 통신요금을 절감함</li>
					</ul>

					<table class="centered">
						<thead>
							<tr>
								<th colspan="3">1단계(2009년 ~ 2013년)</th>
								<th colspan="3">2단계(2013년 ~ 2016년)</th>
								<th colspan="3">3단계(2016년 ~ 2019년)</th>
								<th colspan="3">4단계(2019년 ~ 2022년)</th>
							</tr>
							<tr>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>저속급</td>
								<td>9.6Kbps ~ 448Kbps</td>
								<td>8단계</td>
								<td rowspan="2">저속급</td>
								<td rowspan="2">9.6Kbps ~ 2Mbps</td>
								<td rowspan="2">8단계</td>
								<td rowspan="2">저속급</td>
								<td rowspan="2">2.4Kbps ~ 1.5Mbps</td>
								<td rowspan="2">8단계</td>
								<td rowspan="2">저속급</td>
								<td rowspan="2">2.4Kbps ~ 1.5Mbps</td>
								<td rowspan="2">8단계</td>
							</tr>
							<tr>
								<td>중저속급</td>
								<td>512Kbps ~ 4Mbps</td>
								<td class="border-end-right">9단계</td>
							</tr>
							<tr>
								<td>중속급</td>
								<td>5Mbps ~ 20Mbps</td>
								<td>11단계</td>
								<td>중속급</td>
								<td>2Mbps ~ 45Mbps</td>
								<td>18단계</td>
								<td>중속급</td>
								<td>2Mbps ~ 40Mbps</td>
								<td>18단계</td>
								<td>중속급</td>
								<td>2Mbps ~ 40Mbps</td>
								<td>21단계</td>
							</tr>
							<tr>
								<td>고속급</td>
								<td>30Mbps ~ 100Mbps</td>
								<td>9단계</td>
								<td rowspan="2" class="border-end-bottom">고속급</td>
								<td rowspan="2" class="border-end-bottom">45Mbps ~ 10Gbps</td>
								<td rowspan="2" class="border-end-bottom">28단계</td>
								<td rowspan="2" class="border-end-bottom">고속급</td>
								<td rowspan="2" class="border-end-bottom">45Mbps ~ 10Gbps</td>
								<td rowspan="2" class="border-end-bottom">28단계</td>
								<td rowspan="2" class="border-end-bottom">고속급</td>
								<td rowspan="2" class="border-end-bottom">45Mbps ~ 10Gbps</td>
								<td rowspan="2" class="border-end-bottom">26단계</td>
							</tr>
							<tr>
								<td>초고속급</td>
								<td>155Mbps ~ 10Gbps</td>
								<td class="border-end-right">15단계</td>
							</tr>
						</tbody>
					</table>
					
					<h3>속도 체계-인터넷서비스</h3>
					<ul class="list-style1">
						<li>통신수요가 감소하는 저속구간은 속도체계를 단순화하고, 중.고속구간은 더욱 세분화하여 통신요금을 절감함</li>
					</ul>
					<table class="centered">
						<thead>
							<tr>
								<th colspan="3">1단계(2009년 ~ 2013년)</th>
								<th colspan="3">2단계(2013년 ~ 2016년)</th>
								<th colspan="3">3단계(2016년 ~ 2019년)</th>
								<th colspan="3">4단계(2019년 ~ 2022년)</th>
							</tr>
							<tr>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
								<th>구분</th>
								<th>속도</th>
								<th>단계</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>저속급</td>
								<td>9.6Kbps ~ 448Kbps</td>
								<td>8단계</td>
								<td rowspan="2">저속급</td>
								<td rowspan="2">9.6Kbps ~ 2Mbps</td>
								<td rowspan="2">8단계</td>
								<td rowspan="2">저속급</td>
								<td rowspan="2">2.4Kbps ~ 1.5Mbps</td>
								<td rowspan="2">8단계</td>
								<td rowspan="2">저속급</td>
								<td rowspan="2">2.4Kbps ~ 1.5Mbps</td>
								<td rowspan="2">5단계</td>
							</tr>
							<tr>
								<td>중저속급</td>
								<td>512Kbps ~ 4Mbps</td>
								<td class="border-end-right">9단계</td>
							</tr>
							<tr>
								<td>중속급</td>
								<td>5Mbps ~ 20Mbps</td>
								<td>11단계</td>
								<td>중속급</td>
								<td>2Mbps ~ 45Mbps</td>
								<td>18단계</td>
								<td>중속급</td>
								<td>2Mbps ~ 40Mbps</td>
								<td>18단계</td>
								<td>중속급</td>
								<td>2Mbps ~ 40Mbps</td>
								<td>21단계</td>
							</tr>
							<tr>
								<td>고속급</td>
								<td>30Mbps ~ 100Mbps</td>
								<td>9단계</td>
								<td rowspan="2" class="border-end-bottom">고속급</td>
								<td rowspan="2" class="border-end-bottom">45Mbps ~ 10Gbps</td>
								<td rowspan="2" class="border-end-bottom">28단계</td>
								<td rowspan="2" class="border-end-bottom">고속급</td>
								<td rowspan="2" class="border-end-bottom">45Mbps ~ 10Gbps</td>
								<td rowspan="2" class="border-end-bottom">28단계</td>
								<td rowspan="2" class="border-end-bottom">고속급</td>
								<td rowspan="2" class="border-end-bottom">45Mbps ~ 10Gbps</td>
								<td rowspan="2" class="border-end-bottom">21단계</td>
							</tr>
							<tr>
								<td>초고속급</td>
								<td>155Mbps ~ 10Gbps</td>
								<td class="border-end-right">15단계</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>