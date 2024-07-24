import { createHelia, libp2pDefaults } from "helia";
import { bootstrap } from "@libp2p/bootstrap";
import { getAddrs } from "./getBootstrapAddrs";
import { createLibp2p } from "libp2p";

const createIPFS = async () => {
  // 获取默认配置
  const defaults = libp2pDefaults();

  // 获取中国区可用的IPFS节点
  defaults.peerDiscovery?.pop();
  const addrs = await getAddrs();
  defaults.peerDiscovery?.push(bootstrap({ list: addrs }));

  // 启动节点
  const libp2p = await createLibp2p(defaults);
  const helia = await createHelia({ libp2p });

  console.info("Helia is running");
  console.info("PeerId:", helia.libp2p.peerId.toString());

  return helia
};

export { createIPFS as createHelia };
