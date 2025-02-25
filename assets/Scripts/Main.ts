import { _decorator, Camera, Component, JsonAsset, log, Node } from 'cc';
import { GM } from '../Frame/Core/Global/GM';
import { Enum_AssetBundle, Enum_EventType, Enum_Layer, UIName } from '../Frame/Def/EnumDef';
import { Enum_UI } from './GameEnum';
import { ResourcesManager } from '../Frame/Manager/ResourcesManager';
import { ViewTranstionParam } from '../Frame/Core/View/ViewBase';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    @property(Node)
    root_ui: Node;
    @property(Camera)
    uiCamera: Camera;
    @property(Node)
    audioSourceRoot: Node;

    start() {
        let now = Date.now();

        let p: GM.IInitParam = {
            audioSourceRoot: this.audioSourceRoot,
            root_ui: this.root_ui,
            root_3d: null,
            uiCamera: this.uiCamera,
            gameCamera: null,
            forwardCamera: null,
            now: now,
            graphics: null
        }

        GM.init(p).then(() => {

            const eventDispatcher = GM.eventDispatcherManager.getEventDispatcher(Enum_EventType.UI);

            GM.preLoadManager.BeginLoad(eventDispatcher, GM.configManager).then(() => {
                GM.gameDataManager.initAfterConfigLoadFinish();

                // let gameRoot = GM.uiManager.getLayer(Enum_Layer.Main);
                // this.gameController.init(gameRoot, 0);

                let transtionParam: ViewTranstionParam = {
                    loadingViewType: Enum_UI.TranstionLoadingView
                }
                GM.uiManager.OpenUI(Enum_UI.GameView, null, null, Enum_Layer.UI, transtionParam);
                // GM.uiManager.OpenUI(Enum_UI.GameView2, null, null, Enum_Layer.UI);
            });


            //加载分包指定目录
            ResourcesManager.LoadDirInBundle(Enum_AssetBundle.Common, "Config").then(() => {
                //获取分包指定目录中的配置
                let jsonData = ResourcesManager.getAssetRes<JsonAsset>(Enum_AssetBundle.Common, 'Config/Table_Character').json;
                console.log("jsonData", jsonData);

                //释放分包全部资源
                let isReleaseSucc: boolean = ResourcesManager.ReleaseAllAssetsInBundle(Enum_AssetBundle.Common);
                console.log("isReleaseSucc", isReleaseSucc);

                //释放分包指定目录全部资源
                isReleaseSucc = ResourcesManager.ReleaseAssetInDir(Enum_AssetBundle.Common, "Config");
                console.log("isReleaseSucc", isReleaseSucc);

                //获取分包指定目录中的配置 会报错，因为已经释放了
                jsonData = ResourcesManager.getAssetRes<JsonAsset>(Enum_AssetBundle.Common, 'Config/Table_Character').json;
                console.log("jsonData", jsonData);

            });
        });

    }

    update(deltaTime: number) {

    }
}


