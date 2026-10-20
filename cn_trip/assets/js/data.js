// 已发布网页恢复的数据。直接修改数组里的行程、交通、预订信息。

const confirmedTransports=[
      {id:'cz312',mode:'飞机',number:'CZ312',route:'多伦多 → 广州',countdownTitle:'CZ312 多伦多起飞',iso:'2026-10-21T01:30:00-04:00',display:'10 月 21 日 01:30 · 多伦多时间',departure:{date:'10.21',time:'01:30',place:'多伦多皮尔逊机场 T3',zone:'多伦多时间'},arrival:{date:'10.22',time:'05:00',place:'广州白云机场 T2',zone:'中国时间'},platform:'待补充'},
      {id:'cz3913',mode:'飞机',number:'CZ3913',route:'广州 → 无锡',countdownTitle:'CZ3913 广州起飞',iso:'2026-10-22T08:25:00+08:00',display:'10 月 22 日 08:25 · 中国时间',departure:{date:'10.22',time:'08:25',place:'广州白云机场 T2',zone:'中国时间'},arrival:{date:'10.22',time:'10:50',place:'无锡硕放机场',zone:'中国时间'},platform:'待补充',seat:'34H / 34J'},
      {id:'g7251',mode:'高铁',number:'G7251',route:'无锡东 → 上海站',countdownTitle:'G7251 无锡东出发',iso:'2026-10-25T20:58:00+08:00',display:'10 月 25 日 20:58 · 中国时间',departure:{date:'10.25',time:'20:58',place:'无锡东站',zone:'中国时间'},arrival:{date:'10.25',time:'21:32',place:'上海站',zone:'中国时间'},platform:'携程',seat:'08车厢 · 05D / 05F'},
      {id:'g7068',mode:'高铁',number:'G7068',route:'上海站 → 无锡站',countdownTitle:'G7068 上海站出发',iso:'2026-10-28T21:50:00+08:00',display:'10 月 28 日 21:50 · 中国时间',departure:{date:'10.28',time:'21:50',place:'上海站',zone:'中国时间'},arrival:{date:'10.28',time:'22:32',place:'无锡站',zone:'中国时间'},platform:'携程',seat:'02车厢 · 03A / 03B'},
      {id:'g7004',mode:'高铁',number:'G7004',route:'无锡站 → 南京站',countdownTitle:'G7004 无锡站出发',iso:'2026-10-31T08:45:00+08:00',display:'10 月 31 日 08:45 · 中国时间',departure:{date:'10.31',time:'08:45',place:'无锡站',zone:'中国时间'},arrival:{date:'10.31',time:'09:44',place:'南京站',zone:'中国时间'},platform:'携程',seat:'06车厢 · 06A / 06B'},
      {id:'mu2663',mode:'飞机',number:'MU2663',route:'南京 → 重庆',countdownTitle:'MU2663 南京起飞',iso:'2026-11-01T09:15:00+08:00',display:'11 月 1 日 09:15 · 中国时间',departure:{date:'11.01',time:'09:15',place:'南京禄口机场',zone:'中国时间'},arrival:{date:'11.01',time:'11:35',place:'重庆江北机场',zone:'中国时间'},platform:'携程',seat:'34C / 34J'},
      {id:'g3980',mode:'高铁',number:'G3980',route:'重庆北 → 成都东',countdownTitle:'G3980 重庆北出发',iso:'2026-11-02T20:32:00+08:00',display:'11 月 2 日 20:32 · 中国时间',departure:{date:'11.02',time:'20:32',place:'重庆北站',zone:'中国时间'},arrival:{date:'11.02',time:'21:49',place:'成都东站',zone:'中国时间'},platform:'携程',seat:'07车厢 · 12C / 12D'},
      {id:'a67762',mode:'飞机',number:'A67762',route:'成都 → 无锡',countdownTitle:'A67762 成都起飞',iso:'2026-11-05T22:45:00+08:00',display:'11 月 5 日 22:45 · 中国时间',departure:{date:'11.05',time:'22:45',place:'成都天府机场',zone:'中国时间'},arrival:{date:'11.06',time:'01:20',place:'无锡硕放机场',zone:'中国时间'},platform:'携程'},
      {id:'cz3918',mode:'飞机',number:'CZ3918',route:'无锡 → 广州',countdownTitle:'CZ3918 无锡起飞',iso:'2026-11-09T13:50:00+08:00',display:'11 月 9 日 13:50 · 中国时间',departure:{date:'11.09',time:'13:50',place:'无锡硕放机场',zone:'中国时间'},arrival:{date:'11.09',time:'16:30',place:'广州白云机场 T2',zone:'中国时间'},platform:'待补充',seat:'31J / 31K'},
      {id:'cz311',mode:'飞机',number:'CZ311',route:'广州 → 多伦多',countdownTitle:'CZ311 广州起飞',iso:'2026-11-12T19:25:00+08:00',display:'11 月 12 日 19:25 · 中国时间',departure:{date:'11.12',time:'19:25',place:'广州白云机场 T2',zone:'中国时间'},arrival:{date:'11.12',time:'21:15',place:'多伦多皮尔逊机场 T3',zone:'多伦多时间'},platform:'待补充'}
    ];

