//存放私库包的命名空间
export const scopes = ['@digitalzz'];
/****
 * 私库地址，代理端口会解析url的端口号
 * const privateNpmRegistryURLArr = privateNpmRegistryURL.split(":");
 * const privateNpmPort = privateNpmRegistryURLArr[privateNpmRegistryURLArr.length - 1]
 * 拉取一些npm的包会返回302的情况，unpkg暂时没有处理，会不会和本地的npm源有关？
 ***/
export const privateNpmRegistryURL = 'http://192.168.150.96:4873';

//互联网npm地址
export const publicNpmRegistryURL = 'https://registry.npmjs.org';

export default scopes;
