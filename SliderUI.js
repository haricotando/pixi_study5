import { ExPixiContainer } from './class/ExPixiContainer.js';
import { dataProvider } from './dataProvider.js';
import GraphicsHelper from './helper/GraphicsHelper.js';
import Utils from './helper/Utils.js';


export class SliderUI extends ExPixiContainer {

    /* ============================================================
        constructor
    ============================================================ */
    constructor(app, sliderWidth, valFrom, valTo) {
        super();
        let val = 0;
        this.val = val;
        const _this = this;

        let relativeValTo = valTo - valFrom;
        let relativeValFrom = valFrom - (valTo - relativeValTo);
        console.log(valFrom + '/' + relativeValFrom + " = " + relativeValTo);
        

        const stageHeight = app.screen.height;
        const stageWidth = app.screen.width;
        app.stage.hitArea = app.screen;
        
        const slider = new PIXI.Graphics().beginFill(0xFF0000).drawRect(0, 0, sliderWidth, 4);
        slider.x = (stageWidth - sliderWidth) / 2;

        const handle = new PIXI.Graphics().beginFill(0xffffff).drawCircle(0, 0, 32);
        handle.y = slider.height / 2;
        handle.x = sliderWidth / 2;
        handle.eventMode = 'static';
        handle.cursor = 'pointer';

        handle.on('pointerdown', onDragStart).on('pointerup', onDragEnd).on('pointerupoutside', onDragEnd);

        this.addChild(slider);
        slider.addChild(handle);

        const valText = this.addChild(new PIXI.Text('120', {
            fontSize: 40, fill: 0xFFFFFF,
        }));
        valText.x = slider.x + slider.width/2;
        valText.y = 40;
        valText.anchor.set(0.5, 0);
        valText.text = '0';

        // 書き方気持ち悪いけどとりあえずここで
        function onDragStart(){
            app.stage.eventMode = 'static';
            app.stage.addEventListener('pointermove', onDrag);
        }
        
        function onDragEnd(e){
            app.stage.eventMode = 'auto';
            app.stage.removeEventListener('pointermove', onDrag);
        }
        
        function onDrag(e){
            const halfHandleWidth = handle.width / 2;
            const offset = halfHandleWidth;
            const max = sliderWidth - handle.width;
            const handleNext = Math.max(halfHandleWidth, Math.min(slider.toLocal(e.global).x, sliderWidth - halfHandleWidth));
            const relative = handleNext - offset;
            handle.x = handleNext;
            const hundredized = relative / max * 100;

            val = hundredized / 100 * relativeValTo + valFrom;
            _this.val = val;
            valText.text = `${Math.round(val)} (${Math.round(hundredized)}%)`;
        }
    }





}