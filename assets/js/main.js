
    // Create the Bar chart and give it some data. This chart is
    // made to look sketchy by supplying the variant property and
    // setting it to 'sketch'
    new RGraph.Bar({
        id: 'cvs',
        data: [30,60,40,-25,-50,50],
        options: {
            colors: ['#592316'],
            yaxis: false,
            yaxisLabelsSpecific: ['Délicieux', 'Pas bon',],
            marginLeft: 100,
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
                {maxWidth: null,width:600,height: 280,options: {titleY:25,textSize: 12,marginInner: 15,marginBottom:100,titleSize: 20},parentCss:{'float':'right',textAlign:'none'}},
                {maxWidth: 800,width:400,height: 200,options: {titleY: 10,textSize: 8,marginInner: 5,marginBottom:65,titleSize: 15},parentCss:{'float':'none',textAlign:'center'}}
            ]
        }
    }).draw();
