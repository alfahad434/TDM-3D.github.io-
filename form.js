class Form{
    constructor(){
        this.input = createInput("");
      
        this.button = createButton('START');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    
      
     }
     hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
     }
    display() {
        this.title.html("TDM 2D");
        this.title.position(380, 50);
        this.input.position(width / 2 - 50, height / 2 - 50)
        this.button.position(width / 2 - 70, height / 2 - 30)
    
      
    }
}