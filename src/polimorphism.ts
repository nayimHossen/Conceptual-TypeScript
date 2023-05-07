class Father {
  showInfo(): void {
    console.log("father");
  }
}

class Son1 extends Father {
  showInfo(): void {
    console.log("son 1");
  }
}

class Son2 extends Father {
  showInfo(): void {
    console.log("son 2");
  }
}

function show(param: Father) {
  param.showInfo();
}

const X = new Father();
const Y = new Son1();
const Z = new Son2();

show(Z);
