import fse from "fs-extra";
import path from 'node:path';
import ora from 'ora'
import { pathExistsSync } from 'path-exists';
import {log} from '@webscli/u'
function getCacheFilePath(targetPath,template){
  return path.resolve(targetPath,'node_modules',template.npmName,'template')
}
function copyFile(targetPath,template,installDir){
  const originFile = getCacheFilePath(targetPath,template)
  const fileList = fse.readdirSync(originFile)
  const spinner = ora('正在拷贝模板文件...').start();
  fileList.map(file => {
    fse.copySync(`${originFile}/${file}`, `${installDir}/${file}`);
  });
  spinner.stop();
  log.success('模板拷贝成功');
}
export default function installTemplate(selectedTemplate,opts){
  const {force=false} = opts
  const {targetPath, name,template} = selectedTemplate
  const rootdir = process.cwd()
  fse.ensureDirSync(targetPath)
  const installDir = path.resolve( `${rootdir}/${name}`)
  if(pathExistsSync(installDir)){
    if(!force){
      log.error(`当前目录下已存在${installDir}文件夹`);
      return
    }else{
      fse.removeSync(installDir)
      fse.ensureDirSync(installDir)
    }
  }else{
    fse.ensureDirSync(installDir)
  }
  copyFile(targetPath,template,installDir)
}
