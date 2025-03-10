import { _decorator, Component, instantiate, Layout, log, Node, Sprite } from 'cc';
import GameViewBase, { GameViewBaseInitParam, GameViewInf } from 'db://assets/Frame/Core/View/GameViewBase';
 
const { ccclass, property } = _decorator;

export class GameViewInitParam extends GameViewBaseInitParam {
    test: string;
}

@ccclass('GameView')
export class GameView<T extends GameViewInitParam> extends GameViewBase<T> {
    @property(Sprite)
    spr_icon: Sprite;
    @property(Layout)
    layout: Layout;

    public async preLoadSrc(viewName: string, param: T): Promise<boolean> {
        await super.preLoadSrc(viewName, param);

        let p = new Promise<boolean>((resolve) => {//假设加载该界面资源时长需要3s
            setTimeout(() => {
                resolve(true);
            }, 100);
        })

        return p;
    }

    public onViewOpen(param: T): void {
        //纹理合批结果展示
        // const sf = ResourcesManager.getSpriteFrameFromAtlas(Enum_AssetBundle.Game, "goldCoin1", TEXTURE_DIR, "coin");
        // this.spr_icon.spriteFrame = sf;

        // for (let i = 0; i < 9; i++) {
        //     const sf = ResourcesManager.getSpriteFrameFromAtlas(Enum_AssetBundle.Game, `goldCoin${i + 1}`, TEXTURE_DIR, "coin");

        //     let node = instantiate(this.spr_icon.node);
        //     node.setParent(this.layout.node);
        //     node.getComponent(Sprite).spriteFrame = sf;
        // }
        /////////////////////////////////////////////////

        //资源释放
        // setTimeout(() => {
        //     //this.spr_icon.spriteFrame 引用到了分包资源。如果在释放资源后，依然保持引用则会报错
        //     ResourcesManager.ReleaseAssetInDir(Enum_AssetBundle.Game, "Texture");
        //     this.spr_icon.spriteFrame = null;
        // }, 3000);

    }

    protected onGameStart(info?: any): void {

    }
    protected onGameEnd(info?: any): void {

    }
    protected onGameUpdate(dt?: number): void {

    }
    public resume(info?: any): void {

    }
    public pause(info?: any): void {

    }
    public restart(info?: any): void {

    }
    protected isGamePass(): boolean {
        return false;
    }
    public getGameInf(): Readonly<GameViewInf> {
        return null;
    }

}


