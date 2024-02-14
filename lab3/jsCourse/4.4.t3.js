let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder
    .up()
    .up()
    .down()
    .showStep() // here 1
    .down()
    .showStep(); // shows 1 then 0