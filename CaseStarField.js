import { SliderUI } from './SliderUI.js';
import { ExPixiContainer } from './class/ExPixiContainer.js';
import { dataProvider } from './dataProvider.js';
import GraphicsHelper from './helper/GraphicsHelper.js';
import Utils from './helper/Utils.js';


export class CaseStarField extends PIXI.Container {

    /* ============================================================
        constructor
    ============================================================ */
    constructor(app) {
        super();

        app.stage.eventMode = 'static';

        const bg = PIXI.Sprite.from('https://pixijs.com/assets/bg_rotate.jpg');
        
        bg.anchor.set(0.5);
        
        bg.x = app.screen.width / 2;
        bg.y = app.screen.height / 2;
        
        const filter = new PIXI.filters.ColorMatrixFilter();
        
        const container = new PIXI.Container();
        
        container.x = app.screen.width / 2;
        container.y = app.screen.height / 2;
        
        const bgFront = PIXI.Sprite.from('assets/star.png');

        const star0 = PIXI.Sprite.from('assets/star0.png');
        star0.anchor.set(0.5);
        container.addChild(star0);

        const star0b = PIXI.Sprite.from('assets/star0.png');
        star0b.anchor.set(0.5);
        container.addChild(star0b);
        star0b.rotation = 45;

        const star0c = PIXI.Sprite.from('assets/star0.png');
        star0c.anchor.set(0.5);
        container.addChild(star0c);
        star0c.rotation = 90;

        const star1 = PIXI.Sprite.from('assets/star1.png');
        star1.anchor.set(0.5);
        container.addChild(star1);

        const star2 = PIXI.Sprite.from('assets/star2.png');
        star2.anchor.set(0.5);
        container.addChild(star2);
        
        // bgFront.anchor.set(0.5);
        
        // container.addChild(bgFront);
        
        const light2 = PIXI.Sprite.from('https://pixijs.com/assets/light_rotate_2.png');
        
        // light2.anchor.set(0.5);
        // container.addChild(light2);
        
        const light1 = PIXI.Sprite.from('https://pixijs.com/assets/light_rotate_1.png');
        
        // light1.anchor.set(0.5);
        // container.addChild(light1);
        
        // const panda = PIXI.Sprite.from('https://pixijs.com/assets/panda.png');
        
        // panda.anchor.set(0.5);
        
        // container.addChild(panda);
        
        this.addChild(container);
        // app.stage.addChild(container);
        
        // app.stage.filters = [filter];
        
        let count = 0;
        let enabled = true;
        
        // app.stage.on('pointertap', () =>
        // {
        //     enabled = !enabled;
        //     app.stage.filters = enabled ? [filter] : null;
        // });
        
        // const help = new PIXI.Text('Click or tap to turn filters on / off.', {
        //     fontFamily: 'Arial',
        //     fontSize: 12,
        //     fontWeight: 'bold',
        //     fill: 'white',
        // });
        
        // help.y = app.screen.height - 25;
        // help.x = 10;
        
        // app.stage.addChild(help);
        
        app.ticker.add((delta) =>
        {
            star0.rotation += 0.0002;
            star0b.rotation += 0.00015;
            star0c.rotation += 0.00025;
            star1.rotation += 0.0004;
            star1.scale = 1 + Math.sin(count) * 0.04;
            star2.rotation += 0.001;
            // star2.rotation += 0.0006;
            // bg.rotation += 0.01;
            // bgFront.rotation -= 0.01;
            // light1.rotation += 0.02;
            // light2.rotation += 0.01;
        
            // panda.scale.x = 1 + Math.sin(count) * 0.04;
            // panda.scale.y = 1 + Math.cos(count) * 0.04;
        
            count += 0.01;
        
            // const { matrix } = filter;
        
            // matrix[1] = Math.sin(count) * 3;
            // matrix[2] = Math.cos(count);
            // matrix[3] = Math.cos(count) * 1.5;
            // matrix[4] = Math.sin(count / 3) * 2;
            // matrix[5] = Math.sin(count / 2);
            // matrix[6] = Math.sin(count / 4);
        });

    }
    
}