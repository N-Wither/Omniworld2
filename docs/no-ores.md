# Why can't I find any ores (coal, iron, etc.)?
## Why

In this modpack, ore generation is controlled by KubeJS, which needs Rhino to function, which needs to download a remapping file from Github.

在这个整合包中，矿物生成由 KubeJS 控制，KubeJS 需要 Rhino 作为前置，Rhino 需要从 GitHub 下载重映射文件。

However, for some reason, some users game may fail to download this, so the ores will fail to generate.

但是，因为某些原因，有的玩家的游戏无法下载这个文件，所以矿物也无法生成。

## How

You can try change your network environmrnt, for China mainland players, it usually means "using VPN".

你可以尝试改变网络环境，对于中国大陆的玩家，这通常意味着“翻墙”。

Then restart game and check if ores are generated. Note: ores will only generate in new chunks.

接着重启游戏看看矿物是否生成了，注意：矿物只会在未探索过的区块生成。

If you still can't find ores, try this.

如果你还是找不到矿物，试试这个。

First download [this](https://github.com/N-Wither/Omniworld2/blob/main/rhino/rhino.zip?raw=true), then unzip it to your game folder.

首先下载[这个](https://github.com/N-Wither/Omniworld2/blob/main/rhino/rhino.zip?raw=true)，然后解压到你的游戏文件夹。

Add `-Djava.io.tmpdir=` to your JVM arguments, then launch your game.

在你的 JVM （Java 虚拟机）参数中添加 `-Djava.io.tmpdir=` ，然后启动游戏。
