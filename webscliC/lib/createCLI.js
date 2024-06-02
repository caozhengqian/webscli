import path from 'node:path'
import fse from 'fs-extra'
import { program } from 'commander'
import {dirname} from 'dirname-filename-esm';
import {log} from '@webscli/u'
import semver from 'semver'

const __dirname = dirname(import.meta)
const pckPath = path.resolve(__dirname,'../package.json')
const pck = fse.readJsonSync(pckPath)

const NODE_VERSION_LOWEST = '15.0.0'
function checkNodeVersion(){
  if(!semver.gte(process.version,NODE_VERSION_LOWEST)){
    throw new Error(`webs-cli 需要安裝${NODE_VERSION_LOWEST}以上的node版本`)
  }
}
function preAction(){
  //检查node版本
  checkNodeVersion()
}
export default function createCLI(){
  log.info('version',pck.version);
  program
      .name(Object.keys(pck.bin)[0])
      .usage('<command>[options]')
      .version(pck.version)
      .option('-d,--debug','是否开启调试模式',false)
      .hook('preAction',preAction)

  program.on('option:debug', function() {
    console.log(program.opts());
    if (program.opts().debug) {
      log.verbose('debug', 'debug模式已启动');
    }
  });

  program.on('command:*', function(obj) {
    log.error('未知的命令：' + obj[0]);
  });
  return program
}
