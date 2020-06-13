const options = {
      startVal: 1619,
      duration: 4,
    };
    
    let demo = new CountUp('.animated_numbers', 2020, options);
    
    if (!demo.error) {
      demo.start();
    } else {
      console.error(demo.error);
}