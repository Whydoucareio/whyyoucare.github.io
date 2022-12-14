/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import { Request, Response } from './AbstractMessage';
import http from 'node:http';
import { Duplex } from 'node:stream';
export interface BareErrorBody {
    code: string;
    id: string;
    message?: string;
    stack?: string;
}
export declare class BareError extends Error {
    status: number;
    body: BareErrorBody;
    constructor(status: number, body: BareErrorBody);
}
export declare function json<T>(status: number, json: T): Response;
export declare type BareMaintainer = {
    email?: string;
    website?: string;
};
export declare type BareProject = {
    name?: string;
    description?: string;
    email?: string;
    website?: string;
    repository?: string;
};
export declare type BareLanguage = 'NodeJS' | 'Deno' | 'Java' | 'PHP' | 'Rust' | 'C' | 'C++' | 'C#' | 'Ruby' | 'Go' | 'Crystal' | 'Bash' | string;
export declare type BareManifest = {
    maintainer?: BareMaintainer;
    project?: BareProject;
    versions: string[];
    language: BareLanguage;
    memoryUsage?: number;
};
export interface BareServerInit {
    logErrors?: boolean;
    localAddress?: string;
    maintainer?: BareMaintainer;
}
export interface ServerConfig {
    logErrors: boolean;
    localAddress?: string;
    maintainer?: BareMaintainer;
}
export default class BareServer {
    directory: string;
    routes: Map<string, (serverConfig: ServerConfig, request: Request) => Promise<Response>>;
    socketRoutes: Map<string, (serverConfig: ServerConfig, request: Request, socket: import('stream').Duplex, head: Buffer) => void>;
    onClose: Set<() => void>;
    config: ServerConfig;
    constructor(directory: string, init?: Partial<ServerConfig>);
    /**
     * Remove all timers and listeners
     */
    close(): void;
    shouldRoute(request: http.IncomingMessage): boolean;
    get instanceInfo(): BareManifest;
    routeUpgrade(req: http.IncomingMessage, socket: Duplex, head: Buffer): Promise<void>;
    routeRequest(req: http.IncomingMessage, res: http.ServerResponse): Promise<void>;
}
