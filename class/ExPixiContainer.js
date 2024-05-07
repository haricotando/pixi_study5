export class ExPixiContainer extends PIXI.Container {

    constructor(){
        super();
        this.snapshotLog = undefined;
        this._highestZindex = 1;
    }

    /* ------------------------------------------------------------
        寸法取得
        # width = 145;
        let half = this.halfWidth(); // 72.5
        let half = this.halfWidth(true); // 73
    ------------------------------------------------------------ */
    halfWidth(round){
        return round ? Math.round(this.width * 0.5) : this.width * 0.5;;
    }
    
    halfHeight(round){
        return round ? Math.round(this.height * 0.5) : this.height * 0.5;;
    }

    /* ------------------------------------------------------------
        実行時点のプロパティを一部保管する
        initで配置して、どかして、tween で元に戻す、的に使う
    ------------------------------------------------------------ */
    snapshot(){
        this.snapshotLog = {
            x:      this.x,
            y:      this.y,
            width:  this.width,
            height: this.height
        };
    }

    /* ------------------------------------------------------------
        自身をremoveChild
        親要素の変数には格納されている点に注意
    ------------------------------------------------------------ */
    suicide(){
        let parent = this.parent;
        
        if(parent != null){
            parent.removeChild(this);
        }
    }
}