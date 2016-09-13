function dist(pixel,x,y){
    var dx = pixel.getX() - x;
    var dy = pixel.getY() - y;
    return Math.sqrt(dx * dx + dy * dy);
}
var output = new SimpleImage(320,320);
for (var pixel of output.values()){
    if (dist(pixel,100,100) < 50){
        pixel.setRed(255 - 4*dist(pixel,100,100));
    }
    else if (dist(pixel,200,200) < 80){
        pixel.setGreen(255 - 3*dist(pixel,200,200));
    }
    else if (Math.random() > 0.995){
        pixel.setRed(255);
        pixel.setGreen(255);
    }
    pixel.setBlue(Math.max(1.5 * pixel.getY() - pixel.getX(), pixel.getX() - pixel.getY()));
}
print (output);