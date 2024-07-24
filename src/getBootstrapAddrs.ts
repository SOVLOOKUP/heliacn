import ky from 'ky';

// browser
const protocol = "/webtransport";

export const getAddrs = async () => {
  let url = "https://ipfs-node.metapoint.tech";
  const isNode = typeof process.version === "string";
  if (!isNode) {
    url += protocol;
  }
  const result: any[] = await ky.get(url).json();
  let addrs: string[] = [];
  for (const peer of result) {
    const addr = isNode
      ? peer.status.Identify.Addresses.at(0)
      : peer.status.Identify.Addresses.filter((i: string) =>
          i.includes(protocol)
        ).at(0);
    addrs.push(addr);
  }
  return addrs;
};
