import { _decorator, Component, Node } from 'cc';
import { ViewBase, ViewParamBase } from 'db://assets/Frame/Core/View/ViewBase';
import { ResourcesManager } from 'db://assets/Frame/Manager/ResourcesManager';
import { Enum_Module } from 'db://assets/Scripts/GameEnum';
const { ccclass, property } = _decorator;

export class TestModuleViewParam extends ViewParamBase {
    name: string;
}

@ccclass('TestModuleView')
export class TestModuleView extends ViewBase<TestModuleViewParam> {
    public onViewClose(param?: TestModuleViewParam): void {
        super.onViewClose(param);

        ResourcesManager.ReleaseAllAssetsInBundle(Enum_Module.Test);
    }
}


