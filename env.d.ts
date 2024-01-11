import { KVNamespace } from "@cloudflare/workers-types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      MY_KY: KVNamespace;
    }
  }
}

export {};
