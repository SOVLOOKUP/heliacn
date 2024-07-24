# heliacn

启动 IPFS 节点，并自动连接到中国区可用的IPFS节点，浏览器和 Nodejs 中可用

```ts
import { createHelia } from "heliacn";

const helia = await createHelia();

console.info("Helia is running");
console.info("PeerId:", helia.libp2p.peerId.toString());
```
