

// Barchart 1
(function () {
  // 1.initiatiom
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.option and data
  var option = {
    color: ['#2f89cf'],
    // interaction 
    tooltip: {
      trigger: 'axis',
      axisPointer: { // indicator
        type: 'shadow' // 'line' | 'shadow'
      }
    },
    // location and size
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x
    xAxis: [{
      type: 'category',
      data: ["Yorkshire", "West Midlands", "South West", "South East", "North West", "Northeast","London ","East of England"],
      axisTick: {
        alignWithLabel: true
      },
       
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 3
      },
      
      axisLine: {
        show: false
      }
    }],
    // y
    yAxis: [{
      type: 'value',
      
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 
    series: [{
      name: 'Total number of cases',
      type: 'bar',
      barWidth: '35%',
      // ajax dynamic data
      data: [386051, 425821, 218737, 535187, 601370, 191349, 713212, 385017],
      itemStyle: {
        
        barBorderRadius: 5
      }
    }]
  };
        
        myChart.setOption(option); 

  // autofit
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// bar chart 2
(function () {

  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // color
var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6", "pink", "red"];
// 2.
var option = {
  grid: {
    top: "10%",
    left: '35%',
    bottom: '10%',
    right: "20%"
    // containLabel: true
  },
  xAxis: {
    
    show: false
  },
  yAxis: [{
    type: 'category',
    inverse: true,
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      color: "#fff"
    },
    data: ["Yorkshire", "West Midlands", "South West", "South East", "North West","North East", "London ","East of England"],
  }, {
    inverse: true,
    show: true,
    
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
  
    axisLabel: {
      color: "#fff"
    },
    data: ["Meidum", "Meidum", "Good", "Good", "High", "High","High", "Good"]
  }],
  series: [{
      name: 'bar',
      type: 'bar',
      barCategoryGap: 50,
      barWidth: 10,
      yAxisIndex: 0,
      itemStyle: {
        barBorderRadius: 20,
        // color
        color: function (params) {
          // params 
          // dataIndex 
          // console.log(params);
          return myColor[params.dataIndex];
        }
      },
      data: [7015, 7176, 3889, 5830, 8192,7166, 7958, 6174],
      // 
      label: {
        show: true,
        position: "inside",
        // {c} resole data
        formatter: "{c}/100,000"
      
      }
    },
    {
      // 第二组柱子（框状 border）
      name: 'bar2',
      type: 'bar',
      // 柱子之间的距离
      barCategoryGap: 50,
      // 柱子的宽度
      barWidth: 14,
      // 层级 相当于z-index
      yAxisIndex: 1,
      // 柱子修改样式
      itemStyle: {
        color: "black",
        borderColor: "#00c1de",
        borderWidth: 2,
        barBorderRadius: 15,
      },
      data: [100, 100, 100, 100, 100, 100, 100, 100]
    }
  ]
};
// 3.把配置项给实例对象
myChart.setOption(option);
  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// linechart1
(function () {
  // 
  var yearData = [{
      year: "2020", //
      data: [
        [0, 12, 4567, 6201, 1570, 829, 761, 1295, 6914, 23254, 13430, 53285, 18607, 5455,4479]
        
      ]
    },
    
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, 
      borderColor: '#012f4a' 
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, 
      data: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 
      'Jan', 'Feb', 'Mar', 'Apr'],
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x
      },
      axisLine: {
        show: false // 
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" 
      },
      axisLine: {
        show: false 
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, 
        name: 'Newcases reported',
        data: yearData[0].data[0]
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })

    myChart.setOption(option);
  
})();

// line2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },

      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
    
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: 'Death',
        type: 'line',
        smooth: true, 
    
        lineStyle: {
          color: "red",
          width: 2
        },
    
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" 
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" 
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        itemStyle: {
          color: "red",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [0,1, 769, 568, 135, 27, 11, 3, 67, 358, 399, 746, 891, 224, 28]
      },
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// bar1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      left: 10,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: 'Deaths registered by place of occurrence',
      type: 'pie',
      center: ["50%", "42%"],
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [{
        value: 96005,
        name: 'Hosipital'
      },
      {
        value: 32021,
        name: 'Care Homes'
      },
      {
        value: 7817,
        name: 'Homes'
      },
      {
        value: 2064,
        name: 'Hospices'
      },
      {
        value: 499,
        name: 'Other Communal Establishment'
      },
      {
        value: 505,
        name: 'Elsewhere'
      }
    
        
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
    color:['Green','Red'], 
    legend: {
        bottom: -7,
        data: ['Normal condition','COVID condition'],
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "10"
        }
       
    },
    radar: {
        // shape: 'circle',
        indicator: [
            { name: 'Physical functioning', max: 100, },
            { name: 'Role-physcial', max: 100},
            { name: 'Role-emotional', max: 100},
            { name: 'Energy', max: 100},
            { name: 'Emotional well-being', max: 100},
            { name: 'Social functioning', max: 100},
            { name: 'Pain', max: 100},
            { name: 'General health', max: 100},
           
        ],
        radius:40
    },
    series: [{
        name: 'Normal condition VS Covid-19',
        type: 'radar',
        data: [
            {
                value: [95, 100, 100, 70, 75, 55, 85, 75  ],
                name: 'Normal condition'
            },
           
          ]
    },
    {
        name: 'Normal condition VS Covid-19',
        type: 'radar',
        data: [
            {
                value: [65, 22, 35, 45, 75, 45, 70, 65 ],
                name: 'COVID condition'
            },
           
          ]
    }
  ]
};
 
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();



// 
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));

  var dataG = [// lat, long,
    [-4,52,211494,348,6708,11, "Wales"],
    [-4,51,221171,824,6238.3,21.2, "South West"],
    [-1,51,540229,618,6238.3,21.2, "South East"],
    [0.2,52,389024,1320,6238.3,21.2, "East of England"]
];

