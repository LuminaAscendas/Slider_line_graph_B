var direction_text='<span id="dir_span">Directions:</span> Drag the slider to reveal the global ecological footprint over time.'
var trueValues = [Math.round(0*scale), Math.round(1*scale), Math.round(2*scale), Math.round(3*scale), Math.round(4*scale), Math.round(5*scale)];
var value=     [0, 16, 37 ,58, 79, 100];
var values =     [Math.round(0/scale), Math.round(16/scale), Math.round(37/scale), Math.round(58/scale), Math.round(79/scale), Math.round(100/scale)];
var data = [{
    "titleA": "Figure 1.4c Slider Compare",
    "description": [
        'Population growth and increased affluence increases the amount of resource consumed by humans.',
        'With continued resource consumption, humans approached Earth’s estimated carrying capacity by 1980.',
        'While resource consumption slowed in the 1980s, human use of resources exceeded Earth’s estimated carrying capacity.',
        'Human resource consumption continued to exceed Earth’s estimated carrying capacity through the 1990s. We cannot exceed Earth’s carrying capacity indefinitely.',
        'In the first decade of the 2000s, human consumption rate increased, with a brief reduction associated with the 2008 economic downturn.'
        ],
	"year":['1960','1970','1980','1990','2000','2010']
    }];