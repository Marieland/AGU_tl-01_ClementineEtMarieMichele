/*Graphique pour la température du four, .oven_temp*/ 
const demiCercleGraph = () => {

    defaultColors = [
        [100,150,'#72A603'],
        [150,200,'#C5D930'],
        [200,250,'#ff0'],
        [250,300,'#fc0'],
        [300,350,'#f80'],
        [350,400,'#8C4A32'],
        [400,450,'#592316'],
    ];
    
    // Create the Meter chart specifying the min/max/value
    meter = new RGraph.Meter({
        id: 'cvs-1',
        min: 100,
        max: 450,
        value: 350,
        options: {

            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            marginBottom: 15,

            // Hide the centerpin by setting its colors to transparent
            centerpinStroke: 'rgba(0,0,0,0)',
            centerpinFill: 'rgba(0,0,0,0)',

            // These are the colors for the segments on the main chart
            colorsRanges: defaultColors,

            // Turn off labels
            labelsCount: 4,
            
            // By setting the start and end angles of the Meter you can change
            // the extent of the Meter chart from the default semi-circle
            anglesStart: RGraph.PI + 0.5,
            anglesEnd: RGraph.TWOPI - 0.5,

            linewidthSegments: 0,
            textSize: 16,
            colorsStroke: 'white',
            segmentsRadiusStart: 150,
            needleRadius: 210,
            border: 0,
            tickmarksSmallCount: 0,
            tickmarksLargeCount: 0,
            
            // This option means that the chart will be dynamically adjustable.
            // You could then use the adjust* events to do something with the
            // new value of the chart.
            adjustable: true,
            responsive: [
                {maxWidth:500,parentCss: {'float':'right'}},
                {maxWidth:200,parentCss: {'float':'none'}}
            ]
        }
    }).draw();
}
    
    
    //
    // This function facilitates changing the colors to a
    // smooth gradient and vice-versa
    //
    function toggleGradient ()
    {
        // The meter.isGradient variable doesn't have any special RGraph meaning - it's
        // just a regular JavaScript variable that we're setting here that allows us to
        // track what style of color the chart is using.
        if (!meter.isGradient) {
            meter.set('colorsRanges', [[100,450,'Gradient({colors:["#72A603","#592316"],x1:50,y1:0,x2:350,y2:0})']]);
        } else {
            meter.set('colorsRanges', defaultColors);
        }
        
        meter.isGradient = !meter.isGradient;
        
        // Reset this flag so that the colors are parsed again;
        meter.colorsParsed = false;

        RGraph.redraw()
    }


/*Graphique pour les ingrédients, pie chart api svg*/
    const pieChart = () => {

        data = [40,90,100,120,3];

    new RGraph.SVG.Pie({
        id: 'chart-container1',
        data: data,
        options: {
            labels: ['farine','beurre','chocolat','sucre','oeufs',],
            shadow: true,
            colorsStroke: 'rgba(216,216,216,1)',
            linewidth: 2,
            exploded: [,,25],
            colors: ['#D9D9D9','#592316','#8C4A32','#C5D930','#72A603'],
            tooltips: '%{key}',
            tooltipsFormattedKeyLabels: ['farine','beurre','chocolat noir','sucre','oeufs'],
            tooltipsFormattedUnitsPost: '%',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '16pt',
                opacity: 0.85
            }
        }
    }).draw();
}

    // Create the Bar chart and give it some data. This chart is
    // made to look sketchy by supplying the variant property and
    // setting it to 'sketch'
const sketchyChart = () => {

    new RGraph.Bar({
        id: 'cvs-2',
        data: [30,60,40,-25,-50,50],
        options: {
            colors: ['#592316'],
            yaxis: false,
            yaxisLabelsSpecific: ['Délicieux', 'Pas bon',],
            marginLeft: 80,
            marginBottom: 180,
            marginTop: 100,
            variant: 'sketch',
            
            /// You can uncomment this if you don't want the inner vertical
            // lines
            variantSketchVerticals: false,

            // The font that's used for the text on the chart is set to
            // Comic sans MS. This style of font fits well with the
            // sketchy drawing style.
            textFont: 'Quicksand',

            linewidth: 3,
            backgroundGrid: false,
            
            // The labelsAbove labels serve as the labels for the chart
            labelsAbove: true,
            labelsAboveOffsety: 10,
            labelsAboveSpecific: ['Confiture', 'Caramel', 'Nutella', 'Ketchup', 'Pâte à dents', 'Crème anglaise'],
            
            responsive: [
                {maxWidth: null,width:500,height: 280,options: {textSize: 14,marginInner: 17,marginBottom:100},parentCss:{textAlign:'none'}},
                {maxWidth: 300,width:300,height: 200,options: {textSize: 10,marginInner: 5,marginBottom:90, marginLeft:60},parentCss:{'float':'none',textAlign:'center'}}
            ]
        }
    }).draw();
}





    /*Graphique chocolat par pays*/
    const horizontalBarGraph = () => {

        // The labels for the chart are not added by giving them to the
    // chart but manually adding text to the chart.
    labels = ['Allemagne','Belgique','Suisse','Royaume-Uni','France','États-unis','Italie','Japon','Esp.', 'Rus.'];

    // Create the Horizontal Bar chart and configure it. With there
    // being no labels on the left-hand-side the margin autofit
    // will make the left margin zero
    new RGraph.HBar({
        id: 'cvs',
        data: [11,10.9,10.8,10,7.3,6,4,2.3,2,2],
        options: {
            textFont: 'Quicksand',
            textSize: 12,
            backgroundGrid: false,
            xaxis: false,
            yaxis: false,
            xaxisScale: false,
            labelsAbove: true,
            labelsAboveUnitsPost: 'kg',
            colors: ['#8C4A32'],
            shadow: true,
            shadowColor: '#ddd',
            shadowOffsetx: 2,
            shadowOffsety: 2,
            tooltips: '<i style="position: relative; top: -5px">Usage worldwide:</i> <span style="font-size: 26pt; ">%{value}%',
            tooltipsCss: {
                fontSize: '14pt'
            },
            highlightFill: 'Gradient(rgba(255,255,255,0):white)',
            highlightStroke: 'Gradient(rgba(255,255,255,0):white)',
            responsive: [
                {maxWidth: 500,width:500,height: 300,parentCss:{textAlign:'none'}},
                {maxWidth: 300,width:300,height: 200,parentCss:{'float':'none', textAlign:'center'}}
            ]
        }

    // Use the draw event to add the labels on the left-hand-side
    }).on('draw', function (obj)
    {
        var coords = obj.coords;

        // Loop through the coordinates of the bars
        for (var i=0; i<coords.length; ++i) {

            // For each of the coordinates add a text label
            // on the left-hand-side of the bar
            RGraph.text({
                object: obj,
                text:   labels[i],
                x:      coords[i][0] + 10,
                y:      coords[i][1] + (coords[i][3] / 2),
                valign: 'center',
                bold:   true,
                color:  'white',
                size: obj.get('textSize')
            });
        }
    }).grow();
}

    

    //Graphique fer à cheval
