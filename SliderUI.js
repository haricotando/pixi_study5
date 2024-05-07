import { ExPixiContainer } from './class/ExPixiContainer.js';
import { dataProvider } from './dataProvider.js';
import GraphicsHelper from './helper/GraphicsHelper.js';
import Utils from './helper/Utils.js';


export class SliderUI extends ExPixiContainer {

    /* ============================================================
        constructor
    ============================================================ */
    constructor(app) {
        super();

        const stageHeight = app.screen.height;
        const stageWidth = app.screen.width;
        
        // Make sure stage covers the whole scene
        app.stage.hitArea = app.screen;
        
        // Make the slider
        const sliderWidth = 320;
        const slider = new PIXI.Graphics().beginFill(0xFF0000).drawRect(0, 0, sliderWidth, 4);

        slider.x = (stageWidth - sliderWidth) / 2;
        slider.y = stageHeight * 0.75;

        // Draw the handle
        const handle = new PIXI.Graphics().beginFill(0xffffff).drawCircle(0, 0, 16);

        handle.y = slider.height / 2;
        handle.x = sliderWidth / 2;
        handle.eventMode = 'static';
        handle.cursor = 'pointer';

        handle.on('pointerdown', onDragStart).on('pointerup', onDragEnd).on('pointerupoutside', onDragEnd);

        app.stage.addChild(slider);
        slider.addChild(handle);

        // Add bunny whose scale can be changed by user using slider
        const bunny = app.stage.addChild(PIXI.Sprite.from('https://pixijs.com/assets/bunny.png'));

        bunny.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
        bunny.scale.set(3);
        bunny.anchor.set(0.5);
        bunny.x = stageWidth / 2;
        bunny.y = stageHeight / 2;

        function onDragStart()
        {
            app.stage.eventMode = 'static';
            app.stage.addEventListener('pointermove', onDrag);
        }
        
        // Stop dragging feedback once the handle is released.
        function onDragEnd(e)
        {
            app.stage.eventMode = 'auto';
            app.stage.removeEventListener('pointermove', onDrag);
        }
        
        // Update the handle's position & bunny's scale when the handle is moved.
        function onDrag(e)
        {
            const halfHandleWidth = handle.width / 2;
            // Set handle y-position to match pointer, clamped to (4, screen.height - 4).
        
            handle.x = Math.max(halfHandleWidth, Math.min(slider.toLocal(e.global).x, sliderWidth - halfHandleWidth));
            // Normalize handle position between -1 and 1.
            const t = 2 * (handle.x / sliderWidth - 0.5);
        
            bunny.scale.set(3 * (1.1 + t));
        }
    }





}