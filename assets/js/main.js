

/*Graphique pour la température du four, .oven_temp*/ 

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
        value: 400,
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
                {maxWidth:500,parentCss: {'float':'none'}}
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
            tooltipsFormattedKeyLabels: ['farine','beurre','chocolat noir','sucre','oeufs',],
            tooltipsFormattedUnitsPost: '%',
            tooltipsCss: {
                backgroundColor: '#333',
                fontWeight: 'bold',
                fontSize: '16pt',
                opacity: 0.85
            }
        }
    }).draw();

    // Create the Bar chart and give it some data. This chart is
    // made to look sketchy by supplying the variant property and
    // setting it to 'sketch'
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
            labelsAboveSpecific: ['Confiture', 'Caramel', 'Nutella', 'Mayonnaise', 'Pâte à dents', 'Crème anglaise'],
            
            responsive: [
                {maxWidth: null,width:500,height: 280,options: {textSize: 14,marginInner: 17,marginBottom:100},parentCss:{textAlign:'none'}},
                {maxWidth: 800,width:400,height: 250,options: {textSize: 10,marginInner: 5,marginBottom:90, marginLeft:60},parentCss:{'float':'none',textAlign:'center'}}
            ]
        }
    }).draw();



     
    /*Graphique chocolat par pays*/
 
   
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
                {maxWidth: null,width:500,height: 300,parentCss:{textAlign:'none'}},
                {maxWidth: 800,width:400,height: 300,parentCss:{'float':'none', textAlign:'center'}}
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


    


        //Graphique fer à cheval

    horseshoe = new RGraph.SVG.Horseshoe({
        id: 'chart-container3',
        min: 0,
        max: 100,
        value: 63,
        options: {
            labelsCenterDecimals: 0,
            labelsCenterUnitsPost: '%'
        }
    }).grow();
    
    var d = 2500; setTimeout(f = function ()
    {
        horseshoe.value = horseshoe.value + RGraph.SVG.random({min: -7, max: 5});
        horseshoe.grow();
        
        setTimeout(f, d);
    }, d);



    //Graphique line

     // Create a new RGraph Sheets instance that allows you to connect
    // to your Google Sheet spreadsheet and retrieve data from it. The
    // first argument is the OAuth ID (see the Google Sheets documentation
    // on the RGraph website). The second argument is the key (ie the
    // unique identifier) of the spreadsheet. This can be found in the URL
    // of your spreadsheet. The third argument is the worksheet if you
    // need to give one - this argument is optional
    new RGraph.Sheets(
        'AIzaSyBPofvjcDhOdet_U2Tr4-rSLItAgaCsMCM',
        '1ncvARBgXaDjzuca9i7Jyep6JTv9kms-bbIzyAxbaT0E',
        'Line chart',
    function (sheet)
    {
        // Now, in the Sheets object callback, the Line chart can be created
        // as normal
        new RGraph.Line({
            id: 'cvs-line',
            
            // Use the sheets object to retrieve some data from the spreadsheet that acts
            // as the data
            data: sheet.get('B2:M2'),

            options: {
                linewidth: 5,
                tickmarksStyle: null,
                
                // Use the sheets object again to retrieve some data from the
                // spreadsheet that acts as the X-axis labels on the chart
                xaxisLabels: sheet.get('B1:M1'),

                xaxisLabelsOffsety: 5,
                colors: ['#72A603'],
                shadowOffsetx: 2,
                shadowOffsety: 2,
                colorsStroke: 'rgba(0,0,0,0)',
                xaxis: false,
                yaxis: false,
                backgroundGridVlines: false,
                backgroundGridBorder: false,
                marginLeft: 35,
                marginInner: 10,
                spline: true,
                responsive: [
                    {maxWidth: null,width:500,height:300,options:{textSize: 12}},
                    {maxWidth: 900,width:400,height:200,options:{textSize: 10}}
                ]
            }
        
        // Animate the chart using the trace() effect and add some responsive capability
        // to accommodate smaller screens
        }).trace();
    });