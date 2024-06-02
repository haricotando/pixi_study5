// import { CaseRiseOfPanda } from './CaseRiseOfPanda.js';
import { CaseSliderUI } from './CaseSliderUI.js';
import { CaseStarField } from './CaseStarField.js';
// import { CaseSliderUI } from './CaseSliderUI.js';
// import { CaseTintColor } from './CaseTintColor.js';
import { dataProvider } from './dataProvider.js';
// import Utils from './helper/Utils.js';
// import AlignHelper from './helper/AlignHelper.js';


console.log(PIXI.VERSION)

/* ------------------------------------------------------------
    変数定義
------------------------------------------------------------ */

/* ------------------------------------------------------------
    アセット読み込み
------------------------------------------------------------ */
WebFont.load({
    google: {
      families: ['Teko:300,500,700'],
    },
    
    active: () => {
        init();
        console.log('OK: Font');
    },
    // フォント読み込み失敗時
    inactive: () => {
        console.log("ER: Font");
    },
  });

function init(){

    // gsap.registerPlugin(PixiPlugin);

    dataProvider.wWidth = window.innerWidth;
    dataProvider.wHeight = window.innerHeight;
    let app = new PIXI.Application({
        background: '#1A1F22',
        resizeTo: window
    });
    document.body.appendChild(app.view);
    dataProvider.app = app;

    // AlignHelper.lockedScreenWidth = dataProvider.wWidth;
    // AlignHelper.lockedScreenHeight = dataProvider.wHeight;
    
    const applicationRoot = new CaseSliderUI(app);
    // // const applicationRoot = new CaseRiseOfPanda(app);
    // const applicationRoot = new CaseStarField(app);
    app.stage.addChild(applicationRoot);
}

