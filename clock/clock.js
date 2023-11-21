setInterval(() => {

    const d = new Date();
    const newh = d.getHours();//TO GET THE HOURS//
    const newm = d.getMinutes();//TO GET THE MINUTES//
    const news = d.getSeconds();//TO GET THE SECONDS//
    const hrotation = 30 * newh + newm / 2;
    //THERE ARE 12 HOURS AND WE KNOW  THAT EVERY CLOCK HAS 360deg SO EACH HOUR CORROSPONDS 30deg.
    //AND WE ALSO KNOW THAT THERE ARE 60minutes IN AN HOUR SO WE ALSO ADD minute/2;
    //60minute.......30deg.
    //1minute........30/60= 1/2. SO=newm/2
    //SO ATLEAST (30newh+newm/2);

    const mrotation = 6 * newm;
    //60minute.......360deg;
    //1minute.......360/60;=6deg; =6newm;


    const srotation = 6 * news;
    //60seconds.......360deg;
    //1seconds.......360/60;=6deg; =6news;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);
