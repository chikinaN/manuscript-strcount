/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
	readonly VITE_PROJECT_NAME: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