const tripGroups=[
      {id:'toronto-depart',city:'多伦多 · 出发',range:'10.20—21',days:[
        {date:'2026-10-20',location:'多伦多',onlyEvents:true,events:[{time:'22:30',sort:2230,bucket:'evening',title:'抵达多伦多皮尔逊机场 T3',confirmed:true}]},
        {date:'2026-10-21',location:'飞行日',onlyEvents:true,events:[{time:'01:30',sort:130,bucket:'early',title:'CZ312 · 多伦多皮尔逊机场 T3',note:'预订平台待补充',confirmed:true}]}
      ]},
      {id:'wuxi-1',city:'无锡',range:'10.22—25',days:[
        {date:'2026-10-22',location:'广州转机 → 无锡',events:[{time:'05:00',sort:500,bucket:'morning',title:'CZ312 · 广州白云机场 T2',note:'预订平台待补充',confirmed:true},{time:'早餐',sort:630,meal:'breakfast',title:'机场解决',note:'广州白云机场转机期间'},{time:'08:25',sort:825,bucket:'morning',title:'CZ3913 · 广州白云机场 T2',note:'预订平台待补充',confirmed:true},{time:'10:50',sort:1050,bucket:'morning',title:'CZ3913 · 无锡硕放机场',note:'预订平台待补充',confirmed:true},{time:'15:30',sort:1530,bucket:'afternoon',title:'双眼皮面诊',note:'无锡第二人民医院'},{time:'晚餐＋晚上',sort:1800,meal:'dinner',bucket:'evening',title:'万象城'}]},
        {date:'2026-10-23',location:'无锡',events:[{time:'07:50–08:20',sort:750,bucket:'morning',title:'遗传咨询',note:'无锡妇幼'},{time:'早餐',sort:1000,meal:'breakfast',title:'熙盛源小笼包',note:'检查结束后'},{time:'13:30–14:00',sort:1330,bucket:'afternoon',title:'足踝检查',note:'第九人民医院'},{time:'晚餐＋晚上',sort:1830,meal:'dinner',bucket:'evening',title:'南长街'}]},
        {date:'2026-10-24',location:'无锡',events:[{time:'早餐',sort:730,meal:'breakfast',title:'无锡早面'},{time:'上午',sort:930,bucket:'morning',title:'灵山大佛',note:'早餐后出发，预留半天'},{time:'14:00',sort:1400,bucket:'afternoon',title:'美甲'},{time:'晚餐',sort:1800,meal:'dinner',title:'家宴'},{time:'晚上',sort:2000,bucket:'evening',title:'待安排'}]},
        {date:'2026-10-25',location:'无锡 → 上海',events:[{time:'午餐',sort:1200,meal:'lunch',title:'无锡酸辣汤＋锅贴'},{time:'下午＋晚餐',sort:1400,meal:'dinner',bucket:'afternoon',title:'寄畅园＋惠山古镇',note:'晚间乘高铁，需预留返程和取行李时间'},{time:'20:58',sort:2058,bucket:'evening',title:'G7251 · 无锡东站',note:'携程',confirmed:true},{time:'21:32',sort:2132,title:'G7251 · 上海站',note:'携程',confirmed:true},{time:'住宿',sort:2300,title:'上海静安寺淮海中路全季酒店',note:'第 1 晚 · 去哪儿网'}]}
      ]},
      {id:'shanghai',city:'上海',range:'10.26—28',days:[
        {date:'2026-10-26',location:'上海',events:[{time:'上午',sort:900,bucket:'morning',title:'化妆'},{time:'早午餐',sort:1130,meals:['breakfast','lunch'],title:'Bijou'},{time:'下午',sort:1400,bucket:'afternoon',title:'City Walk',note:'01 Honky Tonk · 02 小玉快闪店 · 03 Hitable · 04 Goodbai · 05 BIJOU · 06 Tagi · 07 Spiceman Gelato · 08 Rosy Doedian Drip · 09 Brandy Melville · 10 Muse LuEra'},{time:'17:30',sort:1730,meal:'dinner',title:'鮨棠'},{time:'晚上',sort:2000,bucket:'evening',title:'南京西路＋外滩'},{time:'住宿',sort:2300,title:'上海静安寺淮海中路全季酒店',note:'第 2 晚 · 去哪儿网'}]},{date:'2026-10-27',location:'上海',events:[{time:'上午',sort:900,bucket:'morning',title:'化妆'},{time:'早午餐',sort:1130,meals:['breakfast','lunch'],title:'莱莱小笼'},{time:'下午',sort:1330,bucket:'afternoon',title:'TWOI'},{time:'下午',sort:1500,bucket:'afternoon',title:'苏州河'},{time:'晚餐',sort:1800,meal:'dinner',title:'老吉士'},{time:'晚上',sort:2000,bucket:'evening',title:'LV 邮轮',note:'结束后前往酒店，需预留交通时间'},{time:'住宿',sort:2300,title:'上海国际旅游度假区南六公路亚朵酒店',note:'第 1 晚 · 去哪儿网'}]},
        {date:'2026-10-28',location:'上海 → 无锡',onlyEvents:true,events:[{time:'早餐',sort:700,meal:'breakfast',title:'酒店早餐'},{time:'09:00',sort:900,buckets:['morning','afternoon','evening'],title:'上海迪士尼 · 33VIP票',note:'建议预留前往上海站及进站时间'},{time:'21:50',sort:2150,title:'G7068 · 上海站',note:'携程',confirmed:true},{time:'22:32',sort:2232,title:'G7068 · 无锡站',note:'携程',confirmed:true}]}
      ]},
      {id:'wuxi-2',city:'无锡',range:'10.29—30',days:[
        {date:'2026-10-29',location:'无锡',events:[{time:'午餐',sort:1200,meal:'lunch',title:'外婆家'},{time:'下午',sort:1400,bucket:'afternoon',title:'爸爸办公室'},{time:'18:00',sort:1800,meal:'dinner',title:'聚餐 · 荟聚同仁四季椰子鸡'}]},
        {date:'2026-10-30',location:'无锡 → 宜兴',events:[{time:'上午',sort:900,bucket:'morning',title:'出发宜兴'},{time:'下午',sort:1400,bucket:'afternoon',title:'宜兴陶美术馆'}]}
      ]},
      {id:'nanjing',city:'南京',range:'10.31',days:[
        {date:'2026-10-31',location:'无锡 → 南京',events:[{time:'08:45',sort:845,bucket:'morning',title:'G7004 · 无锡站',note:'携程',confirmed:true},{time:'09:44',sort:944,bucket:'morning',title:'G7004 · 南京站',note:'携程',confirmed:true},{time:'下午',sort:1300,bucket:'afternoon',title:'梧桐大道',note:'16:30 有演出，需预留前往场地时间'},{time:'16:30',sort:1630,bucket:'afternoon',title:'Feel 南京演出',note:'演出场地待补充'},{time:'晚餐',sort:1830,meal:'dinner',title:'舒雅土菜馆'},{time:'住宿',sort:2300,title:'花筑奢·梧桐公馆（南京中山陵景区店）',note:'第 1 晚 · 去哪儿网'}]}
      ]},
      {id:'chongqing',city:'重庆',range:'11.01—02',days:[
        {date:'2026-11-01',location:'南京 → 重庆',events:[
          {time:'09:15',sort:915,bucket:'morning',title:'MU2663 · 南京禄口机场',note:'携程',confirmed:true},
          {time:'11:35',sort:1135,bucket:'morning',title:'MU2663 · 重庆江北机场',note:'携程',confirmed:true},
          {time:'午餐',sort:1200,meal:'lunch',title:'尘香'},
          {time:'下午',sort:1400,bucket:'afternoon',title:'龙门浩＋下浩里'},
          {time:'晚餐',sort:1800,meal:'dinner',title:'南滨路 · 莺花渡火锅'},
          {time:'晚上',sort:1930,bucket:'evening',title:'洪崖洞'},
          {time:'凌晨',sort:2500,title:'九街 · 金牙 Club / Luffroom'},
          {time:'住宿',sort:2700,title:'曾老师民宿',note:'第 1 晚 · 平台待补充'}
        ]},
        {date:'2026-11-02',location:'重庆 → 成都',events:[
          {time:'早餐',sort:700,meal:'breakfast',title:'花市豌杂面'},
          {time:'上午',sort:900,bucket:'morning',title:'鹅岭栈道＋二厂'},
          {time:'午餐',sort:1200,meal:'lunch',title:'李子坝梁山鸡'},
          {time:'下午',sort:1400,bucket:'afternoon',title:'北仓文创园'},
          {time:'晚餐＋晚上',sort:1800,meal:'dinner',bucket:'evening',title:'足疗',note:'玖合素手（备选） · 20:32 重庆北站高铁，需预留前往车站时间'},
          {time:'20:32',sort:2032,title:'G3980 · 重庆北站',note:'携程',confirmed:true},
          {time:'21:49',sort:2149,title:'G3980 · 成都东站',note:'携程',confirmed:true},
          {time:'住宿',sort:2300,title:'成都东郊记忆理工大学轻居酒店（Atour Light）',note:'第 1 晚 · 去哪儿网'}
        ]}
      ]},
      {id:'chengdu',city:'成都',range:'11.03—05',days:[
        {date:'2026-11-03',location:'成都',events:[{time:'早餐',sort:730,meal:'breakfast',title:'面包不等'},{time:'上午',sort:900,bucket:'morning',title:'大熊猫基地'},{time:'午餐',sort:1200,meal:'lunch',title:'胖娃滋补蹄花'},{time:'下午',sort:1400,bucket:'afternoon',title:'东郊记忆'},{time:'晚餐',sort:1800,meal:'dinner',title:'三棵树家常菜'},{time:'晚上',sort:2000,bucket:'evening',title:'玉林路 · 研麻所 · Pepper Gelato＋夜市'},{time:'住宿',sort:2300,title:'成都东郊记忆理工大学轻居酒店（Atour Light）',note:'第 2 晚 · 去哪儿网'}]},
        {date:'2026-11-04',location:'成都',events:[{time:'早午餐',sort:1000,meals:['breakfast','lunch'],bucket:'morning',title:'待安排'},{time:'下午',sort:1400,bucket:'afternoon',title:'杜甫草堂＋人民公园'},{time:'晚餐',sort:1800,meal:'dinner',title:'五里关火锅 · 奎星楼店'},{time:'晚上',sort:2000,bucket:'evening',title:'宽窄巷子＋金色印象足疗'},{time:'住宿',sort:2300,title:'成都东郊记忆理工大学轻居酒店（Atour Light）',note:'第 3 晚 · 去哪儿网'}]},
        {date:'2026-11-05',location:'成都 → 无锡',events:[{time:'早午餐',sort:1000,meals:['breakfast','lunch'],bucket:'morning',title:'麓湖 CPI'},{time:'下午',sort:1400,bucket:'afternoon',title:'COSMO＋太古里 TWOI'},{time:'22:45',sort:2245,bucket:'evening',title:'A67762 · 成都天府机场',note:'携程',confirmed:true}]}
      ]},
      {id:'wuxi-3',city:'无锡',range:'11.06—08',days:[
        {date:'2026-11-06',location:'无锡',events:[{time:'01:20',sort:120,title:'A67762 · 无锡硕放机场',note:'携程',confirmed:true},{time:'上午',sort:900,bucket:'morning',title:'美甲（备选）'},{time:'下午',sort:1400,bucket:'afternoon',title:'运河汇'},{time:'晚餐＋晚上',sort:1800,meal:'dinner',bucket:'evening',title:'常州 · 水裹汤泉'}]},
        {date:'2026-11-07',location:'无锡',events:[{time:'上午',sort:900,bucket:'morning',title:'染发'},{time:'午餐',sort:1200,meal:'lunch',title:'毛华美食'},{time:'下午',sort:1400,bucket:'afternoon',title:'双眼皮手术'},{time:'晚餐',sort:1800,meal:'dinner',title:'家宴'},{time:'晚上',sort:1930,bucket:'evening',title:'阳春巷＋小娄巷',note:'饭后步行逛街区'}]},
        {date:'2026-11-08',location:'无锡',events:[{time:'晚餐',sort:1800,meal:'dinner',bucket:'evening',title:'家宴'}]}
      ]},
      {id:'guangzhou-1',city:'广州',range:'11.09—10',days:[
        {date:'2026-11-09',location:'无锡 → 广州',events:[{time:'13:50',sort:1350,bucket:'afternoon',title:'CZ3918 · 无锡硕放机场',note:'预订平台待补充',confirmed:true},{time:'16:30',sort:1630,bucket:'afternoon',title:'CZ3918 · 广州白云机场 T2',note:'预订平台待补充',confirmed:true},{time:'晚餐',sort:1830,meal:'dinner',title:'和林朝阳聚餐'},{time:'住宿',sort:2300,title:'榆漫居酒店（广州太古汇天河体育中心旗舰店）',note:'第 1 晚 · 携程'}]},
        {date:'2026-11-10',location:'广州',events:[{time:'早餐＋午餐',sort:930,meals:['breakfast','lunch'],bucket:'morning',title:'广东早茶'},{time:'住宿',sort:2300,title:'榆漫居酒店（广州太古汇天河体育中心旗舰店）',note:'第 2 晚 · 携程'}]}
      ]},
      {id:'foshan',city:'佛山',range:'11.11',days:[
        {date:'2026-11-11',location:'广州 → 佛山 → 广州',events:[{time:'早上',sort:700,bucket:'morning',title:'出发佛山',note:'车次及广州出发站待确认',pending:true},{time:'上午',sort:900,bucket:'morning',title:'家具厂参观'},{time:'下午',sort:1400,bucket:'afternoon',title:'家具厂参观'},{time:'晚上',sort:2000,bucket:'evening',title:'回程广州',note:'车次及佛山出发站待确认',pending:true},{time:'住宿',sort:2300,title:'榆漫居酒店（广州太古汇天河体育中心旗舰店）',note:'第 3 晚 · 携程'}]}
      ]},
      {id:'guangzhou-2',city:'广州 · 返程',range:'11.12',days:[
        {date:'2026-11-12',location:'广州 → 多伦多',events:[{time:'16:25',sort:1625,bucket:'afternoon',title:'抵达广州白云机场 T2',note:'CZ311 起飞前 3 小时',confirmed:true},{time:'19:25',sort:1925,bucket:'evening',title:'CZ311 · 广州白云机场 T2',note:'预订平台待补充',confirmed:true},{time:'21:15',sort:2115,bucket:'evening',title:'CZ311 · 多伦多皮尔逊机场 T3',note:'预订平台待补充',confirmed:true}]}
      ]}
    ];