const horseShoeGraph = () => {

    window.onload = function() {
        // Valeurs fixes à afficher séquentiellement
        var valeurs = [0, 25, 50, 75, 100];
        var index = 0;

        // Création du graphique horseshoe
        var horseshoe = new RGraph.SVG.Horseshoe({
            id: 'chart-container3',
            min: 0,
            max: 100,
            value: valeurs[index],
            options: {
                labelsCenterDecimals: 0,
                labelsCenterUnitsPost: '%'
            }
        }).grow();

        // Mise à jour des valeurs séquentielles
        var d = 2500; // Intervalle de mise à jour (2,5 secondes)
        setTimeout(function update() {
            index = (index + 1) % valeurs.length;
            horseshoe.value = valeurs[index];
            horseshoe.grow();
            
            setTimeout(update, d);
        }, d);
    }

}


    //Graphique line
    const lineGraph = () => {

    // Create the first Line chart. Note the animationTraceCenter
    // property is set to true which changes the behaviour of the
    // trace() effect. The backgroundGrid and axes are enabled on this
    // chart (horizontal lines only). The charts are all filled and
    // splines. The effect used is (obviously) the trace effect and
    // the callback function creates the second Line chart.
    l1 = new RGraph.Line({
        id: 'cvs2',
        data: [40,35,30,20,100],
        options: {
            animationTraceCenter: true,
            tickmarksStyle: null,
            shadow: false,
            linewidth: 0,
            backgroundGridVlines: false,
            backgroundGridBorder: false,
            xaxis: false,
            yaxis: false,
            spline: true,
            filled: true,
            colors: ['#592316'],
            yaxisScaleMax: 100,
            xaxisLabels:['Noir 85%','Noir 55%','Lait 35%','Blanc 32%','Cacao'],
            responsive: [
                {maxWidth:500,width: 500,height:350,options:{textSize: 14},parentCss:{'float':'right', textAlign: 'none'}},
                {maxWidth:300, width: 300,height:200,options:{textSize: 10},parentCss:{'float':'none', textAlign: 'center'}}
            ]
        }
    }).trace(null, function ()
    {
        // Create the second Line chart. Again this uses the
        // animationTraceCenter property that modifies the
        // trace() effect. It has no axes or backgroundGrid
        // - these are defined on the first chart. Note that
        // unlike the first chart this has two datasets
        // defined - the dataset from the first chart (which
        // is transparent) and this charts dataaset.
        new RGraph.Line({
            id: 'cvs2',
            data: [
                [40,35,30,20,100],
                [20,25,30,35,0]
            ],
            options: {
                animationTraceCenter: true,
                tickmarksStyle: null,
                shadow: false,
                linewidth: 0,
                backgroundGrid: false,
                xaxis: false,
                yaxis: false,
                colors: ['transparent', '#C5D930'],
                spline: true,
                filled: true,
                yaxisScaleMax: 100,
                yaxisScale: false
            }
        }).trace(null, function ()
        {
            // Again the trace() effect callback function is used
            // to trigger the drawing of the next Line chart.
            // Three datasets now - ie all three. The first two are
            // colored transparent so that you can't see them. Like
            // the second chart there's no backgroundGrid or axes and
            // with this being the final chart - there's no callback
            // function.
            new RGraph.Line({
                id: 'cvs2',
                data: [
                    [40,35,30,20,100],
                    [20,25,30,35,0],
                    [32,32,35,40,0]
                ],
                options: {
                    animationTraceCenter: true,
                    tickmarksStyle: null,
                    shadow: false,
                    linewidth: 0,
                    backgroundGrid: false,
                    xaxis: false,
                    yaxis: false,
                    colors: ['transparent', 'transparent', '#8C4A32'],
                    spline: true,
                    filled: true,
                    yaxisScaleMax: 100,
                    yaxisScale: false
                }
            }).trace();
        });
    });

    }



demiCercleGraph();

pieChart();

sketchyChart();

horizontalBarGraph();

horseShoeGraph();
