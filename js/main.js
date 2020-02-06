
$.getJSON('./tazjson.json', function (tazdata)
{
	$.getJSON('./data/population.json', function (population)
	{
		$.getJSON('./data/hourcount.json', function (hourcount)
		{
			$.getJSON('./data/anchorpoints.json', function (anchorpoints)
			{
				$.getJSON('./data/metroline.json', function (metroline)
				{
					$.getJSON('./data/S_all.json', function (S_all)
					{
						$.getJSON('./data/alpha_all.json', function (alpha_all)
						{
							$.getJSON('./data/n_all.json', function (n_all)
							{
								$.getJSON('./data/avgtime_all.json', function (avgtime_all)
								{
									$.getJSON('./data/avgtime_weekday.json', function (avgtime_weekday)
									{
										$.getJSON('./data/avgtime_weekend.json', function (avgtime_weekend)
										{
											$.getJSON('./data/Salpha_all.json', function (Salpha_all)
											{
												
											$.getJSON('./data/ringline.json', function (ringline)
											{
										
												var ahw = Math.min($(window).height(), $(window).width())
													if ($(window).height() < $(window).width())
													{
														var aleft = ($(window).width() - $(window).height()) / 2
													}
													//添加属性
													var heatmaptype = ''
													var heatmapmax = 0
													var fieldSelect = $(".Line").children("select");
												var visualmapselect = $(".Line2").children("select");
												var visualmapgroupselect = $(".Line3").children("select");
												$("<option value=clear>请选择</option>").appendTo(fieldSelect);
												$("<option value=density>人口密度</option>").appendTo(fieldSelect);
												$("<option value=idividual_avgs>个体活动空间面积</option>").appendTo(fieldSelect);
												$("<option value=idividual_avgalpha>个体活动空间方向性</option>").appendTo(fieldSelect);
												$("<option value=idividual_avgn>个体活动空间中心数量</option>").appendTo(fieldSelect);
												$("<option value=area>群体活动空间面积</option>").appendTo(fieldSelect);
												$("<option value=alpha>群体活动空间方向性</option>").appendTo(fieldSelect);
												$("<option value=dbscan>群体活动空间中心数量</option>").appendTo(fieldSelect);
												
												$("<option value=clear>清空</option>").appendTo(fieldSelect);
												var visualmaptype = 'continuous'

													//计算人口密度分布
													var dimension2 = 'clear'
													var selectedtaz = 'none'
													var densities = []
													for (var i = 0; i < tazdata.features.length; i += 1)
													{
														try
														{
															var tazname = tazdata.features[i].properties.name
																var tazarea = tazdata.features[i].properties.area
																var tazpopulation = population[population.findIndex(function (value, index, arr)
																	{
																		return value[1] == tazname;
																	}
																	)]
																var density = tazpopulation[0] / tazarea
																densities.push([tazname, density])
														}
														catch (err)
														{}
													}
													densities.sort(function (a, b)
													{
														return a[1] - b[1]
													}
													)
													var densities1 = []
													for (var i = 0; i < densities.length; i += 1)
													{
														densities1.push([densities[i][1], (i + 1) / densities.length])
													}

													var linedata = metroline[0]
													var stopdata = metroline[1]
													echarts.registerMap('taz', tazdata);
												var datamissingarea = [
													{
														'name': '340',
														'value': 1
													},
													{
														'name': '313',
														'value': 1
													},
													{
														'name': '303',
														'value': 1
													},
													{
														'name': '382',
														'value': 1
													},
													{
														'name': '310',
														'value': 1
													},
													{
														'name': '299',
														'value': 1
													},
													{
														'name': '300',
														'value': 1
													},
													{
														'name': '355',
														'value': 1
													},
													{
														'name': '356',
														'value': 1
													},
													{
														'name': '264',
														'value': 1
													},
													{
														'name': '272',
														'value': 1
													},
													{
														'name': '274',
														'value': 1
													},
													{
														'name': '292',
														'value': 1
													},
													{
														'name': '304',
														'value': 1
													},
													{
														'name': '309',
														'value': 1
													},
													{
														'name': '307',
														'value': 1
													},
													{
														'name': '241',
														'value': 1
													},
													{
														'name': '302',
														'value': 1
													},
													{
														'name': '288',
														'value': 1
													},
													{
														'name': '306',
														'value': 1
													},
													{
														'name': '436',
														'value': 1
													},
													{
														'name': '283',
														'value': 1
													},
													{
														'name': '314',
														'value': 1
													},
													{
														'name': '293',
														'value': 1
													},
													{
														'name': '281',
														'value': 1
													},
													{
														'name': '282',
														'value': 1
													},
													{
														'name': '279',
														'value': 1
													},
													{
														'name': '286',
														'value': 1
													},
													{
														'name': '289',
														'value': 1
													},
													{
														'name': '284',
														'value': 1
													},
													{
														'name': '376',
														'value': 1
													},
													{
														'name': '290',
														'value': 1
													},
													{
														'name': '287',
														'value': 1
													},
													{
														'name': '341',
														'value': 1
													},
													{
														'name': '312',
														'value': 1
													},
													{
														'name': '315',
														'value': 1
													},
													{
														'name': '308',
														'value': 1
													},
													{
														'name': '357',
														'value': 1
													},
													{
														'name': '383',
														'value': 1
													},
													{
														'name': '361',
														'value': 1
													},
													{
														'name': '364',
														'value': 1
													},
													{
														'name': '377',
														'value': 1
													},
													{
														'name': '381',
														'value': 1
													},
													{
														'name': '366',
														'value': 1
													}
												]
												//datamissingarea = []
												var dom = document.getElementById("container");
												var myChart = echarts.init(dom);
												var dom2 = document.getElementById("container2");
												var myChart2 = echarts.init(dom2);
												var dom3 = document.getElementById("container3");
												var myChart3 = echarts.init(dom3);
												var dom4 = document.getElementById("container4");
												var myChart4 = echarts.init(dom4);
												var dom5 = document.getElementById("container5");
												var myChart5 = echarts.init(dom5);
												var app = {};
												option = null;
												option =
												{

													visualMap: [
														{
															show: false,
															type: 'piecewise',
															splitNumber: 3,
															categories: [0, 1, 2],
															dimension: 0,
															inRange:
															{
																color: ['#fff', 'rgba(220,20,60,0.6)', 'rgba(150,150,150,0.6)']
															},
															outOfRange:
															{
																color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
															},
															textStyle:
															{
																color: '#fff'
															},
															realtime: false,
															seriesIndex: 0
														},
														{
															show: false,
															top: 'top',
															min: 0,
															max: 10,
															seriesIndex: 1,
															calculable: true,
															inRange:
															{
																color: ['blue', 'blue', 'green', 'yellow', 'red']
															}
														}
													],
													geo:
													{
														map: 'taz',

														label:
														{
															
															emphasis:
															{
																show: false,
																areaColor: '#eee'
															}
														},
														itemStyle:
														{

															normal:
															{
																show: false,
																areaColor: 'rgba(0,0,0,0)'
															},
															emphasis:
															{
																areaColor: 'rgba(150,150,150,0.6)',
																borderWidth: 1,
																borderColor: '#404a59',
															}
														},
														left: '0%',
														top: '0%',
														bottom: '0%',
														right: aleft * 2 + 'px',
														
														// itemStyle: {
														//     normal: {
														//         areaColor: '#323c48',
														//         borderColor: '#111'
														//     },
														//     emphasis: {
														//         areaColor: '#2a333d'
														//     }
														// }
													},
													title:
													{
														text: "小区居民活动空间",
														left: 10,
														top: 10,
														textStyle:
														{
															color: 'rgba(18,89,147,1)',
															fontSize: 30
														}
													},

													tooltip:
													{
														trigger: 'item',
														formatter: '{b}'
													},

													legend:
													{
														data: ['轨道站', '轨道线', '活动空间热力图', '数据质量较差区域', '空间关联','内环','中环','外环'],
														bottom: '2%',
														left: '20%',
														selected:
														{
															'轨道线': false,
															'轨道站': false,
															'活动空间热力图': true,
															'数据质量较差区域': false,
															'空间关联': false,
															'内环': false,
															'中环': false,
															'外环': false,
														}
													},
													animationDuration: 1500,
													animationEasingUpdate: 'quinticInOut',
													series: [
														{
															geoIndex: 0,
															name: 'selected',
															type: 'map',
															mapType: 'taz',
coordinateSystem: 'geo',
															data: []

														},
														{
															name: '活动空间热力图',
															type: 'heatmap',
															coordinateSystem: 'geo',
															pointSize: 15,
															blurSize: 6,
															zlevel: -1
														},
														{
															name: '轨道线',
															type: 'lines',
															data: linedata,
															visualMap: false,
															coordinateSystem: 'geo',
															polyline: true,
															zlevel: 0,
															lineStyle:
															{
																normal:
																{
																	color: '#B7B7B7',

																	opacity: 2,
																	width: 2,
																	shadowColor: 'rgba(0, 0, 0, 0.9)',
																	shadowBlur: 5
																}
															}
														},
														{
															name: '轨道站',
															zlevel: 0,
															type: 'scatter',
															visualMap: false,
															coordinateSystem: 'geo',
															itemStyle:
															{
																normal:
																{
																	//color:'green'
																}
															},
															symbolSize: 8,
															data: stopdata
														},
														{
															name: '中环',
															type: 'lines',
															data: [ringline[0]],
															visualMap: false,
															coordinateSystem: 'geo',
															polyline: true,
															zlevel: 0,
															lineStyle:
															{
																normal:
																{
																	color: '#000',

																	opacity: 0.8,
																	width: 3,
																	//shadowColor: 'rgba(0, 0, 0, 0.9)',
																	//shadowBlur: 10
																}
															}
														},
														{
															name: '内环',
															type: 'lines',
															data: [ringline[1]],
															visualMap: false,
															coordinateSystem: 'geo',
															polyline: true,
															zlevel: 0,
															lineStyle:
															{
																normal:
																{
																	color: '#000',

																	opacity: 0.8,
																	width: 3,
																	//shadowColor: 'rgba(0, 0, 0, 0.9)',
																	//shadowBlur: 10
																}
															}
														},
														{
															name: '外环',
															type: 'lines',
															data: [ringline[2]],
															visualMap: false,
															coordinateSystem: 'geo',
															polyline: true,
															zlevel: 0,
															lineStyle:
															{
																normal:
																{
																	color: '#000',

																	opacity: 0.8,
																	width: 3,
																	//shadowColor: 'rgba(0, 0, 0, 0.9)',
																	//shadowBlur: 10
																}
															}
														},
														{
															geoIndex: 0,
															name: '数据质量较差区域',
															type: 'map',
															mapType: 'taz',
															visualMap: false,
															coordinateSystem: 'geo',
															data: datamissingarea,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(220,20,60,0.6)'
																}
															}

														}
													]
												};

												myChart.setOption(option, true);

												var option2 =
												{
													title: [
														{
															text: "小区信息",
															left: 10,
															top: 10,
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 30
															}
														},
														{
															left: '25%',
															top: '48%',
															text: "就业-非就业人口比例",
															textAlign: 'center',
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: 150,
															top: 10,
															text: "小区编号：",
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: 300,
															top: 10,
															text: "小区面积：",
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: 150,
															top: 30,
															text: "行政区：",
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: 300,
															top: 30,
															text: "小区区位：",
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: 150,
															top: 50,
															text: "小区人口：",
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: 300,
															top: 50,
															text: "人口密度：",
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														},
														{
															left: '75%',
															top: '48%',
															text: '昼夜人口分布',
															textAlign: 'center',
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														}
													],
													toolbox:
													{
														show: true,
														feature:
														{
															magicType:
															{
																show: true,
																type: ['stack', 'tiled'],
																seriesIndex:
																{
																	stack: [1, 2],
																	tiled: [1, 2]
																}
															},
														},
														top: '13%',
														left: '85%'
													},
													grid: [
														{
															right: 50,
															width: '44%',
															bottom: '55%',
															top: '15%',

															//height: '40%',

														},
														{

															left: 50,
															width: '40%',
															bottom: '5%',
															top: '55%',

															//height: '40%',

														},
														{

															right: 50,
															width: '40%',
															bottom: '5%',
															top: '55%',

															//height: '40%',

														}

													],
													xAxis: [
														{
															gridIndex: 0,
															type: 'category',
															boundaryGap: false,
															data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
															name: '时间',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															interval: 1,
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 1,
															min: 0,
															nameLocation: 'middle',
															name: '各类就业锚点数量',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 2,
															min: 0,
															max: 38000,
															nameLocation: 'middle',
															name: '人口密度（人/平方公里）',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														}
													],
													yAxis: [
														{
															gridIndex: 0,
															min: 0,
															name: '在该小区内活动人数',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 1,
															name: '就业锚点',
															type: 'category',
															//  name: 'TOP 20',
															nameGap: 16,
															axisLine:
															{
																show: true,
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisTick:
															{
																show: false,
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																show: false,
																interval: 0,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															data: ['就业锚点']
														},
														{
															gridIndex: 2,
															min: 0,
															max: 1,

															name: '累计概率分布',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														}
													],

													tooltip:
													{
														trigger: 'item'
													},
													series: [
														{
															name: '就业-非就业人口比例',
															type: 'pie',
															radius: '30%',
															center: ['25%', '30%'],
															data: [
																{
																	value: 100,
																	name: '就业人口'
																},
																{
																	value: 100,
																	name: '非就业人口'
																}
															],

															label:
															{
																normal:
																{
																	position: 'inside',
																	formatter: function (params)
																	{

																		return params.data.name + '\n' + params.data.value + '人\n' + params.percent.toFixed(0) + '%'
																	}
																}
															},

															animationType: 'scale',
															animationEasing: 'elasticOut'

														},
														{
															id: 'line1',
															name: '本地人口',
															zlevel: 2,
															type: 'line',
															tooltip:
															{
																formatter: function (p)
																{
																	return p.data[0] + '时本地人口:' + p.data[1] + '人'
																}
															},
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															areaStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 0,
															yAxisIndex: 0,
															data: [],
															stack: '总量'
														},
														{
															id: 'line2',
															name: '外来人口',
															zlevel: 2,
															type: 'line',
															tooltip:
															{
																formatter: function (p)
																{
																	return p.data[0] + '时外来人口:' + p.data[1] + '人'
																}
															},
															itemStyle:
															{
																normal:
																{
																	color: '#FF0000'
																}
															},
															areaStyle:
															{
																normal:
																{
																	color: '#FF0000'
																}
															},
															xAxisIndex: 0,
															yAxisIndex: 0,
															data: [],
															stack: '总量'
														},
														{
															id: 'bar1',
															name: '本地居民就业锚点',
															zlevel: 2,
															type: 'bar',
															symbol: 'none',
															xAxisIndex: 1,
															yAxisIndex: 1,
															stack: 'one',
															data: []
														},
														{
															id: 'bar2',
															name: '对外就业锚点',
															zlevel: 2,
															type: 'bar',
															stack: 'two',
															symbol: 'none',
															xAxisIndex: 1,
															yAxisIndex: 1,
															data: []
														},
														{
															id: 'bar3',
															name: '外来就业锚点',
															zlevel: 2,
															type: 'bar',
															stack: 'one',
															symbol: 'none',
															xAxisIndex: 1,
															yAxisIndex: 1,
															data: []
														},
														{
															id: 'line6',
															name: '人口密度',
															zlevel: 2,
															type: 'line',
															showSymbol: false,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 2,
															yAxisIndex: 2,
															data: densities1
														}
													]
												}
												myChart2.setOption(option2, true);

												var option3 =
												{
													title: [
														{
															left: '25%',
															top: '45%',
															text: '',
															textAlign: 'center',
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														}
													],
													toolbox:
													{},
													legend: [
														{
															data: ['平均外出时间', '周末外出时间', '工作日外出时间'],
															top: '58%',
															left: '75%'

														}
													],
													grid: [
														{
															left: 50,
															width: '40%',
															bottom: '58%',
															top: '5%',

															//height: '40%',

														},
														{

															right: 50,
															width: '40%',
															bottom: '58%',
															top: '5%',

															//height: '40%',

														},
														{

															left: 50,
															width: '40%',
															bottom: '5%',
															top: '55%',

															//height: '40%',

														},
														{

															right: 50,
															width: '40%',
															bottom: '5%',
															top: '55%',

															//height: '40%',

														}
													],
													xAxis: [
														{
															gridIndex: 0,
															min: 0,
															max: 1500,
															nameLocation: 'middle',
															name: '活动空间95%置信椭圆面积（平方公里）',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 1,
															min: 0,
															max: 1,
															nameLocation: 'middle',
															name: '活动空间95%置信椭圆方向性',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 2,
															min: 0,
															max: 5,
															nameLocation: 'middle',
															name: '活动中心个数',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 3,
															min: 0,
															max: 24,
															nameLocation: 'middle',
															name: '居民平均外出时间(小时)',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														}
													],
													yAxis: [
														{
															gridIndex: 0,
															min: 0,

															name: '人数',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 1,
															min: 0,

															name: '人数',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 2,
															min: 0,

															name: '人数',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 3,
															min: 0,

															name: '人数',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														}
													],

													tooltip:
													{
														trigger: 'item'
													},
													series: [
														{
															id: 'line1',
															name: '活动面积',
															zlevel: 2,
															type: 'line',
															showSymbol: false,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 0,
															yAxisIndex: 0,
															data: []
														},
														{
															id: 'line2',
															name: '活动方向性',
															zlevel: 2,
															type: 'line',
															showSymbol: false,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 1,
															yAxisIndex: 1,
															data: []
														},
														{
															id: 'line3',
															name: '活动中心数',
															zlevel: 2,
															type: 'line',
															showSymbol: false,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 2,
															yAxisIndex: 2,
															data: []
														},
														{
															id: 'line4',
															name: '平均外出时间',
															zlevel: 2,
															type: 'line',
															showSymbol: false,

															xAxisIndex: 3,
															yAxisIndex: 3,
															data: []
														},
														{
															id: 'line5',
															name: '周末外出时间',
															zlevel: 2,
															type: 'line',
															showSymbol: false,

															xAxisIndex: 3,
															yAxisIndex: 3,
															data: []
														},
														{
															id: 'line6',
															name: '工作日外出时间',
															zlevel: 2,
															type: 'line',
															showSymbol: false,

															xAxisIndex: 3,
															yAxisIndex: 3,
															data: []
														}
													]
												}
												myChart3.setOption(option3, true);

												var area = []
												for (var i = 0; i < Salpha_all.length; i += 1)
												{
													area.push(Salpha_all[i][1])
												}
												area.sort(function (a, b)
												{
													return a - b
												}
												)
												var area1 = []
												for (var i = 0; i < area.length; i += 1)
												{
													area1.push([area[i], (i + 1) / area.length])
												}

												var alpha = []
												for (var i = 0; i < Salpha_all.length; i += 1)
												{
													alpha.push(Salpha_all[i][2])
												}
												alpha.sort(function (a, b)
												{
													return a - b
												}
												)
												var alpha1 = []
												for (var i = 0; i < alpha.length; i += 1)
												{
													alpha1.push([alpha[i], (i + 1) / area.length])
												}

												var option4 =
												{
													title: [
														{
															left: '25%',
															top: '45%',
															text: '',
															textAlign: 'center',
															subtext: '',
															textStyle:
															{
																color: 'rgba(18,89,147,1)',
																fontSize: 15
															}
														}
													],
													toolbox:
													{},
													grid: [
														{
															left: 50,
															width: '40%',
															bottom: '58%',
															top: '5%',

															//height: '40%',

														},
														{

															right: 50,
															width: '40%',
															bottom: '58%',
															top: '5%',

															//height: '40%',

														},
														{

															left: 50,
															width: '40%',
															bottom: '5%',
															top: '55%',

															//height: '40%',

														},
														{

															right: 50,
															width: '40%',
															bottom: '5%',
															top: '55%',

															//height: '40%',

														}
													],
													xAxis: [
														{
															gridIndex: 0,
															min: 0,
															max: 2000,
															nameLocation: 'middle',
															name: '活动空间95%置信椭圆面积（平方公里）',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 1,
															min: 0,
															max: 1,
															nameLocation: 'middle',
															name: '活动空间95%置信椭圆方向性',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{
																margin: 2,
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															}
														}
													],
													yAxis: [
														{
															gridIndex: 0,
															min: 0,

															name: '累计概率分布',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														},
														{
															gridIndex: 1,
															min: 0,

															name: '累计概率分布',
															axisLine:
															{
																lineStyle:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															axisLabel:
															{

																margin: 2,
																textStyle:
																{

																	color: 'rgba(18,89,147,1)'
																}
															}
														}
													],

													tooltip:
													{
														trigger: 'item'
													},
													series: [
														{
															id: 'line1',
															name: '活动面积',
															zlevel: 2,
															type: 'line',
															showSymbol: false,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 0,
															yAxisIndex: 0,
															data: area1
														},
														{
															id: 'line2',
															name: '活动方向性',
															zlevel: 2,
															type: 'line',
															showSymbol: false,
															itemStyle:
															{
																normal:
																{
																	color: 'rgba(18,89,147,1)'
																}
															},
															xAxisIndex: 1,
															yAxisIndex: 1,
															data: alpha1
														}
													]
												}
												myChart4.setOption(option4, true);

												var option5 =
												{
													title:
													{
														text: '',
														x: 'center'
													},
													tooltip:
													{
														trigger: 'item',
														formatter: "{a} <br/>{b} : {d}%"
													},
													legend:
													{
														x: 'center',
														y: 'bottom'
													},
													calculable: true,
													series: [
														{
															name: '空间关联',
															type: 'pie',
															radius: [20, 160],
															center: ['50%', '50%'],
															data: [],
															label:
															{
																normal:
																{
																	position: 'inside',
																	textStyle:
																	{

																		color: '#fff'
																	}
																}
															}
														},
														{
															name: '空间关联',
															type: 'pie',
															radius: [170, 230],

															center: ['50%', '50%'],
															data: [],

															label:
															{
																normal:
																{
																	textStyle:
																	{
																		color: 'rgba(18,89,147,1)'
																	}
																}
															}
														}
													]
												}
												myChart5.setOption(option5, true);

												$("#activityspace").click(function ()
												{
													myChart.showLoading()
													$("#activityspace").attr('disabled',true); 
													$("#activityspace2").attr('disabled',false); 
													$("#activityspace3").attr('disabled',false);
$("#activityspace4").attr('disabled',false);													
													vmapSize = $("#vmapSize").slider("value")
													
														heatmaptype = '_r'
														$.getJSON('./data/heatmapdata/' + selectedtaz + heatmaptype + '.json', function (heatmapdata)
														{
															myChart.setOption(
															{
																title:
																{
																	text: "在该小区活动的居民分布"
																},
																visualMap: [{},
																	{
																		max: heatmapdata[1] / vmapSize
																	}
																],
																series: [{},
																	{
																		data: heatmapdata[0]
																	}
																]
															}
															)
														}
														)
myChart.hideLoading()
												}
												)
												$("#activityspace3").click(function ()
												{
													myChart.showLoading()
													$("#activityspace").attr('disabled',false); 
													$("#activityspace2").attr('disabled',false); 
													$("#activityspace3").attr('disabled',true); 
													$("#activityspace4").attr('disabled',false); 
													vmapSize = $("#vmapSize").slider("value")
													
														heatmaptype = '_job'
														
														$.getJSON('./data/heatmapdata/' + selectedtaz + heatmaptype + '.json', function (heatmapdata)
														{
															myChart.setOption(
															{
																title:
																{
																	text: "居民就业活动点分布"
																},
																visualMap: [{},
																	{
																		max: heatmapdata[1] / vmapSize
																	}
																],
																series: [{},
																	{
																		data: heatmapdata[0]
																	}
																]
															}
															)
														}
														)
myChart.hideLoading()
												}
												)
												$("#activityspace4").click(function ()
												{
													myChart.showLoading()
													$("#activityspace").attr('disabled',false); 
													$("#activityspace2").attr('disabled',false); 
													$("#activityspace3").attr('disabled',false); 
													$("#activityspace4").attr('disabled',true); 
													
													vmapSize = $("#vmapSize").slider("value")
													
														heatmaptype = '_entertain'
														
														$.getJSON('./data/heatmapdata/' + selectedtaz + heatmaptype + '.json', function (heatmapdata)
														{
															myChart.setOption(
															{
																title:
																{
																	text: "居民休憩活动点分布"
																},
																visualMap: [{},
																	{
																		max: heatmapdata[1] / vmapSize
																	}
																],
																series: [{},
																	{
																		data: heatmapdata[0]
																	}
																]
															}
															)
														}
														)
myChart.hideLoading()
												}
												)
												$("#activityspace2").click(function ()
												{
													myChart.showLoading()
													$("#activityspace2").attr('disabled',true); 
													$("#activityspace").attr('disabled',false);
													$("#activityspace3").attr('disabled',false); 
													$("#activityspace4").attr('disabled',false);
													vmapSize = $("#vmapSize").slider("value")
														heatmaptype = ''
														
														$.getJSON('./data/heatmapdata/' + selectedtaz + heatmaptype + '.json', function (heatmapdata)
														{
															myChart.setOption(
															{
																title:
																{
																	text: "小区居民活动空间"
																},
																visualMap: [{},
																	{
																		max: heatmapdata[1] / vmapSize
																	}
																],
																series: [{},
																	{
																		data: heatmapdata[0]
																	}
																]
															}
															)
														}
														)
														myChart.hideLoading()
												}
												)
												$("#interactmapshow").click(function ()
												{
													myChart.showLoading()
													$("#interactmapshow").hide()
													$("#interactmapshow2").show()
													if (selectedtaz == 'none')
													{}
													else
													{
														$.getJSON('./data/interact/' + selectedtaz + '.json', function (interactdata)
														{
															var izonedata = []
															var izonedata2 = []
															for (var i = 0; i < interactdata[0].length; i++)
															{

																izonedata2.push(interactdata[0][i][1])
															}
															var maxinteractdata = Math.max.apply(null, izonedata2)
																var sum = izonedata2.reduce(add, 0);

															function add(a, b)
															{
																return a + b;
															}

															for (var i = 0; i < interactdata[0].length; i++)
															{
																izonedata.push(
																{
																	name: interactdata[0][i][0] + '',
																	value: interactdata[0][i][1] / sum,
																}
																)
															}
															var visualMap = [
																{
																	show: true,
																	type: 'continuous',
																	splitNumber: 10,
																	categories: [],
																	dimension: 0,
																	min: 0,
																	max: maxinteractdata / sum,
																	inRange:
																	{
																		color: ['#fff', '#eac736', '#d94e5d']
																	},
																	outOfRange:
																	{
																		color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																	},
																	text: ['high', 'low'],
																	textStyle:
																	{
																		color: 'rgba(18,89,147,1)'
																	},
																	realtime: false,
																	seriesIndex: 0,
																	formatter: function (value)
																	{
																		return '比例：' + value.toFixed(2)
																	}
																}
															]
															myChart.setOption(
															{
																visualMap: visualMap,
																series: [
																	{
																		data: izonedata
																	}, {}, {}, {},{}, {}, {},
																	{
																		data: []
																	}
																]

															}
															)
														}
														)
													}
													myChart.hideLoading()
												}
												);
												$("#interactmapshow2").click(function ()
												{
													$("#interactmapshow").show()
													$("#interactmapshow2").hide()
													clearfunct()
												}
												)

												var clearfunct = function ()
												{
													$("#interactmapshow").show()
													$("#interactmapshow2").hide()
													myChart.setOption(
													{
														visualMap: [
															{
																type: 'continuous'
															}
														]
													}
													)
													$("#visualmapselect").hide();
													$("#visualmapgroups").hide();
													if (selectedtaz == 'none')
													{

														myChart.setOption(
														{
															visualMap: [
																{
																	show: false,
																	type: 'piecewise',
																	categories: [0, 1, 2],
																	dimension: 0,
																	inRange:
																	{
																		color: ['#fff', 'rgba(220,20,60,0.6)', 'rgba(180,180,180,0.6)']
																	},
																	outOfRange:
																	{
																		color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																	},
																	textStyle:
																	{
																		color: '#fff'
																	},
																	realtime: false,
																	seriesIndex: 0
																}
															],
															series: [
																{
																	data: []
																}, {}, {}, {},{}, {}, {},
																{
																	data: datamissingarea
																}
															]

														}
														)
													}
													else
													{
														myChart.setOption(
														{
															visualMap: [
																{
																	show: false,
																	type: 'piecewise',

																	categories: [0, 1, 2],
																	dimension: 0,
																	inRange:
																	{
																		color: ['#fff', 'rgba(220,20,60,0.6)', 'rgba(180,180,180,0.6)']
																	},
																	outOfRange:
																	{
																		color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																	},
																	textStyle:
																	{
																		color: '#fff'
																	},
																	realtime: false,
																	seriesIndex: 0
																}
															],
															series: [
																{
																	data: [
																		{
																			'name': selectedtaz,
																			'value': 2
																		}
																	]
																}, {}, {}, {},{}, {}, {},
																{
																	data: datamissingarea
																}
															]

														}
														)
													}
												}
												$(function ()
												{
													$("#blurSize").slider(
													{
														orientation: "horizontal",
														range: "min",
min: 1,
														max: 15,
														value: 6,
														slide: refreshSwatch,
														change: refreshSwatch
													}
													);
													$("#pointSize").slider(
													{
														orientation: "horizontal",
														range: "min",
min: 1,
														max: 15,
														value: 15,
														slide: refreshSwatch,
														change: refreshSwatch
													}
													);
													$("#vmapSize").slider(
													{
														orientation: "horizontal",
														range: "min",
														min: 1,
														max: 15,
														value: 1,
														step: 1,
														slide: refreshSwatch2,
														change: refreshSwatch2
													}
													);
													$("#eps").slider(
													{
														orientation: "vertical",
														min: 1,
														max: 6,
														scale: [1, 2, 3, 4, 5, 6],
														step: 1,
														round: 1,
														slide: setdbscan,
														change: setdbscan
													}
													);
													$("#rate").slider(
													{
														orientation: "vertical",
														min: 0.5,
														max: 1,
														scale: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
														step: 0.1,
														slide: setdbscan,
														change: setdbscan
													}
													);
													$("#hotspotcdf").slider(
													{
														orientation: "vertical",
														min: 0.50,
														max: 0.99,
														//scale: [0.95, 0.96, 0.97, 0.98, 0.99],
														step: 0.01,
														slide: setdbscan,
														change: setdbscan
													}
													);
												}
												);

												function refreshSwatch2()
												{
													var vmapSize = $("#vmapSize").slider("value")
$("#vmapSizetext").text('颜色深浅:'+vmapSize)
														$.getJSON('./data/heatmapdata/' + selectedtaz + heatmaptype + '.json', function (heatmapdata)
														{
															myChart.setOption(
															{
																visualMap: [{},
																	{
																		max: heatmapdata[1] / vmapSize
																	}
																]
															}
															)
														}
														)
												}
												function refreshSwatch()
												{
													var blurSize = $("#blurSize").slider("value"),
													pointSize = $("#pointSize").slider("value")
													$("#pointSizetext").text('点大小:'+pointSize)
													$("#blurSizetext").text('影响范围:'+blurSize)
														myChart.setOption(
														{
															series: [{},
																{
																	blurSize: blurSize,
																	pointSize: pointSize
																}
															]
														}
														)
												}
												  
               

												myChart.on('click', function (params)
												{
													
													if (dimension2 == 'clear')
													{
														if (heatmaptype == '')
													{
														$("#activityspace3").attr('disabled',false); 
														$("#activityspace2").attr('disabled',true); 
														$("#activityspace").attr('disabled',false);
																												$("#activityspace4").attr('disabled',false);
														$("#activityspace4").show();
														$("#activityspace2").show()
														$("#activityspace").show()
														$("#activityspace3").show()
													}
													else 
													
														if (heatmaptype == '_r')
													{
														$("#activityspace3").attr('disabled',false);
														$("#activityspace2").attr('disabled',false); 
														$("#activityspace").attr('disabled',true);
														$("#activityspace4").attr('disabled',false);
														$("#activityspace4").show();
														$("#activityspace").show()
														$("#activityspace2").show()
													$("#activityspace3").show()}
													else if(heatmaptype == '_job'){
														$("#activityspace3").attr('disabled',true);
														$("#activityspace2").attr('disabled',false); 
														$("#activityspace").attr('disabled',false);
																												$("#activityspace4").attr('disabled',false);
														$("#activityspace4").show();
														$("#activityspace").show()
														$("#activityspace2").show()
													$("#activityspace3").show()
													}
													else if(heatmaptype == '_entertain'){
														$("#activityspace3").attr('disabled',false);
														$("#activityspace2").attr('disabled',false); 
														$("#activityspace").attr('disabled',false);
																												$("#activityspace4").attr('disabled',true);
														$("#activityspace4").show();
														$("#activityspace").show()
														$("#activityspace2").show()
													$("#activityspace3").show()
													}
														$("#open1").show()
														$("#interactmapshow").show()
														clearfunct()
														selectedtaz = params.name
															myChart.showLoading()

															try
															{
																var anchorpoints1 = anchorpoints[anchorpoints.findIndex(function (value, index, arr)
																		{
																			return value[0] == params.name;
																		}
																		)]

															}
															catch (err)
															{
																anchorpoints1 = [0, 0, 0, 0, 0]
															}
															try
															{

																var signpopulation = population[population.findIndex(function (value, index, arr)
																		{
																			return value[1] == params.name;
																		}
																		)]
																	//获得小区属性
																	var tazinfo = tazdata.features[tazdata.features.findIndex(function (value, index, arr)
																		{
																			return value.properties.name == params.name;
																		}
																		)].properties
																	//计算小区中心点位置
																	var tazgeometry = tazdata.features[tazdata.features.findIndex(function (value, index, arr)
																		{
																			return value.properties.name == params.name;
																		}
																		)].geometry.coordinates

																	var sumlon = 0
																	var sumlat = 0
																	if (tazgeometry.length != 1)
																	{
																		tazgeometry = tazgeometry[0]
																	}
																	
																	for (var asd = 0; asd < tazgeometry[0].length; asd++)
																	{
																		sumlon += tazgeometry[0][asd][0]
																		sumlat += tazgeometry[0][asd][1]
																	}

																	var sumlon = sumlon / tazgeometry[0].length
																	var sumlat = sumlat / tazgeometry[0].length

																	var myareaaplha = Salpha_all[Salpha_all.findIndex(function (value, index, arr)
																		{
																			return value[0] == params.name;
																		}
																		)]
																	var arearank = area1[area1.findIndex(function (value, index, arr)
																		{
																			return value[0] == myareaaplha[1];
																		}
																		)]
																	var alpharank = alpha1[alpha1.findIndex(function (value, index, arr)
																		{
																			return value[0] == myareaaplha[2];
																		}
																		)]
																	var signdensity = (signpopulation[0] / tazinfo.area)
																	var densityrank = densities1[densities1.findIndex(function (value, index, arr)
																		{
																			return value[0] == signdensity;
																		}
																		)]

																	myChart2.setOption(
																	{
																		title: [{}, {},
																			{
																				text: '小区编号：' + tazinfo.name
																			},
																			{
																				text: '小区面积：' + tazinfo.area + '平方公里'
																			},
																			{
																				text: '行政区：' + tazinfo.F
																			},
																			{
																				text: '小区区位：' + tazinfo.F1
																			},
																			{
																				text: '小区人口：' + signpopulation[0] + '人'
																			},
																			{
																				text: '人口密度：' + signdensity.toFixed(0) + '人/平方公里'
																			}
																		],
																		legend: [
																			{
																				data: ['本地居民就业锚点', '对外就业锚点', '外来就业锚点'],
																				top: '55%',
																				left: '6%',
																				right: '50%'

																			},
																			{
																				data: ['本地人口', '外来人口'],
																				top: '13%',
																				left: '60%'

																			}
																		],
																		series: [
																			{
																				data: [
																					{
																						name: '就业人口',
																						value: signpopulation[2]
																					},
																					{
																						name: '非就业人口',
																						value: signpopulation[0] - signpopulation[2]
																					}
																				]
																			},
																			{
																				data: hourcount[params.name][0]
																			},
																			{
																				data: hourcount[params.name][1]
																			},
																			{
																				label:
																				{
																					normal:
																					{
																						show: true,
																						position: 'right',
																						formatter: function (params)
																						{

																							return params.name + '：' + params.data;
																						}
																					}
																				},
																				data: [anchorpoints1[2]]
																			},
																			{
																				label:
																				{
																					normal:
																					{
																						show: true,
																						position: 'right',
																						formatter: function (params)
																						{

																							return '输出就业锚点';
																						}
																					}
																				},
																				data: [anchorpoints1[3]]
																			},
																			{
																				label:
																				{
																					normal:
																					{
																						show: true,
																						position: 'right',
																						formatter: function (params)
																						{

																							return '小区内业锚点';
																						}
																					}
																				},
																				data: [anchorpoints1[4]]
																			},
																			{
																				markPoint:
																				{
																					label:
																					{
																						normal:
																						{
																							formatter: (densityrank[1] * 100).toFixed(0) + '%'

																						}
																					},
																					data: [
																						{
																							coord: [signdensity, densityrank[1]]
																						}
																					]
																				},
																				markLine:
																				{

																					data: [[
																							{
																								coord: [signdensity, 0],
																								symbol: 'none'
																							},
																							{
																								coord: [signdensity, 1],
																								symbol: 'none'
																							}
																						], [
																							{
																								coord: [0, densityrank[1]],
																								symbol: 'none'
																							},
																							{
																								coord: [38000, densityrank[1]],
																								symbol: 'none'
																							}
																						]]
																				}
																			}
																		]
																	}
																	)
																	myChart3.setOption(
																	{
																		series: [
																			{
																				data: S_all[params.name]
																			},
																			{
																				data: alpha_all[params.name]
																			},
																			{
																				data: n_all[params.name]
																			},
																			{
																				data: avgtime_all[params.name]
																			},
																			{
																				data: avgtime_weekend[params.name]
																			},
																			{
																				data: avgtime_weekday[params.name]
																			}
																		]
																	}
																	)
																	myChart4.setOption(
																	{
																		series: [
																			{
																				markPoint:
																				{
																					label:
																					{
																						normal:
																						{
																							formatter: (arearank[1] * 100).toFixed(0) + '%'
																						}
																					},
																					data: [
																						{
																							coord: [myareaaplha[1], arearank[1]]
																						}
																					]
																				},
																				markLine:
																				{

																					data: [[
																							{
																								coord: [myareaaplha[1], 0],
																								symbol: 'none'
																							},
																							{
																								coord: [myareaaplha[1], 1],
																								symbol: 'none'
																							}
																						], [
																							{
																								coord: [0, arearank[1]],
																								symbol: 'none'
																							},
																							{
																								coord: [8000, arearank[1]],
																								symbol: 'none'
																							}
																						]]
																				}
																			},
																			{
																				markPoint:
																				{
																					label:
																					{
																						normal:
																						{
																							formatter: (alpharank[1] * 100).toFixed(0) + '%'
																						}
																					},
																					data: [
																						{
																							coord: [myareaaplha[2], alpharank[1]]
																						}
																					]
																				},
																				markLine:
																				{

																					tooltip:
																					{
																						formatter: myareaaplha[2] + ''
																					},
																					data: [[
																							{
																								coord: [myareaaplha[2], 0],
																								symbol: 'none'
																							},
																							{
																								coord: [myareaaplha[2], 1],
																								symbol: 'none'
																							}
																						], [
																							{
																								coord: [0, alpharank[1]],
																								symbol: 'none'
																							},
																							{
																								coord: [1, alpharank[1]],
																								symbol: 'none'
																							}
																						]],
																				}
																			}
																		]
																	}
																	)
															}
															catch (err)
															{
																myChart.hideLoading()

																myChart2.setOption(
																{
																	series: [
																		{
																			data: [
																			]
																		},
																		{
																			data: []
																		},
																		{
																			data: []
																		},
																		{

																			data: []
																		},
																		{

																			data: []
																		},
																		{

																			data: []
																		}
																	]
																}
																)
															}
															try
															{
																//setheatmap()

																$.getJSON('./data/heatmapdata/' + params.name + heatmaptype + '.json', function (heatmapdata)
																{
																	var vmapSize = $("#vmapSize").slider("value")
																		myChart.hideLoading()
																		var option2 =
																	{

																		visualMap: [{},
																			{
																				max: heatmapdata[1] / vmapSize
																			}
																		],
																		series: [
																			{
																				data: [
																					{
																						'name': params.name,
																						'value': 2
																					}
																				],
																				markPoint:
																				{
																					symbolSize: 30,
																					itemStyle:
																					{
																						normal:
																						{
																							color: 'rgba(18,89,147,0.8)'
																						}
																					},
																					label:
																					{
																						normal:
																						{
																							show: false,
																							formatter: selectedtaz
																						}
																					},
																					data: [
																						{
																							coord: [sumlon, sumlat]
																						}
																					]
																				},
																			},
																			{
																				data: heatmapdata[0]
																			}, {}, {},{},{},{},
																			{

																				data: datamissingarea
																			}
																		]
																	}
																	myChart.setOption(option2);
																}
																)
															}
															catch (err)
															{
																myChart.hideLoading()

																myChart.setOption(
																{

																	series: [
																		{},
																		{
																			data: []
																		}
																	]
																}
																)
															}
													}
													//空间关联数据饼图设置
													$.getJSON('./data/interact/' + params.name + '.json', function (interactdata)
													{
														var ipiedata = []
														var totalvalue = 0
															var color = 'rgb(194,53,49)'
															for (var i = 0; i < interactdata[1].length; i++)
															{

																if (totalvalue == interactdata[2][0][1])
																{
																	var color = 'rgb(47,69,84)'
																}
																if (totalvalue == interactdata[2][0][1] + interactdata[2][1][1])
																{
																	var color = 'rgb(97,160,168)'
																}
																totalvalue += interactdata[1][i][1]
																ipiedata.push(
																{
																	name: interactdata[1][i][0],
																	value: interactdata[1][i][1],
																	itemStyle:
																	{
																		normal:
																		{

																			borderWidth: 3,
																			borderColor: color
																		}
																	}
																}
																)

															}

															var ipiedata2 = []
															for (var i = 0; i < interactdata[2].length; i++)
															{
																ipiedata2.push(
																{
																	name: interactdata[2][i][0],
																	value: interactdata[2][i][1],
																}
																)

															}

															myChart5.setOption(
															{
																title:
																{
																	text: params.name + '号小区居民活动点分布',
																	textStyle:
																	{
																		color: 'rgba(18,89,147,1)',
																		fontSize: 30
																	}
																},
																series: [
																	{
																		data: ipiedata2
																	},
																	{
																		data: ipiedata
																	}
																]
															}
															)
													}
													)

												}
												)
												//将dbscan的设置变为一个函数，方便后续使用

												function setdbscan()
												{
														var eps = $("#eps").slider("value")
															var rate = $("#rate").slider("value")
															var hotspotcdf = $("#hotspotcdf").slider("value")
															$("#hotspotvalue").text(Math.round(hotspotcdf * 100) + '%')
															$("#epsvalue").text(eps * 500 + 'm')
															$("#ratevalue").text(rate * 100 + '%')
															var dbscandata = []
													$.getJSON('./data/dbscan/dbscan'+Math.round(hotspotcdf * 100)+'.json', function (dbscan)
													{


															for (var key in dbscan)
															{
																//整理数据
																centers = dbscan[key][eps + '-' + rate]

																	dbscandata.push(
																	{
																		name: key,
																		value: centers
																	}
																	)
															}

															pieces =
															[
																{
																	min: 0,
																	max: 0
																},
																{
																	min: 1,
																	max: 1
																},
																{
																	min: 2,
																	max: 2
																},
																{
																	min: 3,
																	max: 3
																},
																{
																	min: 4,
																	max: 4
																},
																{
																	min: 5,
																	max: 100
																}
															]

															//再设置visualMap为piecewise

															var i = 0
															var visualMap = [
																{
																	show: true,
																	type: 'piecewise',
																	pieces: pieces,
																	splitNumber: 5,

																	dimension: 0,

																	inRange:
																	{
																		color: ['#50a3ba', '#eac736', '#d94e5d']

																	},
																	outOfRange:
																	{
																		color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																	},
																	//text: ['high', 'low'],
																	textStyle:
																	{
																		color: 'rgba(18,89,147,1)'
																	},
																	realtime: false,
																	seriesIndex: 0,
																	formatter: function (value)
																	{
																		i += 1
																		if (i == 1)
																		{
																			das = '无中心'
																		}
																		else
																		{
																			if (i == 6)
																			{
																				das = '>=5'
																			}
																			else
																			{
																				das = value
																			}
																		}
																		return das
																	}
																}
															]
															myChart.setOption(
															{
																visualMap: visualMap,
																series: [
																	{
																		data: dbscandata
																	}, {}, {}, {},{}, {}, {},
																	{
																
																	}
																]

															}
															)
													}
													)
												}

												//将改变属性选择作为一个函数
												var selectionchange = function (dimension2, visualmaptype, splitnumber)
												{
													if (dimension2 == 'dbscan')
													{
														$(".dbscansetting").show();
														$("#visualmapselect").hide();
														$("#visualmapgroups").hide();

														//先改变visualMap为continuous清空设置
														var visualMap = [
															{
																show: true,
																type: 'continuous'
															}
														]
														myChart.setOption(
														{
															visualMap: visualMap
														}
														)
													}
													else
													{
														$(".dbscansetting").hide();
													}

													if (dimension2 == 'clear')
													{}
													else
													{
														$("#open1").hide();
													}
													if (dimension2 == 'dbscan')
													{

														setdbscan()
													}
													if (dimension2 == 'area')
													{
														$("#visualmapselect").show();
														var areadata = []
														for (var i = 0; i < Salpha_all.length; i += 1)
														{
															areadata.push(
															{
																'name': Salpha_all[i][0] + '',
																'value': Salpha_all[i][1]
															}
															)
														}
														var visualMap = [
															{
																show: true,
																type: 'continuous',
																splitNumber: 10,
																categories: [],
																dimension: 0,
																min: 1000,
																max: 4000,
																inRange:
																{
																	color: ['#50a3ba', '#eac736', '#d94e5d']
																},
																outOfRange:
																{
																	color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																},
																text: ['high', 'low'],
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																},
																realtime: false,
																seriesIndex: 0,
																formatter: function (value)
																{
																	return value.toFixed(0) + '平方公里'
																}
															}
														]
														if (visualmaptype == 'continuous')
														{}
														else
														{
															myChart.setOption(
															{
																visualMap: visualMap
															}
															)
															var i = 0
																var pieces = []

																for (var j = 0; j < splitnumber; j++)
																{
																	pieces.push(
																	{
																		min: area[Math.floor(area.length * j / splitnumber)],
																		max: area[Math.floor(area.length * (j + 1) / splitnumber)]
																	}
																	)
																}

																var visualMap = [
																	{
																		show: true,
																		type: 'piecewise',

																		splitNumber: splitnumber,
																		pieces: pieces,
																		//categories: [],
																		dimension: 0,
																		min: 0,
																		max: Math.max.apply(null, area),

																		inRange:
																		{
																			color: ['#50a3ba', '#eac736', '#d94e5d']
																		},
																		outOfRange:
																		{
																			color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																		},
																		//text: ['high', 'low'],
																		textStyle:
																		{
																			color: 'rgba(18,89,147,1)'
																		},
																		realtime: false,
																		seriesIndex: 0,
																		formatter: function ()
																		{

																			var a = i / splitnumber * 100
																				i += 1
																				var b = i / splitnumber * 100

																				return a.toFixed(0) + '%' + '-' + b.toFixed(0) + '%'; // 范围标签显示内容。
																		}
																	}
																]
														}

														myChart.setOption(
														{
															visualMap: visualMap,
															series: [
																{
																	data: areadata
																}, {}, {}, {},
																{
														
																}
															]

														}
														)
													}
													if (dimension2 == 'alpha')
													{
														$("#visualmapselect").show();
														var areadata = []
														for (var i = 0; i < Salpha_all.length; i += 1)
														{
															areadata.push(
															{
																'name': Salpha_all[i][0] + '',
																'value': Salpha_all[i][2]
															}
															)
														}
														var visualMap = [
															{
																show: true,
																type: 'continuous',
																splitNumber: 10,
																categories: [],
																dimension: 0,
																min: 0,
																max: 0.5,
																inRange:
																{
																	color: ['#50a3ba', '#eac736', '#d94e5d']
																},
																outOfRange:
																{
																	color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																},
																text: ['high', 'low'],
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																},
																realtime: false,
																seriesIndex: 0,
																formatter: function (value)
																{
																	return value
																}
															}
														]
														if (visualmaptype == 'continuous')
														{}
														else
														{
															myChart.setOption(
															{
																visualMap: visualMap
															}
															)
															var i = 0
																var pieces = []

																for (var j = 0; j < splitnumber; j++)
																{
																	pieces.push(
																	{
																		min: alpha[Math.floor(alpha.length * j / splitnumber)],
																		max: alpha[Math.floor(alpha.length * (j + 1) / splitnumber)]
																	}
																	)
																}

																var visualMap = [
																	{
																		show: true,
																		type: 'piecewise',

																		splitNumber: splitnumber,
																		pieces: pieces,
																		//categories: [],
																		dimension: 0,
																		min: 0,
																		max: Math.max.apply(null, alpha),

																		inRange:
																		{
																			color: ['#50a3ba', '#eac736', '#d94e5d']
																		},
																		outOfRange:
																		{
																			color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																		},
																		//text: ['high', 'low'],
																		textStyle:
																		{
																			color: 'rgba(18,89,147,1)'
																		},
																		realtime: false,
																		seriesIndex: 0,
																		formatter: function ()
																		{

																			var a = i / splitnumber * 100
																				i += 1
																				var b = i / splitnumber * 100

																				return a.toFixed(0) + '%' + '-' + b.toFixed(0) + '%'; // 范围标签显示内容。
																		}
																	}
																]
														}
														myChart.setOption(
														{
															visualMap: visualMap,
															series: [
																{
																	data: areadata
																}, {}, {}, {},{}, {}, {},
																{
																
																}
															]

														}
														)
													}

													if (dimension2 == 'density')
													{
														$("#visualmapselect").show();
														var areadata = []
														for (var i = 0; i < densities.length; i += 1)
														{
															areadata.push(
															{
																'name': densities[i][0] + '',
																'value': densities[i][1]
															}
															)
														}
														var visualMap = [
															{
																show: true,
																type: 'continuous',
																splitNumber: 10,
																categories: [],
																dimension: 0,
																min: 0,
																max: 20000,
																inRange:
																{
																	color: ['#50a3ba', '#eac736', '#d94e5d']
																},
																outOfRange:
																{
																	color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																},
																text: ['high', 'low'],
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																},
																realtime: false,
																seriesIndex: 0,
																formatter: function (value)
																{
																	return value.toFixed(0) + '人/平方公里'
																}
															}
														]
														if (visualmaptype == 'continuous')
														{}
														else
														{
															myChart.setOption(
															{
																visualMap: visualMap
															}
															)
															var i = 0
																var pieces = []

																for (var j = 0; j < splitnumber; j++)
																{
																	pieces.push(
																	{
																		min: densities[Math.floor(densities.length * j / splitnumber)][1],
																		max: densities[Math.floor(densities.length * (j + 1) / splitnumber) - 1][1]
																	}
																	)
																}

																var visualMap = [
																	{
																		show: true,
																		type: 'piecewise',

																		splitNumber: splitnumber,
																		pieces: pieces,
																		//categories: [],
																		dimension: 0,
																		min: 0,
																		max: densities[densities.length - 1],

																		inRange:
																		{
																			color: ['#50a3ba', '#eac736', '#d94e5d']
																		},
																		outOfRange:
																		{
																			color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																		},
																		//text: ['high', 'low'],
																		textStyle:
																		{
																			color: 'rgba(18,89,147,1)'
																		},
																		realtime: false,
																		seriesIndex: 0,
																		formatter: function ()
																		{

																			var a = i / splitnumber * 100
																				i += 1
																				var b = i / splitnumber * 100

																				return a.toFixed(0) + '%' + '-' + b.toFixed(0) + '%'; // 范围标签显示内容。
																		}
																	}
																]
														}
														myChart.setOption(
														{
															visualMap: visualMap,
															series: [
																{
																	data: areadata
																}, {}, {}, {},{}, {}, {},
																{
																
																}
															]

														}
														)
													}
													if (dimension2 == 'idividual_avgn')
													{
														$("#visualmapselect").show();
																										//从n_all计算每个小区的平均个体活动中心数量
												var idividual_avgn = []
												var idividual_avgn1 = []
												for (var key in n_all)
													{
														var centers = 0
														var peoples = 0
														var temp = n_all[key]
														for (var i = 0; i < temp.length; i += 1)
														{
															
															centers+=temp[i][0]*temp[i][1]
															peoples+=temp[i][1]
														}
														idividual_avgn.push({'name': key,'value': centers/peoples})
														idividual_avgn1.push([Number(key),centers/peoples])
													}
													idividual_avgn1.sort(function (a, b)
													{
														return a[1] - b[1]
													}
													)
												
														var visualMap = [
															{
																show: true,
																type: 'continuous',
																splitNumber: 10,
																categories: [],
																dimension: 0,
																min: idividual_avgn1[0][1],
																max: idividual_avgn1[idividual_avgn1.length-1][1],
																inRange:
																{
																	color: ['#50a3ba', '#eac736', '#d94e5d']
																},
																outOfRange:
																{
																	color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																},
																text: ['high', 'low'],
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																},
																realtime: false,
																seriesIndex: 0,
																formatter: function (value)
																{
																	return value.toFixed(0) + '人/平方公里'
																}
															}
														]
														if (visualmaptype == 'continuous')
														{}
														else
														{
															myChart.setOption(
															{
																visualMap: visualMap
															}
															)
															var i = 0
																var pieces = []

																for (var j = 0; j < splitnumber; j++)
																{
																	pieces.push(
																	{
																		min: idividual_avgn1[Math.floor(idividual_avgn1.length * j / splitnumber)][1],
																		max: idividual_avgn1[Math.floor(idividual_avgn1.length * (j + 1) / splitnumber) - 1][1]
																	}
																	)
																}

																var visualMap = [
																	{
																		show: true,
																		type: 'piecewise',

																		splitNumber: splitnumber,
																		pieces: pieces,
																		//categories: [],
																		dimension: 0,
																		min: 0,
																		max: idividual_avgn1[idividual_avgn1.length - 1],

																		inRange:
																		{
																			color: ['#50a3ba', '#eac736', '#d94e5d']
																		},
																		outOfRange:
																		{
																			color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																		},
																		//text: ['high', 'low'],
																		textStyle:
																		{
																			color: 'rgba(18,89,147,1)'
																		},
																		realtime: false,
																		seriesIndex: 0,
																		formatter: function ()
																		{

																			var a = i / splitnumber * 100
																				i += 1
																				var b = i / splitnumber * 100

																				return a.toFixed(0) + '%' + '-' + b.toFixed(0) + '%'; // 范围标签显示内容。
																		}
																	}
																]
														}
														myChart.setOption(
														{
															visualMap: visualMap,
															series: [
																{
																	data: idividual_avgn
																}, {}, {}, {},{}, {}, {},
																{
																
																}
															]

														}
														)
													}
													if (dimension2 == 'idividual_avgalpha')
													{
														$("#visualmapselect").show();
																									//从n_all计算每个小区的平均个体活动中心数量
												var idividual_avgalpha = []
												var idividual_avgalpha1 = []
												for (var key in alpha_all)
													{
														var centers = 0
														var peoples = 0
														var temp = alpha_all[key]
														for (var i = 0; i < temp.length; i += 1)
														{
															
															centers+=temp[i][0]*temp[i][1]
															peoples+=temp[i][1]
														}
														idividual_avgalpha.push({'name': key,'value': centers/peoples})
														idividual_avgalpha1.push([Number(key),centers/peoples])
													}
													idividual_avgalpha1.sort(function (a, b)
													{
														return a[1] - b[1]
													}
													)
												
														var visualMap = [
															{
																show: true,
																type: 'continuous',
																splitNumber: 10,
																categories: [],
																dimension: 0,
																min: idividual_avgalpha1[0][1],
																max: idividual_avgalpha1[idividual_avgalpha1.length-1][1],
																inRange:
																{
																	color: ['#50a3ba', '#eac736', '#d94e5d']
																},
																outOfRange:
																{
																	color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																},
																text: ['high', 'low'],
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																},
																realtime: false,
																seriesIndex: 0,
																formatter: function (value)
																{
																	return value.toFixed(0) + '人/平方公里'
																}
															}
														]
														if (visualmaptype == 'continuous')
														{}
														else
														{
															myChart.setOption(
															{
																visualMap: visualMap
															}
															)
															var i = 0
																var pieces = []

																for (var j = 0; j < splitnumber; j++)
																{
																	pieces.push(
																	{
																		min: idividual_avgalpha1[Math.floor(idividual_avgalpha1.length * j / splitnumber)][1],
																		max: idividual_avgalpha1[Math.floor(idividual_avgalpha1.length * (j + 1) / splitnumber) - 1][1]
																	}
																	)
																}

																var visualMap = [
																	{
																		show: true,
																		type: 'piecewise',

																		splitNumber: splitnumber,
																		pieces: pieces,
																		//categories: [],
																		dimension: 0,
																		min: 0,
																		max: idividual_avgalpha1[idividual_avgalpha1.length - 1],

																		inRange:
																		{
																			color: ['#50a3ba', '#eac736', '#d94e5d']
																		},
																		outOfRange:
																		{
																			color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																		},
																		//text: ['high', 'low'],
																		textStyle:
																		{
																			color: 'rgba(18,89,147,1)'
																		},
																		realtime: false,
																		seriesIndex: 0,
																		formatter: function ()
																		{

																			var a = i / splitnumber * 100
																				i += 1
																				var b = i / splitnumber * 100

																				return a.toFixed(0) + '%' + '-' + b.toFixed(0) + '%'; // 范围标签显示内容。
																		}
																	}
																]
														}
														myChart.setOption(
														{
															visualMap: visualMap,
															series: [
																{
																	data: idividual_avgalpha
																}, {}, {}, {},
																{
																	
																}
															]

														}
														)
													}
													if (dimension2 == 'idividual_avgs')
													{
														$("#visualmapselect").show();
																										//从n_all计算每个小区的平均个体活动中心数量
												var idividual_avgs = []
												var idividual_avgs1 = []
												for (var key in S_all)
													{
														var centers = 0
														var peoples = 0
														var temp = S_all[key]
														for (var i = 0; i < temp.length; i += 1)
														{
															
															centers+=temp[i][0]*temp[i][1]
															peoples+=temp[i][1]
														}
														idividual_avgs.push({'name': key,'value': centers/peoples})
														idividual_avgs1.push([Number(key),centers/peoples])
													}
													idividual_avgs1.sort(function (a, b)
													{
														return a[1] - b[1]
													}
													)
												
														var visualMap = [
															{
																show: true,
																type: 'continuous',
																splitNumber: 10,
																categories: [],
																dimension: 0,
																min: idividual_avgs1[0][1],
																max: idividual_avgs1[idividual_avgs1.length-1][1],
																inRange:
																{
																	color: ['#50a3ba', '#eac736', '#d94e5d']
																},
																outOfRange:
																{
																	color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																},
																text: ['high', 'low'],
																textStyle:
																{
																	color: 'rgba(18,89,147,1)'
																},
																realtime: false,
																seriesIndex: 0,
																formatter: function (value)
																{
																	return value.toFixed(0) + '人/平方公里'
																}
															}
														]
														if (visualmaptype == 'continuous')
														{}
														else
														{
															myChart.setOption(
															{
																visualMap: visualMap
															}
															)
															var i = 0
																var pieces = []

																for (var j = 0; j < splitnumber; j++)
																{
																	pieces.push(
																	{
																		min: idividual_avgs1[Math.floor(idividual_avgs1.length * j / splitnumber)][1],
																		max: idividual_avgs1[Math.floor(idividual_avgs1.length * (j + 1) / splitnumber) - 1][1]
																	}
																	)
																}

																var visualMap = [
																	{
																		show: true,
																		type: 'piecewise',

																		splitNumber: splitnumber,
																		pieces: pieces,
																		//categories: [],
																		dimension: 0,
																		min: 0,
																		max: idividual_avgs1[idividual_avgs1.length - 1],

																		inRange:
																		{
																			color: ['#50a3ba', '#eac736', '#d94e5d']
																		},
																		outOfRange:
																		{
																			color: ['#fff']//['#d94e5d','#eac736','#50a3ba']
																		},
																		//text: ['high', 'low'],
																		textStyle:
																		{
																			color: 'rgba(18,89,147,1)'
																		},
																		realtime: false,
																		seriesIndex: 0,
																		formatter: function ()
																		{

																			var a = i / splitnumber * 100
																				i += 1
																				var b = i / splitnumber * 100

																				return a.toFixed(0) + '%' + '-' + b.toFixed(0) + '%'; // 范围标签显示内容。
																		}
																	}
																]
														}
														myChart.setOption(
														{
															visualMap: visualMap,
															series: [
																{
																	data: idividual_avgs
																}, {}, {}, {},{}, {}, {},
																{
																	data: []
																}
															]

														}
														)
													}
													if (dimension2 == 'clear')
													{

														clearfunct()
													}
												}
												var splitnumber = 3
													fieldSelect.change(function ()
													{
														if (visualmaptype == 'piecewise')
														{
															$("#visualmapgroups").show();
														}
														else
														{
															$("#visualmapgroups").hide();
														}
														dimension2 = $(this).val();
														selectionchange(dimension2, visualmaptype, splitnumber)
													}
													)
													visualmapselect.change(function ()
													{
														visualmaptype = $(this).val();
														if (visualmaptype == 'piecewise')
														{
															$("#visualmapgroups").show();
														}
														else
														{
															$("#visualmapgroups").hide();
														}
														selectionchange(dimension2, visualmaptype, splitnumber)
													}
													)
													visualmapgroupselect.change(function ()
													{
														splitnumber = $(this).val();

														selectionchange(dimension2, visualmaptype, splitnumber)
													}
													)
											}
											);
										}
										)
									}
									)
								}
								)
							}
							)
						}
						)
					}
					)
				}
				)
			}
			)
		}
		)
	}
	)
}
)
}
)
