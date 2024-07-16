interface NodeList {
    map<T>(
        callback: (node:Node, index: number, nodeList: NodeList) => T, thisArgs?: any): T[]
}