/// <reference types="@scriptcraft/types" />
export declare class NukkitServer {
    isBukkit: boolean;
    isNukkit: boolean;
    nukkit: any;
    server: any;
    constructor();
    executeCommand(command: any): any;
    getPlugin(pluginName: any): any;
    getWorldDir(): string;
    isPluginEnabled(name: string): boolean;
    getWorlds(): BukkitWorld[];
}