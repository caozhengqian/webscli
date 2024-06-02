// import commander from 'commander'
import createInitCommand from'@webscli/i'
import './exception.js'

import createCLI from "./createCLI.js";
export default function (args){
  // log.info('version',pck.version)
  const program = createCLI()
  // program
  //     .name(Object.keys(pck.bin)[0])
  //     .usage('<command>[options]')
  //     .version(pck.version)
  //     .option('-d,--debug','是否开启调试模式',false)
  //     .hook('preAction',preAction)
  // program
  //     .command('init [name]')
  //     .description('init project')
  //     .option('-f, --force','是否强制更新',false)
  //     .action((name,opts)=>{
  //       console.log('init',name,opts)
  //     })
  // const program = createCLI()
  createInitCommand(program)
  program.parse(process.argv)
}
