{
  class Shape {
    public width: number = 0;
    public height: number = 0;
  }

  class Rectangle extends Shape {
    constructor() {
      super();  
    }

    public calcSize(): number {
      return this.width * this.height;
    }
  }

  const r = new Rectangle();
  r.width = 5;
  r.height = 2;

  console.log(r.calcSize());
}
