import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#8B5CF6")(`
████████╗██╗██████╗ ███████╗███████╗
╚══██╔══╝██║██╔══██╗╚══███╔╝╚══███╔╝
   ██║   ██║██████╔╝  ███╔╝   ███╔╝ 
   ██║   ██║██╔══██╗ ███╔╝   ███╔╝  
   ██║   ██║██║  ██║███████╗███████╗
   ╚═╝   ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝
`));
console.log(chalk.hex("#00c2ff")("INFORMATION :"));
console.log(chalk.white("  ▢ Telegram : ") + chalk.hex("#8B5CF6")("@tirzzdev"));
console.log("");
console.log(chalk.hex("#00c2ff")("WELCOME TO TIRZZ BAILEYS"));
console.log(chalk.gray("SELAMAT MENGGUNAKAN TIRZZ BAILEYS"));
console.log(chalk.cyan("https://t.me/tirzzdev\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