var dataM = [
    
  [0,51.5,719701,2025,8030,22.6,"London"],
  [-1.6,53.5,394084,2500,7161.3,45.4, "Yorkshire"],
  [-2.7,52,429924,1298,7245,21.9, "Midlands Wast"]
  
  

];

var dataH = [
    
  [0,51.5,719701,2025,8030,22.6,"London"],
  [-3,54,607218,1320,8192,21.2, "Northwest"],
  [-1,52.8,329117,1298,7245,21.9, "Midlands East"]
];

var schema = [
    {name: 'lat', index: 0, text: 'lat'},
    {name: 'long', index: 1, text: 'long'},
    {name: 'Total cases', index: 2, text: 'Total cases'},
    {name: 'Cases in 7 days', index: 3, text: 'Cases in 7 days'},
    {name: 'Rate per 100,000 population', index: 4, text: 'Rate per 100,000 population'},
    {name: 'NRate per 100,000 population', index: 5, text: 'Rate per 100,000 population in 7 days'},
    {name: 'lat', index: 6, text: 'Nanme'},
];


var itemStyle = {
    opacity: 0.8,
    shadowBlur: 10,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowColor: 'rgba(0,0,0,0.3)'
};

option = {
    color: [
        'Green', 'Green', 'Green'
    ],
    legend: {
        top: 10,
        data: ['Good', 'Medium', 'High'],
        icon: ["triangle","circle","circle"],
        textStyle: {
            fontSize: 16,
            color:"white"
        }
    },
    grid: {
        left: '10%',
        right: 150,
        top: '18%',
        bottom: '10%'
    },
    tooltip: {
         backgroundColor: ['rgba(255,255,255,0.7)'],
        formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + value[6] +" "+  obj.seriesName
              
                + '</div>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
               ;
        }
    },
    xAxis: {
        show: false,
        type: 'value',
        name: '经度',
        nameGap: 16,
        nameTextStyle: {
            fontSize: 16
        },
		min:-8,
        max: 2.5,
        splitLine: {
            show: false
        },
    },
    yAxis: {
        show: false,
        type: 'value',
        name: '纬度',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
            fontSize: 16
        },
        min:49.95,
        max: 58,
        splitLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    visualMap: [
        {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 1000000,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['Radius：Total cases'],
            textStyle: {
              fontSize: 16,
              color:"white"
          },
            textGap: 30,
            inRange: {
                symbolSize: [10, 70]
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['Green']
                },
                outOfRange: {
                    color: ['#999']
                }
            }
        },

        {
            left: 'right',
            bottom: '5%',
            dimension: 4,
            min: 5000,
            max: 9000,
            itemHeight: 120,
            precision: 'auto',
            text: ['Per 100,000 population'],
            textStyle: {
              fontSize: 16,
              color:"white"
          },
            textGap: 30,
            inRange: {
                colorLightness: [1, 0]
            },
            outOfRange: {
                color: ['rgba(255,255,255,0.4)']
            },
            controller: {
                inRange: {
                    color: ['Green']
                },
                outOfRange: {
                    color: ['White']
                }
            }
        }
    ],
    series: [
        {
            name: 'Good',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataG
        },
        {
            name: 'Medium',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataM
        },
        {
            name: 'High',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataH
        }
    ]
};

  
  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();