const bookingGroups=[
      {name:'住宿',items:[
        {id:'hotel-wuxi-1',title:'无锡住宿',meta:'10.22 入住—10.25 退房 · 3 晚',status:'确认是否需订'},
        {id:'hotel-shanghai-ji',title:'上海静安寺淮海中路全季酒店',meta:'10.25 入住—10.27 退房 · 2 晚',status:'预订成功',done:true,priceCnyTotal:1118.38,priceTitle:'上海住宿',priceMeta:'10.25—10.26 · ¥559.19/晚 × 2',priceDate:'2026-10-25'},
        {id:'hotel-shanghai-atour',title:'上海国际旅游度假区南六公路亚朵酒店',meta:'10.27 入住—10.28 退房 · 1 晚',status:'预订成功',done:true,priceCnyTotal:615,priceTitle:'上海住宿',priceMeta:'10.27 · ¥615/晚 × 1',priceDate:'2026-10-27'},
        {id:'hotel-wuxi-2',title:'无锡住宿',meta:'10.28 入住—10.31 退房 · 3 晚',status:'确认是否需订'},
        {id:'hotel-nanjing',title:'花筑奢·梧桐公馆（南京中山陵景区店）',meta:'10.31 入住—11.01 退房 · 1 晚',status:'预订成功',done:true,priceCnyTotal:446,priceTitle:'南京住宿',priceMeta:'10.31 · ¥446/晚 × 1',priceDate:'2026-10-31'},
        {id:'hotel-chongqing-confirmed',title:'重庆 · 曾老师民宿',meta:'11.01 入住—11.02 退房 · 1 晚',status:'已确认',done:true},
        {id:'hotel-chengdu',title:'成都东郊记忆理工大学轻居酒店（Atour Light）',meta:'11.02 入住—11.05 退房 · 3 晚',status:'预订成功',done:true,priceCnyTotal:1035,priceTitle:'成都住宿',priceMeta:'11.02—11.04 · ¥345/晚 × 3',priceDate:'2026-11-02'},
        {id:'hotel-wuxi-3',title:'无锡住宿',meta:'11.05 入住—11.09 退房 · 4 晚',status:'确认是否需订'},
        {id:'hotel-guangzhou',title:'榆漫居酒店（广州太古汇天河体育中心旗舰店）',meta:'11.09 入住—11.12 退房 · 3 晚',status:'预订成功',done:true,priceCnyTotal:1634,priceTitle:'广州住宿',priceMeta:'11.09—11.11 · ¥544.67/晚 × 3',priceDate:'2026-11-09'}
      ]},
      {name:'飞机',items:[
        {id:'flight-cz312',title:'CZ312 多伦多 → 广州',meta:'10.21 01:30—10.22 05:00',status:'已出票',done:true},
        {id:'flight-cz3913',title:'CZ3913 广州 → 无锡',meta:'10.22 08:25—10:50',status:'已出票',done:true},
        {id:'flight-nanjing-chongqing',title:'MU2663 南京 → 重庆',meta:'11.01 09:15—11:35',status:'已订票',done:true,priceCnyTotal:1572,priceTitle:'南京 → 重庆',priceMeta:'11.01 · ¥786/人 × 2',priceDate:'2026-11-01'},
        {id:'flight-chengdu-wuxi',title:'A67762 成都 → 无锡',meta:'11.05 22:45—11.06 01:20',status:'已订票',done:true,priceCnyTotal:1320,priceTitle:'成都 → 无锡',priceMeta:'11.05 · ¥660/人 × 2',priceDate:'2026-11-05'},
        {id:'flight-cz3918',title:'CZ3918 无锡 → 广州',meta:'11.09 13:50—16:30',status:'已出票',done:true},
        {id:'flight-cz311',title:'CZ311 广州 → 多伦多',meta:'11.12 19:25—21:15',status:'已出票',done:true}
      ]},
      {name:'高铁',items:[
        {id:'rail-wuxi-shanghai',title:'G7251 无锡东 → 上海站',meta:'10.25 20:58—21:32',status:'已订票',done:true,priceCnyTotal:128,priceTitle:'无锡 → 上海',priceMeta:'10.25 · ¥64/人 × 2',priceDate:'2026-10-25'},
        {id:'rail-shanghai-wuxi',title:'G7068 上海站 → 无锡站',meta:'10.28 21:50—22:32',status:'已订票',done:true,priceCnyTotal:118,priceTitle:'上海 → 无锡',priceMeta:'10.28 · ¥59/人 × 2',priceDate:'2026-10-28'},
        {id:'rail-wuxi-nanjing',title:'G7004 无锡站 → 南京站',meta:'10.31 08:45—09:44',status:'已订票',done:true,priceCnyTotal:172,priceTitle:'无锡 → 南京',priceMeta:'10.31 · ¥86/人 × 2',priceDate:'2026-10-31'},
        {id:'rail-chongqing-chengdu',title:'G3980 重庆北 → 成都东',meta:'11.02 20:32—21:49',status:'已订票',done:true,priceCnyTotal:316,priceTitle:'重庆 → 成都',priceMeta:'11.02 · ¥158/人 × 2',priceDate:'2026-11-02'},
        {id:'rail-guangzhou-foshan',title:'广州 → 佛山',meta:'11.11 早上 · 时间待确认',status:'待预订'},
        {id:'rail-foshan-guangzhou',title:'佛山 → 广州',meta:'11.11 晚上 · 时间待确认',status:'待预订'}
      ]},
      {name:'门票',items:[
        {id:'ticket-disney-33vip',title:'上海迪士尼 33VIP票',meta:'10.28 09:00 入园',status:'已购票',done:true,priceCnyPerPerson:1900,priceTitle:'上海迪士尼 33VIP票',priceMeta:'10.28 · ¥1,900/人 × 2',priceDate:'2026-10-28'}
      ]}
    ];
