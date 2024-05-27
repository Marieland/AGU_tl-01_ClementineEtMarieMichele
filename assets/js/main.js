
/*Graphique pour la température du four, .oven_temp*/ 

    defaultColors = [
        [0,50,'#f20'],
        [50,100,'#f30'],
        [100,150,'#f50'],
        [150,200,'#f60'],
        [200,250,'#f80'],
        [250,300,'#fa0'],
        [300,350,'#fc0'],
        [350,400,'#fd0'],
        [400,450,'#ff0'],
        [450,500,'#ff0'],
    ];
    
    // Create the Meter chart specifying the min/max/value
    meter = new RGraph.Meter({
        id: 'cvs',
        min: 0,
        max: 500,
        value: 425,
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
                {maxWidth:null,parentCss: {'float':'right'}},
                {maxWidth:700,parentCss: {'float':'none'}}
            ]
        }
    }).draw();
    
    
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
            meter.set('colorsRanges', [[0,500,'Gradient({colors:["red","yellow"],x1:50,y1:0,x2:350,y2:0})']]);
        } else {
            meter.set('colorsRanges', defaultColors);
        }
        
        meter.isGradient = !meter.isGradient;
        
        // Reset this flag so that the colors are parsed again;
        meter.colorsParsed = false;

        RGraph.redraw()
    }


/*Graphique pour les ingrédients, pie chart api svg*/
    
    data = [40,90,100,120,3,];

    new RGraph.SVG.Pie({
        id: 'chart-container',
        data: data,
        options: {
            labels: ['farine','beurre','chocolat noir','sucre','oeufs',],
            shadow: true,
            colorsStroke: 'rgba(216,216,216,1)',
            linewidth: 2,
            exploded: [,,25],
            colors: ['#D9D9D9','#592316','#8C4A32','#C5D930','#72A603'],
            tooltips: '%{key}',
            tooltipsFormattedKeyLabels: ['farine','beurre','chocolat noir','sucre','oeufs',],
            tooltipsFormattedUnitsPost: '%',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '14pt',
                opacity: 0.85
            }
        }
    }).draw();