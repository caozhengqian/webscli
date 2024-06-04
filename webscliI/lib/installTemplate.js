import fse from "fs-extra";
import path from 'node:path';
import { pathExistsSync } from 'path-exists';

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
}
