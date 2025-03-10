import { _decorator, Component, Node } from 'cc';
import { GM } from 'db://assets/Frame/Core/Global/GM';
import { ViewBase, ViewParamBase } from 'db://assets/Frame/Core/View/ViewBase';
import { ResourcesManager } from 'db://assets/Frame/Manager/ResourcesManager';
import { Enum_Module, Enum_UI } from 'db://assets/Scripts/GameEnum';

const { ccclass, property } = _decorator;

export class GameModuleViewParam extends ViewParamBase {
    name: string;
}

@ccclass('GameModuleView')
export class GameModuleView extends ViewBase<GameModuleViewParam> {
    public onViewOpen(param: GameModuleViewParam): void {
        super.onViewOpen(param);

        GM.uiManager.OpenUI(Enum_UI.GameView);

        this.scheduleOnce(() => this.closeSelf(), 5);

    }
    public onViewClose(param?: GameModuleViewParam): void {
        super.onViewClose(param);

        GM.uiManager.CloseUIByName(Enum_UI.GameView);

        ResourcesManager.ReleaseAllAssetsInBundle(Enum_Module.Game);
    }
}


