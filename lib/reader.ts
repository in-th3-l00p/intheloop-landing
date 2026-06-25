import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "@/keystatic.config";

// Reads the committed content files at build time. Works the same in local and
// GitHub storage modes — the site always reads the files in the repo; storage
// mode only affects how the admin writes them back.
export const reader = createReader(process.cwd(), keystaticConfig);
