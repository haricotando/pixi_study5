import { SliderUI } from './SliderUI.js';
import { ExPixiContainer } from './class/ExPixiContainer.js';
import { dataProvider } from './dataProvider.js';
import GraphicsHelper from './helper/GraphicsHelper.js';
import Utils from './helper/Utils.js';


export class ApplicationRoot extends PIXI.Container {

    /* ============================================================
        constructor
    ============================================================ */
    constructor(app) {
        super();

        this.boxRect = {width:400, height:300}
        
        this.container = this.addChild(new ExPixiContainer());
        const grid = this.container.addChild(Utils.drawGrid(98));
        grid.alpha = 0.5;

        this.init();
        this.flip();
        this.slide1 = this.addChild(new SliderUI(app, 640, -50, 50));
        this.slide1.y = 600;

        this.slide2 = this.addChild(new SliderUI(app, 640, -50, 50));
        this.slide2.y = 800;

        this.slide3 = this.addChild(new SliderUI(app, 640, 0, 360));
        this.slide3.y = 1000;

        gsap.ticker.add(() => this.onTick());
    }
    
    onTick(){
        let val1 = PIXI.DEG_TO_RAD * this.slide1.val;
        let val2 = PIXI.DEG_TO_RAD * this.slide2.val;
        let val3 = PIXI.DEG_TO_RAD * this.slide3.val;
        this.container.skew.x = val1;
        this.container.skew.y = val2;
        this.container.rotation = val3
    }

    init() {
        this.target = new ExPixiContainer();
        this.gra = GraphicsHelper.exDrawRect(0, 0, this.boxRect.width, this.boxRect.height, {color:0xFFFFFF, width:1}, {color:0x000000});
        this.gra.pivot.set(this.boxRect.width/2, this.boxRect.height/2);
        this.target.addChild(this.gra);
        this.container.addChild(this.target);
        this.target.y = 200;
        
        this.target.x = window.innerWidth / 2;

        let txt = this.target.addChild(new PIXI.Text('CONTAINER', 
        {
            fontFamily: 'Teko', fontSize: 80, fontWeight: 300, fill: 0xFFFFFF,
        }
        ));
        txt.anchor.set(0.5);
    }

    flip(){
        // let val = PIXI.DEG_TO_RAD * 10;
        // this.container.skew.x = val;
        // let tl = gsap.timeline();
        // tl.to(this.container.skew, {y:val, x:val, duration:1.2, ease:'circ.inOut'});
        // tl.set(this.frontSideContainer, {pixi: { brightness: 0.5}}, '<');
        // tl.to(this.scale, {x:0.1, y:1.1, duration:0.2, ease:'expo.in'}, '<');
        // tl.to(this.scale, {x:1, y:1, duration:0.2, ease:'power2.out'});
        // tl.set(this.skew, {y:0-val}, '<');
        // tl.to(this.skew, {y:0, duration:0.2, ease:'power2.out', onStart:()=>{
        //     this.frontSideContainer.visible = true;
        // }}, '<');
        // tl.to(this.frontSideContainer, {pixi: { brightness: 1}, duration:0.2, ease:'none'}, '<');
        // return tl;
    }
}