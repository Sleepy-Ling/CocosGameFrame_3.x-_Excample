import { _decorator, Component, Node } from 'cc';
import { ViewBase, ViewParamBase } from '../Frame/Core/View/ViewBase';
import GameViewBase, { GameViewBaseInitParam, GameViewInf } from '../Frame/Core/View/GameViewBase';
const { ccclass, property } = _decorator;

export class GameViewInitParam extends GameViewBaseInitParam {
    test: string;
}

@ccclass('GameView')
export class GameView extends GameViewBase {

    public async preLoadSrc(viewName: string, param: ViewParamBase): Promise<boolean> {
        await super.preLoadSrc(viewName, param);

        let p = new Promise<boolean>((resolve) => {//假设加载该界面资源时长需要3s
            setTimeout(() => {
                resolve(true);
            }, 3000);
        })

        return p;
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
    start() {

    }

    update(deltaTime: number) {

    }
}


