var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = {
    title : {
        text: '代码构成',
        subtext: '👌',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['TypeScript','CSS','Javascript','HTML','Shell']
    },
    series : [
        {
            name: '代码构成',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:76.9, name:'TypeScript'},
                {value:19.07, name:'CSS'},
                {value:3.2, name:'Javascript'},
                {value:0.63, name:'HTML'},
                {value:0.21, name:'Shell'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option, true);