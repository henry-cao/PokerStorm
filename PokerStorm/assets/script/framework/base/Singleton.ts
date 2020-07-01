/*
 * @Author: henry
 * @Date: 2020-06-25 19:04:21
 * @Description: 内部使用管理器，用于注入上层管理器
 * @FilePath: \assets\framework\base\InnerManager.ts
 */

 
export interface Singleton<T> {
    new(): T;
    /**
     *@description 单例统一实现 
     */
    Instance(): T;
}

/**@description 获取根据类型获取单列 */
export function getSingleton<T>( SingletonClass : Singleton<T>){
    return SingletonClass.Instance();
}

