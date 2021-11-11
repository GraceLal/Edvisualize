/*@author: Grace Lal 
	Group No: A-15
	Roll no: 06
	Registration Number:18010460
*/
        
        let myChart=document.getElementById('myChart').getContext('2d');
        //console.log("from handler");
        //console.log("Height : ", height_t, "Width : ", width_t);

        /*let onChangeCanvasSizeHandler = () => {
            console.log("from handler");
            console.log("Height : ", height_t, "Width : ", width_t);
            myChart.height = height_t;
            myChart.width = width_t;
            chart();
        };*/

        const chart = () => {
            let masspopChart = new Chart(myChart,{
            type:'radar',//bar chart,pie,line,donut,radar,polarArea,horizontalBar
            data:{
                labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running'
                  ],
                  datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 90, 81, 56, 55, 40],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                  }, {
                    label: 'My Second Dataset',
                    data: [28, 48, 40, 19, 96, 27, 100],
                    fill: true,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                  }]
        },
        options:{
            title:{
              display:true,
                text:'Top 10 populated cities in India',
                fontSize:25
            },
            legend:{
                display:true,
                position:'right',
                labels:{
                    fontColor:'black',
                }
            },
            responsive:false,
        }
    })
}
        // let masspopChart = new Chart(myChart,{
        //     type:'bar',//bar chart,pie,line,donut,radar,polarArea,horizontalBar
        //     data:{
        //         labels:['Mumbai','Delhi','Bengaluru','Kolkata','Chennai','Ahmedabad','Hyderabad','Pune','Surat','Kanpur'],
        //         datasets:[{
        //             label:"Population",
        //             data:[
        //             12691836,
        //             10927986,
        //             5104047,
        //             4631392,
        //             4328063,
        //             3719710,
        //             3597816,
        //             2935744,
        //             2894504,
        //             2823249
        //             ],
        //             backgroundColor: ['#ffb3b3',' #ffb3cc','#ffb3ff',' #b3b3ff','#ffffb3','#b3ffb3','#ffe0b3','#e0e0d1','#ecc6c6','#b3ffff'],
        //             borderwidth:4,
        //             bordercolor:'black',
        //             hoverBorderWidth:3,
        //             hoverBorderColor:'black'

        //         }]
        //     },
        //     options:{
        //         title:{
        //           display:true,
        //             text:'Top 10 populated cities in India',
        //             fontSize:25
        //         },
        //         legend:{
        //             display:true,
        //             position:'right',
        //             labels:{
        //                 fontColor:'black',
        //             }
        //         }
        //     }
        // });
