<template>
	<div class="page-contents">
	  <div class="container">
	   
	    <div class="page-title">
	      <div>
	        <h2>요금정보</h2>
	        <p>kt그룹 국가정보통신서비스의 <span class="kt-red-text">요금정보</span>를 알려드리겠습니다.</p>
	      </div>
	      <ul>
			<li><router-link to="/"><img src="@/assets/images/bullet_rocation_home.gif"	alt="홈페이지 메인"></router-link></li>
			<li>이용안내</li>
			<li><router-link to="/guide/charges">요금정보</router-link></li>	        
	      </ul>
	    </div>
	    
	    <div class="page-tab">
	      <div class="current-label">
	        <a href="javascript:">요금정보</a>
	      </div>
	      <ul>
			<li class="active"><router-link to="/guide/charges">요금표 </router-link></li>
			<li><router-link to="/guide/area">권역/거리/속도체계</router-link></li> 				          
	      </ul>
	    </div>
	    <div class="radio-tab2">
          <div class="row">
            <div class="col s12 m12 l9">
              <ul>
      		    <li>
                  <input name="r_gbn" id="r_gbn_l" onclick="goCharge(this.value)" type="radio" checked="" value="basic">
      			  <label class="kt-label" for="r_gbn_l">전용회선 서비스</label>
                </li>
                <li>
		    	  <input name="r_gbn" id="r_gbn_i" onclick="goCharge(this.value)" type="radio" value="ip">
		    	  <label class="kt-label " id="r_gbn2" for="r_gbn_i">인터넷 서비스</label>
                </li>
                <li>
		    	  <input name="r_gbn" id="r_gbn_s" onclick="goCharge(this.value)" type="radio" value="internet">
		    	  <label class="kt-label" for="r_gbn_s">인터넷전화 서비스</label>
                </li>
                <li>
		    	  <input name="r_gbn" id="r_gbn_w" onclick="goCharge(this.value)" type="radio" value="wireless_data">
		    	  <label class="kt-label" for="r_gbn_w">무선서비스</label>
                </li>
                <li>
                  <input name="r_gbn" id="r_gbn_c" onclick="goCharge(this.value)" type="radio" value="cctv">
		    	  <label class="kt-label" for="r_gbn_c">CCTV서비스</label>
                </li>
              </ul>
            </div>
            <div class="col s12 m12 l3">
              <div class="selbox">
		    	<label class="kt-label" for="search_llnum"><i class="material-icons"> devices</i>상품분류</label>
		    	<div class="select-wrap">
		          <select title="검색 옵션 선택" class="s_goods" id="basic_goods" onchange="goCharge(this.value)">
		            <option value="basic">기본회선</option>
	                <option value="backbone">백본회선</option>
	                                          
		          </select>
		          <select title="검색 옵션 선택" class="s_goods" id="ip_goods" style="display: none;" onchange="goCharge(this.value)">
		            <option value="ip">인터넷서비스</option>
	                                           
		          </select>
		          <select title="검색 옵션 선택" class="s_goods" id="internet_goods" style="display: none;" onchange="goCharge(this.value)">
		            <option value="internet">인터넷전화</option>
		              <option value="wireless_internet">모바일행정전화</option>
		          </select>
		          <select title="검색 옵션 선택" class="s_goods" id="wireless_data_goods" style="display: none;" onchange="goCharge(this.value)">		           
		            <option value="wireless_data">무선데이터 서비스</option>
		           <option value="iot">IoT 서비스</option>
		          </select>
                  <select title="검색 옵션 선택" class="s_goods" id="cctv_goods" style="display: none;" onchange="goCharge(this.value)">
		            <option value="cctv">CCTV</option>
		          </select>
		    	</div>
              </div>
            </div>
          </div>
	    </div>
	   	
	    <div class="row" id="charges3" >
	      <div class="col s12 m12 l12 right-align">
		    <a class="btn show-on-small" onclick="javascript:openPop('1');" href="javascript:">1단계 요금표</a>&nbsp;
		    <a class="btn show-on-small" onclick="javascript:openPop('2');" href="javascript:">2단계 요금표</a>&nbsp;
            <a class="btn show-on-small" onclick="javascript:openPop('3');" href="javascript:">3단계 요금표</a>
	      </div>
	     
	    </div>
	   
	 <div id="basic_service" class="feeForm" style="display:none">
	    <jsp:include page="../service/leased_basic_fee.jsp" />
	    <br><br>
	  </div>
	  
	  <div id="backbone_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/leased_backbone_fee.jsp" />
	    <br><br>
	  </div>
	  
	  
	  
	  
	  <div id="ip_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/ipservice_internet_fee.jsp" />
	    <br><br>
	  </div>
	  
	  <div id="internet_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/ipservice_soip_fee.jsp" />
	    <br><br>
	  </div>
	  
	  <div id="wireless_internet_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/wireless_m_fee.jsp" />
	    <br><br>
	  </div>
	  
	  <div id="wireless_data_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/wireless_data_fee.jsp" />
	    <br><br>
	  </div>
	  <div id="iot_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/iot_service_fee.jsp" />
	    <br><br>
	  </div>
	  <div id="cctv_service" class="feeForm" style="display:none">
	  	 <jsp:include page="../service/leased_cctv_fee.jsp" />
	    <br><br>
	  </div>
	  	  
	</div>
</div>

</template>