const btn = document.querySelector('.btn');
const bgColorTxt = document.querySelector('.bg__color');
const color = ['Silver','Gray','White','Maroon','Red','Purple','Fuchsia','Green','Lime','Olive','Yellow','Navy','Blue','Teal','Aqua','Black','Aliceblue','Antiquewhite','Aqua','Aquamarine','Azure','Beige','Bisque','Black','Blanchedalmond','Blue','Blueviolet','Brown','Burlywood','Cadetblue','Chartreuse','Chocolate','Coral','Cornflowerblue','Cornsilk','Crimson','Cyan','Darkblue','Darkcyan','Darkgoldenrod','Darkgray','Darkgreen','Darkgrey','Darkkhaki','Darkmagenta','Darkolivegreen','Darkorange','Darkorchid','Darkred','Darksalmon','Darkseagreen','Darkslateblue','Darkslategray','Darkslategrey','Darkturquoise','Darkviolet','Deeppink','Deepskyblue','Dimgray','Dimgrey','Dodgerblue','Firebrick','Floralwhite','Forestgreen','Fuchsia','Gainsboro','Ghostwhite','Gold','Goldenrod','Gray','Green','Greenyellow','Grey','Honeydew','Hotpink','Indianred','Indigo','Ivory','Khaki','Lavender','Lavenderblush','Lawngreen','Lemonchiffon','Lightblue','Lightcoral','Lightcyan','Lightgoldenrodyellow','Lightgray','Lightgreen','Lightgrey','Lightpink','Lightsalmon','Lightseagreen','Lightskyblue','Lightslategray','Lightslategrey','Lightsteelblue','Lightyellow','Lime','Limegreen','Linen','Magenta','Maroon','Mediumaquamarine','Mediumblue','Mediumorchid','Mediumpurple','Mediumseagreen','Mediumslateblue','Mediumspringgreen','Mediumturquoise','Mediumvioletred','Midnightblue','Mintcream','Mistyrose','Moccasin','Navajowhite','Navy','Oldlace','Olive','Olivedrab','Orange','Orangered','Orchid','Palegoldenrod','Palegreen','Paleturquoise','Palevioletred','Papayawhip','Peachpuff','Peru','Pink','Plum','Powderblue','Purple','Red','Rosybrown','Royalblue','Saddlebrown','Salmon','Sandybrown','Seagreen','Seashell','Sienna','Silver','Skyblue','Slateblue','Slategray','Slategrey','Snow','Springgreen','Steelblue','Tan','Teal','Thistle','Tomato','Turquoise','Violet','Wheat','White','Whitesmoke','Yellow','Yellowgreen'];

btn.addEventListener('click',()=>{
    const indexOfColor = getRandomColor();
    document.body.style.backgroundColor = color[indexOfColor];
    bgColorTxt.innerText = color[indexOfColor];
});

const getRandomColor = ()=>{
    return Math.floor(Math.random() * color.length);
}