import { _decorator, Component, Node } from 'cc';
import { GM } from 'db://assets/Frame/Core/Global/GM';
import { ViewBase, ViewParamBase, ViewTranstionParam } from 'db://assets/Frame/Core/View/ViewBase';
import { Enum_AssetBundle, Enum_Layer } from 'db://assets/Frame/Def/EnumDef';
import { ResourcesManager } from 'db://assets/Frame/Manager/ResourcesManager';
import { Enum_Module, Enum_UI } from 'db://assets/Scripts/GameEnum';
const { ccclass, property } = _decorator;

@ccclass('LobbyView')
export class LobbyView extends ViewBase<ViewParamBase> {
    protected onClickGameModule() {
        let transtionParam: ViewTranstionParam = {
            loadingViewType: Enum_UI.TranstionLoadingView
        }
        GM.uiManager.OpenUI(Enum_UI.GameView, null, Enum_AssetBundle.Game, Enum_Layer.UI, transtionParam);

        this.scheduleOnce(() => {
            // GM.uiManager.CloseUIByName(Enum_UI.GameView);
            GM.uiManager.DestoryUIByName(Enum_UI.GameView);
            ResourcesManager.ReleaseAllAssetsInBundle(Enum_Module.Game);
        }, 5);
    }

    protected onClickTestModule() {
        let transtionParam: ViewTranstionParam = {
            loadingViewType: Enum_UI.TranstionLoadingView
        }
        GM.uiManager.OpenUI(Enum_UI.TestModuleView, null, Enum_AssetBundle.Common, Enum_Layer.UI, transtionParam);

    }
}


