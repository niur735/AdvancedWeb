/*change background scene function.*/

/*create function(change background color)*/

AFRAME.registerComponent('set-sky', {
    schema: {default:''},
    init() {
/*target to the a-sky*/
      const sky = document.querySelector('a-sky');
/*define the click function*/
      this.el.addEventListener('click', () => {
/*set attribute to the target element(make the html attribute of button apply to the a-sky)*/
        sky.setAttribute('color', this.data);
      });
    }
  });

/*create function(change weather)*/
AFRAME.registerComponent('set-rain', {
    schema: {default:''},
    init() {
      const rain = document.querySelector('#rain');
      this.el.addEventListener('click', () => {
        rain.setAttribute('particle-system', this.data);
      });
    }
  });

/*hover function of control button*/

/*hover of first button*/
AFRAME.registerComponent('change-color1', {
    schema: {default:''},
    init() {
      const weatherbutton1 = document.querySelector('#weatherbutton1');
      this.el.addEventListener('mouseenter', () => {
/*set hover color*/
        weatherbutton1.setAttribute('color', this.data);
      });
        
      this.el.addEventListener('mouseleave', () => {
/*return to default color*/
        weatherbutton1.setAttribute('color','white');
      });
    }
  });

/*hover of second button*/
AFRAME.registerComponent('change-color2', {
    schema: {default:''},
    init() {
      const weatherbutton1 = document.querySelector('#weatherbutto2');
      this.el.addEventListener('mouseenter', () => {
/*set hover color*/
        weatherbutton2.setAttribute('color', this.data);
      });
        
      this.el.addEventListener('mouseleave', () => {
/*return to default color*/
        weatherbutton2.setAttribute('color','white');
      });
    }
  });

/*hover of third button*/
AFRAME.registerComponent('change-color3', {
    schema: {default:''},
    init() {
      const weatherbutton1 = document.querySelector('#weatherbutton3');
      this.el.addEventListener('mouseenter', () => {
/*set hover color*/
        weatherbutton3.setAttribute('color', this.data);
      });
        
      this.el.addEventListener('mouseleave', () => {
/*return to default color*/
        weatherbutton3.setAttribute('color','white');
      });
    }
  });

/*weather function end;*/



/*second function: change landmark;*/

/*I try to create a button that each time user click on it, the land mark change. There will be three different landmarks in total. When it shows the third option, next click function will make it show the first landmark. I created an array with defince three different landmarks on the component. */

/*
    AFRAME.registerComponent('change-land', {
    schema: {default:''},
    init() {
    
//set gardenchange as container entity

    var container = document.querySelector('#gardenchange');
        
//define three different garden
    var snow = document.createElement('a-entity');
    snow.classList.add("snow");
    snow.setAttribute('obj-model','obj: #snowobj; mtl: #snowmtl');
    snow.setAttribute('scale','2.9 2.8 2.7;');
    snow.setAttribute('rotation','1.3 -182.7 -6.1;');
    snow.setAttribute('position','-0.25 1.4 -0.49;');
        
    var beach = document.createElement('a-entity');
    beach.classList.add("beach");
    beach.setAttribute('obj-model','obj: #beachobj; mtl: #beachmtl');
    beach.setAttribute('scale','0.025 0.03 0.03;');
    beach.setAttribute('rotation','0 -90 0;');
    beach.setAttribute('position','0.073 1.01 -0.57;');
        
    var lawn = document.createElement('a-entity');
    lawn.classList.add("lawn");
        
//  create array      
    var landlist = [snow,beach,lawn];
    var i = 0;
    this.el.addEventListener('click', () => {
//  change to next scene
   if(i<3)
    {
    i++;
// append to the container
   container.appendChild(landlist[i]);
    };
    else if (i = 2){i == 0};
    });

}
});*/