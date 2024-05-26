
    // Create the Bar chart and give it some data. This chart is
    // made to look sketchy by supplying the variant property and
    // setting it to 'sketch'
    new RGraph.Bar({
        id: 'cvs',
        data: [50,40,10,-25,-50,50],
        options: {
            colors: ['black'],
            yaxis: false,
            yaxisLabelsSpecific: ['Very cool', 'Uncool'],
            marginLeft: 100,
            marginBottom: 115,
            marginTop: 75,
            variant: 'sketch',
            
            /// You can uncomment this if you don't want the inner vertical
            // lines
            //variantSketchVerticals: false,

            // The font that's used for the text on the chart is set to
            // Comic sans MS. This style of font fits well with the
            // sketchy drawing style.
            textFont: 'Comic sans MS',

            linewidth: 1,
            backgroundGrid: false,
            title: 'Things to release at a wedding',
            
            // The labelsAbove labels serve as the labels for the chart
            labelsAbove: true,
            labelsAboveOffsety: 10,
            labelsAboveSpecific: ['Butterflies', 'Doves', 'Pidgeons', 'Wasps', 'Prisoners', 'The Kraken'],
            
            responsive: [
                {maxWidth: null,width:600,height: 250,options: {titleY:25,textSize: 12,marginInner: 15,marginBottom:100,titleSize: 20},parentCss:{'float':'right',textAlign:'none'}},
                {maxWidth: 800,width:400,height: 200,options: {titleY: 10,textSize: 8,marginInner: 5,marginBottom:65,titleSize: 15},parentCss:{'float':'none',textAlign:'center'}}
            ]
        }
    }).draw();
